// import { useState } from 'react'
import Card from "../components/Card"
import Features from "../components/Features"
import JobPosts from "../components/JobPosts"
import Landing from "../components/Landing"
import Login from "../components/Login"
import ResetPassword from "../components/ResetPassword"
import Search from "../components/Search"
import SignUp from "../components/SignUp"
import Footer from "../components/footer"
import Header from "../components/header"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {

  // const [count, setCount] = useState(0)

  return (
      <Router>
        <Routes>
          <Route path="/" index element={
            <>
              <Header/>
              <Landing/>
              <Features/>
              <Card/>
              <Footer/>
            </>
          }/>
          <Route path="/login" index element={<Login />}/>
          <Route path="/reset-password" element={<ResetPassword />}/>
          <Route path="/sign-up" element={<SignUp />}/>
          <Route path="/job-posts" element={<JobPosts />}/>
          <Route path="/search" element={<Search />}/>
        </Routes>
      </Router>
  )
}

export default App
