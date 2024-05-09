import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <nav className="flex justify-between bg-[#366674] text-[#f2e5df] py-4 px-8">
        <div>
          <Link to="/" className="briem-hand-uniq font-semibold text-lg mr-4">
            `HULUREADS`
          </Link>

          <Link to="/" className="font-semibold text-lg mr-4">
            Home
          </Link>
          <Link to="/tbr" className="font-semibold text-lg">
            My Books
          </Link>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
