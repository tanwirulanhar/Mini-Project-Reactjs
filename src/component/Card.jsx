import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import Button from "./Button";

const Card = () => {
  const [listUser, setListUser] = useState([]);
  const [pagination, setPagination] = useState({
    page: 1,
  });

  const cardClick = () => {
    alert("Silahkan login atau Register terlebih dahulu.");
  };

  const fetchData = (pageNumber) => {
    axios
      .get(`https://reqres.in/api/users?page=${pageNumber}`)
      .then((res) => {
        setListUser(res?.data.data);
        setPagination({
          total: res?.data.total,
          page: res?.data.page,
          per_page: res?.data.per_page,
          total_pages: res?.data.total_pages,
        });
      })
      .catch((err) => {
        console.log(err.response);
      });
  };

  useEffect(() => {
    fetchData(pagination.page);
  }, [pagination.page]);

  const handleNext = () => {
    setPagination((prevPagination) => ({
      ...prevPagination,
      page: prevPagination.page + 1,
    }));
  };

  const handleBack = () => {
    setPagination((prevPagination) => ({
      ...prevPagination,
      page: prevPagination.page - 1,
    }));
  };

  return (
    <div>
      <div className="flex flex-wrap justify-center gap-6 mx-4 my-8">
        {listUser.map((item) => (
          <div
            key={item.id}
            className="w-full overflow-hidden transition duration-300 border border-gray-200 rounded-lg cursor-pointer md:w-72 hover:shadow-lg hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500"
            onClick={cardClick}
          >
            <img
              className="object-cover w-full h-60"
              src={item?.avatar}
              alt="Avatar"
            />
            <div className="p-4 text-white bg-cyan-800">
              <h1 className="text-lg font-semibold text-center">
                {item?.first_name} {item?.last_name}
              </h1>
              <p className="mt-1 text-sm text-center">{item?.email}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center space-x-4 mb-36">
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

export default Card;



