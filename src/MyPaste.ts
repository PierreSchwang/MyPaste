import cookieParser from "cookie-parser";
import * as e from "express";
import express from "express";
import lessMiddleware from "less-middleware";
import logger from "morgan";
import path from "path";
import {FileLoader} from "./data/FileLoader";
import {PasteConfig} from "./data/PasteConfig";
import PasteLoader from "./data/PasteLoader";
import {init} from "./RouteController";

export class MyPaste {

    private fileLoader: FileLoader = new FileLoader();
    private readonly pasteLoader: PasteLoader;
    private readonly config: PasteConfig;
    private readonly app: e.Application;

    constructor() {
        this.config = this.loadStorage();
        this.pasteLoader = new PasteLoader(this.config);
        this.app = this.startWebserver();
        init(this.app, this);
        this.app.listen(this.config.port, this.config.host, () => {
            console.log(`server started at ${this.config.host}:${this.config.port}`);
        });
    }

    public getPasteLoader(): PasteLoader {
        return this.pasteLoader;
    }

    private startWebserver(): e.Application {
        const app = express();
        app.set("views", path.join(__dirname, "views"));
        app.set("view engine", "twig");
        app.use(logger("dev"));
        app.use(e.json());
        app.use(e.urlencoded({extended: false}));
        app.use(cookieParser());
        app.use(lessMiddleware(path.join(__dirname, "public")));
        app.use(e.static(path.join(__dirname, "public")));
        return app;
    }

    private loadStorage(): PasteConfig {
        if (!this.fileLoader.exists("./storage")) {
            this.fileLoader.mkdir("./storage");
        }
        if (!this.fileLoader.exists("./storage/config.json")) {
            this.fileLoader.write("./storage/config.json", JSON.stringify(new PasteConfig()));
        }
        return this.fileLoader.loadJsonObject("./storage/config.json");
    }

}
