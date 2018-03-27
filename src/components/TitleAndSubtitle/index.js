import React from 'react'

import styles from './titleandsubtitle.module.css'

class TitleAndSubtitle extends React.Component {
  constructor(props) {
    super(props)
    console.log("DIOCANE", props)
  }

  render() {
    return (
      <div id={this.props.w} className={styles.titleandsubcontainer}>
        <h1 className={styles.titolo}>{this.props.title}</h1>
        <h3 className={styles.sottotitolo}>
          {this.props.subtitle}
        </h3>
      </div>
    )
  }

}

export default TitleAndSubtitle
