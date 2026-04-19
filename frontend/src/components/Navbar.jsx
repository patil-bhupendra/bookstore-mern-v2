import React, { useState } from "react";
import { Link } from "react-router-dom";
import { HiOutlineShoppingCart, HiOutlineHeart } from "react-icons/hi2";
import { IoIosSearch } from "react-icons/io";
import { HiOutlineUser } from "react-icons/hi";
import { FaBookOpen } from "react-icons/fa";
import avatarImg from "../assets/avatar.png";

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const currentUser = false;

  return (
    <header className="bg-gray-950/80 backdrop-blur-md border-b border-gray-800 shadow-md text-white sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <FaBookOpen className="text-primary text-2xl" />
          <span className="text-2xl font-bold tracking-tight">
            Read<span className="text-primary">ora</span>
          </span>
        </Link>

        {/* Search */}
        <div className="relative hidden md:block w-72">
          <IoIosSearch className="absolute left-3 top-2.5 text-gray-400" />
          <input
            type="text"
            placeholder="Search books..."
            className="w-full bg-gray-900 text-sm px-10 py-2 rounded-md placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-4">
          {/* Wishlist */}
          <button className="hidden sm:block hover:text-primary transition duration-200">
            <HiOutlineHeart className="size-6" />
          </button>

          {/* User */}
          <div className="relative">
            {currentUser ? (
              <>
                <button onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
                  <img
                    src={avatarImg}
                    alt="user"
                    className="size-8 rounded-full ring-2 ring-primary"
                  />
                </button>

                {isDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white text-black rounded-md shadow-lg z-40">
                    <ul className="py-2 text-sm">
                      <li>
                        <Link
                          to="/dashboard"
                          className="block px-4 py-2 hover:bg-gray-100"
                          onClick={() => setIsDropdownOpen(false)}
                        >
                          Dashboard
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/orders"
                          className="block px-4 py-2 hover:bg-gray-100"
                          onClick={() => setIsDropdownOpen(false)}
                        >
                          Orders
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/logout"
                          className="block px-4 py-2 hover:bg-gray-100"
                          onClick={() => setIsDropdownOpen(false)}
                        >
                          Logout
                        </Link>
                      </li>
                    </ul>
                  </div>
                )}
              </>
            ) : (
              <Link
                to="/login"
                className="hover:text-primary transition duration-200"
              >
                <HiOutlineUser className="size-6" />
              </Link>
            )}
          </div>

          {/* Cart */}
          <Link
            to="/cart"
            className="relative bg-primary px-4 py-2 rounded-md flex items-center gap-2 hover:bg-primary-dark transition duration-200"
          >
            <HiOutlineShoppingCart />
            <span className="text-sm font-semibold">0</span>

            {/* Badge */}
            <span className="absolute -top-2 -right-2 bg-red-500 text-xs px-1.5 rounded-full">
              0
            </span>
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
