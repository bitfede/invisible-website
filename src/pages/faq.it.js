import React from 'react'
import Link from 'gatsby-link'

// components
import SelectLangMini from '../components/SelectLangMini'
import FaqComponent from '../components/FaqComponent'

import {Container, Row, Col, Visible, Hidden} from 'react-grid-system'


const FaqPage = () => (
  <div>
  <SelectLangMini />

  <FaqComponent />

  </div>
)

export default FaqPage
