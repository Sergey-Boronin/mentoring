import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../index.css";

import Home from "./pages/Home";
import About from "./pages/About";
import Login from "./pages/Login"
import FullArticle from "./pages/FullArticle";
import NotFound from "./pages/NotFound";
import Profile from "./pages/Profile";

import { Navigate, Route, Routes } from 'react-router-dom'
import Layout from "./components/Layout";

function App() {
  return (
    <div className="page">
      <Routes>
        <Route path='/' element={<Layout />}> 
          <Route path='/' element={<Home />}> </Route>
          <Route path='/about' element={<About />} />
          <Route path='/login' element={<Login />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/post/:id' element={<FullArticle />} />
          <Route path='/404' element={<NotFound />} />
          <Route path='*' element={<Navigate to='/404' />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
