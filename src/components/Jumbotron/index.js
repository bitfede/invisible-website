import React from 'react'

import Typewriting from 'react-typewriting'

import styles from './jumbotron.module.css'

import pic from './copertina.png'


class Jumbotron extends React.Component{
    constructor (props) {
        super(props);
    }

    render() {

      return (
        <div className={styles.maincontainer}>
          <img className={styles.jumboimage} src={pic} />
          <h1 className={styles.headlinemain}>{this.props.statictext}
            <Typewriting
              className={styles.blinkershit}
              waitBeforeDeleteMs={3000}
              writeSpeedMs={200}
              deleteSpeedMs={100}
              strings={[
                this.props.text1,
                this.props.text2,
                this.props.text3,
                this.props.text4
              ]}
            />
          </h1>
        </div>
      )
    }

}

export default Jumbotron
