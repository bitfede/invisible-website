import React from 'react'

import Typewriting from 'react-typewriting'

import styles from './jumbotron.module.css'

import pic from './copertina.jpg'

class Jumbotron extends React.Component{
  constructor (props) {
        super(props);
    }

    render() {
      return (
        <div className={styles.maincontainer}>
          <img className={styles.jumboimage} src={pic} />
          <h1 className={styles.headlinemain}>La Privacy
            <Typewriting
              className={styles.blinkershit}
              waitBeforeDeleteMs={3000}
              writeSpeedMs={200}
              deleteSpeedMs={100}
              strings={[
                ' in ufficio',
                ' in casa',
                ' dove vuoi',
                ' con un click!'
              ]}
            />
          </h1>
        </div>
      )
    }

}

export default Jumbotron
