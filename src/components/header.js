import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import PropTypes from "prop-types"
import React, { useState } from "react"

function Header({ siteTitle }) {
  const [isExpanded, toggleExpansion] = useState(false)

  return (
    <nav className="flex flex-wrap items-center justify-between p-6 border-b-2 border-gray-200 text-black mb-10">
      <div className="flex items-center flex-shrink-0 mr-8 text-black">
        <Link to="/">
          <StaticImage alt="Strybosch Films" src="../images/logo.png" className="block w-40" loading="eager" placeholder="tracedSVG" />
        </Link>
      </div>
      <div className="block lg:hidden">
        <button
          onClick={() => toggleExpansion(!isExpanded)}
          className="flex items-center px-3 py-2 text-black border border-black rounded hover:text-black hover:border-black"
        >
          <svg
            className="w-3 h-3 fill-current"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
      <div
        className={`${isExpanded ? `block` : `hidden`
          } w-full block flex-grow lg:flex lg:items-center lg:w-auto`}
      >
        <div className="lg:flex-grow">
          <Link
            activeClassName="active-menu-link"
            to={`/about`}
            className="block mt-4 mr-6 text-black lg:inline-block lg:mt-0 hover:text-black"
          >
            About
          </Link>
          <Link
            activeClassName="active-menu-link"
            to={`/portfolio`}
            className="block mt-4 mr-6 text-black lg:inline-block lg:mt-0 hover:text-black"
          >
            Portfolio
          </Link>
          <Link
            activeClassName="active-menu-link"
            to={`/contact`}
            className="block mt-4 mr-6 text-black lg:inline-block lg:mt-0 hover:text-black"
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
