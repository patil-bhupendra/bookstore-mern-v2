import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { HiOutlineShoppingCart, HiOutlineHeart } from "react-icons/hi2";
import { IoIosSearch } from "react-icons/io";
import { HiOutlineUser } from "react-icons/hi";
import { FaBookOpen } from "react-icons/fa";

import avatarImg from "../assets/avatar.png";
import { useSelector } from "react-redux";
import { useAuth } from "../context/AuthContext";

const navigation = [
  { name: "Dashboard", href: "/user-dashboard" },
  { name: "Orders", href: "/orders" },
  { name: "Cart Page", href: "/cart" },
  { name: "Check Out", href: "/checkout" },
];

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const cartItems = useSelector((state) => state.cart.cartItems || []);
  const { currentUser, logout } = useAuth();

  const handleLogout = () => {
    logout();
    setIsDropdownOpen(false);
  };

  // Close dropdown on outside click + ESC key
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    const handleEscKey = (event) => {
      if (event.key === "Escape") {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscKey);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscKey);
    };
  }, []);

  return (
    <header className="bg-gray-950/80 backdrop-blur-md border-b border-gray-800 shadow-md text-white sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* LOGO */}
        <Link to="/" className="flex items-center gap-2">
          <FaBookOpen className="text-primary text-2xl" />
          <span className="text-2xl font-bold tracking-tight">
            Read<span className="text-primary">ora</span>
          </span>
        </Link>

        {/* SEARCH */}
        <div className="relative hidden md:block w-72">
          <IoIosSearch className="absolute left-3 top-2.5 text-gray-400" />
          <input
            type="text"
            placeholder="Search books..."
            className="w-full bg-gray-900 text-sm px-10 py-2 rounded-md placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>

        {/* RIGHT SIDE */}
        <div className="flex items-center gap-4">
          {/* WISHLIST */}
          <button className="hidden sm:block hover:text-primary transition">
            <HiOutlineHeart className="size-6" />
          </button>

          {/* USER */}
          <div ref={dropdownRef} className="relative">
            {currentUser ? (
              <>
                <button
                  onClick={() => setIsDropdownOpen((prev) => !prev)}
                  aria-label="User menu"
                >
                  <img
                    src={currentUser?.photoURL || avatarImg}
                    alt="user"
                    className="size-8 rounded-full ring-2 ring-primary"
                  />
                </button>

                {isDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white text-black rounded-md shadow-lg z-40 overflow-hidden">
                    <ul className="py-2 text-sm">
                      {navigation.map((item) => (
                        <li key={item.name}>
                          <Link
                            to={item.href}
                            className="block px-4 py-2 hover:bg-gray-100"
                            onClick={() => setIsDropdownOpen(false)}
                          >
                            {item.name}
                          </Link>
                        </li>
                      ))}

                      <li>
                        <button
                          onClick={handleLogout}
                          className="w-full text-left px-4 py-2 hover:bg-gray-100 text-red-500"
                        >
                          Logout
                        </button>
                      </li>
                    </ul>
                  </div>
                )}
              </>
            ) : (
              <Link to="/login" className="hover:text-primary transition">
                <HiOutlineUser className="size-6" />
              </Link>
            )}
          </div>

          {/* CART */}
          <Link
            to="/cart"
            className="relative bg-primary px-4 py-2 rounded-md flex items-center gap-2 hover:opacity-90 transition"
          >
            <HiOutlineShoppingCart />
            <span className="text-sm font-semibold">{cartItems.length}</span>
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
