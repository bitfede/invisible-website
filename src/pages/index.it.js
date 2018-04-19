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
import ContattaciForm from '../components/ContattaciForm'
import Footer from '../components/Footer'

const IndexPage = () => (
  <div>
    <SubHeader
      w1={"COSA"} w2={"PERCHÉ"}
      w3={"CHI"}  w4={"QUANDO"}
      w5={"DOVE"} w6={"CONTATTACI"}
      >
    </SubHeader>

    <Jumbotron>
    </Jumbotron>

    <TitleAndSubtitle
      w={"cosa"}
      title={"Cos'é Invisible?"}
      subtitle={"Invisible è una soluzione altamente tecnologica per cambiare lo stato di un vetro da opaco a trasparente, con un solo clic."}
    />

    <SezioneCosa
      telecomandoSubtitle={"Clicca il telecomando e scopri l’effetto - Funzionamento radiocomando"}
    />

    <VisualTextBlocks
      
    />

    <TitleAndSubtitle
      w={"dove"}
      title={"Dove si applica?"}
      subtitle={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum molestie neque odio"}
    />

    <DoveFourBoxes>
    </DoveFourBoxes>

    <TitleAndSubtitle
      w={"quando"}
      title={"Quando usare Invisible?"}
      subtitle={""}
    />

    <ThreeCircles>
    </ThreeCircles>

    <SezioneChi>
    </SezioneChi>

    <TitleAndSubtitle
      w={"perche"}
      title={"Perchè Techlit?"}
      subtitle={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum molestie neque odio"}
    />

    <SezionePerche>
    </SezionePerche>

    <TitleAndSubtitle
      w={"contattaci"}
      title={"Contattaci"}
      subtitle={"Compila i campi qui sotto ed entra in contatto con il team di invisible"}
    />

    <ContattaciForm>
    </ContattaciForm>

    <Footer>
    </Footer>

  </div>
)

export default IndexPage
