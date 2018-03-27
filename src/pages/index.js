/*
  AUTHOR: Federico G. De Faveri
  PURPOSE: Website page for Invisible by Techlit
  DATE: March 2018
*/

import React from 'react'
import Link from 'gatsby-link'
// grid system
import {Container, Row, Col, Visible, Hidden} from 'react-grid-system'
// components
import TitleAndSubtitle from '../components/TitleAndSubtitle'
import FrontPage from '../components/FrontPage'


const IndexPage = () => (
  <div>

    <div style={{marginTop: '15%'}} />
    <TitleAndSubtitle
      title={"Invisible by Techlit"}
      subtitle={"Seleziona il linguaggio / Select the language"}
    />

    <FrontPage>
    </FrontPage>


  </div>
)

export default IndexPage
