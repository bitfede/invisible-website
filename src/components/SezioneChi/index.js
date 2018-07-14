import React from 'react'

// grid system
import {Container, Row, Col, Visible, Hidden} from 'react-grid-system'

import aldocoppola from './Aldo coppola.svg'
import ascotrade from './ascotrade.svg'
import belitalia from './BEL ITALIA.svg'
import bolton from './bolton.svg'
import bperbanca from './Bperbanca.svg'
import bricocenter from './Brico-center.svg'
import bricoman from './Bricoman.svg'
import canon from './Canon.svg'
import damiani from './Damiani.svg'
import decathlon from './Decathlon copia.svg'
import elledecoder from './Elledecoder.svg'
import generali from './Generali.svg'
import loreal from './Loreal.svg'
import microsoft from './Microsoft.svg'
import novartis from './Novartis.svg'
import prada from './Prada.svg'
import qvc from './QVC.svg'
import realemutua from './Reale_mutua.svg'
import teatromanzoni from './teatromanzoni.svg'
import univerona from './UniversitàVerona.svg'

import styles from './sezionechi.module.css'

class SezioneChi extends React.Component {
  constructor(props) {
    super(props)

  }

  putLogos(logolist) {

    let columns = []

    for (var i = 0; i < logolist.length; i++ ) {
      columns.push(
        <Col xs={4} md={3} key={i}>
          <div className={styles.colcontent} >
            <img className={styles.icona} src={logolist[i]} />
          </div>
        </Col>
      )
    }

     return columns

  }

  render() {
    let imagelist = [aldocoppola, ascotrade, belitalia, bolton, bperbanca, bricocenter, bricoman, canon, damiani, decathlon, elledecoder, generali, loreal, microsoft, novartis, prada, qvc, realemutua, teatromanzoni, univerona ]
    let logos = this.putLogos(imagelist)
    return (
      <div id="chi" className={styles.backgroundblue}>
        <h1 className={styles.maintitle}>{this.props.title}</h1>
        <Container className={styles.maincontainer}>
          <Row className={styles.mainRow}>
            {logos}
          </Row>
        </Container>
      </div>
    )
  }
}

export default SezioneChi
