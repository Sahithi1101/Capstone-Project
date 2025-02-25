import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();
const db = process.env.mongoURI;
const connectDB = async () => {
  try {
    await mongoose.connect(db, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB Connected...');
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};
export default connectDB;