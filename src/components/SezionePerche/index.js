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
                <h3>{this.props.title1}</h3>
                <p>
                  {this.props.para1}
                </p>
              </div>
            </Col>
            <Col sm={12} md={4}>
              <div className={styles.divpictwo}>
              </div>
              <div className={styles.textdivv}>
                <h3>{this.props.title2}</h3>
                <p>
                  {this.props.para2}
                </p>
              </div>
            </Col>
            <Col sm={12} md={4}>
              <div className={styles.divpicthree}>
              </div>
              <div className={styles.textdivv}>
                <h3>{this.props.title3}</h3>
                <p>
                  {this.props.para3}
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
