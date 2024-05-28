
import Search from "./Search";

const HomeContent = () => {
  return (
    <div >
        <div className="flex gap-28 mx-24 leading-10 h-60">
          <div className="w-1/3 mt-40 font-sans">
            <h1 className="text-5xl font-bold ">
              <span className="text-yellow-400">
                Create <span className="text-white"> or</span> Find
              </span>
              <br />
              <span className="text-white"> interesting</span> <br />
              <span className="text-yellow-400">Events</span>{" "}
              <span className="text-white">around</span> <br />{" "}
              <span className="text-white">The world</span>
            </h1>
          </div>
          <div>
            <Search />
          </div>
        </div>
    </div>
  );
};

export default HomeContent;
