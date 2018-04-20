import React from 'react'
import Link from 'gatsby-link'

// components
import SelectLangMini from '../components/SelectLangMini'

import {Container, Row, Col, Visible, Hidden} from 'react-grid-system'


const FaqPage = () => (
  <div>
  <SelectLangMini />

  <Container>
    <Row>
      <Col sm={12}>
        <h2>Question question ?</h2>
        <p>traduzione in corso</p>
      </Col>
    </Row>
  </Container>
  </div>
)

export default FaqPage
