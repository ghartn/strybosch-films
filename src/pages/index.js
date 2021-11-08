
import React from "react"
import HeroLayout from "../components/heroLayout"
import { Link } from "react-router-dom";
import logo from "../img/logo-w.png"

const IndexPage = () => (
  <HeroLayout>
    <Link to="/about">
      <div className="absolute w-full h-full flex justify-center items-center">
        <div>
        <img id="enter-site" alt="logo" className="sm:w-72 block w-36" src={logo}/>
        <p className="mt-4 text-center text-white no-underline hover:text-white">enter site.</p>
        </div>
      
      </div>
    </Link>
  </HeroLayout>
)

export default IndexPage
