import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram, FaTwitter, FaBookOpen } from "react-icons/fa";

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = () => {
    if (!email) return alert("Please enter your email");
    console.log("Subscribed:", email);
    setEmail("");
  };

  return (
    <footer className="bg-gray-950 text-gray-300 px-6 py-12">
      <div className="max-w-7xl mx-auto">
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              
              <FaBookOpen className="text-primary text-2xl" />
              <span className="text-xl font-bold tracking-wide text-white">
                Book<span className="text-primary">store</span>
              </span>
            </div>

            <p className="text-sm text-gray-400 leading-relaxed">
              Readora is a modern digital bookstore designed to help you
              discover, explore, and purchase books effortlessly.
            </p>

            {/* Social */}
            <div className="flex gap-4 mt-5">
              <a
                href="https://x.com/BhupendraR97314"
                target="_blank"
                rel="noreferrer"
              >
                <FaTwitter
                  className="hover:text-white hover:scale-110 transition duration-300"
                  size={20}
                />
              </a>

              <a
                href="https://www.instagram.com/_.bhupendra.rajput._/"
                target="_blank"
                rel="noreferrer"
              >
                <FaInstagram
                  className="hover:text-white hover:scale-110 transition duration-300"
                  size={20}
                />
              </a>

              <a href="https://facebook.com" target="_blank" rel="noreferrer">
                <FaFacebook
                  className="hover:text-white hover:scale-110 transition duration-300"
                  size={20}
                />
              </a>
            </div>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/about" className="hover:text-white transition">
                  About
                </Link>
              </li>
              <li>
                <Link to="/careers" className="hover:text-white transition">
                  Careers
                </Link>
              </li>
              <li>
                <Link to="/blog" className="hover:text-white transition">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white transition">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-white font-semibold mb-4">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/help" className="hover:text-white transition">
                  Help Center
                </Link>
              </li>
              <li>
                <Link to="/faq" className="hover:text-white transition">
                  FAQs
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="hover:text-white transition">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="hover:text-white transition">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-white font-semibold mb-4">Stay Updated</h3>
            <p className="text-sm text-gray-400 mb-4">
              Get the latest books, offers, and updates directly in your inbox.
            </p>

            <div className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-3 py-2 rounded-l-md text-black text-sm focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <button
                onClick={handleSubscribe}
                className="bg-primary text-white px-4 py-2 text-sm rounded-r-md hover:bg-primary-dark transition"
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-800 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>© {new Date().getFullYear()} Bookstore. All rights reserved.</p>

          <div className="flex gap-6 mt-4 md:mt-0">
            <Link to="/privacy" className="hover:text-white transition">
              Privacy
            </Link>
            <Link to="/terms" className="hover:text-white transition">
              Terms
            </Link>
            <Link to="/cookies" className="hover:text-white transition">
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
