import express from 'express';
import authRoutes from './routes/authRoutes';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const app = express();


const mongoURI: string = process.env.MONGODB_URI || 'mongodb://localhost:27017/myauthdb';


app.use(express.json());

app.use('/api/auth', authRoutes);

mongoose.connect(mongoURI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
