import mongoose from "mongoose";
export async function connectToDatabase() {
    try {

        // mongoose.connect(process.env.MONGODB_URI,{ useNewUrlParser: true, useUnifiedTopology: true });
        mongoose.connect("mongodb+srv://dermapreneursystem:DtX0wUoIx7zls6Cq@cluster0.vuo88ap.mongodb.net/landingpage",{ useNewUrlParser: true, useUnifiedTopology: true });
        // mongoose.connect("mongodb://127.0.0.1:27017/landingpage",{ useNewUrlParser: true, useUnifiedTopology: true });

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

