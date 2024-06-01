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
  console.log(params?.id);

  useEffect(() => {
    getDetailUser();
  }, []);

  return (
    <div>
      <div className="bg-cyan-800">
        <NavbarLogin />
      </div>

      <h1 className="mt-10 font-sans text-4xl font-bold text-center">Detail User</h1>
      <div className="my-32 duration-300 rounded-lg shadow-2xl w-600 ml-420 h-60 bg-slate-200 hover:-translate-y-1 hover:scale-110">
        <div className="flex ">
          <img className="w-56 rounded-l-lg rounded-y-lg h-60" src={user?.avatar} alt="img" />
          <div className="py-20 pl-10 font-sans text-xl">
            <h1 className="font-bold">
              Name : {user?.first_name} {user?.last_name}
            </h1>
            <h1> Email : {user?.email}</h1>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default DetailUser;
