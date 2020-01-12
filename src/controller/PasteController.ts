import * as express from "express";
import {MyPaste} from "../MyPaste";

export const PasteController = (req: express.Request, res: express.Response, paste: MyPaste) => {
    const pasteId = req.params.id;
    paste.getPasteLoader().loadPaste(pasteId).then((value) => {
        res.render("paste", { title: "View Paste", data: value, error: null });
    }).catch((reason) => {
        res.render("paste", { title: "View Paste", data: null, error: reason });
    });
};
