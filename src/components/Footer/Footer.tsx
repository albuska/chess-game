import {
  FooterContainer,
  FooterIconWrapper,
  FooterPulsingHeart,
  FooterText,
} from "./footer.styles";

const Footer = () => {
  <FooterContainer>
    <FooterText>
      Created by <b>Albina Anistratenko</b>
    </FooterText>
    <FooterText>Full stack developer</FooterText>
    <FooterIconWrapper>
      <FooterPulsingHeart></FooterPulsingHeart>
    </FooterIconWrapper>
    <FooterIconWrapper>
      <FooterPulsingHeart></FooterPulsingHeart>
    </FooterIconWrapper>
  </FooterContainer>;
};

export default Footer;
