import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Link from "gatsby-link"

import  img3 from "../images/3.jpg";
import  img4 from "../images/4.jpg";

const AboutPage = () => (
  <Layout>
    <SEO title="About" />
    <h1 className="font-bold text-3xl mb-6">About us.</h1>
    <div className="flex flex-col md:flex-row">
      <div className="w-full md:w-1/2 ml-0 md:ml-6">
        <h2 className="mb-6 text-xl font-bold">
          Strybosch Films.
        </h2>
        <p className="mb-8 text-l">
            We seek to find and achieve our meaning through film. <br/>
            We seek the clues. <br/>
            We strive to see the bigger picture. <br/>
            We take pride in seeing the tiny pieces of the puzzle. <br/>
        </p>
        <p className="mb-8 text-l mb-2">
          <h3 className="text-l font-bold mb-2">There are two parts to our puzzle.</h3>
          <a href="https://open.spotify.com/artist/2OOLZKc1j4FoOCHOgGbtRl?si=QApnAaO6TXqG7HQD3SRhZg&dl_branch=1" target="_blank" rel="noreferrer">One</a> is educated in world of film. <br />
          <a href="https://open.spotify.com/artist/484bfoveqgHfx2VhNY4zzT?si=lXJETF7UQY24s7BEiqFbgQ&dl_branch=1" target="_blank" rel="noreferrer">The other </a> is educated in the world of technology. <br />
          Together, the puzzle is solved.
          But the puzzle is never complete. 
          We are all learning, we can never stop learning, we will never stop improving. We will never stop. 
          We are story tellers. 
        </p>
        <p className="mb-8 text-l mb-2">  
          At <Link to="/portfolio" className="text-black hover:text-black">Strybosch Films</Link> we seek to tell the most memorable stories, and make memories in the process. <br />
          Let's make memories... together.
        </p>
        <Link to="/portfolio">
          <button className="text-white bg-black py-2 px-4 mb-4 font-bold">See for yourself.</button>
        </Link>
      </div>  

    </div>


  </Layout>
)

export default AboutPage
