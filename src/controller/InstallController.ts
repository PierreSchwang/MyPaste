import * as express from 'express'

export const InstallController = (req: express.Request, res: express.Response, next: express.NextFunction) => {
    res.render('install', { title: 'Install' });
};
