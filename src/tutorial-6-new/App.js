import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";

import Home from "./pages/Home";
import About from "./pages/About";
import Header from "./components/Header";
import Footer from "./components/Footer";
import FullArticle from "./pages/FullArticle";
import NotFound from "./pages/NotFound";

import { Route, Routes } from 'react-router-dom'

function App() {
  return (
    <div className="page">
      <Header />
      <Routes>
        <Route path='/' element={<Home />}> </Route>
        <Route path='/about' element={<About />} />
        <Route path='/login' element={<h2>login</h2>} />
        <Route path='/post/:id' element={<FullArticle />} />
        <Route path='*' element={<NotFound />} />
      </Routes>

      <main>
        {/* {path === "/home" && <Home />}
        {path === "/about" && <About />}
        {path === "/login" && <h2>login</h2>}
        {postId && <FullArticle id={postId}/>} */}
      </main>
      <Footer />
    </div>
  );
}

export default App;
