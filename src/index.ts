import  { Request, Response } from 'express';
const express = require('express');
const cors = require ('cors');
const dotenv = require('dotenv')
import connectDB = require('./config/db');


// Load environment variables from .env file
dotenv.config();

// Connect to the database
connectDB()

const app = express();

// Enable CORS
app.use(cors());

// Parse JSON request bodies
app.use(express.json());



const PORT = process.env.PORT || 3000;
app.get('/', (req :Request, res : Response) => {
    res.send('Hi there');
});

app.listen(3000, () => {
    console.log(`Server is listening on port ${3000}`);
});