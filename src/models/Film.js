import mongoose from "mongoose";
import { directorSchema } from "../models/Director.js";


const filmSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String },
    image_url: { type: String },
    trailer_url: { type: String },
    producer: { type: String },
    director: directorSchema
}, {versionKey: false});

const films = mongoose.model("STARWARS API", filmSchema);


export default films;