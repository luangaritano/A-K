import express from "express";
import films from "./filmsRoutes.js";


const routes = (app) => {
    app.route("/").get((req, res) => res.status(200).send("Curso de node.js"));

    app.use(express.json(), films);


};

export default routes;
