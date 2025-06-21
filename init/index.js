const mongoose = require("mongoose");
const initData = require("./data");
const Listing = require("../models/listing.js");   

//connection to MongoDB
main().then((res) => {
    console.log("Connected to MongoDB");
}).catch((err) => {
    console.log("Error connecting to MongoDB", err);
});

async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/nomanca");
}

const initDB = async () => {
    await Listing.deleteMany({});
    initData.data = initData.data.map((obj) => ({...obj, owner:"6838cb074ece5564e7a79f71"}));
    await Listing.insertMany(initData.data);
    console.log("Database initialized");
}

initDB();