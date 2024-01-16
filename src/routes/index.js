import express from "express";
import films from "./filmsRoutes.js";
import directors from "./directorsRoutes.js";


const routes = (app) => {
    app.route("/").get((req, res) => res.status(200).send("Curso de node.js"));

    app.use(express.json(), films, directors);


};

export default routes;
