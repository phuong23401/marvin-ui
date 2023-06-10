import { useRef } from "react";
import { Container } from "react-bootstrap";
import { ParallaxLayer, IParallax } from "@react-spring/parallax";
import {
  BegginingWrapper,
  CometWrapper,
  ContentText,
  ContentTitle,
  ContentWrapper,
  DestinationWrapper,
  GrowthWrapper,
  IgnationWrapper,
  LaunchingWrapper,
  MikyWayWrapper,
  PlanetFirstWrapper,
  PlanetLastWrapper,
  SectionWrapper,
  StyledParallax,
  UfoWrapper,
} from "./Styled";
import SectionTitle from "components/SectionTitle";
import Planet_1 from "assets/images/Roadmap/Beginning/planet.png";
import Planet_2 from "assets/images/Roadmap/Growth/planet.png";
import Planet_3 from "assets/images/Roadmap/Launching/planet.png";
import Planet_4 from "assets/images/Roadmap/Ignition/planet.png";
import Planet_5 from "assets/images/Roadmap/Destination/planet.png";

function Roadmap(): JSX.Element {
  const parallax = useRef<IParallax>(null);

  return (
    <SectionWrapper>
      <Container>
        <SectionTitle subTitle="Roadmap">Roadmap To Mars</SectionTitle>
      </Container>
      <StyledParallax ref={parallax} pages={5} horizontal>
        <ParallaxLayer offset={0} speed={0.2}>
          <BegginingWrapper>
            <img src={Planet_1} alt="" />
            <ContentWrapper>
              <ContentTitle>1. The Beginning</ContentTitle>
              <ContentText>
                <li>
                  <i className="fa fa-check" />
                  Contract Development
                </li>
                <li>
                  <i className="fa fa-check" />
                  Community Growth
                </li>
                <li>
                  <i className="fa fa-check" />
                  AMA's and Global Exposure
                </li>
                <li>
                  <i className="fa fa-check" />
                  Lunarcrush / Stocktwits listing
                </li>
                <li>
                  <i className="fa fa-check" />
                  Setting up 100 shillers
                </li>
                <li>
                  <i className="fa fa-check" />
                  Facebook & Tiktok
                </li>
                <li>
                  <i className="fa fa-check" />
                  5000 Community members
                </li>
                <li>
                  <i className="fa fa-check" />
                  1000 $MARVIN Holders
                </li>
              </ContentText>
            </ContentWrapper>
          </BegginingWrapper>
        </ParallaxLayer>
        <ParallaxLayer offset={1} speed={0.2}>
          <GrowthWrapper>
            <img src={Planet_2} alt="" />
            <CometWrapper>
              <p>comet</p>
              <span>
                Lorem ipsum dolor
                <br />
                sit amet.
              </span>
            </CometWrapper>
            <ContentWrapper>
              <ContentTitle>2. Growth</ContentTitle>
              <ContentText>
                <li>
                  <i className="fa fa-check" />
                  Influencer & Dextools Marketing
                </li>
                <li>
                  <i className="fa fa-check" />
                  Coingecko Listing
                </li>
                <li>
                  <i className="fa fa-check" />
                  CoinMarketCap Listing
                </li>
                <li>
                  <i className="fa fa-check" />
                  Cro Trending
                </li>
                <li>
                  <i className="fa fa-check" />
                  Trust Wallet Integration
                </li>
                <li>
                  <i className="fa fa-check" />
                  Third Party Audit by Certik
                </li>
                <li>
                  <i className="fa fa-check" />
                  5000 Marvin Holders
                </li>
                <li>
                  <i className="fa fa-check" />
                  Marvin Inu Discord Setup
                </li>
              </ContentText>
            </ContentWrapper>
          </GrowthWrapper>
        </ParallaxLayer>
        <ParallaxLayer offset={2} speed={0.2}>
          <LaunchingWrapper>
            <img src={Planet_3} alt="" />
            <MikyWayWrapper>
              <p>miky way</p>
              <span>
                Lorem ipsum dolor
                <br />
                sit amet.
              </span>
            </MikyWayWrapper>
            <PlanetFirstWrapper>
              <p>planet ?</p>
              <span>
                Lorem ipsum dolor
                <br />
                sit amet.
              </span>
            </PlanetFirstWrapper>
            <PlanetLastWrapper>
              <p>planet ?</p>
              <span>Lorem ipsum.</span>
            </PlanetLastWrapper>
            <ContentWrapper>
              <ContentTitle>3. Launching</ContentTitle>
              <ContentText>
                <li>
                  <i className="fa fa-check" />
                  2.1 Website
                </li>
                <li>
                  <i className="fa fa-check" />
                  Marvin Inu Dapp
                </li>
                <li>
                  <i className="fa fa-check" />
                  Launch On MultiChain
                </li>
                <li>
                  <i className="fa fa-check" />
                  Collaborations
                </li>
                <li>
                  <i className="fa fa-check" />
                  Game Showcasing
                </li>
                <li>
                  <i className="fa fa-check" />
                  Bitmart Exchange Listing
                </li>
                <li>Game Pass Mint (Ongoing)</li>
                <li>Marvin Survivor Release</li>
                <li>2D NFT Release</li>
                <li>Marvin Survivor on App Stores</li>
                <li>100000 $MARVIN Holders</li>
              </ContentText>
            </ContentWrapper>
          </LaunchingWrapper>
        </ParallaxLayer>
        <ParallaxLayer offset={3} speed={0.2}>
          <IgnationWrapper>
            <img src={Planet_4} alt="" />
            <UfoWrapper>
              <p>UFO</p>
              <span>
                Lorem ipsum dolor
                <br />
                sit amet.
              </span>
            </UfoWrapper>
            <ContentWrapper>
              <ContentTitle>4. Ignition</ContentTitle>
              <ContentText>
              <li>Official Marvin Merchandise</li>
              <li>Twitch Marketing</li>
              <li>International Marketing</li>
              <li>250000 $MARVIN Holders</li>
              <li>$MARVIN Decentralised Exchange</li>
              <li>Large Influencer Partnerships</li>
              <li>Cross Community AMA's</li>
              <li>Marvin Inu Launchpad</li>
              </ContentText>
            </ContentWrapper>
          </IgnationWrapper>
        </ParallaxLayer>
        <ParallaxLayer offset={4} speed={0.2}>
          <DestinationWrapper>
            <img src={Planet_5} alt="" />
            <ContentWrapper>
              <ContentTitle>5. Destination Mars</ContentTitle>
              <ContentText>
              <li>Binance Listing</li>
              <li>Rewards For Holders</li>
              <li>International Marketing Campaign</li>
              <li>3D NFT Release</li>
              <li>NFT Marketplace</li>
              <li>Marvin Gamefi</li>
              <li>Metaverse Invasion</li>
              <li>1000000 $MARVIN Holders</li>
              </ContentText>
            </ContentWrapper>
          </DestinationWrapper>
        </ParallaxLayer>
      </StyledParallax>
    </SectionWrapper>
  );
}

export default Roadmap;
