import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import "../App.css";
function BooksPage() {
  const [books, setBooks] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
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
      setIsLoading(false);
    }
  }
  useEffect(() => {
    fetchBooks();
  },[]);
  console.log(books);
  console.log(search);
  return (
    <div className="playfair-display bg-[#366674]">
      <Navbar />
      <div className="flex flex-row">
        <div className="flex flex-col justify-center items-center bg-[#f2e5df]">
          <h1 className="playfair-display font-extrabold text-[#366674] text-4xl items-center text-center p-20">
            Unlock the Knowledge: Navigate the World of Tech with Ease!
          </h1>
          <input
            onChange={(e) => setSearch(e.target.value)}
            type="text"
            id="searchInput"
            placeholder="Search..."
            className=" my-4 p-5 w-[300px] h-12 bg-gray-200 rounded-lg text-lg text-center border border-black"></input>
        </div>
        <img
          src="books.jpg"
          alt="book"
          className="w-[50%] h-auto hidden md:block"
        />
      </div>
      <p className="items-center text-center text-3xl my-10 text-[#f2e5df]">
        BOOKS
      </p>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-center text-[#f2e5df]">
        {books
          .filter((item) => {
            return search.toLowerCase() === ""
              ? item
              : item.title.toLowerCase().includes(search.toLowerCase());
          })
          .map((book) => (
            <div className="flex flex-col h-[400px] hover:shadow-xl rounded-xl items-center p-5">
              <img
                src="./book.jpg"
                alt="book"
                className="rounded-xl my-4 h-[300px]"
              />
              <p key={book.id}>
                <Link
                  to={`/books/${book.id}`}
                  className="font-semibold text-xl">
                  {book.title}
                </Link>
                <br />
              </p>
            </div>
          ))}
      </div>
      {isLoading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
    </div>
  );
}

export default BooksPage;
