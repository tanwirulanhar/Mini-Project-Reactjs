const Search = () => {
    return(
      <div className=" w-704  mt-52 flex bg-white  px-2 py-2  rounded-2xl shadow-2xl">
        <input type="text" placeholder="Search Event" className="h-10 w-full p-1 pl-2 rounded-2xl border-2 border-cyan-800"/>
        <button className="text-white font-bold bg-cyan-800  w-28 h-10 ml-4 rounded-2xl">Search</button>
      </div>
    )
}

export default Search;