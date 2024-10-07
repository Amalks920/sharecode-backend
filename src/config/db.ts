import mongoose, { ConnectOptions } from 'mongoose';
import dotenv from 'dotenv'
dotenv.config()

const dbConnect = async (): Promise<void> => {

    try {
        console.log(process.env. MONGODB_URL_STRING);
        
        // Define the connection string with a fallback in case MONGODB_URL_STRING is undefined
        const connectionString:any = process.env.MONGODB_URL_STRING;

        // Use async/await syntax to ensure the connection completes
        await mongoose.connect(connectionString, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        } as ConnectOptions);  // Providing proper types for connection options

        console.log('Connection successful');
    } catch (error) {
        console.log(`Connection failed: ${error}`);
    }
}

export default dbConnect;
