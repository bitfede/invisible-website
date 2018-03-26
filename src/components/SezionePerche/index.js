import React from 'react'

// grid system
import {Container, Row, Col, Visible, Hidden} from 'react-grid-system'

import styles from './sezioneperche.module.css'

class SezionePerche extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className={styles.perchedivmain}>
        <Container>
          <Row>
            <Col sm={12} md={4}>
              <div className={styles.divpicone}>
              </div>
              <div className={styles.textdivv}>
                <h3>PROFESSIONALI</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum molestie neque odio
                </p>
              </div>
            </Col>
            <Col sm={12} md={4}>
              <div className={styles.divpictwo}>
              </div>
              <div className={styles.textdivv}>
                <h3>TENACI</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum molestie neque odio
                </p>
              </div>
            </Col>
            <Col sm={12} md={4}>
              <div className={styles.divpicthree}>
              </div>
              <div className={styles.textdivv}>
                <h3>INNOVATIVI</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum molestie neque odio
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}

export default SezionePerche
