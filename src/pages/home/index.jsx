import React from 'react';
import styles from './styles.module.scss'
import linkedin from '../../assets/icons/linkedin.svg'
import github from '../../assets/icons/github.svg'
import { projects } from '../../assets/static/projects'
import Projects from '../../components/projects';

export default function Home() {

  function smoothScroll(sectionId) {
    document.querySelector(sectionId).scrollIntoView({behavior: 'smooth'})
  }

  return (
    <div className={styles.app}>
      <div className={styles.header}>
        <p className={styles.name}>Rafael Mello</p>
        <nav className={styles.navigation}>
          <button onClick={() => smoothScroll('#about')}>About</button>
          <button onClick={() => smoothScroll('#projects')}>Projects</button>
          <button onClick={() => smoothScroll('#sendEmail')} className={styles.buttonHeader}>Get in touch</button>
        </nav>
      </div>

      <div className={styles.hero}>

        <div className={styles.heroText}>
          <h1>Olá!</h1>
          <p>Sou o Rafael, Engenheiro de software e Desenvolvedor fullstack, eu crio códigos e soluções escaláveis e amo fazer isso</p>
          <p>Bem-vindo ao meu portfólio! 😁</p>
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
            >View projects</button>
            <button onClick={() => smoothScroll('#sendEmail')} className={styles.button}>Get in touch</button>
          </div>
        </div>


      </div>

      <div id='about' className={`${styles.flex} ${styles.about}`}>
        <h2>About me</h2>
        <div>
          <p>Hello! My name is Amanda and I enjoy creating things.</p>
          <p>Ab galisum magni non aperiam iusto et pariatur aliquam aut velit nobis et autem error. Qui veniam minima est dicta nisi sit earum numquam aut repellat unde. Non nisi adipisci est distinctio voluptatem qui beatae quis ad enim facere cum quaerat officia aut suscipit possimus?</p>
          <p>Qui vero dolorem qui veniam illum eos omnis molestiae 33 deleniti omnis! Aut illum accusantium qui nemo praesentium vel quidem illum aut necessitatibus sint et rerum fuga est modi libero. Qui dicta itaque.</p>
        </div>
      </div>

      <div className={`${styles.interests} ${styles.topicIntro}`}>
        <h2>Interests</h2>
        <p>Some things I enjoy learing about and doing</p>

        <div className={styles.cards}>

          <p>Back-end</p>
          <p>DevOps</p>
          <p>Front-end</p>
          <p>Cyber-Security</p>
          <p>Workout</p>
          <p>Movies</p>
        </div>
      </div>

      <div id='projects' className={`${styles.projects} ${styles.topicIntro}`}>
        <h2>Projects</h2>
        <p>Some things I've worked recent</p>

        <div className={styles.projects}>

          <Projects projects={projects} />
        </div>
      </div>

      <div className={styles.contact} id='sendEmail'>
        <h2 className={styles.maziusItalic}>get in touch</h2>
        <form action="https://formsubmit.co/rafaelsmello01@gmail.com" method="POST">
          <input type="text" name="name" placeholder='Full name'required />
          <input type="email" name="email" placeholder='Email Address' required />
          <textarea name="message" placeholder='Write your message here'></textarea>
          <button type="submit">Send</button>
        </form>
        <div className={styles.socialIcons}>

        </div>
      </div>

      <footer className={styles.footer}>
        <nav className={styles.navigation}>
          <button onClick={() => smoothScroll('#about')}>About</button>
          <button onClick={() => smoothScroll('#projects')}>Projects</button>
          <button 
            onClick={() => smoothScroll('#sendEmail')} href="#" 
            className={styles.buttonHeader}
          >Contact</button>
        </nav>
        <p className={styles.avenirNormal}>© 2022 Amanda Yang All Rights Reserved</p>
      </footer>
    </div>
  )
}