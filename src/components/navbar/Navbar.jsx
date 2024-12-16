import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { GoSearch } from "react-icons/go";
import { FaMoon, FaRegUserCircle } from "react-icons/fa";
import { LiaSunSolid } from "react-icons/lia";
import { HiOutlineBars3CenterLeft } from "react-icons/hi2";
import { IoMdClose } from "react-icons/io";
import "./navbar.css";

function Navbar() {
  const [darkMode, setDarkMode] = useState(false);
  const [search, setSearch] = useState(false);
  const [menu, setMenu] = useState(false);

  // toggleDarkMode function
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle("dark", !darkMode);
  };
  return (
    <>
      <div className="px-4 md:px-20 py-3  bg-white dark:bg-gray-900 sticky top-0 z-50 border-b dark:border-gray-700">
        <div className="navbar flex gap-1 items-center justify-between">
          <Link to={"/"} className="logo">
            <h1 className="font-inter text-[#3A80E9] dark:text-[#0F925C] text-2xl font-semibold italic">
              News
              <span className="text-[#0F925C] dark:text-[#3A80E9]">Hub</span>
            </h1>
          </Link>

          <ul className="hidden md:flex gap-4 lg:gap-7 items-center font-outfit text-[1.03rem] font-normal text-gray-700 dark:text-gray-200">
            <li className="hover:text-[#0F925C] dark:hover:text-[#3A80E9] transition-all duration-200">
              <NavLink to={"us"}>US</NavLink>
            </li>
            <li className="hover:text-[#0F925C] dark:hover:text-[#3A80E9] transition-all duration-200">
              <NavLink to={"world"}>World</NavLink>
            </li>
            <li className="hover:text-[#0F925C] dark:hover:text-[#3A80E9] transition-all duration-200">
              <NavLink to={"politics"}>Politics</NavLink>
            </li>
            <li className="hidden md:block hover:text-[#0F925C] dark:hover:text-[#3A80E9] transition-all duration-200">
              <NavLink to={"business"}>Business</NavLink>
            </li>
            <li className="hover:text-[#0F925C] dark:hover:text-[#3A80E9] transition-all duration-200">
              <NavLink to={"tech"}>Tech</NavLink>
            </li>
            <li className=" hidden lg:block hover:text-[#0F925C] dark:hover:text-[#3A80E9] transition-all duration-200">
              <NavLink to={"entertainment"}>Entertainment</NavLink>
            </li>
            <li className="hover:text-[#0F925C] dark:hover:text-[#3A80E9] transition-all duration-200">
              <NavLink to={"travel"}>Travel</NavLink>
            </li>
            <li className="hover:text-[#0F925C] dark:hover:text-[#3A80E9] transition-all duration-200">
              <NavLink to={"sports"}>Sports</NavLink>
            </li>
          </ul>
          <ul className="flex items-center gap-3 md:gap-2 lg:gap-4 relative">
            <li>
              <GoSearch
                size={26}
                className=" block xl:hidden cursor-pointer"
                onClick={() => setSearch(!search)}
              />

              {search && (
                <form className="absolute -right-2  top-10 xl:right-20 xl:-top-1 flex items-center ">
                  <div className="relative w-full ">
                    <div className="absolute inset-y-0 start-0 flex items-center ps-2 pointer-events-none">
                      <GoSearch size={22} />
                    </div>
                    <input
                      type="text"
                      id="simple-search"
                      class="w-[150px]  bg-gray-50 border border-[#3A80E9]  shadow-sm text-gray-900 text-sm rounded-lg   block  ps-10 px-2 py-2  dark:bg-gray-700 dark:border-[#3A80E9] dark:placeholder-gray-400 dark:text-white  focus:outline-none "
                      placeholder="Search News"
                      required
                    />
                  </div>
                </form>
              )}
            </li>

            <li className="cursor-pointer">
              <FaRegUserCircle
                size={26}
                className="text-gray-700 dark:text-gray-300"
              />
            </li>
            <li>
              {darkMode ? (
                <button type="button">
                  <LiaSunSolid size={26} onClick={toggleDarkMode} />
                </button>
              ) : (
                <button type="button">
                  <FaMoon size={22} onClick={toggleDarkMode} />
                </button>
              )}
            </li>

            <li className="cursor-pointer md:hidden">
              {menu ? (
                <IoMdClose size={30} onClick={() => setMenu(!menu)} />
              ) : (
                <HiOutlineBars3CenterLeft
                  size={30}
                  onClick={() => setMenu(!menu)}
                />
              )}
            </li>
          </ul>

          {menu && (
            <div className="border-l dark:border-l dark:border-gray-700 bg-white dark:bg-gray-900 pt-6 block md:hidden absolute right-0 top-12 z-10 w-[200px] min-h-screen">
              <ul className="flex flex-col gap-4 lg:gap-7 items-center font-outfit text-[1.03rem] font-normal text-gray-700 dark:text-gray-200">
                <li className="hover:text-[#0F925C] dark:hover:text-[#3A80E9] transition-all duration-200">
                  <NavLink to={"us"}>US</NavLink>
                </li>
                <li className="hover:text-[#0F925C] dark:hover:text-[#3A80E9] transition-all duration-200">
                  <NavLink to={"world"}>World</NavLink>
                </li>
                <li className="hover:text-[#0F925C] dark:hover:text-[#3A80E9] transition-all duration-200">
                  <NavLink to={"politics"}>Politics</NavLink>
                </li>
                <li className=" hover:text-[#0F925C] dark:hover:text-[#3A80E9] transition-all duration-200">
                  <NavLink to={"business"}>Business</NavLink>
                </li>
                <li className="hover:text-[#0F925C] dark:hover:text-[#3A80E9] transition-all duration-200">
                  <NavLink to={"tech"}>Tech</NavLink>
                </li>
                <li className="  hover:text-[#0F925C] dark:hover:text-[#3A80E9] transition-all duration-200">
                  <NavLink to={"entertainment"}>Entertainment</NavLink>
                </li>
                <li className="hover:text-[#0F925C] dark:hover:text-[#3A80E9] transition-all duration-200">
                  <NavLink to={"travel"}>Travel</NavLink>
                </li>
                <li className="hover:text-[#0F925C] dark:hover:text-[#3A80E9] transition-all duration-200">
                  <NavLink to={"sports"}>Sports</NavLink>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Navbar;
