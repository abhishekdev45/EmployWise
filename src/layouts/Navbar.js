import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../features/authSlice";
import { FiSearch } from "react-icons/fi";
import SearchBar from "../components/SearchBar";

const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [showSearch, setShowSearch] = useState(false);

  const handleLogout = () => {
    dispatch(logout());
    localStorage.removeItem("token");
    navigate("/");
  };

  const toggleSearchBar = () => {
    setShowSearch((prev) => !prev);
  };

  return (
    <nav className="bg-blue-600 p-4 flex justify-between items-center">
      <div className="text-white text-xl font-bold">
        <a href="/">EmployeeWise</a>
      </div>

      {showSearch && (
        <div className="absolute top-16 left-0 right-0 bg-white p-4 shadow-lg z-50 md:hidden">
          <SearchBar />
        </div>
      )}

      <div className="hidden md:block md:flex-grow md:max-w-lg">
        <SearchBar />
      </div>
      <div className="flex items-center space-x-4">
        <button
          onClick={toggleSearchBar}
          className="text-white text-xl md:hidden"
        >
          <FiSearch />
        </button>

        <button
          onClick={handleLogout}
          className="bg-white text-blue-600 py-2 px-4 rounded-md hover:bg-gray-200"
        >
          Logout
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
