import React from "react"

const Projects = () => {
  return (
    <>
      <h3>Projects</h3>
      <div style={styles.eachProject}>
        <p>
          <span style={styles.projectTitle}>
            Drunken Wheel - a mobile first gaming application; it is meant to be
            played with a group of people.
          </span>
        </p>
        <p style={styles.dateStamp}>12.10.2019</p>
      </div>

      <div style={styles.eachProject}>
        <p>
          <span style={styles.projectTitle}>
            King Fisher - a real-time multiplayer strategic IO game about buying
            boats, fishing fish, and crushing your opposition
          </span>
        </p>
        <p style={styles.dateStamp}>12.10.2019</p>
      </div>

      <div style={styles.eachProject}>
        <p>
          <span style={styles.projectTitle}>
            ProductReview - iOS & Android app that retrieves reviews for grocery
            items using React Native and USDA Food/Nutrition Database
          </span>
        </p>
        <p style={styles.dateStamp}>12.10.2019</p>
      </div>

      <div style={styles.eachProject}>
        <p>
          <span style={styles.projectTitle}>
            GrannyGrace - Single-page application E-commerce site with the PERN
            stack, Bootstrap, Mocha, and Chai
          </span>
        </p>
        <p style={styles.dateStamp}>12.10.2019</p>
      </div>
    </>
  )
}

const styles = {
  eachProject: {
    color: `#2d3748`,
    marginTop: `1rem`,
    marginBottom: `1rem`,
  },
  projectTitle: {
    fontWeight: "bold",
  },
  dateStamp: {
    color: `#5F6C80`,
    fontSize: "0.8em",
    paddingTop: `0.2rem`,
    paddingBottom: `0.4rem`,
  },
}

export default Projects
