import Book from '../models/bookSchema.js'; // Using ES modules import

// Create a new book 
async function createBook(req, res) {
    try {
      // Create a new produce obj
      let newBook = await Book.create(req.body);
      console.log(newBook)
  
      // Save new obj to DB
    //   await newBook.save();
  
      // Return Result
      res.json(newBook);
    } catch (err) {
      console.error(err);
      res.status(500).json({ msg: 'Server Error' });
    }
}


// Get all books 
async function getAllBooks(req, res) { 
    try { 
        let books = await Book.find(); 
        res.json(books); 
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: error.message }); 
    } 
}; 

// Get a single book 
async function getBook(req, res) { 
    try { 
        let book = await Book.findById(req.params.id); 
        
        res.json(book); 
    } catch (error) { 
        console.error(error);
        res.status(500).json({ error: error.message }); 
    } 
};

// Update a book 
async function updateBook(req, res) { 
    try { 
        let updatedBook = await Book.findByIdAndUpdate(req.params.id, req.body, { new: true }); 
        
        res.json(updatedBook); 
    } catch (error) { 
        console.error(error)
        res.status(500).json({ error: error.message }); 
    } 
}; 

// Delete a book 
async function deleteBook(req, res) { 
    try { 
      await Book.findByIdAndDelete(req.params.id); 
        
        res.json({ message: 'Book deleted' }); 
    } catch (error) { 
        console.error(error)
        res.status(500).json({ error: error.message });
    } 
};

export default { createBook, getAllBooks, getBook, updateBook, deleteBook }; // Default export
