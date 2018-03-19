import React from 'react'
import Link from 'gatsby-link'

import styles from "./header.module.css"
console.log(styles)

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
        <Link
          to="/"
          style={{
            color: 'white',
            textDecoration: 'none',
          }}
          className={styles.headerlogo}
        >
          Techlit
        </Link>
      </h3>
      <div id="rightupperhead">
        FAQ
      </div>
    </div>

  </div>
)

export default Header
