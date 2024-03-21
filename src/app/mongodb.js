const { MongoClient } = require('mongodb');


async function connectToDatabase() {
    // const uri = 'mongodb://localhost:27017/landingPageTest';
    const uri = 'mongodb+srv://Sumit:2332@mycluster.paejrmj.mongodb.net/landingPageTest';

    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

    try {
        await client.connect();
        console.log('Connected to MongoDB');
        return client.db(); 
    } catch (error) {
        console.error('Error connecting to MongoDB', error);
        throw error;
    }
}

module.exports = { connectToDatabase };
