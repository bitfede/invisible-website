import React from 'react'

import styles from './titleandsubtitle.module.css'

class TitleAndSubtitle extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className={styles.titleandsubcontainer}>
        <h1 className={styles.titolo}>Cos'é Invisible?</h1>
        <h3 className={styles.sottotitolo}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum molestie neque odio
        </h3>
      </div>
    )
  }

}

export default TitleAndSubtitle
