import React from 'react'
import Link from 'gatsby-link'

// components
import SelectLangMini from '../components/SelectLangMini'
import FaqComponent from '../components/FaqComponent'

import {Container, Row, Col, Visible, Hidden} from 'react-grid-system'


const FaqPage = () => (
  <div>
  <SelectLangMini />
 
  <FaqComponent
  question1={"È possibile regolare la velocità della transizione da traslucido a trasparente?"}
  answer1={"Assolutamente no!  Il cambiamento in entrambe le direzioni è istantaneo."}
  question2={"È possibile Dimmerare l’effetto ? "}
  answer2={"non c'era la risposta sul doc word"}
  question3={"Quando Invisible consumano energia?"}
  answer3={"Invisible consuma energia quando è trasparente, ciòe in posizione ON."}
  question4={"Che tensione richiede?"}
  answer4={"Invisible richiede una tensione di 100 volt AC/50Hz/60Hz"}
  question5={"Qual è lo spessore disponibile di Invisible Glass?"}
  answer5={"Un vetro invisible standard è composto da due lastre di spessorre 3 mm o 4 mm o 5 mm ed invsible all’interno, lo spessore totale è 11,5/12 mm."}
  question6={"Che tipo di cavo è necessario per collegare il trasformatore al vetro?"}
  answer6={"Due tipi di cavi sono utilizzati per la convenienza dei clienti per quanto riguarda IPX4 o IPX7 norme di sicurezza elettrica."}
  question7={"Qual è la distanza massima tra il vetro e il trasformatore?"}
  answer7={"???"}
  question8={"Invisible Glass può avere tacche o buchi?"}
  answer8={"Sì, Invisible può avere tacche o buchi."}  question9={"Qual è la temperatura migliore per un pannello priva-Lite?"}
  answer9={" La temperatura ottimale per priva-Lite è compresa tra-20 ° c e + 60 ° c."}
  question10={"Invisible Glass può avere tacche o buchi?"}
  answer10={"Sì, Invisible può avere tacche o buchi."}
  question11={"È sicuro di toccare priva-Lite nella posizione \"on\"?"}
  answer11={"Assolutamente! Dal momento che il film Ciekłokrystaliczna è chiuso ermeticamente tra due vetri, priva-Lite è sicuro da toccare, anche ai bordi e anche in modalità on. Inoltre, il gruppo di esperti scientifici ha un grado di protezione IP43"}
  question12={"Quanta energia consuma quando \"on\"?"}
  answer12={"Invisible  consumano solo 7 watt per m ², considerando che una lampadina di casa consuma 84 W, il consumo è davvero limitato."}
  question13={"Quali sono le dimensioni massime?"}
  answer13={"Le dimensioni massime di invisible è 1800 mm x 3750 mm in un unico blocco, per dimensioni maggiori contattateci."}
  question14={"Invisible può essere stratificata in vetri doppi o tripli?"}
  answer14={"Sì. Entrambi i vetri doppi e tripli temperati adatti per pareti esterne."}
  question15={"Invisible può essere proiettato?"}
  answer15={"Sì. Invisible è proiettabile con un normale videoproiettore. L’effetto migliore si otterrà se il videoproiettore viene posizionato dietro alla pellicola"}
  question16={"Invisible può essere temperato/temperato?"}
  answer16={"Sì. Invisible può essere costituito da due lastre di vetro temprato e temperato extra-chiaro."}
  question17={"Invisible è di semplice applicazione a pareti già esistenti?"}
  answer17={"???"}
  question18={""}
  answer18={""}


  />

  </div>
)

export default FaqPage
