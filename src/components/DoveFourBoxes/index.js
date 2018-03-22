import React from 'react'

// grid system
import {Container, Row, Col, Visible, Hidden} from 'react-grid-system'


import styles from './dovefourboxes.module.css'

class DoveFourBoxes extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <Container style={{marginTop: '5%', marginBottom: '10%'}}>
          <Row>
            <Col sm={12} md={6} style={{padding: 0}}>
              <div className={styles.backgroffice}>
                <div className={styles.whitelayer} >
                  <h1 className={styles.headsubtext, styles.headsubtitle}>Uffici</h1>
                  <h3 className={styles.headsubtext, styles.headsubsubtitle}>Add a little bit of body text</h3>
                </div>
              </div>
            </Col>
            <Col sm={12} md={6} style={{padding: 0}}>
              <div className={styles.backgrhospital}>
                <div className={styles.whitelayer} >
                  <h1 className={styles.headsubtext, styles.headsubtitle}>Ospedali</h1>
                  <h3 className={styles.headsubtext, styles.headsubsubtitle}>Add a little bit of body text</h3>
                </div>
              </div>
            </Col>
          </Row>
          <Row>
            <Col sm={12} md={6} style={{padding: 0}}>
              <div className={styles.backgrstore}>
                <div className={styles.whitelayer} >
                  <h1 className={styles.headsubtext, styles.headsubtitle}>Negozi</h1>
                  <h3 className={styles.headsubtext, styles.headsubsubtitle}>Add a little bit of body text</h3>
                </div>
              </div>
            </Col>
            <Col sm={12} md={6} style={{padding: 0}}>
              <div className={styles.backgrhotel}>
                <div className={styles.whitelayer} >
                  <h1 className={styles.headsubtext, styles.headsubtitle}>Hotels</h1>
                  <h3 className={styles.headsubtext, styles.headsubsubtitle}>Add a little bit of body text</h3>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}

export default DoveFourBoxes
