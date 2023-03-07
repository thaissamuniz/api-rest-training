import express from "express";
import db from "./config/dbConnect.js";
import livros from "./models/Livro.js";
import routes from "./routes/index.js"

db.on("error", console.log.bind(console, 'erro de conexão'));
db.once("open", () => {
    console.log('conexão feita com sucesso')
})

const app = express();

app.use(express.json());

routes(app);

// const livros = [
//     { id: 1, "titulo": "Senhor dos anéis" },
//     { id: 2, "titulo": "O Hobbit" }
// ]

app.get('/livros/:id', (req, res) => {
    let index = buscaLivro(req.params.id);
    res.json(livros[index]);
})

app.put('/livros/:id', (req, res) => {
    let index = buscaLivro(req.params.id);
    livros[index].titulo = req.body.titulo;
    res.json(livros);
})

app.delete('/livros/:id', (req, res) => {
    let { id } = req.params;
    let index = buscaLivro(id);
    livros.splice(index, 1);
    res.send(`livro ${id} removido com sucesso`);
})

function buscaLivro(id) {
    return livros.findIndex(livro => livro.id == id)
}
export default app