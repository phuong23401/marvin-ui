import { Container } from "react-bootstrap";
import Navigation from "../Navigation";
import {
  ButtonWrapper,
  FooterMain,
  FooterTitle,
  FooterWrapper,
  Informations,
  InputField,
  LogoImage,
  LogoWrap,
  SocialIcon,
  SocialLinks,
  SubText,
} from "./Styled";
import Logo from "assets/images/Footer/logo_footer.png";
import Twitter from "assets/images/Footer/twitter.png";
import Discord from "assets/images/Footer/discord.png";
import Instagram from "assets/images/Footer/instagram.png";
import Tiktok from "assets/images/Footer/tiktok.png";
import Facebook from "assets/images/Footer/facebook.png";
import Telegram from "assets/images/Footer/telegram.png";
import Youtube from "assets/images/Footer/youtube.png";
import Reddit from "assets/images/Footer/reddit.png";
import Twitch from "assets/images/Footer/twitch.png";
import { GrShare } from "react-icons/gr";
import { RiShareBoxFill } from "react-icons/ri";
import Button from "components/Button";

function Footer(): JSX.Element {
  return (
    <FooterMain>
      <Container>
        <FooterWrapper>
          <Informations>
            <LogoWrap>
              <a href="/">
                <LogoImage src={Logo} alt="" />
              </a>
            </LogoWrap>
            <SubText>
              Marvin, Elon Musk's oldest dog & Floki's oldest brother. A meme
              that has actual real time utility - staking, GameFi, Launchpad ,
              NFT Marketplace, and NFTs without the gas fees (well almost).
            </SubText>
            <SocialLinks>
              <SocialIcon href="/" target="blank_">
                <img src={Twitter} alt="" />
              </SocialIcon>
              <SocialIcon href="/" target="blank_">
                <img src={Discord} alt="" />
              </SocialIcon>
              <SocialIcon href="/" target="blank_">
                <img src={Instagram} alt="" />
              </SocialIcon>
              <SocialIcon href="/" target="blank_">
                <img src={Tiktok} alt="" />
              </SocialIcon>
              <SocialIcon href="/" target="blank_">
                <img src={Facebook} alt="" />
              </SocialIcon>
              <SocialIcon href="/" target="blank_">
                <img src={Telegram} alt="" />
              </SocialIcon>
              <SocialIcon href="/" target="blank_">
                <img src={Youtube} alt="" />
              </SocialIcon>
              <SocialIcon href="/" target="blank_">
                <img src={Reddit} alt="" />
              </SocialIcon>
              <SocialIcon href="/" target="blank_">
                <img src={Twitch} alt="" />
              </SocialIcon>
            </SocialLinks>
          </Informations>

          <div>
            <FooterTitle>Weblinks</FooterTitle>
            <Navigation footer={true} />
          </div>

          <div>
            <FooterTitle>Contracts</FooterTitle>
            <InputField>
              <span>ETH</span>
              <input type="text" />
              <RiShareBoxFill fill="rgba(255, 255, 255, 0.5)" size={14} />
            </InputField>
            <ButtonWrapper>
              <Button type="primary">Buy Marvin</Button>
              <Button type="secondary">Mint Pass</Button>
            </ButtonWrapper>
          </div>
        </FooterWrapper>
      </Container>
    </FooterMain>
  );
}

export default Footer;
