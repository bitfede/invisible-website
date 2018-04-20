import React from 'react'

// grid system
import {Container, Row, Col, Visible, Hidden} from 'react-grid-system'

import padlock from './padlock.png'
import projector from './projector.png'
import sketch from './sketch.png'

import styles from './threecircles.module.css'

class ThreeCircles extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div style={{marginTop: '4%'}}>
        <Container>
          <Row>
            <Col sm={12} md={4}>
              <div className={styles.boxdiv}>
              <img className={styles.icon1} src={padlock} />
                <h1 className={styles.title}>{this.props.title1}</h1>
                <h3 className={styles.subtitle}>{this.props.subtitle1}</h3>
              </div>
            </Col>
            <Col sm={12} md={4}>
              <div className={styles.boxdiv}>
                <img className={styles.icon2} src={sketch} />
                <h1 className={styles.title}>{this.props.title2}</h1>
                <h3 className={styles.subtitle}>{this.props.subtitle2}</h3>
              </div>
            </Col>
            <Col sm={12} md={4}>
              <div className={styles.boxdiv}>
                 <img className={styles.icon2} src={projector} />
                <h1 className={styles.title3}>{this.props.title3}</h1>
                <h3 className={styles.subtitle}>{this.props.subtitle3}</h3>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}

export default ThreeCircles
