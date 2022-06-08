import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import mysql2 from 'mysql2';
import dotenv from 'dotenv';
import observationRoutes from './routes/observations.js';

const app = express();
app.use(cors());
dotenv.config();

app.use('/observation', observationRoutes);

app.get('/', (req, res) => {
  res.send('Hello, welcome to the API.');
});

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`Server running on: ${PORT}`));

const pool = mysql2.createPool({
  host: process.env.HOST,
  user: process.env.USER,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
});

export default pool;
