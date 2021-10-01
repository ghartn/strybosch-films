
import React from "react"

import HeroLayout from "../components/heroLayout"
import SEO from "../components/seo"
import StryboschFilms from "../images/strybosch-films-intro.webm"
import Link from "gatsby-link"

const IndexPage = () => (
  <HeroLayout>
    <SEO title="Home" />
    <video autoPlay muted id="hero-video" playsInline className="" controls="false" poster="../images/poster2.jpg">
      <source src={StryboschFilms} type="video/webm" />
    </video>
    <Link to="/about">
      <div className className="absolute w-full h-full flex justify-center items-center">
        <h1 id="enter-site" className="text-white text-3xl text-center">enter site.</h1>
      </div>
    </Link>
  </HeroLayout>
)

export default IndexPage
