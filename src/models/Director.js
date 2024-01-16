import mongoose from "mongoose";


const directorSchema = new mongoose.Schema({
    id: { type:mongoose.Schema.Types.ObjectId},
    name: { type: String, required: true },
    title:{ type:String },
    nationality: { type: String },
    date:{ type: Number },
}, {versionKey: false});

const director = mongoose.model("directors", directorSchema);


export default { director, directorSchema }