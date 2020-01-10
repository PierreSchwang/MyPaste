import * as express from "express";

export const IndexController = (req: express.Request, res: express.Response, next: express.NextFunction) => {
    res.render("index", { title: "MyPaste" });
};
