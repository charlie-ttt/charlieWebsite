import React from "react"
import { Link } from "gatsby"
import { graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Projects from "../components/projects"
import Skills from "../components/skills"
import Education from "../components/education"

const IndexPage = props => {
  return (
    <Layout>
      {console.log("props.data", props.data)}
      <SEO title="Charlie Thanaphansin" />

      {/* ----------------- Starting Main Area Section ---------------------- */}
      <div style={styles.mainArea}>
        <div style={styles.profilePicContainer}>
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
        <p style={styles.bioText}>
          I'm Charlie - I'm a full stack software engineer and I love to build
          browser and native phone applications for fun. Currently based in
          Chicago, IL. Feel free to checkout my projects on Github below or
          contact me via ✉️cthanap@gmail.com
        </p>
        <div style={styles.iconContainerStyle}>
          <a href="https://github.com/charlie-ttt">
            <img src={`../github.png`} style={styles.iconStyle} />
          </a>
          <a href="https://www.linkedin.com/in/cthanaphansin/">
            <img src={`../linkedin.png`} style={styles.iconStyle} />
          </a>
        </div>
      </div>
      {/* ----------------------- Ending Main Area Section ------------------ */}

      <div style={styles.sectionDivide}>
        <Projects />
      </div>
      <div style={styles.sectionDivide}>
        <Skills />
      </div>

      <div style={styles.sectionDivide}>
        <Education />
      </div>

      {/* <Link to="/page-2/">Go to page 2</Link> */}
    </Layout>
  )
}

const styles = {
  mainArea: {
    paddingTop: "30px",
    paddingBottom: "120px",
    marginBottom: "40px",
    display: "flex",
    flexDirection: "column",
  },
  mainText: {
    paddingTop: "5px",
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
  profilePicContainer: {
    width: `170px`,
    height: `130px`,
    marginBottom: `3rem`,
    alignSelf: `center`,
  },
  iconContainerStyle: {
    display: "flex",
    marginTop: "10px",
    justifyContent: "center",
    paddingTop: `2rem`,
  },
  iconStyle: {
    height: "23px",
    width: "23px",
    margin: "10px 10px 10px 10px",
  },
  bioText: {
    fontSize: "1.1em",
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
