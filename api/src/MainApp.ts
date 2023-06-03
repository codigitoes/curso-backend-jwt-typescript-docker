import MongooseConnection from './config/MongooseConnection';
import EnvironmentLoader from './config/EnvironmentLoader';
import { Server } from './server';

export class MainApp {
    server?: Server;

    async start() {
        const environment: EnvironmentLoader = new EnvironmentLoader();
        this.server = new Server(environment.getPort());
        await MongooseConnection.connectDB(environment.getDsn());

        return await this.server.listen();
    }

    get httpServer() {
        return this.server?.getHTTPServer();
    }

    async stop() {
        return this.server?.stop();
    }
}
