import React from "react";

const Navbar = ({ ct }) => {
  return (
    <>
      <div className="w-full bg-zinc-800 py-4 flex items-center justify-between">
        <h4 className="text-orange-600 font-bold text-2xl ">Orange</h4>
        <div className="flex items-center gap-3 bg-orange-600 text-zinc-100 p-3 rounded-md text-xl font-semibold shadow-md shadow-white ">
          <h4>Favoritues</h4>
          <h4>{ct.filter((item) => item.added).length}</h4>
        </div>
      </div>
    </>
  );
};

export default Navbar;
