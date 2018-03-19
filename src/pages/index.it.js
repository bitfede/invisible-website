/*
  AUTHOR: Federico G. De Faveri
  PURPOSE: Website page for Invisible by Techlit
  DATE: March 2018
*/

import React from 'react'
import Link from 'gatsby-link'
// grid system
import {Container, Row, Col, Visible, Hidden} from 'react-grid-system'
// subheader component
import SubHeader from '../components/SubHeader'

const IndexPage = () => (
  <div>
    <SubHeader w1={"wasup"} w2={"wasup2"}></SubHeader>
  </div>
)

export default IndexPage
