import React from 'react'
import Link from 'gatsby-link'

import styles from "./header.module.css"
// console.log(styles) //DEBUGG

const Header = () => (
  <div
    className={styles.genericheaderdiv}
  >

    <div
      style={{
        margin: '0',
        padding: '0.3rem 1rem',
      }}
      className={styles.headerdiv}
    >
      <h3 style={{ margin: 0 }}>
      <a style={{
        color: 'white',
        textDecoration: 'none',
        maxWidth: '100%', 
      }} href="http://techlit.it" target="_blank">


<svg style={{width: "10%", fill: "white"}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M488 312.7V456c0 13.3-10.7 24-24 24H348c-6.6 0-12-5.4-12-12V356c0-6.6-5.4-12-12-12h-72c-6.6 0-12 5.4-12 12v112c0 6.6-5.4 12-12 12H112c-13.3 0-24-10.7-24-24V312.7c0-3.6 1.6-7 4.4-9.3l188-154.8c4.4-3.6 10.8-3.6 15.3 0l188 154.8c2.7 2.3 4.3 5.7 4.3 9.3zm83.6-60.9L488 182.9V44.4c0-6.6-5.4-12-12-12h-56c-6.6 0-12 5.4-12 12V117l-89.5-73.7c-17.7-14.6-43.3-14.6-61 0L4.4 251.8c-5.1 4.2-5.8 11.8-1.6 16.9l25.5 31c4.2 5.1 11.8 5.8 16.9 1.6l235.2-193.7c4.4-3.6 10.8-3.6 15.3 0l235.2 193.7c5.1 4.2 12.7 3.5 16.9-1.6l25.5-31c4.2-5.2 3.4-12.7-1.7-16.9z"/></svg>

        </a>
      </h3>
      <div id="rightupperhead">
        <Link
          to="/en/faq"
          style={{
            color: 'white',
            textDecoration: 'none',
          }}
          className={styles.rightupperlinks}
        >
          FAQ
        </Link>
        <Link
          to="/it"
          style={{
            color: 'white',
            textDecoration: 'none',
          }}
          className={styles.rightupperlinks}
        >
          ITA
        </Link>
        <Link
          to="/en"
          style={{
            color: 'white',
            textDecoration: 'none',
          }}
          className={styles.rightupperlinks}
        >
          ENG
        </Link>
      </div>
    </div>

  </div>
)

export default Header
