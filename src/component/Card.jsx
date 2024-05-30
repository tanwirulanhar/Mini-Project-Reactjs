import { useEffect, useState } from "react";
import axios from "axios";

const Card = () => {
  const [listUser, setListUser] = useState([]);

  const datalistUser = () => {
    axios.get(`https://reqres.in/api/users?page=2&&per_page=5`).then((res) => {
      console.log(res?.data.data);

      setListUser(res?.data.data);
    });
  };

  useEffect(() => {
    datalistUser();
  }, []);

  return (
    <div className="flex justify-center gap-10 mx-10 my-10 ">
      {listUser.map((item) => (
        <div
          key={item.id}
          className="pt-0 rounded-lg shadow-2xl cursor-pointer border-inherit w-72"
        >
          <img
            className="rounded-t-lg h-60 w-72"
            src={item?.avatar}
            alt="img"
          />
          <div className="px-5 py-5 font-sans text-white rounded-b-lg bg-cyan-800">
            <h1 className="text-2xl text-center">
              {item?.first_name} {item?.last_name}
            </h1>
            <h1 className="text-base text-center">{item?.email}</h1>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
