import React from "react";
import { NavLink } from "react-router-dom";
import { IoCartOutline } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between h-[80px] shadow-sm">
      <img
        className="w-[250px]"
        src="https://i.ibb.co.com/21wfxvqB/Logo-maker-project-removebg-preview1.png"
        alt="Jkkniu-Mart"
      />
      <div className="flex items-center gap-5">
        <div className="flex items-center">
          <input type="text" name="search" id="search" placeholder="Search..." className="border-2 border-solid border-[#2fa95b] focus:border-[#2fa95b] focus:outline-none text-black p-5 w-70 h-5 rounded-l-xl" />
          <button className="btn h-11 bg-[#2fa95b] border-0 rounded-r-xl"><CiSearch className="text-white"/></button>
        </div>
        <button className="btn bg-white border-0 shadow-none"><IoCartOutline className="text-[#2fa95b] text-2xl" /></button>
      </div>
      <div className="flex gap-10 mr-20">
        <a className="text-[#2fa95b] font-bold" href="/">
          Log In
        </a>
        <a className="text-[#2fa95b] font-bold" href="/">
          Sign Up
        </a>
      </div>
    </div>
  );
};

export default Navbar;
