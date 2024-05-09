import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

function BookDetails() {
  const { id } = useParams();
  const [book, setBook] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchBookDetails = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(
          `https://www.softwium.com/api/books/${id}`
        );
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setBook(data);
      } catch (error) {
        console.error("Error fetching book details:", error);
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchBookDetails();
  }, [id]);

  return (
    <div className="p-10 bg-[#f2e5df] md:h-screen">
      {/* <button className="font-bold text-4xl pb-4"> Back </button> */}
      <div className="flex flex-row">
      <img src="/leftarr.svg" alt=""  className="w-[20px]"/><Link to={`/`} className="hover:underline-offset-2 py-5">Back</Link></div>
      <div className="flex md:flex-row flex-col justify-center items-center">
        <img src="/book.jpg" alt="book" className="rounded-lg drop-shadow-x border border-black w-[40%] h-auto md:w-[20%] md:h-auto" />
        {error ? (
          <p>Error fetching book details: {error}</p>
        ) : isLoading ? (
          <p>Loading book details...</p>
        ) : book ? (
          <div className="playfair-display p-5 mx-2">
            <h2 className="font-bold text-2xl lg:text-4xl pb-4">{book.title}</h2>
            <p className="font-semibold text-xl lg:text-2xl">ISBN : {book.isbn}</p>
            <p className="font-semibold text-xl lg:text-2xl">
              Page Count : {book.pageCount}
            </p>
            <p className="font-semibold text-xl lg:text-2xl">
              Authors : {book.authors.join(", ")}
                </p>
                <p className="font-semibold text-2xl">About:</p>
                <p className="text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Phasellus egestas tellus rutrum tellus pellentesque eu tincidunt tortor aliquam. Adipiscing tristique risus nec feugiat in fermentum posuere urna. Tellus orci ac auctor augue mauris augue neque gravida in. Amet massa vitae tortor condimentum lacinia quis. Diam vulputate ut pharetra sit amet aliquam id diam maecenas. In vitae turpis massa sed elementum tempus egestas sed sed. </p>
          </div>
        ) : (
          <p>Book not found</p>
        )}
      </div>
      <div className="pt-20">
      </div>
    </div>
  );
}

export default BookDetails;