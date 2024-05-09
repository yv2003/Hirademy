import React from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import BooksPage from './components/BooksPage';
import BookDetails from './components/BookDetail';
import "./index.css"


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<BooksPage />} />
        <Route path="/books/:id" element={<BookDetails />} />
      </Routes>
    </Router>

    // </div>
  );
}

export default App;
