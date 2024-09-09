import React from "react";

const Card = ({ values, handleClick, k }) => {
  return (
    <>
      <div className="w-80   bg-zinc-700 rounded-md flex gap-6  p-10  relative">
        <div className=" w-36  h-28 overflow-hidden rounded-md">
          <img className="w-full h-full object-cover" src={values.img} alt="" />
        </div>

        <div className="">
          <h3 className="text-white font-bold text-xl w-[90%]">
            {values.song}
          </h3>
          <h3 className="text-white font-bold text-l mt-2 placeholder-opacity-40">
            {values.artist}
          </h3>
        </div>
        <button
          className={`absolute -bottom-8 left-1/2 -translate-y-1/2 -translate-x-1/2 px-2 py-1 rounded-md text-zinc-100 shadow-sm shadow-zinc-300 ${
            values.added ? " bg-sky-600" : " bg-red-600"
          }`}
          onClick={() => handleClick(k)}
        >
          {values.added ? "Added" : "Add to favoritues"}
        </button>
      </div>
    </>
  );
};

export default Card;

<h1>hi im card</h1>;
