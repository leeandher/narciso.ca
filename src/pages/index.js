import React from "react"
import { Link } from "gatsby"

import styled from "styled-components"
import tw from "tailwind.macro"

import Layout from "../components/Layout"
import Image from "../components/Image"
import SEO from "../components/SEO"

const Button = styled.button`
  ${tw`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full`};
`
const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <Button>Testing!</Button>
    <link
      href="https://fonts.googleapis.com/css?family=Solway&display=swap"
      rel="stylesheet"
    />
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
