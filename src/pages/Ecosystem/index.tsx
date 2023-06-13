import Scroll from "react-scroll";
import { Container } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import {
  BackgroundSubtitle,
  BackgroundTitle,
  BackgroundWrapper,
  ButtonWrapper,
  Introduce,
  PartnersWrapper,
  SectionWrapper,
  StyledPartnersButton,
  StyledPrimaryButton,
  StyledSecondaryButton,
  TitleWrapper,
} from "./Styled";
import CrewTheMoon from "./CrewTheMoon";
import Engagement from "./Engagement";
import ApprovedByElon from "./ApprovedByElon";
import Binance from "assets/images/Ecosystem/Partners/binance.png";
import Bitmart from "assets/images/Ecosystem/Partners/bitmart.png";
import Cmc from "assets/images/Ecosystem/Partners/cmc.png";
import Eth from "assets/images/Ecosystem/Partners/eth.png";
import Pancake from "assets/images/Ecosystem/Partners/pancake.png";

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
                <StyledPrimaryButton>Launch Dapp</StyledPrimaryButton>
                <StyledSecondaryButton>Mint Pass</StyledSecondaryButton>
              </ButtonWrapper>
            </TitleWrapper>
          </BackgroundWrapper>

          <CrewTheMoon />

          <PartnersWrapper>
            <Swiper
              slidesPerView={1}
              spaceBetween={20}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              speed={3000}
              breakpoints={{
                576: {
                  slidesPerView: 2,
                  spaceBetween: 30,
                },
                992: {
                  slidesPerView: 3,
                  spaceBetween: 50,
                },
              }}
              modules={[Autoplay]}
            >
              <SwiperSlide>
                <img src={Binance} alt="Binance" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={Bitmart} alt="Bitmart" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={Cmc} alt="Cmc" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={Eth} alt="Eth" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={Pancake} alt="Pancake" />
              </SwiperSlide>
            </Swiper>
            <StyledPartnersButton>View all</StyledPartnersButton>
          </PartnersWrapper>
        </Container>

        <Engagement />
        <ApprovedByElon />
      </SectionWrapper>
    </Scroll.Element>
  );
}

export default Ecosystem;
