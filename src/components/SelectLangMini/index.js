import React from 'react'

import Link from 'gatsby-link'

import styles from './selectlangmini.module.css'

class SelectLangMini extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      currentPage: this.props.currentPage
    }
}

  render() {
    console.log(this.props.currentPage)
    let cssEng = ''
    let cssIta = ''
    if (this.state.currentPage === 'EN') {
      cssEng = "underline"
      cssIta = "none"
    }
    else {
      cssEng = "none"
      cssIta = "underline"
    }
    console.log("ita: ", cssIta)
    console.log('eng: ', cssEng)
    return (
      <div className={styles.contenitorino}>
      <p className={styles.maintext}>
      <Link
        to="/en/faq"
        style={{
          color: 'blue',
          textDecoration: cssEng,
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
          textDecoration: cssIta,
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
