import React from "react"
import { useMediaQuery } from "react-responsive"

const Desktop = ({ children }) => {
  const isDesktop = useMediaQuery({ minWidth: 701 })
  return isDesktop ? children : null
}
const Mobile = ({ children }) => {
  const isMobile = useMediaQuery({ minWidth: 0, maxWidth: 700 })
  return isMobile ? children : null
}

const Skills = () => {
  return (
    <>
      <h3>Skills</h3>
      <div style={styles.container}>
        <div style={styles.eachColumn}>
          <p style={styles.columnTextContainer}>
            <span style={styles.columnText}>LANGUAGES</span>
          </p>
          <p style={styles.oneSkill}>JavaScript (ES6)</p>
          <p style={styles.oneSkill}>HTML</p>
          <p style={styles.oneSkill}>CSS</p>
          <p style={styles.oneSkill}>SQL</p>
        </div>
        <div style={styles.eachColumn}>
          <p style={styles.columnTextContainer}>
            <span style={styles.columnText}>FRAMEWORKS</span>
          </p>
          <p style={styles.oneSkill}>React</p>
          <p style={styles.oneSkill}>Redux</p>
          <p style={styles.oneSkill}>Node.js</p>
          <p style={styles.oneSkill}>Express.js</p>
          <p style={styles.oneSkill}>Socket.IO</p>
          <p style={styles.oneSkill}>Sequelize</p>
          <p style={styles.oneSkill}>PostgreSQL</p>
          <p style={styles.oneSkill}>React Native</p>
          <p style={styles.oneSkill}>Gatsby JS</p>
          <p style={styles.oneSkill}>PixiJS</p>
        </div>
        <div style={styles.eachColumn}>
          <p style={styles.columnTextContainer}>
            <span style={styles.columnText}>TOOLS</span>
          </p>
          <p style={styles.oneSkill}>Git & Github</p>
          <p style={styles.oneSkill}>Postman</p>
          <p style={styles.oneSkill}>Bootstrap</p>
          <p style={styles.oneSkill}>React-Bootstrap</p>
          <p style={styles.oneSkill}>Semantic UI</p>
          <p style={styles.oneSkill}>NativeBase</p>
        </div>
        <div style={styles.eachColumn}>
          <p style={styles.columnTextContainer}>
            <span style={styles.columnText}>Collaboration</span>
          </p>
          <p style={styles.oneSkill}>Kanban board (Agile)</p>
          <p style={styles.oneSkill}>Agile</p>
          <p style={styles.oneSkill}>Product Management Process</p>
          <p style={styles.oneSkill}>Product Marketing</p>
        </div>
      </div>
    </>
  )
}

const styles = {
  container: {
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "row",
    justifyContent: "space-around",
  },
  eachColumn: {
    color: `#2d3748`,
    marginTop: `1rem`,
    marginBottom: `1rem`,
    width: "140px",
    marginRight: "20px",
  },
  eachColumnPhone: {
    color: `#2d3748`,
    marginTop: `1rem`,
    marginBottom: `1rem`,
    width: "100%",
    marginRight: "20px",
  },
  columnTextContainer: {
    marginBottom: "0.3em",
  },
  columnText: {
    fontWeight: "bold",
  },
  oneSkill: {
    color: `#5F6C80`,
    fontSize: "0.9em",
  },
}

export default Skills
