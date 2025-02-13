import express from 'express';
import dotenv from 'dotenv';
import userRoutes from './routes/userRoutes.js';


dotenv.config(); // Load environment variables from .env file
import { notFound, errorHandler } from './middleware/errorMiddleware.js';
const port = process.env.PORT || 5000;
const app = express(); // Create an instance of an Express application

// Middleware to parse JSON request bodies
app.use(express.json());

// Use the userRoutes for any requests to the /api/users path
app.use('/api/users', userRoutes);

// Define a route for the root URL    
app.get('/', (req, res) => { 
    res.send('Hello World!'); 
});

// Middleware for handling 404 errors
app.use(notFound);

// Middleware for handling general errors
app.use(errorHandler);

// Start the server and listen on the specified port
app.listen(port, () => { 
    console.log(`Server is running on port ${port}`);
});
