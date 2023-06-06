import { Container } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";
import {
  ButtonWrapper,
  ContentInner,
  ContentText,
  ContentWrapper,
  Date,
  SectionWrapper,
  TextWrapper,
} from "./Styled";
import SectionTitle from "components/SectionTitle";
import Gamefi from "assets/images/Updates/gamefi.png";
import Minting from "assets/images/Updates/minting.png";
import Button from "components/Button";

function Updates(): JSX.Element {
  return (
    <SectionWrapper>
      <Container>
        <SectionTitle subTitle="Updates">Marvin Latest News</SectionTitle>
        <ContentWrapper>
          <Swiper
            cssMode={true}
            navigation={true}
            pagination={true}
            mousewheel={true}
            keyboard={true}
            slidesPerView={1}
            spaceBetween={20}
            loop={true}
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
                spaceBetween: 30,
              },
            }}
            modules={[Navigation, Pagination, Mousewheel, Keyboard]}
          >
            <SwiperSlide>
              <ContentInner>
                <img src={Gamefi} alt="" />
                <TextWrapper>
                  <Date>May 11, 2023</Date>
                  <ContentText>
                    Marvin releases its new Gamefi trailer and it seems this
                    ready for mars
                  </ContentText>
                </TextWrapper>
                <ButtonWrapper>
                  <Button type="outline">Gamefi</Button>
                </ButtonWrapper>
              </ContentInner>
            </SwiperSlide>
            <SwiperSlide>
              <ContentInner>
                <img src={Minting} alt="" />
                <TextWrapper>
                  <Date>May 11, 2023</Date>
                  <ContentText>Public Minting is now live</ContentText>
                </TextWrapper>
                <ButtonWrapper>
                  <Button type="outline">Minting</Button>
                </ButtonWrapper>
              </ContentInner>
            </SwiperSlide>
          </Swiper>
        </ContentWrapper>
      </Container>
    </SectionWrapper>
  );
}

export default Updates;
