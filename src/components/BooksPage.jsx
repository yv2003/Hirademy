import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import "../App.css"
function BooksPage() {
  const [books, setBooks] = useState([]);
  // const [isLoading, setIsLoading] = useState(false); // Track loading state
  const [error, setError] = useState(null);
  const [search, setSearch] = useState(" ");

  async function fetchBooks() {
    try {
      const response = await fetch("https://www.softwium.com/api/books");
      const data = await response.json();
      if (data) {
        setBooks(data);
      }
    } catch (error) {
      setError(error.message);
      console.log(error);
      // setIsLoading(false)
    }
  }
  useEffect(() => {
    fetchBooks();
  });
  console.log(books);
  console.log(search);
  return (
    <div className="playfair-display bg-[#366674]">
      <Navbar/>
      <div className="flex flex-row">
      {/* <Form> */}
      <div className="flex flex-col justify-center bg-[#f2e5df]">
        <h1 className="playfair-display font-extrabold text-[#366674] text-4xl items-center text-center p-20">
          Unlock the Knowledge: Navigate the World of Tech with Ease!
        </h1>
        <div className="flex justify-center p-10">
          <input
            onChange={(e) => setSearch(e.target.value)}
            type="text"
            id="searchInput"
            placeholder="Search..."
            className="w-[300px] h-12 bg-gray-200 rounded-lg text-lg text-center items-center border border-black"></input>
        </div>
        </div>
        <img src="books.jpg" alt="book" className="w-[50%] h-auto hidden md:block"/>
      </div>

      <p className="items-center text-center text-3xl my-10 text-[#f2e5df]">BOOKS</p>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-center text-[#f2e5df]">
        {books
          .filter((item) => {
            return search.toLowerCase() === ""
              ? item
              : item.title.toLowerCase().includes(search);
          })
          .map((book) => (
            <div className="flex flex-col hover:shadow-xl shadow-[#89d386] rounded-xl justify-center items-center p-5">
              <img src="./book.jpg" alt="book" className="rounded-xl my-4 h-[300px]" />
              <p key={book.id}>
                <Link to={`/books/${book.id}`} className="font-semibold text-xl">{book.title}</Link><br/>
                <Link to={`/books/${book.id}`}>Author : {book.authors.join(', ')}</Link>
              </p>
            </div>
          ))}
      </div>
    </div>
  );
}

export default BooksPage;
