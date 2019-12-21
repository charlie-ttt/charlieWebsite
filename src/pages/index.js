import React from "react"
import { Link } from "gatsby"
import { graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Projects from "../components/projects"

const IndexPage = props => (
  <Layout>
    {console.log("props.data", props.data)}
    <SEO title="Charlie Thanaphansin" />
    <div style={styles.mainArea}>
      <div
        style={{
          width: `130px`,
          height: `130px`,
          marginBottom: `1.45rem`,
          alignSelf: `center`,
        }}
      >
        <div style={styles.circle}>
          <Img
            fluid={props.data.profilePic.childImageSharp.fluid}
            style={{ borderRadius: `50%`, width: `130px`, height: `130px` }}
          />
        </div>
      </div>

      <div style={styles.mainText}>
        <h1 style={{ fontWeight: "bold", fontSize: "40px" }}>Hi.</h1>
      </div>

      <p>
        I'm Lupin - currently teaching "Defense against the Dark Arts" at
        Hogwarts, Great Britain. I recently published a book called Those nasty
        Dementors. It teaches everything you need to know about defending
        against Dementors.
      </p>
    </div>

    {/* ------------------------- Project Section ------------------------ */}
    <div style={styles.sectionDivide}>
      <Projects />
    </div>
    {/* ------------------------ Project Section ------------------------ */}

    <div style={styles.sectionDivide}>
      <h3>Work Experiences</h3>
    </div>

    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

const styles = {
  mainArea: {
    paddingTop: "20px",
    paddingBottom: "20px",
    marginBottom: "40px",
    display: "flex",
    flexDirection: "column",
  },
  mainText: {
    paddingTop: "20px",
    paddingBottom: "20px",
  },
  sectionDivide: {
    borderTop: `1px solid #dbd8d8`,
    paddingTop: `0.6rem`,
  },
  circle: {
    border: `1px solid #dbd8d8`,
    height: `170px`,
    borderRadius: `50%`,
    width: `170px`,
    display: `flex`,
    justifyContent: `center`,
    alignItems: `center`,
  },
}

export const query = graphql`
  query {
    profilePic: file(relativePath: { eq: "ProfileCharlieColor.png" }) {
      childImageSharp {
        fluid(maxWidth: 300) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default IndexPage
