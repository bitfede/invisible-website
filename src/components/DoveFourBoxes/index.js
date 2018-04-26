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
        <Hidden lg xl>
          <p className={styles.mobilesuggestion}>(Tocca le immagini per vedere più informazioni)</p>
        </Hidden>
        <Container style={{marginTop: '5%', marginBottom: '10%'}}>
          <Row>
            <Col sm={12} md={6} style={{padding: 0}}>
              <div className={styles.backgroffice}>
                <div className={styles.whitelayer} >
                  <h1 className={styles.headsubtext, styles.headsubtitle}>{this.props.title1}</h1>
                  <h2 className={styles.headsubtext, styles.headsubsubtitle}>{this.props.para1}</h2>
                </div>
              </div>
            </Col>
            <Col sm={12} md={6} style={{padding: 0}}>
              <div className={styles.backgrhospital}>
                <div className={styles.whitelayer} >
                  <h1 className={styles.headsubtext, styles.headsubtitle}>{this.props.title2}</h1>
                  <h2 className={styles.headsubtext, styles.headsubsubtitle}>{this.props.para2}</h2>
                </div>
              </div>
            </Col>
          </Row>
          <Row>
            <Col sm={12} md={6} style={{padding: 0}}>
              <div className={styles.backgrstore}>
                <div className={styles.whitelayer} >
                  <h1 className={styles.headsubtext, styles.headsubtitle}>{this.props.title3}</h1>
                  <h2 className={styles.headsubtext, styles.headsubsubtitle}>{this.props.para3}</h2>
                </div>
              </div>
            </Col>
            <Col sm={12} md={6} style={{padding: 0}}>
              <div className={styles.backgrhotel}>
                <div className={styles.whitelayer} >
                  <h1 className={styles.headsubtext, styles.headsubtitle}>{this.props.title4}</h1>
                  <h2 className={styles.headsubtext, styles.headsubsubtitle}>{this.props.para4}</h2>
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
