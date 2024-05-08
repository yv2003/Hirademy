import React from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import BooksPage from './components/BooksPage';
import BooksDetailsPage from './components/BooksDetailsPAge';
// import BookDetails from './components/Newbook';
// import LandingPage from './components/LandingPage';
import "./index.css"


function App() {
  return (
    // <div className="App">
      
    <Router>
      <Routes>
      {/* <Route path="/" element={<LandingPage/>} /> */}
      <Route path="/" element={<BooksPage/>} />
        <Route path="/books/:id" element={<BooksDetailsPage />} />
        {/* <Route path="/books/:id" element={<BookDetails />} /> */}
   </Routes>
    </Router>
      
    // </div>
  );
}

export default App;
