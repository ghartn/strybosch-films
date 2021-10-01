import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const ContactPage = () => (
  <Layout>
    <SEO title="Contact" />
    <h1 className="font-bold text-xxl mb-3">Contact Us.</h1>
    <p className="mb-6">
      Strybosch Films is located in the Vancouver area.
    </p>
    <form method="post" action="https://getform.io/f/b8200889-a3a1-47d8-a831-6d905c5e8f26">
      <label className="font-bold">
        Name *
        <input type="text" name="name" className="block border border-black mb-4 p-1 md:w-1/4 w-full" tabIndex="1" required/>
      </label>
      <label className="font-bold">
        Email *
        <input type="email" name="email" className="block border border-black mb-4 p-1 md:w-1/3 w-full" tabIndex="2" required/>
      </label>
      <label className="font-bold">
        Message *
        <textarea type="text" name="message" className="block border border-black mb-6 p-1 md:w-1/2 w-full" tabIndex="3" required/>
      </label>
      <button className="text-white bg-black py-2 px-4 mb-4 font-bold" type="submit">Submit</button>
    </form>
  </Layout>
)

export default ContactPage
