import React, { useEffect, useState } from 'react';
import siqLogo from '../../assets/siqe-logo.svg'
import styles from './styles.module.scss'
import blackInstaIcon from '../../assets/instagram-black.svg'
import rafaPng from '../../assets/avatar-rafa.png'
import devices from '../../assets/welcome-devices.svg'
import iconFrontend from '../../assets/front-end-1.svg'
import iconBackend from '../../assets/database-1.svg'

export default function Home() {

  // eslint-disable-next-line
  const [whiteMode, setWhiteMode] = useState({})

  useEffect(() => {

    setWhiteMode({
      icons: {
        instagram: blackInstaIcon,
      }
    })
  }, [])

  return (



    <>
      <header className={styles.header}>

        <div className={styles.container}>

          <img className={styles.logo} src={siqLogo} alt="" />

          <nav>
            <button>claro/escuro</button>

            <button>Contato</button>
          </nav>
        </div>
      </header>



      <section className={styles.welcome}>

        <div className={`${styles.container} ${styles.welcomeBody}`}>
          <h1>Fullstack developer & DevOps</h1>
          <h2>I develop inovative solutions to integrate teams and write clean code</h2>
          <img src={rafaPng} alt="Foto ilustrativa" />

        </div>

        <div className={styles.welcomeFooter}>
          <img className={styles.devices} src={devices}/>

        </div>
      </section>

      <section className={styles.mediumSection}>
        <div className={styles.container}>
          <h2>Hi, I'm Rafael. Welcome to my Portfolio</h2>
          <p>Lorem ipsum</p>
        </div>
      </section>

      <section className={styles.skillsSection}>
        <div className={styles.container}>
          <div className={styles.box}>

            <div className={styles.column}>
              <img src={iconBackend} alt="" />
              <h3>Back-end</h3>
              <p>I value simple content structure, clean design patterns, and thoughtful interactions</p>
              <p>Languages and tools</p>
              <p>Node.js, Lua, MySQL, MongoDB</p>
            </div>

            <div className={styles.column}>
              <img src={iconFrontend} alt="" />
              <h3>Front-end</h3>
              <p>I like to code things from scratch, and enjoy bringing ideas to life in the browser.</p>
              <p>Languages and tools</p>
              <p>React, React-Native, Sass, Javascript, Typescript</p>
            </div>

            <div className={styles.column}>
              <h3>Outras Habilidades</h3>
              <p>To increse productive and team integration I also work with</p>
              <p>Github, Git, Postman</p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className={styles.container}>
          <h3>Latest projects I've worked on</h3>
          
        </div>
      </section>

      <section>
        <div className={styles.container}>
          <h3>Contact me</h3>
          <form>
            <label>Name</label>
            <input type="text" />

            <label>Email</label>
            <input type="email" />

            <label>Message</label>
            <input type="text" />
          </form>
        </div>
      </section>

      <footer>
        <p>Developed by Siq Enterprise</p>
      </footer>

    </>
  )
}