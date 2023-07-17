import { useEffect, useState } from "react";
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
import Button from "components/Button";
import SectionTitle from "components/SectionTitle";
import Gamefi from "assets/images/Updates/gamefi.png";
import Minting from "assets/images/Updates/minting.png";
import SwipperPrev from "assets/images/swiper_prev.png";
import SwipperNext from "assets/images/swiper_next.png";
import useSWR from "swr";
import { format } from "date-fns";

const apiUrl = "https://api-test.marvin-ecosystem.com/news/telegram";
const fetcher = (url: string) => fetch(url).then((res) => res.json());

interface News {
  id: number;
  title: string;
  link: string;
  date: number;
  imageUrl: string;
}

function Updates(): JSX.Element {
  const { data, error } = useSWR(apiUrl, fetcher, {
    refreshInterval: 86400000,
  });

  const [news, setNews] = useState<News[]>([]);

  useEffect(() => {
    if (data) {
      const _news = data.value;
      _news.sort((a: any, b: any) => b.date - a.date);

      if (_news) {
        setNews(_news);
      }
    } else if (error) {
      console.error(error);
    }
  }, [data]);

  return (
    <SectionWrapper>
      <Container>
        <SectionTitle subTitle="Updates">Marvin Latest News</SectionTitle>
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
            {news.length > 0 ? (
              <>
                {news.map((e) => (
                  <SwiperSlide key={e.id}>
                    <ContentInner>
                      <img src={e.imageUrl} alt="" />
                      <TextWrapper>
                        <Date>{format(e.date, "MMM dd, yyyy")}</Date>
                        <ContentText>
                          {e.title.length > 60
                            ? `${e.title.substring(0, 60)}...`
                            : e.title}
                        </ContentText>
                      </TextWrapper>
                      <ButtonWrapper>
                        <a href={e.link} target="_blank">
                          <Button type="outline">View post</Button>
                        </a>
                      </ButtonWrapper>
                    </ContentInner>
                  </SwiperSlide>
                ))}
              </>
            ) : (
              <>
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
              </>
            )}
            <img className="swiper-button-prev" src={SwipperPrev} alt="" />
            <img className="swiper-button-next" src={SwipperNext} alt="" />
          </Swiper>
        </ContentWrapper>
      </Container>
    </SectionWrapper>
  );
}

export default Updates;
