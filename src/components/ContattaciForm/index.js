import React from 'react'

import {Container, Row, Col, Visible, Hidden} from 'react-grid-system'

import addToMailchimp from 'gatsby-plugin-mailchimp'

import styles from './contattaciform.module.css'


class ContattaciForm extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      email: '',
      company: '',
      name: '',
      msg: '',
      statusRes: '',
      statusMsg: ''
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
      CMPNY: this.state.company,
      MMERGE5: this.state.msg
    }
    addToMailchimp(email, listFields)
    .then(data => {
      this.setState({
        statusMsg: data.msg,
        statusRes: data.result
      })
      alert(this.state.statusRes + ": " + this.state.statusMsg)
      console.log(data)
    })
    .catch(() => {
      //nothing to do
    })
  }

  render() {
    return (
      <div style={{marginTop: '1%'}}>
        <Container>
          <form onSubmit={this.handleSubmit} className={styles.formstyle} >
          <Row>
            <Col sm={12} style={{padding: '2%'}}>
            <label  className={styles.labelflex}>
              <span className={styles.scrittacent}>{this.props.field1}:</span>
              <input
                className={styles.globlinpt}
                name="email"
                type="text"
                value={this.state.email}
                onChange={this.handleChange}
                placeholder={this.props.placehold1}
              />
            </label>
            </Col>
            </Row>
            <Row>
            <Col sm={12} style={{padding: '2%'}}>
            <label className={styles.labelflex}>
              <span className={styles.scrittacent}>{this.props.fieldcompany}:</span>
              <input
                className={styles.globlinpt}
                name="company"
                type="text"
                value={this.state.company}
                onChange={this.handleChange}
                placeholder={this.props.placehldcompany}
              />
            </label>
            </Col>
            </Row>
            <Row>
            <Col sm={12} style={{padding: '2%'}}>
            <label className={styles.labelflex}>
              <span className={styles.scrittacent}>{this.props.field2}:</span>
              <input
                className={styles.globlinpt}
                name="name"
                type="text"
                value={this.state.name}
                onChange={this.handleChange}
                placeholder={this.props.placehold2}
              />
            </label>
            </Col>
            </Row>
            <Row>
            <Col sm={12} style={{padding: '2%'}}>
            <label className={styles.labelflex}>
              <span className={styles.scrittacent}>{this.props.field3}:</span>
              <textarea
                className={ styles.txtinpt}
                name="msg"
                type="text"
                value={this.state.msg}
                onChange={this.handleChange}
                placeholder={this.props.placehold3}
              />
            </label>
            </Col>
          </Row>
          <Row>
              <div className={styles.buttonwrap}>
             <input className={styles.btn} type="submit" value={this.props.btn} />
              </div>

          </Row>
          </form>
        </Container>
      </div>
    )
  }
}

export default ContattaciForm
