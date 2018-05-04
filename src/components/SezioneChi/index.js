import React from 'react'

// grid system
import {Container, Row, Col, Visible, Hidden} from 'react-grid-system'

import bper from './bper.png'
import generali from './generali.png'
import ivm from './ivm.png'
import level from './level.png'
import microsoft from './microsoft.png'
import prada from './prada.png'

import styles from './sezionechi.module.css'

class SezioneChi extends React.Component {
  constructor(props) {
    super(props)

  }

  render() {
    return (
      <div id="chi" className={styles.backgroundblue}>
        <h1 className={styles.maintitle}>{this.props.title}</h1>
        <Container className={styles.maincontainer}>
          <Row>
            <Col sm={6} md={3}>
              <div className={styles.colcontent} >
                <img className={styles.icona} src={bper} />
              </div>
            </Col>
            <Col sm={6} md={3}>
              <div className={styles.colcontent} >
              <img className={styles.icona} src={generali} />
              </div>
            </Col>
            <Col sm={6} md={3}>
              <div className={styles.colcontent} >
                <img className={styles.icona} src={ivm}  />
              </div>
            </Col>
            <Col sm={6} md={3}>
              <div className={styles.colcontent} >
                <img className={styles.icona} src={level}/>
              </div>
            </Col>
            </Row>
            <Row style={{paddingTop: '7%'}}>
            <Col sm={6} md={3}>
              <div className={styles.colcontent} >

              </div>
            </Col>
            <Col sm={6} md={3}>
              <div className={styles.colcontent} >
                <img className={styles.icona} src={prada} />
              </div>
            </Col>
            <Col sm={6} md={3}>
              <div className={styles.colcontent} >
              <img className={styles.icona} src={microsoft} />
              </div>
            </Col>
            <Col sm={6} md={3}>
              <div className={styles.colcontent} >

              </div>
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}

export default SezioneChi
