import { Link, useParams } from 'react-router-dom'
import { useGetSingleBlogQuery } from '../feature/services/blogApi'

const Detail = () => {
  const { id } = useParams()
  const { data: blog } = useGetSingleBlogQuery(id)
  // console.log(blog)
  return (
    <div className=" flex  justify-center items-center h-screen">
      <div className="w-[470px] h-[600px] bg-white border border-gray-200 rounded-xl shadow dark:bg-gray-800 dark:border-gray-700">
        <img className="rounded-t-xl w-[100%] h-[50%]" src={blog?.image} />
        <div className="flex flex-col gap-2 p-5 h-[50%] w-[100%]">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {blog?.title}
          </h5>

          <p className="bg-gray-50 mb-3 font-normal text-gray-700 dark:text-gray-400">
            {blog?.description}
          </p>
          <div className="mt-auto flex justify-between">
            <Link to={`/`}>
              <button className="text-white bg-violet-600 hover:bg-violet-800 focus:outline-none focus:ring-4 focus:ring-violet-300  rounded-lg text-sm px-10 py-2.5 text-center mr-2 mb-2 dark:bg-violet-600 dark:hover:bg-violet-700 dark:focus:ring-violet-800">
                Back
              </button>
            </Link>
            <Link to={`/editBlog/${blog?.id}`}>
              <button className="text-white bg-blue-600 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300  rounded-lg text-sm px-10 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:blue:bg-blue-700 dark:focus:ring-blue-800">
                Edit
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Detail
