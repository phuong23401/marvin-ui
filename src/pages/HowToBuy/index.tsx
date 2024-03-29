import Scroll from 'react-scroll'
import { Container } from 'react-bootstrap'
import SectionTitle from 'components/SectionTitle'
import Button from 'components/Button'
import {
  PartnerLogo,
  PartnerName,
  ContentInner,
  ContentWrapper,
  SectionWrapper,
  PartnersWrapper,
  SectionSubtitle,
  ActionsWrapper,
  DecentralizedButtons
} from './Styled'
import Uniswap from 'assets/images/HowToBuy/uniswap.svg'
import Certik from 'assets/images/HowToBuy/certikaudit.png'
import Bitmart from 'assets/images/HowToBuy/bitmart.svg'
import { RiShareBoxFill } from 'react-icons/ri'

function HowToBuy(): JSX.Element {
  return (
    <Scroll.Element name="howtobuy">
      <SectionWrapper>
        <Container>
          <SectionTitle alignCenter subTitle="Buying">
            Where to buy Marvin
          </SectionTitle>
          <SectionSubtitle className="col col-sm-9 col-md-7 col-lg-5 col-xl-4">
            Buy Marvin with creditcard, Apple Pay or Google Pay&ensp;
            <span>Set slippage to 0.5% on DEX.</span> Need help?&ensp;
            <span>CLICK HERE</span>
          </SectionSubtitle>
          <ActionsWrapper className="col-lg-9 col-xl-8 col-xxl-7">
            <div>
              <SectionSubtitle>Decentralized</SectionSubtitle>
              <DecentralizedButtons>
                <a
                  href="https://app.uniswap.org/#/swap?outputCurrency=0x55a380d134d722006A5CE2d510562e1239D225B1"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Button type="secondary">
                    Uniswap
                    <RiShareBoxFill size={16} />
                  </Button>
                </a>
                <a
                  href="https://www.dextools.io/app/en/ether/pair-explorer/0xf7199887cc7cdaaf4934bd82110a9fb8b864171c"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Button type="secondary">
                    DexTools
                    <RiShareBoxFill size={16} />
                  </Button>
                </a>
              </DecentralizedButtons>
            </div>
            <div>
              <SectionSubtitle>Centralized</SectionSubtitle>
              <div className="d-flex justify-content-center align-items-center">
                <a
                  href="https://www.bitmart.com/trade/en-US?symbol=MARVIN_USDT&layout=basic"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Button type="secondary">
                    Buy on Bitmart
                    <RiShareBoxFill size={16} />
                  </Button>
                </a>
              </div>
            </div>
          </ActionsWrapper>

          <div className="text-center my-5">
            <iframe
              width="400"
              height="720"
              frameBorder="0"
              allow="clipboard-read *; clipboard-write *; web-share *; accelerometer *; autoplay *; camera *; gyroscope *; payment *; geolocation *"
              src="https://flooz.xyz/embed/trade?swapDisabled=true&swapLockToToken=false&onRampDisabled=false&onRampAsDefault=true&onRampTokenAddress=0x55a380d134d722006A5CE2d510562e1239D225B1&onRampLockToken=true&stakeDisabled=true&network=eth&lightMode=false&primaryColor=%23d03a20&backgroundColor=transparent&roundedCorners=32&padding=40&refId=HoNfLq"
            ></iframe>
          </div>

          <ContentWrapper>
            <SectionTitle alignCenter subTitle="Invading Partners">
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
  )
}

export default HowToBuy
