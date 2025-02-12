 
import express from 'express';
import dotenv from 'dotenv';

dotenv.config(); // Load environment variables from .env file

const port =  process.env.PORT || 5000;

const app = express(); // Create an instance of an Express application

app.get('/', (req, res) => { res.send('Hello World!');}); // Define a route for the root URL    

app.listen(port, ()  =>  { console.log(`Server is running on port ${port}`); }); // Start the server and listen on the specified port
