import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';   
import connectDB from './config/dbConfig';
import shortUrl from './routes/shortUrl';
dotenv.config();   
connectDB();

const port = process.env.PORT || 5001;

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({
  origin: "*",
  credentials: true,
}));

app.get('/', (req, res) => {
  res.send('Hello World!');
})

app.use('/api/', shortUrl);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});