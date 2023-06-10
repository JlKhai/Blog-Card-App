import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import {
  useEditBlogMutation,
  useGetSingleBlogQuery,
} from '../feature/services/blogApi'

const EditBlog = () => {
  const nav = useNavigate()

  const { id } = useParams()
  const { data: blog } = useGetSingleBlogQuery(id)
  const [title, setTitle] = useState(blog?.title)
  const [description, setDescription] = useState(blog?.description)
  const [image, setImage] = useState(blog?.image)

  const [editBlog] = useEditBlogMutation()

  const editBlogHandler = (e) => {
    e.preventDefault()
    const newData = { id, title, description, image }
    editBlog(newData)
    nav('/')
  }
  return (
    <div className=" flex justify-center items-center h-screen">
      <form
        onSubmit={editBlogHandler}
        className=" flex flex-col gap-3 w-72 shadow-lg p-7"
      >
        <h2 className=" select-none  mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
          Create New Blog
        </h2>
        <input
          defaultValue={title}
          onChange={(e) => setTitle(e.target.value)}
          className=" me-20 w-[100%] border-2 rounded  outline-none p-2"
          placeholder="Title"
          type="text"
        />
        <input
          defaultValue={description}
          onChange={(e) => setDescription(e.target.value)}
          className=" me-20 w-[100%] border-2 rounded  outline-none p-2"
          placeholder="Description"
          type="text"
        />
        <input
          defaultValue={image}
          onChange={(e) => setImage(e.target.value)}
          className=" me-20 w-[100%] border-2 rounded  outline-none p-2"
          placeholder="Thambnail"
          type="text"
        />
        <button
          className="w-[100%] focus:outline-none select-none cursor-pointer text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-900"
          type="submit"
        >
          Edit
        </button>
      </form>
    </div>
  )
}

export default EditBlog
