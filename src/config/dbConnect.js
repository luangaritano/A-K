import mongoose from "mongoose";

async function conectaNaDataBase(){
    mongoose.connect("mongodb+srv://luangaritano:3Zr7A8KMiM5BX1up@starwars-api.anebe53.mongodb.net/starwars-api?retryWrites=true&w=majority");

    return mongoose.connection;

};

export default conectaNaDataBase;

