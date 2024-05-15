import {BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Dashboard from './pages/Dashboard'
import Projects from './pages/Projects'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import Header from './components/Header'
import Footer from './components/Footer'
import PrivateRoute from './components/PrivateRoute'
import OnlyAdminPrivateRoute from './components/OnlyAdminCreatePost'
import CreatePost from './pages/CreatePost'
import UpdatePost from './pages/UpdatePost'
import PostPage from './pages/PostPage'


export default function App() {
  return (
    <BrowserRouter>
      <Header></Header>
      <Routes>
        <Route path='/' element= {<Home/>}></Route>
        <Route path='/about' element= {<About/>}></Route>
        <Route element={<PrivateRoute/>}>
          <Route path='/dashboard' element= {<Dashboard/>}></Route>
        </Route>
        <Route path='/projects' element= {<Projects/>}></Route>
        <Route path='/post/:postSlug' element= {<PostPage/>}></Route>
        <Route path='/sign-in' element= {<SignIn/>}></Route>
        <Route path='/sign-up' element= {<SignUp/>}></Route>
        <Route element={<OnlyAdminPrivateRoute/>}>
          <Route path='/create-post' element= {<CreatePost/>}></Route>
          <Route path='/update-post/:postId' element= {<UpdatePost/>}></Route>
        </Route>
      </Routes>
      <Footer></Footer>
    </BrowserRouter>
  )
}
