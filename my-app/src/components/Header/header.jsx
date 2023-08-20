import React from 'react'
import Navbar from "../Navbar/Navbar";
import Searchform from "../SearchForm/SearchForm";
import  "./header.css";

const header = () => {
  return (
    <div className='holder'>
      <header className='header'>
        <Navbar />
        <div className='header-content flex flex-c text-center text-white'>
          <h2 className='header-title text-capitalize'>find your boook of choice.</h2><br />
          <p className='header-text fs-18 fw-3'></p>
          <Searchform />
        </div>
      </header>
    </div>
  )
}

export default header