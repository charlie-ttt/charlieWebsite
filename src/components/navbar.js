import { Link } from "gatsby"
import React from "react"

const Navbar = () => (
  <div style={styles.container}>
    {/* <div>
      <h1 style={{ marginRight: "20px" }}>
        <Link to="/" style={styles.eachSection}>
          About
        </Link>
      </h1>
    </div>
    <div>
      <h1 style={{ marginRight: "20px" }}>
        <Link to="/" style={styles.eachSection}>
          Projects
        </Link>
      </h1>
    </div>
    <div>
      <h1 style={{ margin: 0 }}>
        <Link to="/" style={styles.eachSection}>
          Contact
        </Link>
      </h1>
    </div> */}
  </div>
)

const styles = {
  container: {
    margin: `0 auto`,
    maxWidth: 960,
    padding: `0 1.0875rem 1.5rem 1.0875rem`,
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    borderBottom: `1px solid #dbd8d8`,
    // position: 'fixed'
    // width: `80%`,
  },
  eachSection: {
    color: `#5F6C80`,
    textDecoration: `none`,
    fontSize: "15px",
    color: "#5F6C80",
  },
}

export default Navbar
