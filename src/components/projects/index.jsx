import React from 'react';
import { fonts, styles } from './styles.js'
import rootStyles from '../../pages/home/styles.module.scss'

export default function Projects({ projects }) {

  const projectType = {
    ...fonts.neutralFace('#859591', '20'),
    ...fonts.textAlign('left'),
    marginBottom: '5px'
  }

  const title = {
    ...fonts.Mazius(36),
    marginBottom: '10px'
  }

  const description = {
    ...fonts.Avenir(20),
    marginBottom: 30
  }

  const cardContainer = {
    ...styles.dimesion(1110, 335),
    ...styles.displayFlex('space-between'),
    marginBottom: '15vh'
  }

  const projectDescription = {
    ...styles.displayFlex('space-between', '', 'column'),
    ...styles.dimesion('33vw'),
  }

  const technologies = {
    ...styles.dimesion('', '30px'),
    ...styles.displayFlex('', 'center')
  }

  return (
    <>
      {projects.map((project, index) => {
        index += 1
        const isLastElement = index === projects.length
        if (index % 2 === 0) {
          return (
            <div style={{...cardContainer, marginBottom: isLastElement ? '0' : cardContainer.marginBottom}} key={index}>

              <div style={projectDescription}>
                <p style={projectType}>{project.type}</p>
                <h2 style={title}>{project.title}</h2>
                <p style={description}>{project.description}</p>
                <div style={styles.displayFlex('space-between', 'center', 'row')}>
                  <div style={technologies}>
                    {project.technologies.map((icon, i) => {
                      return (
                        <img style={styles.icon('30px')} key={i} src={icon.img} alt={icon.alt} />
                      )
                    })}
                  </div>
                  <a 
                    className={`${rootStyles.button} font-family: Neutral !important`} 
                    href={project.link}
                    target='blank'
                  >Check over</a>
                </div>
              </div>

              <img style={styles.dimesion(635, 332)} src={project.img} alt={project.imgAlt} />
            </div>
          )
        } else {
          return (
            <div style={{...cardContainer, marginBottom: isLastElement ? '0' : cardContainer.marginBottom}} key={index}>
              <img style={styles.dimesion(635, 332)} src={project.img} alt={project.imgAlt} />
              <div style={projectDescription}>
                <p style={projectType}>{project.type}</p>
                <h2 style={title}>{project.title}</h2>
                <p style={description}>{project.description}</p>
                <div style={styles.displayFlex('space-between', 'center', 'row')}>
                  <div style={styles.dimesion('', '30px')}>
                    {project.technologies.map((icon, i) => {
                      return (
                        <img style={styles.icon('30px')} key={i} src={icon.img} alt={icon.alt} />
                      )
                    })}
                  </div>
                  <a 
                    className={`${rootStyles.button} font-family: Neutral !important`} 
                    href={project.link}
                    target='blank'
                  >Check over</a>
                </div>
              </div>
            </div>
          )
        }
      })}
    </>
  )
}
