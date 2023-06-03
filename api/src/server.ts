import { json, urlencoded } from 'body-parser';
import compress from 'compression';
import errorHandler from 'errorhandler';
import express from 'express';
import cors from 'cors';
import Router from 'express-promise-router';
import helmet from 'helmet';
import * as http from 'http';
import RouteRegistrator from './route/RouteRegistrator';

export class Server {
    private readonly express: express.Express;
    private readonly port: string;
    private httpServer?: http.Server;

    constructor(port: string) {
        this.port = port;
        this.express = express();
        this.express.use(json({ limit: '50mb' }));
        this.express.use(cors());
        this.express.use(urlencoded({ extended: true, limit: '50mb' }));
        this.express.use(helmet.xssFilter());
        this.express.use(helmet.noSniff());
        this.express.use(helmet.hidePoweredBy());
        this.express.use(helmet.frameguard({ action: 'deny' }));
        this.express.use(compress());
        const router = Router();
        router.use(errorHandler());
        this.express.use(router);

        new RouteRegistrator().register(router);
    }

    async listen(): Promise<void> {
        return new Promise((resolve) => {
            this.httpServer = this.express.listen(this.port, () => {
                console.log('');
                console.log('{.".} >-----------------------------');
                console.log(`{.".} > api at http://localhost:${this.port}`);
                console.log(`{.".} > Press CTRL-C to stop`);
                console.log(`{.".} >-----------------------------`);
                console.log('');
                resolve();
            });
        });
    }

    getHTTPServer() {
        return this.httpServer;
    }

    async stop(): Promise<void> {
        return new Promise((resolve, reject) => {
            if (this.httpServer) {
                this.httpServer.close((error) => {
                    if (error) {
                        reject(error);

                        return;
                    }

                    resolve();
                });
            }

            resolve();
        });
    }
}
