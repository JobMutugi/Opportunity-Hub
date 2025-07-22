import React from 'react';
import Header from './Components/Header';
import Footer from './Components/Footer';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import PostJob from './Pages/PostJob';
import Editpost from './Components/Editpost'; // Note: lowercase 'p' to match filename

const App = () => {
  return (
    <div>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/postjob" element={<PostJob />} />
        <Route path="/editjob/:id" element={<Editpost />} /> {/* Updated to match component name */}
      </Routes>

      <Footer />
    </div>
  );
};

export default App;