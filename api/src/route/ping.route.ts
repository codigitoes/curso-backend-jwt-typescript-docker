import { Router, Request, Response } from 'express';

export const register = (router: Router) => {
    router.get('/api/v1/ping', (_req: Request, res: Response) =>
        res.status(200).send({ pong: 'ok' })
    );
};
