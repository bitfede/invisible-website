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
      w1={"COSA"} w2={"DOVE"}
      w3={"QUANDO"}  w4={"CHI"}
      w5={"PERCHÉ"} w6={"CONTATTACI"}
      >
    </SubHeader>

    <Jumbotron>
    </Jumbotron>

    <TitleAndSubtitle
      w={"cosa"}
      title={"COS'E INVISIBLE?"}
      subtitle={"Invisible è una soluzione altamente tecnologica per cambiare lo stato di un vetro da opaco a trasparente, con un solo clic."}
    />

    <SezioneCosa
      telecomandoSubtitle={"Clicca il telecomando e scopri l’effetto - Funzionamento radiocomando"}
    />

    <VisualTextBlocks
      titolo1={"Invisible tecnology – applicabile su vetrate già installate"}
      para1={"Invisible è una lamina plastica che si applica su superfici di vetro già esistenti: non serve cambiare il vetro, il prodotto può essere applicato direttamente sulla superfice già esistente"}
      titolo2={"Invisible glass – installabile in fase di costruzione"}
      para2={"Invisible Glass è una lastra di vetro con spessore a scelta che, attraverso una piccola carica elettrica passa da opaca a trasparente"}

    />

    <TitleAndSubtitle
      w={"dove"}
      title={"DOVE SI APPLICA?"}
      subtitle={"Invisible è adatto a tanti luoghi diversi"}
    />

    <DoveFourBoxes
      title1={"Uffici"}
      para1={"Dalle riunioni confidenziali al brainstorming. La privacy nelle grandi aziende o piccole aziende è un elemento essenziale. Invisible è la soluzione perfetta per tutti gli ambienti in cui è necessario poter gestire la privacy in modo semplice ed efficace."}
      title2={"Abitazioni"}
      para2={"Invisible è anche sinonimo  di interior design capace di coniugare alla perfezione innovazione, funzionalità ed estetica. Perfetto per opacizzare grandi vetrate e gestire la privacy nell’ambiente domestico, oppure funzionale e decorativo per impreziosire pareti e separare gli ambienti."}
      title3={"Negozi"}
      para3={"Invisible è la soluzione perfetta per il tuo store: ti permette di separare gli ambienti, allestire aree riservate e stupire il tuo pubblico con effetti inaspettati anche in vetrina!"}
      title4={"Hotels"}
      para4={"Dalla trasparenza alla privacy su richiesta: Invisible  permette di gestire e ottimizzare otticamente lo spazio nella tua stanza creando ambienti separati e gestendo la privacy con un click. Approfitta del gioco creativo di luce e spazio, separando la camera da letto dal bagno tramite una parete divisoria con Invisible glass."}
    />

    <TitleAndSubtitle
      w={"quando"}
      title={"Quando usare Invisible?"}
      subtitle={""}
    />

    <ThreeCircles
    title1={"PRIVACY"}
    subtitle1={"Gestisci la tua privacy con un click"}
    title2={"DESIGN"}
    subtitle2={"Invisible è un prodotto di Design che unisce estetica e funzionalità"}
    title3={"PROIEZIONE"}
    subtitle3={"La superficie di invisible ben si presta alla videoproiezione"}
    />

    <SezioneChi />

    <TitleAndSubtitle
      w={"perche"}
      title={"Perchè Techlit?"}
      subtitle={"Scegli il partner giusto"}
    />

    <SezionePerche
      title1={"PROGETTAZIONE"}
      para1={"Invisible ti permette di applicare la tecnologia di oscuramento a superfici già installate, rendendo la soluzione fruibile praticamente in ogni ambiente dotato di superfici a vetro, oppure di progettare ambienti e soluzioni di design da zero, utilizzando l’innovativo vetro Invisble glass, gestendone lo spessore e le dimesioni e l’estetica."}
      title2={"INTEGRAZIONE"}
      para2={"La nostra esperienza, come partner tecnologici nelle aziende, ci ha permesso di sviluppare un prodotto capace di integrarsi in modo semplice con tutti gli strumenti di controllo e domotica già presenti nei Building e nelle aziende."}
      title3={"INNOVAZIONE"}
      para3={"Invisible è sinonimo di innovazione, dalla sua applicabilità, al concetto di estetica, dalla funzionalità alla possibilità di adattare la tecnologia in ogni ambiente."}
    />

    <TitleAndSubtitle
      w={"contattaci"}
      title={"Contattaci"}
      subtitle={"Compila i campi qui sotto ed entra in contatto con il team di invisible"}
    />

    <ContattaciForm
      field1={"Email"}
      placehold1={"email@esempio.com"}
      field2={"Nome"}
      placehold2={"Nome Cognome"}
      field3={"Messaggio"}
      placehold3={"Esigenze particolari? Scrivici pure qui.."}
      btn={"Invia"}
    />

    <Footer>
    </Footer>

  </div>
)

export default IndexPage
