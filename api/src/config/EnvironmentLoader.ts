import dotenv from 'dotenv';
import path from 'path';

class EnvironmentLoader {
    private port: number;
    private dsn: string;
    private uploadsDir: string;
    private cdnBaseUrl: string;
    private jwtPrivateKey: string;

    constructor() {
        const envFound = dotenv.config({
            path: path.join(__dirname + '/../../', '.env'),
        });

        if (envFound.error) {
            throw new Error('cant load configuration from enviroment');
        }

        this.port =
            (process.env.APP_PORT && parseInt(process.env.APP_PORT)) || 3000;
        this.dsn = process.env.MONGODB_DSN as string;
        this.uploadsDir = process.env.UPLOADS_DIR as string;
        this.cdnBaseUrl = process.env.CDN_BASE_URL as string;
        this.jwtPrivateKey = process.env.JWT_PRIVATE_KEY || '1234567890';
    }

    getDsn(): string {
        return this.dsn;
    }

    getPort(): string {
        return this.port + '';
    }

    getCdnBaseUrl(): string {
        return this.cdnBaseUrl;
    }

    getUploadsDir(): string {
        return this.uploadsDir;
    }

    getUploadsFilePath(file: string): string {
        return this.uploadsDir + '/' + file;
    }

    getJwtPrivateKey(): string {
        return this.jwtPrivateKey;
    }
}

export default EnvironmentLoader;
