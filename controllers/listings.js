const Listing = require("../models/listing");

//index
module.exports.index = async (req, res) => {
    let allListings = await Listing.find({});
    res.render("listings/index.ejs", { allListings });
}

module.exports.renderNewForm = (req, res) =>{
    res.render("listings/new.ejs");
}

module.exports.showListing = async (req, res) => {
    let {id} = req.params;
    const listing  = await Listing.findById(id)
        .populate({
            path: "reviews",
            populate: {
                path: "author"
            },
        })
        .populate("owner");
    if(!listing) {
        req.flash("error", "Listing not found!");
        return res.redirect("/listings");
    }
    console.log(listing);
    res.render("listings/show.ejs", { listing }); 
}

module.exports.createListing = async (req, res, next) =>{

    if(!req.body.listing) {
        throw new ExpressError(400, "Send valid data for listing!");
    }
    console.log(req.body.listing.location);
    const encodedAddress = req.body.listing.location;
    const axios = require('axios');

    const coordinate = await axios.get(`http://localhost:8080/api/geocode/forward`, {
    params: { address: encodedAddress }
    });

    let url = req.file.path;
    let filename = req.file.filename;
    const newListing = new Listing(req.body.listing);

    newListing.owner = req.user._id;
    newListing.image = {url, filename};
    newListing.geometry = {
        type: "Point",
        coordinates: [coordinate.data.lon, coordinate.data.lat]
    };


    let savedListing = await newListing.save(); 
    console.log(savedListing);
    req.flash("success", "New listing created successfully!"); 
    res.redirect("/listings"); 
}

module.exports.renderEditForm = async (req, res) =>{
    let {id} = req.params;
    const listing  = await Listing.findById(id);
    if(!listing) {
        req.flash("error", "Listing not found!");
        return res.redirect("/listings");
    }

    let originalImageUrl = listing.image.url;
    originalImageUrl = originalImageUrl.replace("/upload", "/upload/w_250");
    res.render("listings/edit.ejs", { listing, originalImageUrl });
}

module.exports.updateListing = async (req, res) => {
    let {id} = req.params;

    let listing = await Listing.findByIdAndUpdate(id, { ...req.body.listing }, { new: true });

    if(typeof req.file !== "undefined") {
        let url = req.file.path;
        let filename = req.file.filename;
        listing.image = {url, filename};
        
    }

    const encodedAddress = listing.location;
    const axios = require('axios');
    const coordinate = await axios.get(`http://localhost:8080/api/geocode/forward`, {
    params: { address: encodedAddress }
    });
    listing.geometry = {
        type: "Point",
        coordinates: [coordinate.data.lon, coordinate.data.lat]
    };
    await listing.save();
    

    req.flash("success", "Listing updated successfully!");
    res.redirect(`/listings/${id}`);
}

module.exports.destroyListing = async (req, res) => {
    let {id} = req.params;
    let deletedListing = await Listing.findByIdAndDelete(id);
    console.log("Deleted listing:", deletedListing);
    req.flash("success", "Listing deleted successfully!");
    res.redirect("/listings");
}