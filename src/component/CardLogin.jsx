import { useEffect, useState } from "react";
import axios from "axios";
import Button from "./Button";
import { Link } from "react-router-dom";

const CardLogin = () => {
  const [listUser, setListUser] = useState([]);
  const [pagination, setPagination] = useState({
    page: 1,
  });



  const datalistUser = () => {
    axios
      .get(`https://reqres.in/api/users?page=${pagination.page}`)
      .then((res) => {
        console.log(res?.data.data);

        setListUser(res?.data.data);

        // data button
        const pagination = {
          total: res?.data.total,
          page: res?.data.page,
          per_page: res?.data.per_page,
          total_pages: res?.data.total_pages,
        };

        console.log(pagination);
        setPagination(pagination);
      })
      .catch((err) => {
        console.log(err.response);
      });
  };

  useEffect(() => {
    datalistUser();
  }, []);

  //useEffect button
  useEffect(() => {
    datalistUser();
  }, [pagination?.page]);

  //function button
  const handleNext = () => {
    setPagination({
      ...pagination,
      page: pagination?.page + 1,
    });
  };

  const handleBack = () => {
    setPagination({
      ...pagination,
      page: pagination?.page - 1,
    });
  };

  return (
    <div>
      <div 
        className="flex justify-center gap-10 mx-10 my-10 "
      >
        {listUser.map((item) => (
          <Link to={`/user/${item?.id}`}
            key={item.id}
            className="pt-0 duration-300 rounded-lg shadow-2xl cursor-pointer border-inherit w-72 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500"
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
          </Link>
        ))}
      </div>

      
      <div className="flex items-center justify-center gap-4 mb-36">
        <Button onClick={handleBack} className="">
          Back
        </Button>
        <Button
          onClick={handleNext}
          disabled={pagination.page >= pagination.total_pages}
          className=""
        >
          Next
        </Button>
      </div>
    </div>
  );
};

export default CardLogin;
