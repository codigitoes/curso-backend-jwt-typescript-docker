import mongoose from 'mongoose';

class MongooseConnection {
    static connectDB = async (dsn: string) => {
        await mongoose.connect(dsn);
    };

    static disconnectDB = async () => {
        try {
            await mongoose.connection.close();
        } catch (_) {
        }
    };
}

export default MongooseConnection;
