import { Container } from 'react-bootstrap'
import SectionTitle from 'components/SectionTitle'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper'
import {
  BottomWrapper,
  ButtonWrapper,
  ContentInner,
  // ContentSubText,
  ContentText,
  ContentMobile,
  Introduce,
  SectionWrapper,
  ContentDesktop
} from './Styled'
import Button from 'components/Button'
import ETH from 'assets/images/About/eth.svg'
import Coingecko from 'assets/images/About/coingecko.svg'
import CMC from 'assets/images/About/cmc.svg'
import SwipperPrev from 'assets/images/swiper_prev.png'
import SwipperNext from 'assets/images/swiper_next.png'
import { RiShareBoxFill } from 'react-icons/ri'

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

        <ContentMobile>
          <Swiper
            cssMode={true}
            navigation={{
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev'
            }}
            pagination={true}
            mousewheel={true}
            keyboard={true}
            slidesPerView={1}
            spaceBetween={20}
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
                spaceBetween: 30
              }
            }}
            modules={[Navigation, Pagination, Mousewheel, Keyboard]}
          >
            <SwiperSlide>
              <ContentInner>
                <img src={ETH} alt="" />
                <ButtonWrapper>
                  <a
                    href="https://etherscan.io/token/0x55a380d134d722006a5ce2d510562e1239d225b1"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Button type="secondary">
                      Etherscan (ETH)
                      <RiShareBoxFill size={16} />
                    </Button>
                  </a>
                </ButtonWrapper>
                <ContentText>Marvin ETH contract addresses</ContentText>
                <p>Transactions</p>
                <h5>200k+on DEX</h5>
              </ContentInner>
            </SwiperSlide>
            <SwiperSlide>
              <ContentInner className="no-text">
                <div>
                  <img src={Coingecko} alt="" />
                  <ButtonWrapper>
                    <a
                      href="https://www.coingecko.com/en/coins/marvin-inu"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Button type="secondary">
                        Track on CoinGecko
                        <RiShareBoxFill size={16} />
                      </Button>
                    </a>
                  </ButtonWrapper>
                </div>
                {/* <p>Total Supply</p>
                <ContentSubText>
                  1,000,000,000,000 <br /> 3% buy/sell tax on DEX
                </ContentSubText> */}
              </ContentInner>
            </SwiperSlide>
            <SwiperSlide className="no-text">
              <ContentInner>
                <div>
                  <img src={CMC} alt="" />
                  <ButtonWrapper>
                    <a
                      href="https://coinmarketcap.com/currencies/marvin-inu/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Button type="secondary">
                        Track on CoinMarketCap
                        <RiShareBoxFill size={16} />
                      </Button>
                    </a>
                  </ButtonWrapper>
                </div>
                {/* <ContentText>Tokenomics</ContentText>
                <ButtonWrapper>
                  <a
                    href="https://linksome.me/marvininu/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Button type="primary">Community Profile</Button>
                  </a>
                </ButtonWrapper> */}
              </ContentInner>
            </SwiperSlide>
            <img className="swiper-button-prev" src={SwipperPrev} alt="" />
            <img className="swiper-button-next" src={SwipperNext} alt="" />
          </Swiper>
        </ContentMobile>

        <div className="d-none d-lg-block">
          <ContentDesktop>
            <ContentInner className="col-lg-12">
              <img src={ETH} alt="" />
              <ButtonWrapper>
                <a
                  href="https://etherscan.io/token/0x55a380d134d722006a5ce2d510562e1239d225b1"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Button type="secondary">
                    Etherscan (ETH)
                    <RiShareBoxFill size={16} />
                  </Button>
                </a>
              </ButtonWrapper>
              <ContentText>Marvin ETH contract addresses</ContentText>
              <p>Transactions</p>
              <h5>200k+on DEX</h5>
            </ContentInner>
          </ContentDesktop>
          <ContentDesktop>
            <ContentInner className="no-text">
              <div>
                <img src={Coingecko} alt="" />
                <ButtonWrapper>
                  <a
                    href="https://www.coingecko.com/en/coins/marvin-inu"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Button type="secondary">
                      Track on CoinGecko
                      <RiShareBoxFill size={16} />
                    </Button>
                  </a>
                </ButtonWrapper>
              </div>
              {/* <p>Total Supply</p>
              <ContentSubText>
                1,000,000,000,000 <br /> 3% buy/sell tax on DEX
              </ContentSubText> */}
            </ContentInner>
            <ContentInner className="no-text">
              <div>
                <img src={CMC} alt="" />
                <ButtonWrapper>
                  <a
                    href="https://coinmarketcap.com/currencies/marvin-inu/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Button type="secondary">
                      Track on CoinMarketCap
                      <RiShareBoxFill size={16} />
                    </Button>
                  </a>
                </ButtonWrapper>
              </div>
              {/* <ContentText>Tokenomics</ContentText>
              <ButtonWrapper>
                <a
                  href="https://linksome.me/marvininu/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Button type="primary">Community Profile</Button>
                </a>
              </ButtonWrapper> */}
            </ContentInner>
          </ContentDesktop>
        </div>

        <BottomWrapper>
          <SectionTitle alignCenter size="sm">
            Marvin Statistics
          </SectionTitle>
          <p>
            Marvin holder count continues to grow regardless of market
            conditions.
          </p>
          <ButtonWrapper>
            <a
              href="https://app.uniswap.org/#/swap?inputCurrency=0x55a380d134d722006a5ce2d510562e1239d225b1&chain=mainnet"
              target="_blank"
              rel="noreferrer"
            >
              <Button type="primary">Buy Marvin</Button>
            </a>
          </ButtonWrapper>
        </BottomWrapper>
      </Container>
    </SectionWrapper>
  )
}

export default About
