import React from 'react'
import Icon1 from '../../../images/online-banking.png'
import Icon2 from '../../../images/cards.png'
import Icon3 from '../../../images/loans.png'
import Icon4 from '../../../images/insurance.webp'
import Icon5 from '../../../images/24-7.webp'
import Icon6 from '../../../images/secure.png'
import { 
    ServicesCard, 
    ServicesContainer, 
    ServicesH1, 
    ServicesH2, 
    ServicesIcon, 
    ServicesP, 
    ServicesWrapper1, 
    ServicesWrapper2  
} from './ServiceElements'


const Services = () => {
  return (
    <>
        <ServicesContainer id="services">
            <ServicesH1>Our Services</ServicesH1>
            <ServicesWrapper1>
                <ServicesCard>
                    <ServicesIcon src={Icon1}/>
                    <ServicesH2>Online Banking</ServicesH2>
                    <ServicesP>
                        HAI BANK allows customer to access their account 24/7 without having to visit a physical branch with the help of online banking
                    </ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon2}/>
                    <ServicesH2>Credit and Debit Cards</ServicesH2>
                    <ServicesP>
                        Manages your credit card and debit card activity with HAI BANK without any problem
                    </ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon3}/>
                    <ServicesH2>Loans</ServicesH2>
                    <ServicesP>
                        HAI BANK allows customer to apply for loans. Loans approved with digital documents and digital signature
                    </ServicesP>
                </ServicesCard>
            </ServicesWrapper1>
            <ServicesWrapper2>
                <ServicesCard>
                    <ServicesIcon src={Icon4}/>
                    <ServicesH2>Insurances</ServicesH2>
                    <ServicesP>
                        HAI BANK provides many insurances that can secure your future and also your families future
                    </ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon5}/>
                    <ServicesH2>24/7 Service</ServicesH2>
                    <ServicesP>
                        Customer can get services HAI BANK at anytime if customer has a problem
                    </ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon6}/>
                    <ServicesH2>Secure Systems</ServicesH2>
                    <ServicesP>
                        HAI BANK will protect all customer's data because customer security is our top priority
                    </ServicesP>
                </ServicesCard>
            </ServicesWrapper2>
        </ServicesContainer>
    </>
  )
}

export default Services