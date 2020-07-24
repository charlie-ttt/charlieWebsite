import React from "react"
// import { useMediaQuery } from "react-responsive"
import skillsStyles from "../css/skills.module.css"

// const Desktop = ({ children }) => {
//   const isDesktop = useMediaQuery({ minWidth: 701 })
//   return isDesktop ? children : null
// }
// const Mobile = ({ children }) => {
//   const isMobile = useMediaQuery({ minWidth: 0, maxWidth: 700 })
//   return isMobile ? children : null
// }

const Skills = () => {
  return (
    <div className={skillsStyles.outerContainer}>
      <h3>Skills</h3>
      <div className={skillsStyles.container}>
        <div className={skillsStyles.eachColumn}>
          <p className={skillsStyles.columnTextContainer}>
            <span className={skillsStyles.columnText}>LANGUAGES</span>
          </p>
          <p className={skillsStyles.oneSkill}>TypeScript</p>
          <p className={skillsStyles.oneSkill}>JavaScript</p>
          <p className={skillsStyles.oneSkill}>Python</p>
          <p className={skillsStyles.oneSkill}>SQL</p>
          <p className={skillsStyles.oneSkill}>HTML</p>
          <p className={skillsStyles.oneSkill}>CSS</p>
        </div>
        <div className={skillsStyles.eachColumn}>
          <p className={skillsStyles.columnTextContainer}>
            <span className={skillsStyles.columnText}>FRAMEWORKS</span>
          </p>
          <p className={skillsStyles.oneSkill}>React</p>
          <p className={skillsStyles.oneSkill}>Redux</p>
          <p className={skillsStyles.oneSkill}>Node.js</p>
          <p className={skillsStyles.oneSkill}>Express.js</p>
          <p className={skillsStyles.oneSkill}>Next JS</p>
          <p className={skillsStyles.oneSkill}>Gatsby JS</p>
          <p className={skillsStyles.oneSkill}>Sequelize</p>
          <p className={skillsStyles.oneSkill}>React Native</p>
        </div>
        <div className={skillsStyles.eachColumn}>
          <p className={skillsStyles.columnTextContainer}>
            <span className={skillsStyles.columnText}>TOOLS</span>
          </p>
          <p className={skillsStyles.oneSkill}>Git & Github</p>
          <p className={skillsStyles.oneSkill}>Docker</p>
          <p className={skillsStyles.oneSkill}>Material UI</p>
          <p className={skillsStyles.oneSkill}>Semantic UI</p>
          <p className={skillsStyles.oneSkill}>NativeBase</p>
        </div>
        <div className={skillsStyles.eachColumn}>
          <p className={skillsStyles.columnTextContainer}>
            <span className={skillsStyles.columnText}>Collaboration</span>
          </p>
          <p className={skillsStyles.oneSkill}>Jira</p>
          <p className={skillsStyles.oneSkill}>Kanban (Agile)</p>
          <p className={skillsStyles.oneSkill}>Agile</p>
          <p className={skillsStyles.oneSkill}>Product Marketing</p>
        </div>
      </div>
    </div>
  )
}

export default Skills
