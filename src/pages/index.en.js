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
import Header from '../components/Header'
import SubHeader from '../components/SubHeader'
import Jumbotron from '../components/Jumbotron'
import SezioneCosa from '../components/SezioneCosa'
import TitleAndSubtitle from '../components/TitleAndSubtitle'
import VisualTextBlocks from '../components/VisualTextBlocks'
import DoveFourBoxes from '../components/DoveFourBoxes'
import ThreeCircles from '../components/ThreeCircles'
import SezioneChi from '../components/SezioneChi'
import SezionePerche from '../components/SezionePerche'
import ContattaciForm from '../components/ContattaciForm'
import Footer from '../components/Footer'

const IndexPage = () => (
  <div>
    <Header />
    <SubHeader
      w1={"WHAT"} w2={"WHY"}
      w3={"WHO"}  w4={"WHEN"}
      w5={"WHERE"} w6={"CONTACT US"}
      >
    </SubHeader>

    <Jumbotron>
    </Jumbotron>

    <TitleAndSubtitle
      w={"cosa"}
      title={"WHAT IS INVISIBLE?"}
      subtitle={"Invisible is a technology that can be applied to glass. It changes the glass' transparency with a simple command"}
    />

    <SezioneCosa
      telecomandoSubtitle={"Click on the remote controller and see what happens"}
    />

    <VisualTextBlocks
      titolo1={"Invisible tecnology – can be installed on existing glasses and glass panels"}
      para1={"Invisible is a thin plastic film that can be applied on existing glass surfaces: you will not need to change the glass, the product can be applied directly on the existing surface"}
      titolo2={"Invisible glass – can be installed during the building phase"}
      para2={"Invisible Glass is a glass layer with various thicknesses, thanks to a small elecric charge it can change state from opaque to completely transparent"}

    />

    <TitleAndSubtitle
      w={"dove"}
      title={"WHERE CAN I APPLY IT?"}
      subtitle={"Invisible is well-suited for many different places"}
    />

    <DoveFourBoxes
      title1={"Offices"}
      para1={"From confidential meetings to brainstorming sessions. Privacy is fundamental in both big and small companies. Invisible is the perfect solution for all these environments where it's important to manage privacy in an easy way"}
      title2={"Homes"}
      para2={"Invisible is a synonim of interior design because it is able to perfectly mix innovation, functionality and aestetics. Perfect for making glasses opaque and managing privacy at home, or simply to decorate rooms and separating them."}
      title3={"Stores"}
      para3={"Invisible is the perfect solution for your store: it allows yout to keep separate environments, set up reserved rooms and surprise your customers with unexpected special effects, even on the storefront!"}
      title4={"Hotels"}
      para4={"On-demand privacy or transparency: Invisible  allows you to optically manage and optimize the space in your room creating separate environments and managing privacy with a click. Take advantage of the creative game of light and space, separating the bedroom from the bathroom with an Invisible-powered glass wall."}
    />

    <TitleAndSubtitle
      w={"quando"}
      title={"WHEN CAN I USE INVISIBLE?"}
      subtitle={""}
    />

    <ThreeCircles
    title1={"PRIVACY"}
    subtitle1={"Manage your privacy with a click"}
    title2={"DESIGN"}
    subtitle2={"Invisible is a high-end design product that combines aestetics with functionality"}
    title3={"VIDEOPROIEZIONE"}
    subtitle3={"Invisible's surface is well-suited for video projection"}
    />

    <SezioneChi />

    <TitleAndSubtitle
      w={"perche"}
      title={"WHY TECHLIT?"}
      subtitle={"Choose the right partner"}
    />

    <SezionePerche
      title1={"PROGETTAZIONE"}
      para1={"Invisible allows you to install the technology on existing glass, making this potentially available to every glass surface. It can be also implemented from scratch, where you design your environment from zero, with the Invisible Glass, customizable with every thickness and shape."}
      title2={"INTEGRAZIONE"}
      para2={"Our experience as technology partners of many companies, allowed us to develop a product that is able to integrate in simple ways with all the controls and internet-of-things already present in many buildings and warehouses."}
      title3={"INNOVAZIONE"}
      para3={"Invisible means innovation because of its ability and to adapt everywhere and his ability to look amazing. It is truly a functional piece of technology that can go anywhere"}
    />

    <TitleAndSubtitle
      w={"contattaci"}
      title={"Contattaci"}
      subtitle={"Compila i campi qui sotto ed entra in contatto con il team di invisible"}
    />

    <ContattaciForm
      field1={"Email"}
      placehold1={"email@example.com"}
      fieldcompany={"Company"}
      placehldcompany={"Name of your Company"}
      field2={"Name"}
      placehold2={"Name and Last Name"}
      field3={"Message"}
      placehold3={"Do you have a question or doubt? Write everything here.."}
      btn={"Send"}
    />

    <Footer>
    </Footer>

  </div>
)

export default IndexPage
