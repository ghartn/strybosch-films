import React from "react"
import { Link } from "react-router-dom"
import Layout from "../components/layout"

const PortfolioPage = () => (
  <Layout>
    <h1 className="font-bold text-xxl mb-6">Why read when you can watch?</h1>
    <p className="mb-6">Want us to make a video for you? Send us a message.
    </p>
    <Link to="/contact">
      <button className="text-white bg-black py-2 px-4 mb-4 font-bold">Click here to contact us.</button>
    </Link>
    <div className="flex flex-col md:flex-row h-72">
      <div className="flex w-full md:w-1/2 p-2">
        <iframe title="jungle bobby - swear" src="https://www.youtube.com/embed/kLMPUPWJYZs" className="w-full h-full"frameBorder="0" allowFullScreen></iframe>
      </div>
      <div className="flex w-full md:w-1/2 p-2">
        <iframe title="ceo@business.net - 2 ass 2 cheeks" src="https://www.youtube.com/embed/1DbxX4KYI04" className="w-full h-full" frameBorder="0" allowFullScreen></iframe>
      </div>
    </div>
    <div className="flex flex-col md:flex-row h-72">
      <div className="flex w-full md:w-1/2 p-2">
        <iframe title="lentra - upside down" src="https://www.youtube.com/embed/j0ZngSAv0Ng" className="w-full h-full" frameBorder="0" allowFullScreen></iframe>
      </div>
      <div className="flex w-full md:w-1/2 p-2">
        <iframe title="ceo@business.net - mexico" src="https://www.youtube.com/embed/qvkkIqkErbU" className="w-full h-full" frameBorder="0" allowFullScreen></iframe>
      </div>
    </div>

  </Layout>
)

export default PortfolioPage
