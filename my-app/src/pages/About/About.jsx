import React from 'react'
import "./About.css";
import aboutImg from "../../images/about-img1.jpg";
import { useNavigate } from 'react-router-dom';
import {FaArrowLeft} from "react-icons/fa";

const About = () => {
  const navigate = useNavigate();
  return (
    <section className='about'>
      <div className='container'>
        <div className='section-title'>
          <h2>About</h2>
        </div>
        <button type='button' className='flex flex-c back-btn' onClick={() => navigate("/book")}>
          <FaArrowLeft size = {22} />
          <span className='fs-8 fw-6'>Go Back</span>
        </button>

        <div className='about-content grid'>
          <div className='about-img'>
            <img src= {aboutImg} alt= "" />
          </div>
          <div className='about-text'>
            <h2 className='about-title fs-26 ls-1'>About Us</h2>
            <p className='fs-17'>Nama saya Fauzan Shidqi, dan saya adalah Pustakawan. Saya memiliki minat yang luas dalam dunia IT, dan melalui website ini, saya berharap dapat memberikan wawasan dan informasi yang berguna kepada pembaca.</p>
            <p className='fs-17'>Melalui website ini, saya berharap dapat berinteraksi dengan kalian semua. Jangan ragu untuk menghubungi saya jika Anda memiliki pertanyaan, saran, atau ingin berbagi pengalaman kalian. Saya selalu senang mendengar dari pembaca dan berbagi pengetahuan dengan orang lain.</p>
            <p className='fs-17'>Terima kasih telah mengunjungi website ini. Walaupun webiste ini masih tahap pengembangan saya berharap menemukan konten yang bermanfaat dan menginspirasi di sini. Support saya terus dalam mengembangkan website yang saya buat ini. Selamat menjelajahi!</p>
            <p className='fs-17'>Email: fauzanshidqi21@gmail.com</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About