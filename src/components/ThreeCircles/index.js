import React from 'react'

// grid system
import {Container, Row, Col, Visible, Hidden} from 'react-grid-system'


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
                <svg className={styles.icon1} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M295.973 160H180.572L215.19 30.184C219.25 14.956 207.756 0 192 0H56C43.971 0 33.8 8.905 32.211 20.828l-31.996 240C-1.704 275.217 9.504 288 24.004 288h118.701L96.646 482.466C93.05 497.649 104.659 512 119.992 512c8.35 0 16.376-4.374 20.778-11.978l175.973-303.997c9.244-15.967-2.288-36.025-20.77-36.025z"/></svg>
                <h1 className={styles.title}>Title</h1>
                <h3 className={styles.subtitle}>Put a very nice subtitle here</h3>
              </div>
            </Col>
            <Col sm={12} md={4}>
              <div className={styles.boxdiv}>
                <svg className={styles.icon2}
                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M488 312.7V456c0 13.3-10.7 24-24 24H348c-6.6 0-12-5.4-12-12V356c0-6.6-5.4-12-12-12h-72c-6.6 0-12 5.4-12 12v112c0 6.6-5.4 12-12 12H112c-13.3 0-24-10.7-24-24V312.7c0-3.6 1.6-7 4.4-9.3l188-154.8c4.4-3.6 10.8-3.6 15.3 0l188 154.8c2.7 2.3 4.3 5.7 4.3 9.3zm83.6-60.9L488 182.9V44.4c0-6.6-5.4-12-12-12h-56c-6.6 0-12 5.4-12 12V117l-89.5-73.7c-17.7-14.6-43.3-14.6-61 0L4.4 251.8c-5.1 4.2-5.8 11.8-1.6 16.9l25.5 31c4.2 5.1 11.8 5.8 16.9 1.6l235.2-193.7c4.4-3.6 10.8-3.6 15.3 0l235.2 193.7c5.1 4.2 12.7 3.5 16.9-1.6l25.5-31c4.2-5.2 3.4-12.7-1.7-16.9z"/></svg>
                <h1 className={styles.title}>Title</h1>
                <h3 className={styles.subtitle}>Put a very nice subtitle here</h3>
              </div>
            </Col>
            <Col sm={12} md={4}>
              <div className={styles.boxdiv}>
                <svg className={styles.icon3}
                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M400 224h-24v-72C376 68.2 307.8 0 224 0S72 68.2 72 152v72H48c-26.5 0-48 21.5-48 48v192c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V272c0-26.5-21.5-48-48-48zm-104 0H152v-72c0-39.7 32.3-72 72-72s72 32.3 72 72v72z"/></svg>
                <h1 className={styles.title}>Title</h1>
                <h3 className={styles.subtitle}>Put a very nice subtitle here</h3>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}

export default ThreeCircles
