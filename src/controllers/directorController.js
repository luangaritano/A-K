import { director, directorSchema } from "../models/Director.js"

class DirectorController {

    static async directorsList (req, res) {
        try{
        const listDirectors = await director.find({});
        res.status(200).json(listDirectors);

        } catch(erro){
        res.status(500).json({message: `${erro.message} - request failure`});
    };
};
    static async listDirectorById (req, res) {
        try{
        const id = req.params.id;
        const directorById = await director.findById(id);
        res.status(200).json(directorById);

        } catch(erro){
        res.status(500).json({message: `${erro.message} - request failure`});
    };
};  

    static async registerDirector (req, res) {
        try{
        const newDirector = await director.create(req.body);
        res.status(201).json({message: "successfully registered!", director:newDirector});

    } catch(erro){
        res.status(500).json({message: `${erro.message} - failed to register `});

    };
};

    static async updateDirector (req, res) {
        try{
        const id = req.params.id;
        await director.findByIdAndUpdate(id, req.body);
        res.status(200).json({message: "updated successfully"});

    } catch(erro){
        res.status(500).json({message: `${erro.message} - update failure `});

    };
};

    static async deleteDirector(req, res){
        try{
        const id = req.params.id;
        await director.findByIdAndDelete(id);
        res.status(200).json({message: "successfully deleted!"});   
        
    } catch(erro){
        res.status(500).json({message: `${erro.message} - deletion failure `});

    };
};


};




export default DirectorController;
