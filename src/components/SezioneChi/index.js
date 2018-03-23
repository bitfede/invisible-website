import React from 'react'

// grid system
import {Container, Row, Col, Visible, Hidden} from 'react-grid-system'

import styles from './sezionechi.module.css'

class SezioneChi extends React.Component {
  constructor(props) {
    super(props)

  }

  render() {
    return (
      <div>
        <Container className={styles.globalcontainer}>
          <Row>
            <Col sm={6} md={3}>
            1
            </Col>
            <Col sm={6} md={3}>
            2
            </Col>
            <Col sm={6} md={3}>
            3
            </Col>
            <Col sm={6} md={3}>
            4
            </Col>
            <Col sm={6} md={3}>
            5
            </Col>
            <Col sm={6} md={3}>
            6
            </Col>
            <Col sm={6} md={3}>
            7
            </Col>
            <Col sm={6} md={3}>
            8
            </Col>
          </Row>
          <Row>

          </Row>
        </Container>
      </div>
    )
  }
}

export default SezioneChi
