import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Nav from './pages/nav/Nav';
import Home from './pages/home/home';
import Signin from './pages/signin/Signin';
import Login from './pages/login/Login';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect } from 'react';
function App() {
  
  function notify() {
    toast.info(
      <div style={{ fontWeight: 'bold', fontSize: '1.5em', color:'green', }}>
        <p>I am working on the UI.</p>
        <p>You must check Functionality.</p>
        <button onClick={() => toast.dismiss()}>Cancel</button>
      </div>,
      {
        position: 'top-right',
        autoClose: false,
        closeOnClick: false,
        closeButton: false,
        draggable: false,
      }
    );
  }
  useEffect(() => {
    notify(); // Call notify when the component mounts
  }, []);

  return (
    <Router>
      <div>
        <ToastContainer />
      </div>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
