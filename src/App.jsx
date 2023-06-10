import { Route, Routes } from 'react-router-dom'
import './App.css'
import Blogs from './components/Blogs'
import Detail from './components/Detail'
import Navbar from './components/Navbar'
import CreateBlog from './components/CreateBlog'
import EditBlog from './components/EditBlog'
import Search from './components/Search'
const App = () => {
  return (
    <div className=" bg-violet-100">
      <Navbar />
      <Routes>
        <Route path="/" element={<Blogs />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/createBlog" element={<CreateBlog />} />
        <Route path="/editBlog/:id" element={<EditBlog />} />
        <Route path="/search" element={<Search />} />
      </Routes>
    </div>
  )
}

export default App
