import films from "../models/Film.js";

class FilmController {

    static async filmsList (req, res) {
        try{
        const listFilms = await films.find({});
        res.status(200).json(listFilms);

        } catch(erro){
        res.status(500).json({message: `${erro.message} - request failure`});
    };
};


    static async registerFilm (req, res) {
        try{
        const newfilm = await films.create(req.body);
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

    static async deleteFilm(req, res){
        try{
        const id = req.params.id;
        await films.findByIdAndDelete(id);
        res.status(200).json({message: "successfully deleted!"});   
        
    } catch(erro){
        res.status(500).json({message: `${erro.message} - deletion failure `});

    };
};


};




export default FilmController;
