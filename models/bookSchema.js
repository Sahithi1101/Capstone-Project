import mongoose from 'mongoose';
// const mongoose = require('mongoose'); 
const bookSchema = new mongoose.Schema({
    title: { type: String, required: true }, 
    author: { type: String, required: true }, 
    category: { type: String, required: true }, 
    price: { type: Number, required: true }, 
    available: { type: Boolean, required: true },
}); 

export default mongoose.model('Book', bookSchema);



