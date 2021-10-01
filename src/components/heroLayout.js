/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

 import React from "react"
 import PropTypes from "prop-types"
 
 import "./layout.css"
 
 const HeroLayout = ({ children }) => {
 
   return (
     <div className="flex flex-col h-screen justify-between font-serif bg-black">
       <main className="mb-auto bg-black">{children}</main>
       <footer className="m-2 text-center">
         © {new Date().getFullYear()} Strybosch Films.
       </footer>
     </div>
   )
 }
 
 HeroLayout.propTypes = {
   children: PropTypes.node.isRequired,
 }
 
 export default HeroLayout
 