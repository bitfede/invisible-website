import React from 'react'

import styles from './jumbotron.module.css'

import pic from './stock-img-1.jpeg'

class Jumbotron extends React.Component{
  constructor (props) {
        super(props);
    }

    render() {
      return (
        <div className={styles.maincontainer}>
          <img className={styles.jumboimage} src={pic} />
          <h1 className={styles.headlinemain}
          >INVISIBLE GLASS</h1>
        </div>
      )
    }

}

export default Jumbotron
