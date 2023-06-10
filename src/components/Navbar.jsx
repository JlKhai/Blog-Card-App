import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useGetBlogsQuery } from '../feature/services/blogApi'

const Navbar = () => {
  const [search, setSearch] = useState('')
  const nav = useNavigate()
  const { data: blog } = useGetBlogsQuery()

  const submitHandler = (e) => {
    e.preventDefault()
    const filteredBlog = blog?.filter((item) =>
      item.title.toLowerCase().includes(search),
    )
    //sent filteredBlog to search component using use Navigate
    nav('/search', { state: { filteredBlog: filteredBlog } })
  }

  return (
    <div className="flex justify-around p-3 md:p-5 shadow-lg items-center">
      <Link to={'/'}>
        <h2 className="cursor-pointer select-none mb-2 text-xl md:text-3xl font-bold tracking-tight text-violet-700 dark:text-white">
          Blogs
        </h2>
      </Link>
      <div>
        <form onSubmit={submitHandler}>
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            type="text"
            placeholder="Search blog"
            className="w-[190px]  md:w-96 border rounded-lg md:rounded-xl px-4 md:px-6 py-2 md:py-2.5 outline-none "
          />
        </form>
      </div>
      <Link to={'/createBlog'}>
        <button className="focus:outline-none select-none  text-white bg-purple-700 hover:bg-purple-800  font-medium rounded-full text-sm px-1 md:px-2 py-2 md:py-4 dark:bg-purple-600 dark:hover:bg-purple-700">
          Create
        </button>
      </Link>
    </div>
  )
}

export default Navbar
