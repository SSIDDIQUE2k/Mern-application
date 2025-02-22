import express from 'express';
import dotenv from 'dotenv';
import userRoutes from './routes/userRoutes.js';
import { notFound, errorHandler } from './middleware/errorMiddleware.js';
import connectDB from './config/db.js';
import cookieParser from 'cookie-parser';
import path from 'path';

dotenv.config(); // Load environment variables from .env file

const port = process.env.PORT || 5000;

connectDB(); // Connect to the MongoDB database
const app = express(); // Create an instance of an Express application

// Middleware to parse JSON request bodies
app.use(express.json());

app.use(express.urlencoded({ extended: true }));
// Use the userRoutes for any requests to the /api/users path

app.use(cookieParser());
app.use('/api/users', userRoutes);

// Define a route for the root URL    
app.get('/', (req, res) => {
    if (process.env.NODE_ENV === 'production') {
        const __dirname = path.resolve();
        app.use(express.static(path.join(__dirname, '/frontend/dist')));
      
        app.get('*', (req, res) =>
          res.sendFile(path.resolve(__dirname, 'frontend', 'dist', 'index.html'))
        );
      } else {
        app.get('/', (req, res) => {
          res.send('API is running....');
        });
      }
  });

// Middleware for handling 404 errors
app.use(notFound);

// Middleware for handling general errors
app.use(errorHandler);

// Start the server and listen on the specified port
app.listen(port, () => { 
    console.log(`Server is running on port ${port}`);
});
console.log('Server is running on port 5000');
