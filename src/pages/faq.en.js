import React from 'react'
import Link from 'gatsby-link'

// components
import Header from '../components/Header'
import SelectLangMini from '../components/SelectLangMini'
import FaqComponent from '../components/FaqComponent'

import {Container, Row, Col, Visible, Hidden} from 'react-grid-system'


const FaqPage = () => (
  <div>
  <Header />
  <SelectLangMini currentPage={"EN"} />

  <FaqComponent
  question1={"E’ possibile modificare il tempo di transizione tra opaco e trasparente?"}
  answer1={"No, il cambio di stato di INVISIBLE è istantaneo."}
  question2={"E’ possibile regolare il grado di trasparenza?"}
  answer2={"Si, mediante l’uso di specifici alimentatori, è possibile regolare il grado di trasparenza, comandandoli attraverso i più comuni dimmer."}
  question3={"Quando INVISIBLE consuma energia?"}
  answer3={"INVISIBLE consuma energia solo quando è trasparente, con un consumo indicativo di 7W al metro quadro."}
  question4={"Che tensione richiede?"}
  answer4={"INVISIBLE richiede una tensione di 70 V AC a 50Hz/60Hz"}
  question5={"Qual è lo spessore disponibile di INVISIBLE Glass?"}
  answer5={"INVISIBLE Glass, è composto da due lastre in vetro e una lamina LCD nel mezzo. Lo spessore delle lastre può essere richiesto a 3,4 o 5 mm.\n | Esempio:  4mm (vetro1) + 1mm (lamina LCD) + 4mm (vetro2) = 9 mm di spessore INVISIBLE Glass"}
  question6={"Che tipo di cavo è necessario per collegare il trasformatore al vetro?"}
  answer6={"Due tipi di cavi sono utilizzati per la convenienza dei clienti per quanto riguarda IPX4 o IPX7 norme di sicurezza elettrica."}
  question7={"Qual è la distanza massima tra il vetro e il trasformatore?"}
  answer7={"E’ consigliato posizionare il trasformatore il più vicino possibile ai vetri, evitando possibili dispersioni e perdite di potenza, ma comunque ad una distanza massima di 50 m."}
  question8={"Invisible Glass può avere tacche o buchi?"}
  answer8={"Sì, INVISIBLE può avere tacche o buchi, dando la possibilità di creare forme e geometrie di ogni genere."}  question9={"A quale temperatura lavora un pannello INVISIBLE?"}
  answer9={"La temperatura ottimale è compresa tra -20 ° C e + 60 ° C."}
  question10={"È sicuro toccare INVISIBLE quando è alimentato?"}
  answer10={"Assolutamente sì. Dal momento che la lamina LCD è stratificata tra due vetri, non rappresenta un rischio. "}
  question11={"Quali sono le dimensioni massime di INVISIBLE?"}
  answer11={"Le dimensioni massime di INVISIBLE sono 1.800 mm x 3.750 mm in un unico blocco; per dimensioni maggiori contattateci."}
  question12={"INVISIBLE può essere stratificato in vetri tripli?"}
  answer12={"Sì."}
  question13={"INVISIBLE può essere utilizzato come superfice di proiezione?"}
  answer13={"Sì. INVISIBLE è proiettabile con un normale videoproiettore. L’effetto migliore si ottiene posizionando il videoproiettore dietro la superfice di INVISIBLE."}
  question14={"INVISIBLE può essere stratificato con vetri temperati?"}
  answer14={"Sì. INVISIBLE può essere costituito da due lastre di vetro temprato e temperato extra-chiaro."}
  question15={"INVISIBLE è di semplice applicazione a pareti già esistenti?"}
  answer15={"La lamina LCD di INVISIBLE può essere applicata anche a pareti in vetro già esistenti, non richiede l’uso di sapone come le comuni pellicole, quindi garantisce una semplice e rapida installazione."}
  question16={""}
  answer16={""}
  question17={""}
  answer17={""}
  question18={""}
  answer18={""}


  />

  </div>
)

export default FaqPage
