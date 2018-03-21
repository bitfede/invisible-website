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
import SubHeader from '../components/SubHeader'
import Jumbotron from '../components/Jumbotron'
import SezioneCosa from '../components/SezioneCosa'
import TitleAndSubtitle from '../components/TitleAndSubtitle'

const IndexPage = () => (
  <div>
    <SubHeader
      w1={"COSA"} w2={"PERCHÉ"}
      w3={"CHI"}  w4={"QUANDO"}
      w5={"DOVE"}
      >
    </SubHeader>

    <Jumbotron>
    </Jumbotron>

    <TitleAndSubtitle />

    <SezioneCosa>
    </SezioneCosa>


  </div>
)

export default IndexPage
