import React from 'react'

// grid system
import {Container, Row, Col, Visible, Hidden} from 'react-grid-system'

//contact form mailchimp logic
import MailchimpSubscribe from "react-mailchimp-subscribe"

import styles from './contactform.module.css'

// a basic form
const CustomForm = ({ status, message, onValidated }) => {
  let email, name, msg;
  const submit = () =>
  // console.log(email.value, name.value, msg.value)
    email &&
    name &&
    msg &&
    email.value.indexOf("@") > -1 &&
    onValidated({
      EMAIL: email.value,
      NAME: name.value,
      MSG: msg.value
    });

  return (
    <div
      style={{
        background: "#43b6e7",
        borderRadius: 5,
        padding: '10%',
        display: "flex",
        flexDirection: "column"
      }}
    >
      {status === "Inserendo i dati..." && <div style={{ color: "blue" }}>sending...</div>}
      {status === "ERRORE" && <div style={{ color: "red" }}>{message}</div>}
      {status === "Dati inseriti con successo!" && <div style={{ color: "green" }}>{message}</div>}
      <label> <span style={{color: 'white', fontSize: '1.5rem', fontWeight: '800'}}>Nome:</span>
      <input
        style={{ fontSize: "2em", padding: 5, width: '100%', marginTop: '2%' }}
        ref={node => (name = node)}
        type="text"
        placeholder="il tuo nome"
      />
      </label>
      <br />
      <label> <span style={{color: 'white', fontSize: '1.5rem', fontWeight: '800'}}>Email:</span>
      <input
        style={{ fontSize: "2em", padding: 5, width: '100%', marginTop: '2%'  }}
        ref={node => (email = node)}
        type="email"
        placeholder="la tua email"
      />
      </label>
      <br />
      <label> <span style={{color: 'white', fontSize: '1.5rem', fontWeight: '800'}}>Messaggio:</span>
      <textarea
        style={{ fontSize: "1.3em", padding: 5, width: '100%', marginTop: '2%'  }}
        ref={node => (msg = node)}
        type="text"
        placeholder="richieste specifiche..."
      />
      </label>
      <br />
      <button style={{ fontSize: "2em", padding: 20, backgroundColor: '#0081C2', color: 'white' }} onClick={submit}>
        Contattaci Ora
      </button>
    </div>
  );
};

class ContactForm extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const url = "https://techlit.us14.list-manage.com/subscribe/post?u=9a1f91d2717ff0377509a250e&id=ca6a51b701";
    return (
      <div className={styles.contactcontainer}>
        <Container>
          <MailchimpSubscribe
            url={url}
            render={({ subscribe, status, message }) => (
              <CustomForm
                status={status}
                message={message}
                onValidated={formData => subscribe(formData)}
              />
            )}
          />
        </Container>
      </div>
    )
  }

}

export default ContactForm
