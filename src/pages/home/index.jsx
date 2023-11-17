import React from 'react';
import styles from './styles.module.scss'
import linkedin from '../../assets/icons/linkedin.svg'
import github from '../../assets/icons/github.svg'
import { projects } from '../../assets/static/projects'
import Projects from '../../components/projects';
import { useTranslation } from 'react-i18next'

export default function Home() {

  const { t } = useTranslation('global')

  function smoothScroll(sectionId) {
    document.querySelector(sectionId).scrollIntoView({behavior: 'smooth'})
  }

  return (
    <div className={styles.app}>
      <div className={styles.header}>
        <p className={styles.name}>Rafael Mello</p>
        <nav className={styles.navigation}>
          <button 
            onClick={() => smoothScroll('#about')}
          >{t("header.about")}</button>
          <button 
            onClick={() => smoothScroll('#projects')}
          >{t("header.projects")}</button>
          <button 
            onClick={() => smoothScroll('#sendEmail')} 
            className={styles.buttonHeader}
          >{t("header.contact")}</button>
        </nav>
      </div>

      <div className={styles.hero}>

        <div className={styles.heroText}>
          <h1>{t("hero.h1")}</h1>
          <p>{t("hero.selfDescription")}</p>
          <p>{t("hero.welcome")}</p>
        </div>

        <div className={`${styles.heroFooter} ${styles.flex}`}>
          <div className={styles.flex}>
            <a target='blank' href="https://www.linkedin.com/in/rafael-mello-desenvolvedor/">
              <img src={linkedin} alt="Icone do linkedin" />
            </a>
            <a target='blank' href="https://github.com/Siqm">
              <img src={github} alt="Icone do github" />
            </a>
          </div>

          <div className={styles.flex}>
            <button 
              onClick={() => smoothScroll('#projects')} 
              className={`${styles.button} ${styles.buttonInverted}`}
            >{t("hero.projects")}</button>
            <button 
              onClick={() => smoothScroll('#sendEmail')} 
              className={styles.button}
            >{t("hero.contact")}</button>
          </div>
        </div>


      </div>

      <div id='about' className={`${styles.flex} ${styles.about}`}>
        <h2>{t("about.title")}</h2>
        <div>
          <p>{t("about.text")}</p>
          {/* <p>Ab galisum magni non aperiam iusto et pariatur aliquam aut velit nobis et autem error. Qui veniam minima est dicta nisi sit earum numquam aut repellat unde. Non nisi adipisci est distinctio voluptatem qui beatae quis ad enim facere cum quaerat officia aut suscipit possimus?</p>
          <p>Qui vero dolorem qui veniam illum eos omnis molestiae 33 deleniti omnis! Aut illum accusantium qui nemo praesentium vel quidem illum aut necessitatibus sint et rerum fuga est modi libero. Qui dicta itaque.</p> */}
        </div>
      </div>

      <div className={`${styles.interests} ${styles.topicIntro}`}>
        <h2>{t("interests.title")}</h2>
        <p>{t("interests.paragraph")}</p>

        <div className={styles.cards}>

          <p>Back-end</p>
          <p>DevOps</p>
          <p>Front-end</p>
          <p>Cyber-Security</p>
          <p>Comunicação</p>
          <p>Gerenciamento de projetos</p>
        </div>
      </div>

      <div id='projects' className={`${styles.projects} ${styles.topicIntro}`}>
        <h2>{t("projects.title")}</h2>
        <p>{t("projects.paragraph")}</p>

        <div className={styles.projects}>

          <Projects projects={projects} />
        </div>
      </div>

      <div className={styles.contact} id='sendEmail'>
        <h2 className={styles.maziusItalic}>{t("getInTouch.title")}</h2>
        <form action="https://formsubmit.co/rafaelsmello01@gmail.com" method="POST">
          <input type="text" name="name" placeholder={t("getInTouch.placeholder.name")} required />
          <input type="email" name="email" placeholder={t("getInTouch.placeholder.email")} required />
          <textarea  name="message" placeholder={t("getInTouch.placeholder.message")}></textarea>
          <button type="submit">{t("getInTouch.button")}</button>
        </form>
        <div className={styles.socialIcons}>

        </div>
      </div>

      <footer className={styles.footer}>
        <nav className={styles.navigation}>
          <button onClick={() => smoothScroll('#about')}>{t("footer.about")}</button>
          <button onClick={() => smoothScroll('#projects')}>{t("footer.projects")}</button>
          <button 
            onClick={() => smoothScroll('#sendEmail')} href="#" 
            className={styles.buttonHeader}
          >{t("footer.contact")}</button>
        </nav>
        <p className={styles.avenirNormal}>{t("footer.copyright")}</p>
      </footer>
    </div>
  )
}