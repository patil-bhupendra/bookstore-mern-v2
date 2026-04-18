import React from "react";
import { FiShoppingCart } from "react-icons/fi";
import { getImgUrl } from "../../utils/getImgUrl";
import { Link } from "react-router-dom";

const BookCard = ({ book }) => {
  return (
    <div className=" rounded-lg transition-shadow duration-300">
      <div className="flex flex-col sm:flex-row gap-4 h-full">
        <div className="w-full sm:w-40 flex-shrink-0 border rounded-md">
          <Link to={`/books/${book._id}`}>
            <img
              src={getImgUrl(book?.coverImage)}
              className="w-full h-48 sm:h-full object-cover p-2 rounded-md hover:scale-105 transition-all duration-200"
            />
          </Link>
        </div>

        <div className="flex flex-col justify-between flex-grow">
          <div>
            <h3 className="text-xl font-semibold hover:text-blue-600 mb-2">
              {book?.title}
            </h3>
            <p className="text-gray-600 mb-3">
              {book?.description.slice(0, 80)}...
            </p>
          </div>

          <div>
            <p className="font-medium mb-3">
              ${book?.newPrice}
              <span className="line-through font-normal ml-2">
                ${book?.oldPrice}
              </span>
            </p>

            <button className="btn-primary px-6 flex items-center gap-1">
              <FiShoppingCart />
              <span>Add to Cart</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
