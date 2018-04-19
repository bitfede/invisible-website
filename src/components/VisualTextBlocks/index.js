import React from 'react'

// grid system
import {Container, Row, Col, Visible, Hidden} from 'react-grid-system'

import styles from './visualtextblocks.module.css'


class VisualTextBlocks extends React.Component {
  constructor(props) {
    super(props)

  }

  render() {
    return (
      <div>
        <Container style={{backgroundColor: "#43B6E7", marginTop: '10%', marginBottom: '10%'}} fluid>
          <Row>
            <Col style={{paddingRight: 0, paddingLeft: 0}} sm={12} md={6}>
              <div className={styles.wrapperleft}>
                <div className={styles.spacer} />
              </div>
            </Col>
            <Col sm={12} md={6}>
              <div className={styles.txtBlockWrapper}>
                <h1 className={styles.blocktext}>{this.props.titolo1}</h1>
                <h3 className={styles.blocktext}>{this.props.para1}</h3>
              </div>
            </Col>
          </Row>
          <Hidden xs sm>
          <Row>
            <Col sm={12} md={6}>
              <div className={styles.txtBlockWrapper}>
                <h1 className={styles.blocktext}>{this.props.titolo2}</h1>
                <h3 className={styles.blocktext}>{this.props.para2}</h3>
              </div>
            </Col>
            <Col style={{paddingRight: 0, paddingLeft: 0}} sm={12} md={6}>
              <div className={styles.wrapperright}>
                <div className={styles.spacer} />
              </div>
            </Col>
          </Row>
          </Hidden>
          <Hidden md lg xl>
          <Row>
            <Col style={{paddingRight: 0, paddingLeft: 0}} sm={12} md={6}>
              <div className={styles.wrapperright}>
                <div className={styles.spacer} />
              </div>
            </Col>
            <Col sm={12} md={6}>
              <div className={styles.txtBlockWrapper}>
                <h1 className={styles.blocktext}>{this.props.titolo2}</h1>
                <h3 className={styles.blocktext}>{this.props.para2}</h3>
              </div>
            </Col>
          </Row>
          </Hidden>
        </Container>
      </div>
    )
  }
}

export default VisualTextBlocks
