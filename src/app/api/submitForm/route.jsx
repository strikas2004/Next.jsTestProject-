import { connectToDatabase } from '../../mongodb';

const { db } = await connectToDatabase();
export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
     

      // Extract the request body
      const { name, email, phone } = req.body;
    console.log(req.body);
      // Insert the form data into MongoDB
      await db.collection('formData').insertOne({
        name,
        email,
        phone,
      });

      console.log('Data saved to MongoDB');

      // Respond with success status
      return res.status(200).json({ success: true });
    } catch (error) {
      // Handle errors
      console.error('Error saving data to MongoDB:', error);
      return res.status(500).json({ error: 'Internal Server Error' });
    }
  } else {
    // Respond with method not allowed status for non-POST requests
    return res.status(405).json({ error: 'Method Not Allowed' });
  }
}
