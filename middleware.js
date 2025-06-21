const Listing = require("./models/listing");
const Review = require("./models/review");
const ExpressError = require("./utils/ExpressError.js");
const { listingSchema, reviewSchema } = require("./schema.js");  //Joi

module.exports.isLoggedIn = (req, res, next) => {
    if(!req.isAuthenticated()){
        //redirect URL
        req.session.redirectUrl = req.originalUrl;
        req.flash("error", "You must be logged in to create listing!");
        return res.redirect("/login");
    };
    next();
};

module.exports.saveRedirectUrl = (req, res, next) => {
    if(req.session.redirectUrl) {
        res.locals.redirectUrl = req.session.redirectUrl;
    }
    next();
};
    
module.exports.isOwner = async(req, res, next) => {
    let {id} = req.params;
    let listing = await Listing.findById(id);
    if(!listing.owner._id.equals(res.locals.currUser._id)){
        req.flash("error", "You're not the owner of this listing'");
        return res.redirect(`/listings/${id}`); 
        // return ni kroge toh niche ke operations vi perform honge.. aur website crash kr jayga
    }

    next();
};

module.exports.isReviewAuthor = async(req, res, next) => {
    let { id, reviewId } = req.params;
    let review = await Review.findById(reviewId);
    if(!review.author.equals(res.locals.currUser._id)) {
        req.flash("error", "You're not the author of this review");
        return res.redirect(`/listings/${id}`)
    }

    next();
}

//Server side validation it is
module.exports.validateListing = (req, res, next) => {
    let {error} =  listingSchema.validate(req.body);
    if(error) {
        let errorMsg = error.details.map((el) => el.message).join(", ");
        throw new ExpressError(400, errMsg);
    }
    else{
        next();
    }
};

module.exports.validateReview = (req, res, next) => {
    let {error} = reviewSchema.validate(req.body);
    if(error) {
        let errorMsg = error.details.map((el) => el.message).join(", ");
        throw new ExpressError(400, errorMsg);
    }
    else{
        next();
    }
}