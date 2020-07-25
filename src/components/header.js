import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import useSiteMetadata from "../hooks/useSiteMetadata"


const Header = () => {
  const { title } = useSiteMetadata()
  return (
    <header className="text-gray-700 body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a
          href="/"
          className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
        >
          <span className="ml-3 text-2xl">{title}</span>
        </a>
      </div>
    </header>
  )
}
Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
