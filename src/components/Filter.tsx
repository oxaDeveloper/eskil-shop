import React from "react";

const Filter = ({
  activeCategory,
  setActiveCategory,
}: {
  activeCategory: string | null;
  setActiveCategory: Function;
}) => {
  return (
    <div className="pb-8">
      <div className="flex gap-8">
        <button
          className={`font-semibold uppercase ${activeCategory === null ? "text-black" : "text-gray-300"}`}
          onClick={() => {
            setActiveCategory(null);
          }}
        >
          All Products
        </button>
        <button
          className={`font-semibold uppercase ${activeCategory === "phone" ? "text-black" : "text-gray-300"}`}
          onClick={() => {
            setActiveCategory("phone");
          }}
        >
          Phones
        </button>
        <button
          className={`font-semibold uppercase ${activeCategory === "tv" ? "text-black" : "text-gray-300"}`}
          onClick={() => {
            setActiveCategory("tv");
          }}
        >
          TV<span className="lowercase">s</span>
        </button>
        <button
          className={`font-semibold uppercase ${activeCategory === "computer" ? "text-black" : "text-gray-300"}`}
          onClick={() => {
            setActiveCategory("computer");
          }}
        >
          Computers
        </button>
      </div>
    </div>
  );
};

export default Filter;
