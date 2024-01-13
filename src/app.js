import express from "express";
import conectaNaDataBase from "./config/dbConnect.js";
import routes from "./routes/index.js";



const conexao = await conectaNaDataBase();

conexao.on("error", (erro) =>{
    console.error("erro de conexão", erro);
});

conexao.once("open", () => {
    console.log("Conexao com o banco feita com sucesso!");
})

const app = express();
routes(app);

//app.use(express.json());

//app.get("/", async (req, res) => {
  //  const listFilms = await films.find();
    //res.status(200).json(listFilms);
//});

// app.post("/", async (req, res) =>{
  //  const film = new films({
    //    title: req.body.title,
    //    description: req.body.description,
      //  image_url: req.body.image_url,
        //trailer_url: req.body.trailer_url
    //})

    //await film.save()
    //res.send(film);
//});


app.put("/:id", async (req,res) =>{
    const updateFilm = await films.findByIdAndUpdate(req.params.id, {
        title: req.body.title,
        description: req.body.description,
        image_url: req.body.image_url,
        trailer_url: req.body.trailer_url

    })

    return res.send(updateFilm);
});


app.delete("/:id", async (req,res) =>{
    const deleteFilm = await films.findByIdAndDelete(req.params.id);
    res.send(deleteFilm);
});




export default app;