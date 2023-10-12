import React, { useEffect, useState } from 'react';
import siqLogo from '../../assets/siqe-logo.svg'
import styles from './styles.module.scss'
import blackInstaIcon from '../../assets/instagram-black.svg'
import rafaPng from '../../assets/avatar-rafa.png'
import devices from '../../assets/welcome-devices.svg'

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
              
            </div>
            <div className={styles.column}></div>
            <div className={styles.column}></div>
          </div>
        </div>
      </section>

    </>
  )
}