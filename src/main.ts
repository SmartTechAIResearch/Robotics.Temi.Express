import express, { Request, Response } from 'express';
import mongoose from 'mongoose';
import {iLocationData, iStepperData} from './interfaces/interface';
require('dotenv').config();
const cors = require('cors');


// Create an Express app
const app = express();

app.use(cors());

const mongoURI: string = process.env.mongo ?? "";
const port: number = parseInt(process.env.port ?? "3001");


// Connect to MongoDB Atlas
mongoose.connect(mongoURI, {
  // @ts-ignore
  useNewUrlParser: true,
  useUnifiedTopology: true,
  dbName: "mongoTemi"
})
  .then(() => {
    console.log('Connected to MongoDB Atlas');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB Atlas:', error);
  });

const locationSchema = new mongoose.Schema({
  name: String,
  alias: String,
  icon: String,
  textList: [String],
  region: String
});

const stepperSchema = new mongoose.Schema({
  stepsList: [String],
  region: String
});
const Location = mongoose.model<iLocationData>('Location', locationSchema, "locations");
const Stepper = mongoose.model<iStepperData>('Stepper', stepperSchema, "stepper");



app.get('/api/locations/:region', async (req, res) => {
  const { region } = req.params;

  try {
    const documents = await Location.find({ region });
    res.json(documents);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'An error occurred' });
  }
});

app.get('/api/stepper/:region', async (req, res) => {
  const { region } = req.params;

  try {
    const documents = await Stepper.find({ region });
    res.json(documents);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'An error occurred' });
  }
});

// Define a route
app.get('/', (req: Request, res: Response) => {
  res.send('Hello, world!');
});

// Start the server
app.listen(port, () => {
  console.log('Server listening on port', port);
});
