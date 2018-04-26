import React from 'react'

import footerlogo from './logo-footer.png'

import styles from './footer.module.css'

class Footer extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className={styles.footerwrapper}>
        <div className={styles.footer1}>
          <div className={styles.aboutUs}>
            <div>
              <h3>ABOUT US</h3>
              <ul style={{listStyleType: 'none', marginLeft: 0}}>
                <li><a className={styles.footerlinks} target="_blank" href="http://techlit.it">Company Profile</a></li>
                <li><a className={styles.footerlinks} href="">Privacy Policy</a></li>
              </ul>
            </div>
          </div>
          <div className={styles.logoandcontacts}>
            <div>
              <img src={footerlogo} />
              <h3 style={{marginBottom: '3%'}}>TECHLIT SRL</h3>
              <h6 className={styles.subdescription}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque</h6>
              <h4 style={{marginBottom: '1%'}}><a className={styles.numgiu} href="tel:+390362238660">+39 0362 238 660</a></h4>
              <h4><a className={styles.mailinogiu} href="mailto:info@techlit.it">info@techlit.it</a></h4>
            </div>
          </div>
        </div>
        <div className={styles.footer2}>
          <p className={styles.copyrighttext}>
          TechLit© 2016 All Rights Reserved | PI IT 09292280964 | S.r.l. con cap. soc. di € 10.000,00 int. vers.| Numero REA: MB-1904653
PEC techlitsrl@legalmail.it | Privacy Policy | Cookie policy
          </p>
        </div>
      </div>
    )
  }

}


export default Footer
