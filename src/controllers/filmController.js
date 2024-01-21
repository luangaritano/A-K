import films from "../models/Film.js";
import { director } from "../models/Director.js";

class FilmController {

    static async filmsList (req, res) {
        try{
        const listFilms = await films.find({});
        res.status(200).json(listFilms);

        } catch(erro){
        res.status(500).json({message: `${erro.message} - request failure`});
    };
};
    static async listFilmById (req, res) {
        try{
        const id = req.params.id;
        const filmById = await films.findById(id);
        res.status(200).json(filmById);

        } catch(erro){
        res.status(500).json({message: `${erro.message} - request failure`});
    };
};  

    static async registerFilm (req, res) {
        const newfilm = req.body;
        
        try{
        const directorFound = await director.findById(newfilm.director);
        const fullMovie = { ...newfilm, director: {...directorFound._doc }};
        const filmCreate = await films.create(fullMovie);
        res.status(201).json({message: "successfully registered!", films:newfilm });

    } catch(erro){
        res.status(500).json({message: `${erro.message} - failed to register `});

    };
};

    static async updateFilm (req, res) {
        try{
        const id = req.params.id;
        await films.findByIdAndUpdate(id, req.body);
        res.status(200).json({message: "updated successfully"});

    } catch(erro){
        res.status(500).json({message: `${erro.message} - update failure `});

    };
};

    static async deleteFilm (req, res){
        try{
        const id = req.params.id;
        await films.findByIdAndDelete(id);
        res.status(200).json({message: "successfully deleted!"});   
        
    } catch(erro){
        res.status(500).json({message: `${erro.message} - deletion failure `});

    };
};

    static async listFilmByProducer (req, res){
        const producer = req.query.producer;
        try{
        const listFilmByProducer = await films.find({producer:producer});
        res.status(200).json(listFilmByProducer);

        } catch(erro){
          res.status(500).json({message:`${erro.message} - request failure`});  

        }
    }


};




export default FilmController;
