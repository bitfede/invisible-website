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
import VisualTextBlocks from '../components/VisualTextBlocks'
import DoveFourBoxes from '../components/DoveFourBoxes'
import ThreeCircles from '../components/ThreeCircles'
import SezioneChi from '../components/SezioneChi'
import SezionePerche from '../components/SezionePerche'
import ContactForm from '../components/ContactForm'
import ContattaciForm from '../components/ContattaciForm'

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

    <TitleAndSubtitle
      title={"Cos'é Invisible?"}
      subtitle={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum molestie neque odio"}
    />

    <SezioneCosa>
    </SezioneCosa>

    <VisualTextBlocks>
    </VisualTextBlocks>

    <TitleAndSubtitle
      title={"Dove si applica?"}
      subtitle={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum molestie neque odio"}
    />

    <DoveFourBoxes>
    </DoveFourBoxes>

    <TitleAndSubtitle
      title={"Quando usare Invisible?"}
      subtitle={""}
    />

    <ThreeCircles>
    </ThreeCircles>

    <SezioneChi>
    </SezioneChi>

    <TitleAndSubtitle
      title={"Perchè Techlit?"}
      subtitle={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum molestie neque odio"}
    />

    <SezionePerche>
    </SezionePerche>

    <TitleAndSubtitle
      title={"Contattaci"}
      subtitle={"Compila i campi qui sotto ed entra in contatto con il team di invisible"}
    />

    <ContattaciForm>
    </ContattaciForm>

  </div>
)

export default IndexPage
