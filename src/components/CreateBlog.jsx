import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useCreateBlogMutation } from '../feature/services/blogApi'

const CreateBlog = () => {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [image, setImage] = useState('')

  const nav = useNavigate()

  const [createBlog] = useCreateBlogMutation()

  const createBlogHandler = (e) => {
    e.preventDefault()
    // console.log(title, description, image)
    const newBlog = { id: Date.now, title, description, image }
    createBlog(newBlog)
    nav('/')
  }
  return (
    <div className="flex justify-center items-center h-screen">
      <form
        onSubmit={createBlogHandler}
        className=" flex flex-col gap-4 md:gap-7 w-72 md:w-76 shadow-lg rounded-xl p-7"
      >
        <h2 className=" select-none  mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
          Create New Blog
        </h2>
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className=" me-20 w-[100%] border-2 rounded-lg  outline-none p-2"
          placeholder="Title"
          type="text"
        />
        <input
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className=" me-20 w-[100%] border-2  rounded-lg  outline-none p-2"
          placeholder="Description"
          type="text"
        />
        <input
          value={image}
          onChange={(e) => setImage(e.target.value)}
          className=" me-20 w-[100%] border-2  rounded-lg  outline-none p-2"
          placeholder="put an image link"
          type="text"
        />
        <button
          className="w-[100%] focus:outline-none select-none cursor-pointer text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-900"
          type="submit"
        >
          create
        </button>
      </form>
    </div>
  )
}

export default CreateBlog
