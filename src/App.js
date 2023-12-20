import logo from './logo.svg';
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainPage from './Pages/MainPage.js';
import Header from './Pages/header.js';
import Footer from './Pages/footer.js';
import Courses from './Pages/Courses.js';
import Portfolio from './Pages/Portfolio.js';
import Contact from './Pages/Contact.js';
import Register from './Pages/Register.js';
import Login from './Pages/Login.js';
import Data from './Pages/Data.js';

function App() {
  return (
    <Router>
      <div>
        <div className='mal div'>

        </div>
        <Header />
        <Routes>


          <Route path="/" element={<MainPage />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/registration" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/data" element={<Data />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;





