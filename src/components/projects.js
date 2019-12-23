import React from "react"
import projectsStyles from "../css/projects.module.css"

const Projects = () => {
  return (
    <>
      <h3>Projects</h3>
      <div className={projectsStyles.eachProject}>
        <p>
          <span className={projectsStyles.projectTitle}>
            Drunken Wheel - a mobile first gaming application; it is meant to be
            played with a group of people.
          </span>
        </p>
        <p className={projectsStyles.dateStamp}>12.10.2019</p>
      </div>

      <div className={projectsStyles.eachProject}>
        <p>
          <span className={projectsStyles.projectTitle}>
            King Fisher - a real-time multiplayer strategic IO game about buying
            boats, fishing fish, and crushing your opposition
          </span>
        </p>
        <p className={projectsStyles.dateStamp}>12.10.2019</p>
      </div>

      <div className={projectsStyles.eachProject}>
        <p>
          <span className={projectsStyles.projectTitle}>
            ProductReview - iOS & Android app that retrieves reviews for grocery
            items using React Native and USDA Food/Nutrition Database
          </span>
        </p>
        <p className={projectsStyles.dateStamp}>12.10.2019</p>
      </div>

      <div className={projectsStyles.eachProject}>
        <p>
          <span className={projectsStyles.projectTitle}>
            GrannyGrace - Single-page application E-commerce site with the PERN
            stack, Bootstrap, Mocha, and Chai
          </span>
        </p>
        <p className={projectsStyles.dateStamp}>12.10.2019</p>
      </div>
    </>
  )
}

export default Projects
