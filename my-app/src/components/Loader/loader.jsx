import React from 'react';
import LoaderImg from "../../images/loader.svg";
import "./loader.css"

const loader = () => {
  return (
    <div className='loader flex flex-c'>
      <img src= {LoaderImg} alt="loader" />
    </div>
  )
}

export default loader