import React from "react"
import projectsStyles from "../css/projects.module.css"

const Projects = () => {
  const DrunkenWheelTags = ["React", "JavaScript", "HTML", "CSS", "Semantic UI"]
  const KingFisherTags = [
    "Socket.IO",
    "Redux",
    "React",
    "PostgreSQL",
    "PixiJS",
    "Semantic UI",
  ]
  const ProductReviewsTags = [
    "ReactNative",
    "Redux",
    "APIs - USDA, Amazon",
    "React",
    "PostgreSQL",
    "NativeBase",
  ]
  const GrannyGraceTags = [
    "React",
    "Redux",
    "ExpressJS",
    "NodeJS",
    "PostgreSQL",
    "Bootstrap",
  ]
  return (
    <div className={projectsStyles.outerContainer}>
      <h3>Projects</h3>
      <div className={projectsStyles.eachProject}>
        <p className={projectsStyles.projectTitle}>
          Drunken Wheel - a mobile first gaming application; it is meant to be
          played with a group of people.
        </p>
        <div className={projectsStyles.categoryTagContainer}>
          <p className={projectsStyles.dateStamp}>12.10.2019</p>
          {DrunkenWheelTags.map(tag => (
            <p className={projectsStyles.categoryTag}>{tag}</p>
          ))}
        </div>
      </div>

      <div className={projectsStyles.eachProject}>
        <p className={projectsStyles.projectTitle}>
          King Fisher - a real-time multiplayer strategic IO game about buying
          boats, fishing fish, and crushing your opposition
        </p>
        <div className={projectsStyles.categoryTagContainer}>
          <p className={projectsStyles.dateStamp}>12.10.2019</p>
          {KingFisherTags.map(tag => (
            <p className={projectsStyles.categoryTag}>{tag}</p>
          ))}
        </div>
      </div>

      <div className={projectsStyles.eachProject}>
        <p className={projectsStyles.projectTitle}>
          ProductReview - iOS & Android app that retrieves reviews for grocery
          items using React Native and USDA Food/Nutrition Database
        </p>
        <div className={projectsStyles.categoryTagContainer}>
          <p className={projectsStyles.dateStamp}>12.10.2019</p>
          {ProductReviewsTags.map(tag => (
            <p className={projectsStyles.categoryTag}>{tag}</p>
          ))}
        </div>
      </div>

      <div className={projectsStyles.eachProject}>
        <p className={projectsStyles.projectTitle}>
          GrannyGrace - Single-page application E-commerce site with the PERN
          stack, Bootstrap, Mocha, and Chai
        </p>
        <div className={projectsStyles.categoryTagContainer}>
          <p className={projectsStyles.dateStamp}>12.10.2019</p>
          {GrannyGraceTags.map(tag => (
            <p className={projectsStyles.categoryTag}>{tag}</p>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Projects
