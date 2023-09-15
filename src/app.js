import express from "express";
import conectaNaDB from "./config/dbConnect.js";

// Routes
import routes from "./routes/index.js";

const conexao = await conectaNaDB();

conexao.on("error", (erro) => {
    console.error(`Erro na conexão com o banco de dados: ${erro}`);
});

conexao.once("open", () => {
    console.log(`Conexão com o banco de Dados feita com Sucesso.`);
})

const app = express();
routes(app);

app.delete("/livros/:id", (req, res) => {
    const index = buscaLivro(req.params.id);
    livros.splice(index, 1);
    res.status(200).send("Livro removido com Sucesso.");
});

export default app;