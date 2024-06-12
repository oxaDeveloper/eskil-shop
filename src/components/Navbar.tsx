import React from "react";

const Navbar = () => {
  return (
    <div className="mb-5 mt-10 flex justify-between border-b-2 border-t-2 py-4">
      <div className="cursor-pointer">
        <p>Search</p>
      </div>

      <div className="flex gap-10">
        <div>
          <a href="#">Home</a>
        </div>
        <div>
          <a href="#">Shop</a>
        </div>
        <div>
          <a href="#">Pages</a>
        </div>
        <div>
          <a href="#">Blog</a>
        </div>
        <div>
          <a href="#">Portfolio</a>
        </div>
      </div>

      <div>
        <h1>
          Cart <span>$0.00</span>
        </h1>
      </div>
    </div>
  );
};

export default Navbar;
