import Scroll from "react-scroll";
import { Container } from "react-bootstrap";
import SectionTitle from "components/SectionTitle";
import Button from "components/Button";
import {
  PartnerLogo,
  PartnerName,
  ContentInner,
  ContentWrapper,
  SectionWrapper,
  PartnersWrapper,
  SectionSubtitle,
  ActionsWrapper,
  DecentralizedButtons,
} from "./Styled";
import Uniswap from "assets/images/HowToBuy/uniswap.svg";
import Certik from "assets/images/HowToBuy/certikaudit.png";
import Bitmart from "assets/images/HowToBuy/bitmart.svg";
import { RiShareBoxFill } from "react-icons/ri";

function HowToBuy(): JSX.Element {
  return (
    <Scroll.Element name="howtobuy">
      <SectionWrapper>
        <Container>
          <SectionTitle alignCenter subTitle="Buying">
            Where to buy Marvin
          </SectionTitle>
          <SectionSubtitle className="col col-sm-9 col-md-7 col-lg-5 col-xl-4">
            Buy Marvin on 70+ exchanges.&ensp;
            <span>Set slippage to 0.5% on DEX.</span> Need help?&ensp;
            <span>CLICK HERE</span>
          </SectionSubtitle>
          <ActionsWrapper className="col-lg-9 col-xl-8 col-xxl-7">
            <div>
              <SectionSubtitle>Decentralized</SectionSubtitle>
              <DecentralizedButtons>
                <Button type="secondary">
                  Uniswap
                  <RiShareBoxFill size={16} />
                </Button>
                <Button type="secondary">
                  CertiK Audit
                  <RiShareBoxFill size={16} />
                </Button>
              </DecentralizedButtons>
            </div>
            <div>
              <SectionSubtitle>Centralized</SectionSubtitle>
              <div className="d-flex justify-content-center align-items-center">
                <Button type="secondary">
                  Buy on Bitmart
                  <RiShareBoxFill size={16} />
                </Button>
              </div>
            </div>
          </ActionsWrapper>
          <ContentWrapper>
            <SectionTitle alignCenter subTitle="Partners">
              Join the invasion
            </SectionTitle>
            <PartnersWrapper>
              <ContentInner>
                <PartnerLogo src={Uniswap} alt="" />
                <PartnerName>Uniswap</PartnerName>
              </ContentInner>
              <ContentInner>
                <PartnerLogo src={Certik} alt="" />
                <PartnerName>CertiK Audit</PartnerName>
              </ContentInner>
              <ContentInner>
                <PartnerLogo src={Bitmart} alt="" />
                <PartnerName>Bitmart</PartnerName>
              </ContentInner>
            </PartnersWrapper>
          </ContentWrapper>
        </Container>
      </SectionWrapper>
    </Scroll.Element>
  );
}

export default HowToBuy;
