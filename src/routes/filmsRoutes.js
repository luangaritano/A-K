import express from "express";
import FilmController from "../controllers/filmController.js";

const routes = express.Router();

routes.get("/films", FilmController.filmsList);
routes.get("/films/search", FilmController.listFilmByProducer);
routes.get("/films/:id", FilmController.listFilmById);
routes.post("/films", FilmController.registerFilm);
routes.put("/films/:id", FilmController.updateFilm);
routes.delete("/films/:id", FilmController.deleteFilm);


export default routes;
