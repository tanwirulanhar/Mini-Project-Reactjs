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

  useEffect(() => {
    datalistUser();
  }, [pagination?.page]);

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
      <div className="flex flex-wrap justify-center gap-6 mx-4 my-8">
        {listUser.map((item) => (
          <Link
            to={`/user/${item?.id}`}
            key={item.id}
            className="flex flex-col items-center duration-300 rounded-lg shadow-2xl cursor-pointer w-72 hover:-translate-y-1 hover:scale-105 hover:bg-indigo-500"
          >
            <img
              className="object-cover w-full rounded-t-lg h-60"
              src={item?.avatar}
              alt="img"
            />
            <div className="w-full px-4 py-4 font-sans text-white rounded-b-lg bg-cyan-800">
              <h1 className="mb-2 text-2xl text-center">
                {item?.first_name} {item?.last_name}
              </h1>
              <h1 className="text-base text-center">{item?.email}</h1>
            </div>
          </Link>
        ))}
      </div>

      <div className="flex justify-center gap-4 mt-8 mb-32">
        <Button onClick={handleBack} disabled={pagination.page === 1}>
          Back
        </Button>
        <Button
          onClick={handleNext}
          disabled={pagination.page >= pagination.total_pages}
        >
          Next
        </Button>
      </div>
    </div>
  );
};

export default CardLogin;




