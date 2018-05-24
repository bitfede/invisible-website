import React from 'react'

//Links
import Link from 'gatsby-link'
// grid system
import {Container, Row, Col, Visible, Hidden} from 'react-grid-system'

//flag pics
import itaflag from './italy.png'
import ukflag from './united-kingdom.png'
// video
import videobkg from './videobkgr.mp4'


import styles from './frontpage.module.css'

class FrontPage extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className={styles.frontwrapper}>

      <video autoPlay muted loop className={styles.backgroundz}>
        <source src={videobkg} type={"video/mp4"} />
      </video>
        <Container>
          <Row>
            <Col sm={12} md={6}>
            <Link to="/it/">
              <div className={styles.flagwrapper}>
              <img className={styles.flagimg} src={itaflag} />
              </div>
            </Link>
            </Col>
            <Col sm={12} md={6}>
            <Link to="/en/">
              <div className={styles.flagwrapper}>
              <img className={styles.flagimg} src={ukflag} />
              </div>
            </Link>
            </Col>
          </Row>
        </Container>
      </div>

    )
  }
}

export default FrontPage
