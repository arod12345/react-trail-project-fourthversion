import React from "react";
import { Fa500Px,FaInfoCircle, FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="flex fixed w-[100%] bg-[#0b1523] self-center items-center justify-between px-4 py-3 mb-8">
      <Link to="/home" className="flex text-[#6495ed]">
        <Fa500Px size={28} />
        <p className="font-bold text-2xl tracking-widest ml-4">SearchRound</p>
      </Link>
      <div className="flex text-white w-[15em] justify-between">
        <Link to="/search" className="flex items-center cursor-pointer">
          <FaSearch size={18} className="mr-3"/>
          Search
        </Link>
        <Link to="/about" className="flex items-center cursor-pointer">
          <FaInfoCircle size={18} className="mr-3"/>
          About
        </Link>
      </div>
    </header>
  );
};

export default Navbar;
