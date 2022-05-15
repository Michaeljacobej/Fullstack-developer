import React from 'react'
import Icon1 from '../../../images/aulia.jpeg'
import Icon2 from '../../../images/desi.jpeg'
import Icon3 from '../../../images/michael.jpeg'
import { 
    AboutCard, 
    AboutContainer, 
    AboutH1, 
    AboutH2, 
    AboutIcon, 
    AboutP, 
    AboutWrapper1, 
    AboutWrapper2  
} from './AboutElements'


const About = () => {
  return (
    <>
        <AboutContainer id="about">
            <AboutH1>About Me</AboutH1>
            <AboutWrapper1>

                <AboutCard>
                    <AboutIcon src={Icon3}/>
                    <AboutH2>Michael Jacob Ephariem Jehuda</AboutH2>
                    <AboutP>
                        Freelance - Fullstack Developer Software Engineer
                    </AboutP>
                </AboutCard>

            </AboutWrapper1>
        </AboutContainer>
    </>
  )
}

export default About