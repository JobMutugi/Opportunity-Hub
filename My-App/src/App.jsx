import React from 'react'
import Header from './Components/Header'
import Footer from './Components/Footer'
import {Route, Routes} from 'react-router-dom'
import Home from './Pages/Home'
import PostJob from './Pages/PostJob'

const App = () => {
  return (
    <div >



      <Header />

      <Routes>
        
        <Route path = "/" element = {<Home/>} ></Route>
      

         <Route path='/postjob' element = {<PostJob/>}> </Route>
      
      
      </Routes>


<Footer />



    </div >
  )

}

export default App
