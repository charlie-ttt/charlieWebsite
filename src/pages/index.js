import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Charlie Thanaphansin" />
    <div style={styles.mainArea}>
      <div style={styles.mainText}>
        <h1 style={{ fontWeight: "bold", fontSize: "40px" }}>Hi.</h1>
      </div>
      <p>
        I'm Lupin - currently teaching "Defense against the Dark Arts" at
        Hogwarts, Great Britain. I recently published a book called Those nasty
        Dementors. It teaches everything you need to know about defending
        against Dementors.
      </p>
      <p>Now go build something great.</p>
    </div>
    {/* <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div> */}

    <div style={styles.sectionDivide}>
      <h3>Projects</h3>
    </div>
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
  },
  mainText: {
    paddingTop: "20px",
    paddingBottom: "20px",
  },
  sectionDivide: {
    borderBottom: `1px solid #dbd8d8`,
    paddingBottom: `0.6rem`,
  },
}

export default IndexPage
