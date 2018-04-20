import React from 'react'

import {Container, Row, Col, Visible, Hidden} from 'react-grid-system'

import styles from './faqcomponent.module.css'

class FaqComponent extends React.Component {
  constructor(props) {
    super(props)
}

  render() {
    return (
      <Container>
        <Row>
        <Col xs={12}>
          <h1 style={styles.maintitolo}>FAQs</h1>
        </Col>
        <Col xs={12}>
          <h2>{this.props.question1}</h2>
          <p>{this.props.answer1}</p>
        </Col>
        <Col xs={12}>
          <h2>{this.props.question2}</h2>
          <p>{this.props.answer2}</p>
        </Col>
        <Col xs={12}>
          <h2>{this.props.question3}</h2>
          <p>{this.props.answer3}</p>
        </Col>
        <Col xs={12}>
          <h2>{this.props.question4}</h2>
          <p>{this.props.answer4}</p>
        </Col>
        <Col xs={12}>
          <h2>{this.props.question5}</h2>
          <p>{this.props.answer5}</p>
        </Col>
        <Col xs={12}>
          <h2>{this.props.question6}</h2>
          <p>{this.props.answer6}</p>
        </Col>
        <Col xs={12}>
          <h2>{this.props.question7}</h2>
          <p>{this.props.answer7}</p>
        </Col>
        <Col xs={12}>
          <h2>{this.props.question8}</h2>
          <p>{this.props.answer8}</p>
        </Col>
        <Col xs={12}>
          <h2>{this.props.question9}</h2>
          <p>{this.props.answer9}</p>
        </Col>
        <Col xs={12}>
          <h2>{this.props.question10}</h2>
          <p>{this.props.answer10}</p>
        </Col>
        <Col xs={12}>
          <h2>{this.props.question11}</h2>
          <p>{this.props.answer11}</p>
        </Col>
        <Col xs={12}>
          <h2>{this.props.question12}</h2>
          <p>{this.props.answer12}</p>
        </Col>
        <Col xs={12}>
          <h2>{this.props.question13}</h2>
          <p>{this.props.answer13}</p>
        </Col>
        <Col xs={12}>
          <h2>{this.props.question14}</h2>
          <p>{this.props.answer14}</p>
        </Col>
        <Col xs={12}>
          <h2>{this.props.question15}</h2>
          <p>{this.props.answer15}</p>
        </Col>
        <Col xs={12}>
          <h2>{this.props.question16}</h2>
          <p>{this.props.answer16}</p>
        </Col>
        <Col xs={12}>
          <h2>{this.props.question17}</h2>
          <p>{this.props.answer17}</p>
        </Col>
        </Row>
      </Container>
    )
  }

}

export default FaqComponent
