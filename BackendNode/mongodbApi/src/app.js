import express from 'express';
import db from "./config/dbConnect.js";
import routes from "./routes/index.js";

db.on("error", (error) => {
    console.error("Erro de conexão", error);
})

db.once("open", () => {
    console.log("Conectado com sucesso!");
})

const app = express();
routes(app);

export default app;