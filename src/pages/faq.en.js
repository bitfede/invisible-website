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
  question1={"Is it possible to modify the transition time from opaque to transparent"}
  answer1={"No, INVISIBLE's change of state is instant"}
  question2={"Can we regulate how transparent the glass is?"}
  answer2={"Yes, by using special power supplies the transparency can be changed, a regular dimmer will do the job."}
  question3={"When does INVISIBLE consume energy?"}
  answer3={"INVISIBLE consumes energy only when it is in the transparent state, consuming roughly 7W for each square meter."}
  question4={"How much tension does it need?"}
  answer4={"INVISIBLE needs an electrical tension of 70 V AC at 50Hz/60Hz"}
  question5={"What are the available thicknesses for INVISIBLE Glass?"}
  answer5={"INVISIBLE Glass, is composed of two sheets of glass plus an LCD sheet. You can request different glass thicknesses such as 3,4 or 5 mm.\n | Example:  4mm (glass1) + 1mm (LCD sheet) + 4mm (glassw) = 9 mm of thickness for this specific INVISIBLE Glass"}
  question6={"What kind of cable do I need to attach the power supply to the glass?"}
  answer6={"Clients can choose between IPX4 or IPX7 cables, both compliant to electrical safety norms"}
  question7={"What's the maximum distance between the power supply and the glass?"}
  answer7={"We suggest to position the power supply as close as possible to the glasses, so that loss of power is reduced to the minimum. The absolute maximum distance is 50m."}
  question8={"Can Invisible Glass have holes or dents?"}
  answer8={"Yes, INVISIBLE can have holes or dents, it is possible to create any shape and geometric figure."}
  question9={"What is the ideal temperature for INVISIBLE?"}
  answer9={"The best temperature is between -20 ° C and + 60 ° C."}
  question10={"Is it safe to touch INVISIBLE when it's on?"}
  answer10={"Yes of course! Since the LCD sheet is isolated between two other glass sheets there is no safety hazard in touching it"}
  question11={"What are the maximum dimensions for INVISIBLE?"}
  answer11={"INVISIBLE's maximum dimensions are 1.800 mm x 3.750 mm in a unique block; contact us to request bigger dimensions."}
  question12={"INVISIBLE can be done with triple glass stratification instead of double?"}
  answer12={"Yes."}
  question13={"Can INVISIBLE be used as a projector-friendly surface?"}
  answer13={"Yes. INVISIBLE is a projector-friendly surface with any regular videoprojector. For best result position the videoprojector behind INVISIBLE's surface."}
  question14={"Can INVISIBLE can be installed with tempered glass?"}
  answer14={"Yes. INVISIBLE can be made with two layers of tempered glass and extra-clear tempered glass."}
  question15={"Can INVISIBLE be installed in existing glass walls/sheets?"}
  answer15={"INVISIBLE's LCD layer can be applied to any existing glass surfaces. It does not require the use of soap like the other films, so the installation is fast and easy."}
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
