import React from 'react'

import {Container, Row, Col, Visible, Hidden} from 'react-grid-system'

import styles from './sezionecosa.module.css'

import leftImg from './sezionecosa-img-left.jpg'
import rightImg from './remote-img-right.png'


class SezioneCosa extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <Container>
          <Row>
            <Col sm={12} md={6}>
              <div className={styles.leftcontainer}>
                <img className={styles.leftimg} src={leftImg} />
              </div>
            </Col>

            <Col sm={12} md={6}>
            <div className={styles.rightcontainer}>
              <img className={styles.rightimg} src={rightImg} />
              <p className={styles.rightpara}>Add some text here please, write a few sentences</p>
            </div>
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}

export default SezioneCosa
