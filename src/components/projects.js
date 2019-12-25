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
          King Fisher - a real-time multiplayer strategic IO game about buying
          boats, fishing fish, and crushing your opposition
        </p>
        <div className={projectsStyles.categoryTagContainer}>
          <p className={projectsStyles.dateStamp}>11.2019</p>
          <a
            href="http://kingfishergame.herokuapp.com/"
            className={projectsStyles.tryButton}
            target="_blank"
          >
            Try
          </a>
          <a
            href="https://www.youtube.com/watch?v=NzziqQpTM9k&feature=youtu.be"
            className={projectsStyles.tryButton}
            target="_blank"
          >
            YouTube
          </a>
          <a
            href="https://github.com/kingfisherio/Fishsims"
            className={projectsStyles.tryButton}
            target="_blank"
          >
            GitHub
          </a>
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
          <p className={projectsStyles.dateStamp}>10.2019</p>
          <a
            href="https://youtu.be/arxMcmqJ2R0"
            className={projectsStyles.tryButton}
            target="_blank"
          >
            YouTube
          </a>
          <a
            href="https://github.com/charlie-ttt/ProductReview"
            className={projectsStyles.tryButton}
            target="_blank"
          >
            GitHub
          </a>
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
          <p className={projectsStyles.dateStamp}>10.2019</p>
          <a
            href="https://granny-grace.herokuapp.com/"
            className={projectsStyles.tryButton}
            target="_blank"
          >
            Try
          </a>
          <a
            href="https://github.com/GrannyGrace/GrannyGrace"
            className={projectsStyles.tryButton}
            target="_blank"
          >
            GitHub
          </a>
          {GrannyGraceTags.map(tag => (
            <p className={projectsStyles.categoryTag}>{tag}</p>
          ))}
        </div>
      </div>

      <div className={projectsStyles.eachProject}>
        <p className={projectsStyles.projectTitle}>
          Drunken Wheel - a mobile first gaming application; it is meant to be
          played with a group of people.
        </p>
        {/* <div className={projectsStyles.categoryTagContainer}>
          <a href="#" className={projectsStyles.tryButton}>
            Try
          </a>
        </div> */}
        <div className={projectsStyles.categoryTagContainer}>
          <p className={projectsStyles.dateStamp}>12.2019</p>
          <a
            href="https://drunkenwheel.herokuapp.com/"
            className={projectsStyles.tryButton}
            target="_blank"
          >
            Try
          </a>
          <a
            href="https://github.com/Ice-cream-cone/drinkinggame"
            className={projectsStyles.tryButton}
            target="_blank"
          >
            GitHub
          </a>
          {DrunkenWheelTags.map(tag => (
            <p className={projectsStyles.categoryTag}>{tag}</p>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Projects
