
import mongoose from "mongoose";
export async function connectToDatabase() {
    try {
        mongoose.connect('mongodb+srv://Sumit:2332@mycluster.paejrmj.mongodb.net/landingpage');
        const connection = mongoose.connection;
        connection.on('connected', () => {
            console.log("MongoDb Connected Successfully")
        })
        connection.on('error', (err) => {
            console.log("Connection Error", err.message)
            process.exit()
        })
    } catch (error) {
        console.log("Something went wrong", error.message);
    }
}

