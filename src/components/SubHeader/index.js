import React from 'react'
import Link from 'gatsby-link'

import styles from './subheader.module.css'

import {Hidden} from 'react-grid-system'

class SubHeader extends React.Component{
  constructor (props) {
        super(props);
  }

  _mobileMenu() {
    console.log("AAAAAAA")
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
          <div className={styles.mobilerightbtn}>
            <svg onClick={ () => this._mobileMenu()} style={{width: '1.6rem'}} className={styles.mobilemenu} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"/></svg>
          </div>
        </Hidden>
    </div>
  )
  }

}

export default SubHeader
