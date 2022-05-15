import React, {useState} from "react";
import Videos from "../../../videos/bank1.mp4";
import { 
  ArrowForward, 
  ArrowRight, 
  HomeBg, 
  HomeBtnWrapper, 
  HomeContainer, 
  HomeContent, 
  HomeH1, 
  HomeP, 
  VideoBg 
} from "./HomeElements";
import { Button } from "../../ButtonElement";

const HomeSection = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover)
  }

  return (
    <>
      <HomeContainer id={'home'}>
        <HomeBg>
          <VideoBg autoPlay loop muted src={Videos} type="video/mp4" />
        </HomeBg>
        <HomeContent>
          <HomeH1>Make Your Online Banking Exprience Wonderful</HomeH1>
          <HomeP>Let's Begin this beautiful journey</HomeP>
          <HomeBtnWrapper>
            <Button 
              to="/sign-up" 
              onMouseEnter={onHover} 
              onMouseLeave = {onHover}
              primary='true'
              dark='true'
            >
              Get Started 
              {hover? <ArrowForward /> : <ArrowRight />}
            </Button>
          </HomeBtnWrapper>
        </HomeContent>
      </HomeContainer>
    </>
  );
};

export default HomeSection;
