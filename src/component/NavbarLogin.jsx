import React, { useEffect, useState } from "react";
import image from "../assets/logo.png";
import { Link } from "react-router-dom";
import axios from "axios";

const NavbarLogin = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    axios
      .get("https://reqres.in/api/users/4")
      .then((response) => {
        console.log(response?.data.data);
        setUser(response?.data.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <div className="flex justify-between px-24 py-8 ">
        <Link to="/homeLogin">
          <div className="w-56 h-12 ">
            <img src={image} alt="logo" />
          </div>
        </Link>

        <div className="">
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
