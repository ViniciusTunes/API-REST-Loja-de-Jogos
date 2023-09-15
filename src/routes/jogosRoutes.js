import express from "express";
import JogoController from "../controllers/jogoController.js";

const routes = express.Router();

routes.get("/jogos", JogoController.listarJogos);
routes.get("/jogos/:id", JogoController.listarJogoPorId);
routes.post("/jogos", JogoController.cadastrarJogo);
routes.put("/jogos/:id", JogoController.atualizarJogo);
routes.delete("/jogos/:id", JogoController.deletarJogo);

export default routes;