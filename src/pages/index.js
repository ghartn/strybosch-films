
import React from "react"

import HeroLayout from "../components/heroLayout"
import SEO from "../components/seo"
import Link from "gatsby-link"
import logo from "../images/logo-w.png"

const IndexPage = () => (
  <HeroLayout>
    <SEO title="Home" />
    <Link to="/about">
      <div className="absolute w-full h-full flex justify-center items-center">
        <img id="enter-site" alt="logo" className="block" src={logo} loading="eager" placeholder="tracedSVG" style={{width: "200px"}}/>
      </div>
    </Link>
  </HeroLayout>
)

export default IndexPage
