import Scroll from 'react-scroll'
import { Container } from 'react-bootstrap'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper'
import {
  BackgroundSubtitle,
  BackgroundTitle,
  BackgroundWrapper,
  ButtonWrapper,
  Introduce,
  PartnersWrapper,
  SectionWrapper,
  StyledSecondaryButton,
  TitleWrapper
} from './Styled'
import CrewTheMoon from './CrewTheMoon'
import Engagement from './Engagement'
import ApprovedByElon from './ApprovedByElon'
import Bitmart from 'assets/images/Ecosystem/Partners/bitmart.png'
import Cmc from 'assets/images/Ecosystem/Partners/cmc.png'
import Eth from 'assets/images/Ecosystem/Partners/eth.png'

function Ecosystem(): JSX.Element {
  return (
    <Scroll.Element name="ecosystem">
      <SectionWrapper>
        <Container>
          <BackgroundWrapper>
            <TitleWrapper>
              <Introduce>Marvin inu ecosystem</Introduce>
              <BackgroundTitle>Elon's bossy dog</BackgroundTitle>
              <BackgroundSubtitle>
                Ignite your rocket and join the bossiest Web3 community now!
              </BackgroundSubtitle>
              <ButtonWrapper>
                {/* <StyledPrimaryButton
                  href="https://swap.marvininu.finance/"
                  target="_blank"
                >
                  Launch Dapp
                </StyledPrimaryButton> */}
                <StyledSecondaryButton
                  href="https://nft.marvin-ecosystem.com/"
                  target="_blank"
                >
                  Mint Pass
                </StyledSecondaryButton>
              </ButtonWrapper>
            </TitleWrapper>
          </BackgroundWrapper>

          <CrewTheMoon />

          <PartnersWrapper>
            <Swiper
              slidesPerView={1}
              spaceBetween={20}
              loop={true}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false
              }}
              speed={3000}
              breakpoints={{
                576: {
                  slidesPerView: 2,
                  spaceBetween: 30
                },
                992: {
                  slidesPerView: 3,
                  spaceBetween: 50
                }
              }}
              modules={[Autoplay]}
            >
              {/* <SwiperSlide>
                <a
                  href="https://www.binance.com/en/price/marvin-inu"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={Binance} alt="Binance" />
                </a>
              </SwiperSlide> */}
              <SwiperSlide>
                <a
                  href="https://www.bitmart.com/trade/en-US?symbol=MARVIN_USDT&layout=basic"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={Bitmart} alt="Bitmart" />
                </a>
              </SwiperSlide>
              <SwiperSlide>
                <a
                  href="https://coinmarketcap.com/currencies/marvin-inu/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={Cmc} alt="Cmc" />
                </a>
              </SwiperSlide>
              <SwiperSlide>
                <a
                  href="https://etherscan.io/token/0x55a380d134d722006a5ce2d510562e1239d225b1"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={Eth} alt="Eth" />
                </a>
              </SwiperSlide>
            </Swiper>
            {/* <StyledPartnersButton>View all</StyledPartnersButton> */}
          </PartnersWrapper>
        </Container>

        <Engagement />
        <ApprovedByElon />
      </SectionWrapper>
    </Scroll.Element>
  )
}

export default Ecosystem
