import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import NavbarLogin from "../component/NavbarLogin";
import Footer from "../component/Footer";

const DetailUser = () => {
  const params = useParams();
  const [user, setUser] = useState();

  const getDetailUser = async () => {
    try {
      const response = await axios.get(
        `https://reqres.in/api/users/${params?.id}`
      );
      setUser(response.data.data);
    } catch (error) {
      console.log(error.response);
    }
  };

  useEffect(() => {
    getDetailUser();
  }, []);

  return (
    <div>
      <div className="bg-cyan-800">
        <NavbarLogin />
      </div>

      <h1 className="mt-10 font-sans text-4xl font-bold text-center">Detail User</h1>
      <div className="max-w-screen-md px-4 mx-auto my-32">
        <div className="duration-300 rounded-lg shadow-2xl bg-slate-200 hover:-translate-y-1 hover:scale-110">
          <div className="flex flex-col lg:flex-row">
            <img className="w-full rounded-t-lg rounded-l-lg lg:w-56 h-60 lg:rounded-l-none lg:rounded-t-none" src={user?.avatar} alt="img" />
            <div className="flex flex-col justify-center p-6">
              <h1 className="mb-2 text-lg font-bold lg:text-xl">
                Name : {user?.first_name} {user?.last_name}
              </h1>
              <h1 className="text-sm lg:text-base"> Email : {user?.email}</h1>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default DetailUser;


