import * as express from "express";
import {CreatePasteController, IndexController} from "./controller/IndexController";
import {PasteController} from "./controller/PasteController";
import {MyPaste} from "./MyPaste";

export const init = (app: express.Application, paste: MyPaste) => {
    app.get("/", IndexController);
    app.post("/create", (req, res) => CreatePasteController(req, res, paste));
    app.get("/:id", (req, res) => PasteController(req, res, paste));
};
