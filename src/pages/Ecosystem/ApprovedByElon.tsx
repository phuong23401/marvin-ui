import { Container } from "react-bootstrap";
import styled from "styled-components/macro";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";
import SectionTitle from "components/SectionTitle";
import Image1 from "assets/images/Ecosystem/ApprovedByElon/approved_1.png";
import Image2 from "assets/images/Ecosystem/ApprovedByElon/approved_2.png";
import Image3 from "assets/images/Ecosystem/ApprovedByElon/approved_3.png";
import Image4 from "assets/images/Ecosystem/ApprovedByElon/approved_4.png";
import Image5 from "assets/images/Ecosystem/ApprovedByElon/approved_5.png";
import SwipperPrev from "assets/images/swiper_prev.png";
import SwipperNext from "assets/images/swiper_next.png";

const ApprovedWrapper = styled.div`
  position: relative;
  padding-top: 5rem;
`;

const ContentWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  margin-top: 2rem;
`;

const ContentImage = styled.img`
  border: 2px solid #1f1f1f;
  width: 295px;
  border-radius: 20px;

  @media (min-width: 768px) {
    width: 300px;
  }
`;

function ApprovedByElon(): JSX.Element {
  return (
    <ApprovedWrapper>
      <Container>
        <SectionTitle subTitle="Where it all started">
          Approved by Elon
        </SectionTitle>
      </Container>
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
            <ContentImage src={Image1} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <ContentImage src={Image2} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <ContentImage src={Image3} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <ContentImage src={Image4} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <ContentImage src={Image5} alt="" />
          </SwiperSlide>
          <img className="swiper-button-prev" src={SwipperPrev} alt="" />
          <img className="swiper-button-next" src={SwipperNext} alt="" />
        </Swiper>
      </ContentWrapper>
    </ApprovedWrapper>
  );
}

export default ApprovedByElon;
