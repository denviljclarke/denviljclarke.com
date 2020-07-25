import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SVG from "../images/undraw_web_developer_p3e5.svg"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1 className="title-font font-medium text-5xl text-gray-900">
      Hello, I'm
      <br />
      Denvil J. Clarke
    </h1>
    <h2 className="text-gray-900 text-3xl font-medium title-font">
      I build digital products
    </h2>
    <div>
      <img src={SVG} alt="" />
    </div>
    {/* <Link to="/page-2/">Go to page 2</Link> <br />
    <Link to="/using-typescript/">Go to "Using TypeScript"</Link> */}
  </Layout>
)

export default IndexPage
