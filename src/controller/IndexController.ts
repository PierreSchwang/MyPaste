import * as express from "express";
import {MyPaste} from "../MyPaste";

export const IndexController = (req: express.Request, res: express.Response, next: express.NextFunction) => {
    res.render("index", {title: "MyPaste"});
};

export const CreatePasteController = async (req: express.Request, res: express.Response, paste: MyPaste) => {
    const body = req.body;
    if (!body.content) {
        return res.status(400).send("Missing Content");
    }
    try {
        const iPaste = await paste.getPasteLoader().createPaste(body.content, body.secret || null);
        if (iPaste == null) {
            return res.status(500).send("ERROR_CREATING");
        }
        return res.status(200).send(iPaste.id);
    } catch (e) {
        return res.status(500).send(e);
    }
};
