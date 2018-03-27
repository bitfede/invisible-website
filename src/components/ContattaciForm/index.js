import React from 'react'

import {Container, Row, Col, Visible, Hidden} from 'react-grid-system'

import addToMailchimp from 'gatsby-plugin-mailchimp'

import styles from './contattaciform.module.css'


class ContattaciForm extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      email: '',
      name: '',
      msg: ''
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event) {
    const target = event.target
    const value = target.value
    const name = target.name
    this.setState({
      [name]: value
    })
    console.log(this.state)
  }

  handleSubmit(event) {
    event.preventDefault();
    // alert("Email -> " + this.state.email + "\n" + "Nome -> " + this.state.name + "\n" + "Message -> " + this.state.msg)
    const email = this.state.email
    const listFields = {
      FNAME: this.state.name,
      MMERGE5: this.state.msg
    }
    addToMailchimp(email, listFields)
    .then(data => {
      console.log(data)
    })
    .catch(() => {
      //nothing to do
    })
  }

  render() {
    return (
      <div style={{marginTop: '6%'}}>
        <Container>
          <form onSubmit={this.handleSubmit} className={styles.formstyle} >
          <Row>
            <Col sm={12} style={{padding: '2%'}}>
            <label  className={styles.labelflex}>
              <span className={styles.scrittacent}>Email:</span>
              <input
                className={styles.globlinpt}
                name="email"
                type="text"
                value={this.state.email}
                onChange={this.handleChange}
                placeholder="esempio@esempio.com"
              />
            </label>
            </Col>
            </Row>
            <Row>
            <Col sm={12} style={{padding: '2%'}}>
            <label className={styles.labelflex}>
              <span className={styles.scrittacent}>Nome:</span>
              <input
                className={styles.globlinpt}
                name="name"
                type="text"
                value={this.state.name}
                onChange={this.handleChange}
                placeholder="Tizio Caio"
              />
            </label>
            </Col>
            </Row>
            <Row>
            <Col sm={12} style={{padding: '2%'}}>
            <label className={styles.labelflex}>
              <span className={styles.scrittacent}>Messaggio:</span>
              <textarea
                className={ styles.txtinpt}
                name="msg"
                type="text"
                value={this.state.msg}
                onChange={this.handleChange}
                placeholder="Esigenze particolari? Scrivici pure qui..."
              />
            </label>
            </Col>
          </Row>
          <Row>

              <div className={styles.buttonwrap}>
               <input className={styles.btn} type="submit" value="Iscriviti" />
              </div>

          </Row>
          </form>
        </Container>
      </div>
    )
  }
}

export default ContattaciForm
