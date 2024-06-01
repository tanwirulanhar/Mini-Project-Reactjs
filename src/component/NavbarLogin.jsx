import React, { useEffect, useState } from "react";
import image from "../assets/logo.png";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const NavbarLogin = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate(); 



  useEffect(() => {
    axios
      .get("https://reqres.in/api/users/4")
      .then((response) => {
        console.log(response?.data.data);
        setUser(response?.data.data);
      })
      .catch((err) => console.log(err));
  }, []);

  
  const handleClick = () => {
    localStorage.removeItem('acces_token');
    setTimeout(() => {
      navigate("/login");
    }, 1000);
  };

  return (
    <>
      <div className="flex justify-between px-24 py-8 ">
        <Link to="/homeLogin">
          <div className="w-56 h-12 ">
            <img src={image} alt="logo" />
          </div>
        </Link>

        <div className="flex gap-4">
          
          <button
            onClick={handleClick}
            className="w-20 h-10 mt-2 text-sm font-semibold text-center text-white duration-300 hover:shadow-lg hover:-translate-y-1 hover:scale-110 hover:bg-cyan-500 bg-cyan-800 rounded-2xl"
          >
            Logout
          </button>
          {user && (
            <div className="flex gap-4" key={user.id}>
              <img
                className="w-12 h-12 rounded-full"
                src={user.avatar}
                alt="img"
              />
              <div>
                <h1 className="mt-2 font-sans text-sm font-semibold text-white">
                  {user.first_name} {user.last_name}
                </h1>
                <p className="text-sm text-white">Welcome Back!</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default NavbarLogin;

