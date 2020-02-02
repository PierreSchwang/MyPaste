import * as express from "express";
import {IPaste} from "../data/PasteLoader";
import {MyPaste} from "../MyPaste";

export const IndexController = (req: express.Request, res: express.Response, next: express.NextFunction) => {
    res.render("index", {title: "MyPaste"});
};

export const CreatePasteController = async (req: express.Request, res: express.Response, paste: MyPaste) => {
    const body = req.body;
    if (!body.content) {
        return res.status(400).send("Missing Content");
    }
    paste.getPasteLoader().createPaste(body.content, body.secret || null).then((iPaste: IPaste) => {
        if (iPaste == null) {
            return res.status(500).send("ERROR_CREATING");
        }
        return res.status(200).send(iPaste.id);
    }).catch((reason) => {
        res.status(500).send(reason);
    });
};
