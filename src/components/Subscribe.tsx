import React from "react";

const Subscribe = () => {
  return (
    <div className="my-10 flex flex-col items-center border-b-2 border-t-2 py-28">
      <div className="flex w-[30rem] flex-col">
        <h1 className="text-center text-xl font-semibold">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio
          recusandae iusto quaerat error, pariatur vero?
        </h1>

        <div className="mx-5 mt-8 flex items-center justify-between gap-2 border-2 border-gray-500 px-2 py-2">
          <input
            type="text"
            className="w-full text-sm outline-none"
            placeholder="Enter Email Address"
          />

          <button className="flex items-center gap-1 rounded-xl border-2 border-gray-500 px-2 py-[2px] text-xs font-semibold uppercase text-gray-500">
            Subscribe <span>&#8702;</span>
          </button>
        </div>

        <p className="mt-4 text-center font-semibold text-gray-500">
          Lorem ipsum dolor sit amet.
        </p>
      </div>
    </div>
  );
};

export default Subscribe;
