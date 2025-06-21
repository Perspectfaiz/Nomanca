if(process.env.NODE_ENV != "production") {
    require('dotenv').config();
    // console.log(process.env.SECRET);    
}



const express = require('express'); 
const app = express();
const mongoose = require('mongoose');  
const path = require("path");
const methodOverride = require('method-override');  
const ejsMate = require("ejs-mate"); // For using EJS as a template engine
const ExpressError = require("./utils/ExpressError.js");
const session = require('express-session');
const MongoStore = require('connect-mongo');
const flash = require('connect-flash');
const passport =  require("passport");
const LocalStrategy = require("passport-local");
const User = require("./models/user.js");

const listingRouter = require("./routes/listing.js");
const reviewRouter = require("./routes/review.js"); 
const userRouter =  require("./routes/user.js");

const geocodeRoutes = require('./routes/geocode');
const cors = require('cors');

const dbUrl = process.env.ATLASDB_URL;

app.use(cors()); // allow frontend to access backend
app.use('/api/geocode', geocodeRoutes);



app.use(methodOverride('_method')); // For PUT and DELETE requests
app.set("view engine", "ejs"); 
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({extended: true}));
app.engine('ejs', ejsMate); 
app.use(express.static(path.join(__dirname, "/public"))); // For serving static files


//connection to MongoDB
main().then((res) => {
    console.log("Connected to MongoDB");
}).catch((err) => {
    console.log("Error connecting to MongoDB", err);
});

async function main() {
    await mongoose.connect(dbUrl);
};

const store = MongoStore.create({
    mongoUrl: dbUrl,
    crypto: {                           //for sensitive data we use crypto
        secret : process.env.SECRET,
    },
    touchAfter: 24*3600,
}) 

store.on("error", (err) => {
    console.log("ERROR IN MONGO SESSION STORE", err);
})

const sessionOptions = {
    store,
    secret : process.env.SECRET, 
    resave : false,
    saveUninitialized :  true,
    cookie : {
        expires: Date.now() + (7 * 24 * 60 * 60 * 1000), // 7 days
        maxAge : 7 * 24 * 60 * 60 * 1000
    }
}

app.use(session(sessionOptions));
app.use(flash());

app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser()); 

app.use((req, res, next) => {
    res.locals.success = req.flash("success");
    res.locals.error = req.flash("error");
    res.locals.currUser = req.user; 
    next();
})

//Landing Page
app.get("/", (req, res) => {
    res.render("listings/landing.ejs");
});

// app.get("/demouser", async (req, res) => {
//     let fakeUser = new User({
//         email:"student@gmail.com",
//         username:"deltabreech",
//     });

//     let registeredUser = await User.register(fakeUser, "password");
//     res.send(registeredUser);
// })

app.use("/listings", listingRouter);
app.use("/listings/:id/reviews", reviewRouter);
app.use("/", userRouter);
//     let sampleListing = new Listing({
//         title: "Test Listing",
//         description: "This is a test listing",
//         image: "",
//         price: 1200,
//         location: "Test Location",
//         country: "Test Country"
//     });

//     await sampleListing.save();
//     console.log("Sample listing saved");
//     res.send("Success test!");
// });

app.all('/{*any}', (req, res, next) => {
     next(new ExpressError(404, "Page not found!"));
});

app.use((err, req, res, next) =>{
    let {statusCode = 500, message = "Something went Wrong!"} = err;
    res.status(statusCode).render("error.ejs", { err }); 
    // res.status(statusCode).send(message);
});

app.listen(8080, () => {
    console.log('Server is running on port 8080');
});