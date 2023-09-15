import express from "express";
import jogos from "./jogosRoutes.js";
import clientes from "./clientesRoutes.js";

const routes = (app) => {
    app.route("/").get((req, res) => {
        res.status(200).send(`Curso de Node.JS`);
    });

    app.use(express.json());

    // Rotas de Jogos.
    app.use(express.json(), jogos);

    // Use as rotas de Clientes.
    app.use(express.json(), clientes);
};

export default routes;