import BlogCard from './BlogCard'
import { useGetBlogsQuery } from '../feature/services/blogApi'
import { Loader } from '@mantine/core'

const Blogs = () => {
  const { data: blogs, isLoading } = useGetBlogsQuery()
  // console.log(blogs)
  if (isLoading) {
    return (
      <Loader
        className="mx-auto items-center h-screen"
        color="violet"
        size="lg"
        variant="dots"
      />
    )
  }
  return (
    <div className="container mx-auto gap-7 flex flex-wrap justify-center mt-5 md:mt-10">
      {blogs?.map((blog) => {
        return <BlogCard key={blog.id} blog={blog} />
      })}
    </div>
  )
}

export default Blogs
