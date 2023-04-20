import React from 'react'
import Nav from './Pages/Nav'
import User from './Pages/User'
import Home from './Pages/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import About from './Pages/About'
import Login from './Component/Login'
import Chat from './Pages/Chat'
import Sidebar from './Pages/Sidebar'
import News from './Pages/News'
import Register from './Component/Register'
import UserInfo from './Pages/userInfo'
import Categories from './Pages/Categories'
import Article from './Pages/Article'
function App() {
  return (
    <div>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path='/' element={<Categories />}></Route>
          <Route path='/news/article' element={<Article />}></Route>
          <Route path="/news" element={<News />} />
          <Route path='/login' element={<Login />}></Route>
          <Route path='/register' element={<Register />}></Route>
          <Route path='/user' element={<User />}></Route>
          <Route path='/about' element={<About />}></Route>
          <Route path='/chat' element={<Chat />}></Route>
          <Route path='/news' element={<News />}></Route>
          <Route path='*' element={<Login />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App