import express from "express";
import DirectorController from "../controllers/directorController.js";

const routes = express.Router();

routes.get("/directors", DirectorController.directorsList);
routes.get("/directors/:id", DirectorController.listDirectorById);
routes.post("/directors", DirectorController.registerDirector);
routes.put("/directors/:id", DirectorController.updateDirector);
routes.delete("/directors/:id", DirectorController.deleteDirector);


export default routes;
