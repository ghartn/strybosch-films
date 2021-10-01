import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Link from "gatsby-link"
import { StaticImage } from "gatsby-plugin-image"

const AboutPage = () => (
  <Layout>
    <SEO title="About" />
    <h1 className="font-bold text-3xl mb-6">About us.</h1>
    <div className="flex flex-col md:flex-row">
      <div className="w-full md:w-1/2 relative h-48">
        <StaticImage src="../images/1.jpg" alt="beautiful landscape" className="w-full md:w-1/2"/>
        <StaticImage src="../images/3.jpg" alt="beautiful boy" className="w-full md:w-1/2"/>
        <StaticImage src="../images/4.jpg" alt="beautiful boy 2" className="w-full md:w-1/2"/>
        <StaticImage src="../images/2.jpg" alt="beautiful landscape 2" className="w-full md:w-1/2"/>
      </div>
      <div className="w-full md:w-1/2 ml-0 md:ml-6">
        <h2 className="mb-8 text-xl font-bold">
          Producing Vancouver's best music videos since 2021. 
        </h2>
        <p className="mb-4 text-l">
          The possibilities are endless. Strybosch Films has state of the art camera equipment for your next production.
        </p>
        <p className="mb-4 text-l">
          Garrett Hartnell (also known as <Link to="https://open.spotify.com/artist/484bfoveqgHfx2VhNY4zzT?si=lXJETF7UQY24s7BEiqFbgQ&dl_branch=1">lentra </Link> and <Link to="https://open.spotify.com/artist/62AQgmEbWNT2jh8uL4PfRR?si=aoznnyKeTRa1HrV3DCIKHg&dl_branch=1">ceo@business.net</Link>) has self produced music videos since 2016.
          With a degree in Computer Engineering from UBC, he takes care of the technical stuff.
        </p>
        <p className="mb-4 text-l">
            Julien Bruce (also known as <Link to="https://open.spotify.com/artist/2OOLZKc1j4FoOCHOgGbtRl?si=QApnAaO6TXqG7HQD3SRhZg&dl_branch=1">jungle bobby</Link>) has a Bachelor's Degree in Fine Arts from the University of Victoria specializing in theatrics or something.
        </p>

        <Link to="/portfolio">
          <button className="text-white bg-black py-2 px-4 mb-4 font-bold">See for yourself.</button>
        </Link>
      </div>

    </div>


  </Layout>
)

export default AboutPage
