import { Link, useLocation } from 'react-router-dom'

const Search = () => {
  const { state } = useLocation()
  // console.log(state.filteredBlog[0])
  const searched = state.filteredBlog[0]
  return (
    <div className="flex justify-center items-center h-screen">
      <div className=" hover:scale-95 transition-all  delay-75 w-[280px] h-[380px] bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <img className="rounded-t-lg h-[50%] w-[100%]" src={searched?.image} />
        <div className="flex flex-col gap-2 p-5 h-[50%] w-[100%]">
          <h5 className="mb-2 text-2xl font-bold font-serif tracking-tight text-gray-700 dark:text-white">
            {searched?.title}
          </h5>

          <p className="mb-3 font-sans  text-gray-700 dark:text-gray-400">
            {searched?.description?.substring(0, 30)}...
          </p>
          <div className="flex justify-between mt-auto">
            <button
              type="button"
              className="text-red-700 hover:text-white border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2 text-center mr-2 mb-2 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900"
            >
              Delete
            </button>

            <Link to={`/detail/${searched?.id}`}>
              <button className=" text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300  rounded-lg text-sm px-5 py-2 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Detail
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Search
