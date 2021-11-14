
import React from "react"
import HeroLayout from "../components/heroLayout"
import { Link } from "react-router-dom";
import logo from "../img/logo-w.png"

const IndexPage = () => (
  <HeroLayout>
    <Link to="/about">
      <div className="absolute w-full h-full flex justify-center items-center">
        <div id="enter-site">
          <img  alt="logo" className="sm:w-72 block w-36" src={logo}/>
          <p className="mt-6 text-center text-white no-underline hover:text-white uppercase wide-text text-sm text-opacity-70">enter site</p>
        </div>
      </div>
    </Link>
  </HeroLayout>
)

export default IndexPage
