import React, { useState } from "react"
import { Link } from "gatsby"
import { graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Projects from "../components/projects"
import Skills from "../components/skills"
import Education from "../components/education"

import indexStyles from "../css/index.module.css"

const IndexPage = props => {
  const [showAll, setShowAll] = useState(false)
  return (
    <Layout>
      {console.log("props.data", props.data)}
      <SEO title="Charlie Thanaphansin" />

      {/* ----------------- Starting Main Area Section ---------------------- */}
      <div className={indexStyles.mainArea}>
        <div className={indexStyles.profilePicContainer}>
          <div className={indexStyles.circle}>
            <Img
              fluid={props.data.profilePic.childImageSharp.fluid}
              style={{
                borderRadius: `50%`,
                width: `130px`,
                height: `130px`,
              }}
            />
          </div>
        </div>

        <div className={indexStyles.mainText}>
          <h1 className={{ fontWeight: "bold", fontSize: "40px" }}>Hi.</h1>
        </div>
        <p className={indexStyles.bioText}>
          I'm Charlie - I'm a full stack software engineer and I love building
          browser and mobile applications for fun. Currently based in Chicago,
          IL. Feel free to checkout my projects on Github below.
        </p>
        <p>Contact me via ✉️cthanap@gmail.com</p>
        <div className={indexStyles.iconContainerStyle}>
          <a href="https://github.com/charlie-ttt" target="_blank">
            <img src={`../github.png`} className={indexStyles.iconStyle} />
          </a>
          <a href="https://www.linkedin.com/in/cthanaphansin/" target="_blank">
            <img src={`../linkedin.png`} className={indexStyles.iconStyle} />
          </a>
        </div>
      </div>
      {/* ----------------------- Ending Main Area Section ------------------ */}
      <div className={indexStyles.showAllButtonContainer}>
        <button
          type="button"
          onClick={() => setShowAll(!showAll)}
          className={indexStyles.showAllButton}
        >
          See All
        </button>
      </div>
      {showAll ? (
        <>
          <div className={indexStyles.sectionDivide}>
            <Projects />
          </div>
          <div className={indexStyles.sectionDivide}>
            <Skills />
          </div>

          <div className={indexStyles.sectionDivide}>
            <Education />
          </div>
        </>
      ) : null}
    </Layout>
  )
}

const classNames = {
  // mainArea: {
  //   paddingTop: "30px",
  //   paddingBottom: "90px",
  //   marginBottom: "40px",
  //   display: "flex",
  //   flexDirection: "column",
  // },
  // mainText: {
  //   paddingTop: "5px",
  //   paddingBottom: "20px",
  // },
  // sectionDivide: {
  //   borderTop: `1px solid #dbd8d8`,
  //   paddingTop: `0.6rem`,
  // },
  // circle: {
  //   border: `1px solid #dbd8d8`,
  //   height: `170px`,
  //   borderRadius: `50%`,
  //   width: `170px`,
  //   display: `flex`,
  //   justifyContent: `center`,
  //   alignItems: `center`,
  // },
  // profilePicContainer: {
  //   width: `170px`,
  //   height: `130px`,
  //   marginBottom: `3rem`,
  //   alignSelf: `center`,
  // },
  // iconContainerStyle: {
  //   display: "flex",
  //   marginTop: "10px",
  //   justifyContent: "center",
  //   paddingTop: `2rem`,
  // },
  // iconStyle: {
  //   height: "23px",
  //   width: "23px",
  //   margin: "10px 10px 10px 10px",
  // },
  // bioText: {
  //   fontSize: "1.1em",
  // },
  // showAllButtonContainer: {
  //   display: "flex",
  //   justifyContent: "center",
  //   paddingBottom: "3em",
  // },
  // showAllButton: {
  //   backgroundColor: "transparent",
  //   padding: "3px 15px",
  // },
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
