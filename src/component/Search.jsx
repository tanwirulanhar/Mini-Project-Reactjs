const Search = () => {
    return(
      <div className="flex px-2 py-2 bg-white rounded-full shadow-2xl w-704 mt-52">
        <input type="text" placeholder="Search Event" className="w-full h-10 p-1 pl-2 border-2 rounded-full border-inherit"/>
        <button className="h-10 ml-4 font-bold text-white bg-cyan-800 w-28 rounded-2xl">Search</button>
      </div>
    )
}

export default Search;