import React from 'react'

// grid system
import {Container, Row, Col, Visible, Hidden} from 'react-grid-system'

import styles from './contactform.module.css'

class ContactForm extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className={styles.contactcontainer}>
        <Container>
          
        </Container>
      </div>
    )
  }

}

export default ContactForm
