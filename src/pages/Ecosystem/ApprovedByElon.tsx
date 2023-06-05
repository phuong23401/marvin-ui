import styled from "styled-components/macro";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";
import SectionTitle from "components/SectionTitle";
import Image1 from "assets/images/Ecosystem/ApprovedByElon/approved_1.png";
import Image2 from "assets/images/Ecosystem/ApprovedByElon/approved_2.png";
import Image3 from "assets/images/Ecosystem/ApprovedByElon/approved_3.png";

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

  img {
    width: 295px;
    
    @media (min-width: 375px) {
      width: 350px;
    }

    @media (min-width: 576px) {
      width: 100%;
    }
  }

  @media (min-width: 1200px) {
    justify-content: flex-start;
  }
`;

function ApprovedByElon(): JSX.Element {
  return (
    <ApprovedWrapper>
      <SectionTitle subTitle="Where it all started">
        Approved by Elon
      </SectionTitle>
      <ContentWrapper>
        <Swiper
          cssMode={true}
          navigation={true}
          pagination={true}
          mousewheel={true}
          keyboard={true}
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
              spaceBetween: 20,
            },
            992: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
          }}
          modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        >
          <SwiperSlide>
            <img src={Image1} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Image2} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Image3} alt="" />
          </SwiperSlide>
        </Swiper>
      </ContentWrapper>
    </ApprovedWrapper>
  );
}

export default ApprovedByElon;
