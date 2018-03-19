import React from 'react'
import Link from 'gatsby-link'

import styles from './subheader.module.css'

import {Hidden} from 'react-grid-system'

class SubHeader extends React.Component{
  constructor (props) {
        super(props);
    }

render() {
  return (
  <div className={styles.divwrapper}>
    <span><h2 className={styles.invisiblemain}>Invisible</h2></span>
      <Hidden xs sm md>
        <div className={styles.subheadlinkwrapper}>
          <Link to="/" className={styles.subheadlink}>{this.props.w1}</Link>
          <Link to="/" className={styles.subheadlink}>{this.props.w2}</Link>
          <Link to="/" className={styles.subheadlink}>{this.props.w3}</Link>
          <Link to="/" className={styles.subheadlink}>{this.props.w4}</Link>
          <Link to="/" className={styles.subheadlink}>{this.props.w5}</Link>
        </div>
      </Hidden>
      <Hidden lg xl>
        <div>
          hello
        </div>
      </Hidden>
  </div>
)
}

}

export default SubHeader
