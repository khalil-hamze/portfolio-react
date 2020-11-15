import React from "react";
import Picture from "../../assets/images/background/HeroImage2.jpg";
import { HeroContainer, HeroBg, PictureBg } from "./HeroElements";

const HeroSection = () => {
  return (
    <HeroContainer>
      <HeroBg>{/* <PictureBg src={Picture} /> */}</HeroBg>
    </HeroContainer>
  );
};

export default HeroSection;
