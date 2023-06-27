import { Container } from "react-bootstrap";
import styled from "styled-components/macro";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";
import SectionTitle from "components/SectionTitle";
import Button from "components/Button";
import Image1 from "assets/images/Ecosystem/Engagement/engagement_1.png";
import Image2 from "assets/images/Ecosystem/Engagement/engagement_2.png";
import Image3 from "assets/images/Ecosystem/Engagement/engagement_3.png";
import SwipperPrev from "assets/images/swiper_prev.png";
import SwipperNext from "assets/images/swiper_next.png";
import { RiShareBoxFill } from "react-icons/ri";

const EngagementWrapper = styled.div`
  position: relative;
  padding-top: 3rem;
`;

const ContentWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  margin-top: 2rem;

  @media (min-width: 1200px) {
    justify-content: flex-start;
    margin-left: 2rem;
  }
`;

const ContentImage = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  width: fit-content;
  height: fit-content;
  margin-bottom: 1rem;

  img {
    width: 300px;
    height: 440px;
    border-radius: 18px;
  }

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 0.71) 94.79%
    );
    z-index: 0;
  }

  @media (min-width: 768px) {
    padding: 0 0.5rem;
  }

  @media (min-width: 1200px) {
    padding: 0;
    margin-right: 3rem;
    margin-bottom: 0;
  }

  @media (min-width: 1400px) {
    margin-right: 5rem;
  }
`;

const ButtonWrapper = styled.div`
  position: absolute;
  bottom: 1.5rem;
  left: 1rem;
  z-index: 1;
`;

function Engagement(): JSX.Element {
  return (
    <EngagementWrapper>
      <Container>
        <SectionTitle subTitle="Elon Engagement">
          There are no coincidences
        </SectionTitle>
        <ContentWrapper>
          <Swiper
            cssMode={true}
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            }}
            pagination={true}
            mousewheel={true}
            keyboard={true}
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
                spaceBetween: 30,
              },
            }}
            modules={[Navigation, Pagination, Mousewheel, Keyboard]}
          >
            <SwiperSlide>
              <ContentImage>
                <img src={Image1} alt="" />
                <ButtonWrapper>
                  <a
                    href="https://twitter.com/marvin_inu/status/1594760645794271232?s=46&t=sOUOfKmNG-dzWrhhr4IGAQ"
                    target="_blank"
                  >
                    <Button type="secondary">
                      Check it out
                      <RiShareBoxFill size={15} />
                    </Button>
                  </a>
                </ButtonWrapper>
              </ContentImage>
            </SwiperSlide>
            <SwiperSlide>
              <ContentImage>
                <img src={Image2} alt="" />
                <ButtonWrapper>
                  <Button type="secondary">
                    Check it out
                    <RiShareBoxFill size={16} />
                  </Button>
                </ButtonWrapper>
              </ContentImage>
            </SwiperSlide>
            <SwiperSlide>
              <ContentImage>
                <img src={Image3} alt="" />
                <ButtonWrapper>
                  <a
                    href="https://twitter.com/marvin_inu/status/1632682618171916289?s=46&t=sOUOfKmNG-dzWrhhr4IGAQ"
                    target="_blank"
                  >
                    <Button type="secondary">
                      Check it out
                      <RiShareBoxFill size={15} />
                    </Button>
                  </a>
                </ButtonWrapper>
              </ContentImage>
            </SwiperSlide>
            <img className="swiper-button-prev" src={SwipperPrev} alt="" />
            <img className="swiper-button-next" src={SwipperNext} alt="" />
          </Swiper>
        </ContentWrapper>
      </Container>
    </EngagementWrapper>
  );
}

export default Engagement;
