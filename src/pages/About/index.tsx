import { Container } from "react-bootstrap";
import SectionTitle from "components/SectionTitle";
import {
  BottomWrapper,
  ButtonWrapper,
  ContentInner,
  ContentSubText,
  ContentText,
  ContentWrapper,
  Introduce,
  SectionWrapper,
} from "./Styled";
import ETH from "assets/images/About/eth.svg";
import Coingecko from "assets/images/About/coingecko.svg";
import CMC from "assets/images/About/cmc.svg";
import { RiShareBoxFill } from "react-icons/ri";
import Button from "components/Button";

function About(): JSX.Element {
  return (
    <SectionWrapper>
      <Container>
        <SectionTitle alignCenter subTitle="About">
          Marvin Statistics
        </SectionTitle>
        <Introduce>
          <p>
            Marvin is a token on Ethereum (ETH) chain with a current token
            holders of 1,356
          </p>
        </Introduce>
        <ContentWrapper>
          <ContentInner className="col-lg-12">
            <img src={ETH} />
            <ButtonWrapper>
              <Button type="secondary">
                Etherscan (ETH)
                <RiShareBoxFill size={16} />
              </Button>
            </ButtonWrapper>
            <ContentText>Marvin ETH contract addresses</ContentText>
            <span>Transactions</span>
            <h5>200k+on DEX</h5>
          </ContentInner>
          <ContentInner className="col-lg-6">
            <img src={Coingecko} />
            <ButtonWrapper>
              <Button type="secondary">
                Verified supply on CoinGecko
                <RiShareBoxFill size={16} />
              </Button>
            </ButtonWrapper>
            <span>Circulating Supply</span>
            <h5>1,000,000,000,000</h5>
          </ContentInner>
          <ContentInner className="col-lg-6">
            <img src={CMC} />
            <ButtonWrapper>
              <Button type="secondary">
                Verified supply on CoinMarketCap
                <RiShareBoxFill size={16} />
              </Button>
            </ButtonWrapper>
            <ContentText>Tokenomics</ContentText>
            <ContentSubText>
              Total Supply: 1,000,000,000,000 <br /> 3% buy/sell tax on DEX
            </ContentSubText>
          </ContentInner>
        </ContentWrapper>
        <BottomWrapper>
          <SectionTitle alignCenter size="sm">
            Marvin Statistics
          </SectionTitle>
          <ContentText>
            Marvin holder count continues to grow regardless of market
            conditions.
          </ContentText>
          <ButtonWrapper>
            <Button type="primary">Buy Marvin</Button>
          </ButtonWrapper>
        </BottomWrapper>
      </Container>
    </SectionWrapper>
  );
}

export default About;
