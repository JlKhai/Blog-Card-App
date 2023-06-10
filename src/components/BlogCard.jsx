import { Link } from 'react-router-dom'
import { useDeleteBlogMutation } from '../feature/services/blogApi'

const BlogCard = ({ blog }) => {
  const [deleteBlog] = useDeleteBlogMutation()
  return (
    // <div className=" flex gap-5 lg:gap-20">
    <div className=" hover:scale-95 transition-all  delay-75 w-[280px] h-[360px] bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <img
        className="rounded-t-lg object-cover h-[50%] w-[100%]"
        src={blog?.image}
      />
      <div className="hover:bg-gray-100 rounded-lg flex flex-col p-5 h-[50%] w-[100%]">
        <h5 className="mb-2 text-xl font-bold font-serif tracking-tight text-gray-700 dark:text-white">
          {blog?.title}
        </h5>

        <p className="mb-3 font-sans  text-gray-700 dark:text-gray-400">
          {blog?.description?.substring(0, 25)}...
        </p>
        <div className="flex justify-between mt-auto">
          <button
            type="button"
            onClick={() => deleteBlog(blog?.id)}
            className="text-red-700 hover:text-white border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2 text-center mr-2 mb-2 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900"
          >
            Delete
          </button>

          <Link to={`/detail/${blog?.id}`}>
            <button className=" text-white bg-purple-700 hover:bg-purple-800 focus:outline-none focus:ring-4 focus:ring-purple-300  rounded-lg text-sm px-5 py-2 text-center mr-2 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-800">
              Detail
            </button>
          </Link>
        </div>
      </div>
    </div>
    // </div>
  )
}

export default BlogCard
