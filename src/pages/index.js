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
// logo
import logo from '../components/FrontPage/logo.png'

const IndexPage = () => (
  <div>
  
    <div style={{marginTop: '10%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}} >
    <Hidden xs sm md>
    <img src={logo} style={{width: '25%'}} />
    </Hidden>
    <Hidden lg xl>
    <img src={logo} style={{width: '60%'}} />
    </Hidden>
    <TitleAndSubtitle
      subtitle={"Seleziona il linguaggio / Select the language"}
    />
    </div>

    <FrontPage>
    </FrontPage>


  </div>
)

export default IndexPage
