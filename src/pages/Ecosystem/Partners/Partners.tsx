import { PartnersWrapper, StyledButton } from "./Styled";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import Binance from "assets/images/Ecosystem/Partners/binance.png";
import Bitmart from "assets/images/Ecosystem/Partners/bitmart.png";
import Cmc from "assets/images/Ecosystem/Partners/cmc.png";
import Eth from "assets/images/Ecosystem/Partners/eth.png";
import Pancake from "assets/images/Ecosystem/Partners/pancake.png";

function Partners(): JSX.Element {
  return (
    <PartnersWrapper>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        speed={3000}
        breakpoints={{
          576: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          992: {
            slidesPerView: 3,
            spaceBetween: 20,
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
      <StyledButton>View all</StyledButton>
    </PartnersWrapper>
  );
}

export default Partners;
