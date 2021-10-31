
import React from "react"

import HeroLayout from "../components/heroLayout"
import SEO from "../components/seo"
import Link from "gatsby-link"
import { StaticImage } from "gatsby-plugin-image"

const IndexPage = () => (
  <HeroLayout>
    <SEO title="Home" />
    <Link to="/about">
      <div className className="absolute w-full h-full flex justify-center items-center">
        <StaticImage id="enter-site" className="block w-72" src="../images/logo-w.png" loading="eager" placeholder="tracedSVG"/>
      </div>
    </Link>
  </HeroLayout>
)

export default IndexPage
