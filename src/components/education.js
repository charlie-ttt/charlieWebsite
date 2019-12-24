import React from "react"
import educationStyles from "../css/education.module.css"

const Education = () => {
  return (
    <div className={educationStyles.outerContainer}>
      <h3>Education</h3>
      <div className={educationStyles.eachEducation}>
        <div className={educationStyles.firstLine}>
          <div className={educationStyles.schoolNameContainer}>
            <p className={educationStyles.educationTitle}>
              Northwestern University
            </p>
          </div>
          <div className={educationStyles.locationContainer}>
            <p className={educationStyles.locationText}>Evanston, IL</p>
          </div>
        </div>
        <div className={educationStyles.secondLine}>
          <p>
            Bachelor of Arts in Economics, Minor in Business Institutions, and
            Farley Center Certificate in Entrepreneurship
          </p>
        </div>
      </div>

      <div className={educationStyles.eachEducation}>
        <div className={educationStyles.firstLine}>
          <div className={educationStyles.schoolNameContainer}>
            <p className={educationStyles.educationTitle}>Fullstack Academy</p>
          </div>
          <div className={educationStyles.locationContainer}>
            <p className={educationStyles.locationText}>Chicago, IL</p>
          </div>
        </div>
        <div className={educationStyles.secondLine}>
          <p>
            Front and Back End Software Development. Computer science theory,
            algorithms, and practical usage of industry standard tools and
            libraries
          </p>
        </div>
      </div>
    </div>
  )
}

export default Education
