import React, { useEffect, useState } from 'react'

import { Link, NavLink, useNavigate } from "react-router-dom";
import search_icon from '../assets/search_icon.png'
import profile_icon from '../assets/profile_icon.png'
import cart_icon from '../assets/cart_icon.png'
import menu_icon from '../assets/menu_icon.png'

import { useContext } from "react";
import { ShopContext } from "../context/ShopContext";

function Navbar() {

   const [visible, setVisible] = useState(false);
  const navigate = useNavigate();
  const isLoggedIn = localStorage.getItem("isLoggedIn");
  const { getCartCount } = useContext(ShopContext);


  return (
    <nav className="flex justify-between items-center px-6 py-4 bg-white">
      <h1 className="text-3xl font-bold text-blue-600">
        samshop
      </h1>
      <ul className="flex gap-8 font-bold">
        <li>
          <NavLink to="/">Home</NavLink>
        </li>

        <li>
          <NavLink to="/about">About</NavLink>
        </li>

        <li>
          <NavLink to="/contact">Contact</NavLink>
        </li>

        <li>
          <NavLink to="/collection">Collection</NavLink>
        </li>
      </ul>

      <div className='flex item-center gap-6'>
        <img src={search_icon} className='w-5 cursor-pointer' alt="" />

        <div className='relative'>
          <img onClick={() => setVisible(!visible)} src={profile_icon} className='w-5 cursor-pointer' alt="" />

          {visible && (
            <div className="absolute right-0 mt-2 w-44 bg-white rounded-lg shadow-lg border z-50">

              {!isLoggedIn ? (

                <NavLink
                  to="/login"
                  className="block px-4 py-2 hover:bg-gray-100"
                  onClick={() => setVisible(false)}
                >
                  Sign In
                </NavLink>

              ) : (

                <>
                  <NavLink
                    to="/profile"
                    className="block px-4 py-2 hover:bg-gray-100"
                    onClick={() => setVisible(false)}
                  >
                    My Profile
                  </NavLink>

                  <NavLink
                    to="/orders"
                    className="block px-4 py-2 hover:bg-gray-100"
                    onClick={() => setVisible(false)}
                  >
                    Orders
                  </NavLink>

                  <button
                    className="w-full text-start px-4 py-2 text-danger border-0 bg-white"
                    onClick={() => {
                      localStorage.removeItem("isLoggedIn");
                      localStorage.removeItem("userEmail");
                      navigate("/login");
                      window.location.reload();
                    }}
                  >
                    Logout
                  </button>
                </>

              )}

            </div>
          )}
        </div>
        <Link to='/cart' className='relative'>
          <img src={cart_icon} className='w-5 min w-5' alt="" />
          <p className="absolute right-[-5px] bottom-[-5px] w-4 h-4 flex items-center justify-center bg-black text-white rounded-full text-[8px]">
            {getCartCount()}
          </p>
        </Link>
        <img src={menu_icon} className='w-5 cursor-pointer sm:hidden ' alt="" />
      </div>






    </nav>
  );
}

export default Navbar;