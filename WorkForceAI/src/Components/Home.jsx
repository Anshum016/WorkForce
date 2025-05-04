import React from 'react'
import Radicallybetter2 from '../assets/Radicallybetter2.svg'
import Carousel from './Carousel';
import Technologies from './Technologies';
import { Link } from 'react-router-dom';
import Tools from './Tools';
import Footer from './Footer';

const Home = () => {
  return (
    <div className='whole page'>
      <div className='flex flex-col md:flex-row hero-section text-amber-50 font-extrabold my-4 md:mt-24 lg:mt-40 mx-10'>

        <div className='text-section md:pr-20 md:pb-20'>


          <p className="text-lg font-extrabold md:text-justify text-center md:pb-5 pb-9 ">Empower Your Development with WORK<span className='text-red-600'>FORCE</span>.AI</p>
          <p className="text-justify">
            WorkforceAI is an AI-powered platform that offers a suite of intelligent tools tailored for developers.
            From code generation to task automation, it streamlines your workflow and boosts productivity.
            Whether you're working solo or in a team, WorkforceAI helps you build smarter and faster.
            Unlock the potential of AI and take your development process to the next level.
          </p>

        </div>
        <img src={Radicallybetter2} alt="Radicallybetter2" className='md:h-40 h-50' />
      </div>
      <div className=' flex justify-center mb-10'>
        <Link to="./Tools">
      <button className=" bg-red-600 hover:bg-red-800 text-white font-semibold py-2 px-6 rounded-lg shadow-md transition duration-300 cursor-pointer">
        Visit Our Tools
      </button>
      </Link>
      
      </div>

      <Carousel />
      <Technologies />
      
    </div>



  )
}

export default Home
