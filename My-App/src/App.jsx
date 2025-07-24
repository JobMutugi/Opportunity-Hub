import React from 'react';
import Header from './Components/Header';
import Footer from './Components/Footer';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import PostJob from './Pages/PostJob';
import Editpost from './Components/Editpost'; 
import Login from './Pages/LogIn';


const App = () => {
  return (
    <div>
      <Header />

      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/postjob" element={<PostJob />} />
        <Route path="/editjob/:id" element={<Editpost />} />
        {/* <Route path="/employershub" element={<PostJob />} /> */}
      </Routes>

      <Footer />
    </div>
  );
};

export default App;