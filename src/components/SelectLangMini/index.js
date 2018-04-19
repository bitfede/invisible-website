import React from 'react'

import Link from 'gatsby-link'

import styles from './selectlangmini.module.css'

class SelectLangMini extends React.Component {
  constructor(props) {
    super(props)
}

  render() {
    return (
      <div className={styles.contenitorino}>
      <p className={styles.maintext}>
      <Link
        to="/en/faq"
        style={{
          color: 'blue',
          textDecoration: 'none',
          fontSize: '1.3rem'
        }}
        className={styles.langlinks}
      >
        English
      </Link>
       -
      <Link
        to="/it/faq"
        style={{
          color: 'blue',
          textDecoration: 'none',
          fontSize: '1.3rem'
        }}
        className={styles.langlinks}
      >
         Italian
      </Link>
      </p>
      </div>
    )
  }

}

export default SelectLangMini
