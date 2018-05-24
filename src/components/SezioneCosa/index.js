import React from 'react'

import {Container, Row, Col, Visible, Hidden} from 'react-grid-system'

import styles from './sezionecosa.module.css'

import leftImgOn from './foto-on.png'
import leftImgOff from './foto-off.png' 
import rightImg from './telecomando.png'


class SezioneCosa extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      immagine: leftImgOn,
      telecomando: styles.rightimg
    }
  }

  clickTelecomando(e) {
    e.preventDefault();
    // status of left img
    if (this.state.immagine === leftImgOn) {
      this.setState({
        immagine: leftImgOff,
        telecomando: styles.rightimgclick
      })
    }
    else {
      this.setState({
        immagine: leftImgOn,
        telecomando: styles.rightimg
      })
    }

    console.log("STATE", this.state);

  }

  render() {
    return (
      <div>
        <Container className={styles.containeroone}>
          <Row>
            <Col sm={12} md={6}>
              <div className={styles.leftcontainer}>
                <img className={styles.leftimg} src={this.state.immagine} />
              </div>
            </Col>

            <Col sm={12} md={6}>
            <div className={styles.rightcontainer}>
              <a href="#" onClick={(e) => this.clickTelecomando(e)} className={styles.clickme}>
              <img className={this.state.telecomando} src={rightImg} />
              </a>
              <p className={styles.rightpara}>{this.props.telecomandoSubtitle}</p>
            </div>
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}

export default SezioneCosa
