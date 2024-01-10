import mongoose from "mongoose";


const filmSchema = new mongoose.Schema({
    title: { type: String },
    description: { type: String },
    image_url: { type: String },
    trailer_url: { type: String }
}, {versionKey: false});

const films = mongoose.model("STARWARS API", filmSchema);


export default films;