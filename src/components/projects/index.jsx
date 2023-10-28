import React, { useEffect } from 'react';
import { fonts, styles } from './styles.js'

export default function Projects({ projects }) {

  const projectType = {
    ...fonts.neutralFace('#859591', '20'),
    ...fonts.textAlign('center')
  }

  const title = {
    ...fonts.Mazius(36)
  }

  const description = {
    ...fonts.Avenir(20)
  }

  const cardContainer = {
    ...styles.dimesion(1110, 335),
    ...styles.displayFlex(),
    backgroundColor: 'red',

  }

  const projectDescription = {
    ...styles.displayFlex('','','column'),
  }

  return (
    <>
      {projects.map((project, index) => {
        index += 1
        if (index % 2 === 0) {
          return (
            <div style={styles.dimesion(1110, 335)} key={index}>
              <p style={projectType}>{project.type}</p>
              <h2 style={title}>{project.title}</h2>
              <p style={description}>{project.description}</p>

              <div>
                {project.technologies.map((icon, i) => {
                  <img key={i} src={icon.img} alt={icon.alt} />
                })}
                <a href={project.link}>Check over</a>
              </div>
              <img style={styles.dimesion(635, 332)} src={project.img} alt={project.imgAlt} />
            </div>
          )
        } else {
          return (
            <div style={cardContainer} key={index}>
              <img style={styles.dimesion(635, 332)} src={project.img} alt={project.imgAlt} />

              <div style={projectDescription}>
                <p style={projectType}>{project.type}</p>
                <h2 style={title}>{project.title}</h2>
                <p style={description}>{project.description}</p>
                <div style={styles.displayFlex('center', 'center', 'row')}>
                  {project.technologies.map((icon, i) => {
                    return (<img key={i} src={icon.img} alt={icon.alt} />)
                  })
                  }
                  <a href={project.link}>Check over</a>
                </div>
              </div>
            </div>
          )
        }
      })}
    </>
  )
}
