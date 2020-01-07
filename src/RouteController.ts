import * as express from 'express';
import { IndexController } from './controller/IndexController';
import { PasteConfig } from "./data/PasteConfig";
import {InstallController} from "./controller/InstallController";

export const init = (app: express.Application, pasteConfig: PasteConfig) => {

    app.use((req, res, next) => {
        if(pasteConfig.installed || req.path.indexOf('/install') > -1)
            return next();
        res.redirect('/install');
    });

    app.get('/', IndexController);
    app.get('/install', InstallController);
};
