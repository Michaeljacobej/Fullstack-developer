import React from 'react'
import { Button } from '../../ButtonElement'
import { 
    BtnWrap, 
    Column1, 
    Column2, 
    Img, 
    ImgWrap, 
    InfoContainer, 
    InfoRow, 
    InfoWrapper, 
    Subtitle, 
    TextWrapper, 
    TopLine, 
    Heading 
} from './InfoElements'

const NetBanking = ({lightBg, id, imgStart, topLine, lightText, headline, darkText, description1, description2, description3, description4, buttonLabel, img, alt}) => {
  return (
    <>
        <InfoContainer lightBg={lightBg} id={id}>
            <InfoWrapper>
                <InfoRow imgStart={imgStart}>
                    <Column1>
                        <TextWrapper>
                            <TopLine>{topLine}</TopLine>
                            <Heading lightText={lightText}>{headline}</Heading>
                            <Subtitle darkText={darkText}>
                                <p>{description1}</p>
                                <p>{description2}</p>
                                <p>{description3}</p>
                                <p>{description4}</p>
                            </Subtitle>
                            <BtnWrap>
                                <Button to="/sign-up">{buttonLabel}</Button>
                            </BtnWrap>
                        </TextWrapper>
                    </Column1>
                    <Column2>
                        <ImgWrap>
                            <Img src={img} alt={alt}></Img>
                        </ImgWrap>
                    </Column2>
                </InfoRow>     
            </InfoWrapper>
        </InfoContainer>
    </>
  )
}

export default NetBanking