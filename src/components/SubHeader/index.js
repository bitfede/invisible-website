import React from 'react'
import Link from 'gatsby-link'

import styles from './subheader.module.css'

const SubHeader = ({w1, w2}) => (
  <div className={styles.divwrapper}>
    <span><h2 className={styles.invisiblemain}>Invisible</h2></span>
    <div>
      <Link className={styles.subheadlink}>COSA</Link>
      <Link className={styles.subheadlink}>PERCHE</Link>
      <Link className={styles.subheadlink}>CHI</Link>
      <Link className={styles.subheadlink}>QUANDO</Link>
      <Link className={styles.subheadlink}>DOVE</Link>
    </div>
  </div>
)

export default SubHeader
