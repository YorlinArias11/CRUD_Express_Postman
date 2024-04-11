import express from "express";
import { env } from "./default.js";
import route from "../routes/index.routes.js";
import pgService from "../service/pg.service.js";
import middleware from "../middlewares/index.middleware.js";
export default class Server{

    constructor(){
        this.app = express();
        this.port = 8080;
    }

    connectionDB(){
        new pgService();
    }
    middlewares(){
        this.app.use(express.json());
        this.app.use(middleware)
    }

    routes(){
        this.app.use(route);
    }

    runServer(){
        this.app.listen(this.port, ()=>{
            console.log(`Estoy en el puerto ${this.port}`);
        });
    }

    load(){
        this.connectionDB();
        this.middlewares();
        this.routes();
        this.runServer();
    }
}