import { useRef } from "react";
import { Container } from "react-bootstrap";
import { ParallaxLayer, IParallax } from "@react-spring/parallax";
import {
  // BegginingWrapper,
  CometWrapper,
  ContentText,
  ContentTitle,
  ContentWrapper,
  DesktopWrapper,
  // DestinationWrapper,
  // GrowthWrapper,
  // IgnationWrapper,
  // LaunchingWrapper,
  MikyWayWrapper,
  PlanetFirstWrapper,
  PlanetLastWrapper,
  RebirthWrapper,
  SectionWrapper,
  StyledParallax,
  TakeoverWrapper,
  UfoWrapper,
  VibeWrapper,
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
      <div className="d-sm-none">
        <StyledParallax ref={parallax} pages={3} horizontal>
          <ParallaxLayer offset={0} speed={0.2}>
            <RebirthWrapper>
              <img className="first_img" src={Planet_1} alt="" />
              <img src={Planet_2} alt="" />
              <CometWrapper>
                <p>comet</p>
              </CometWrapper>
              <ContentWrapper>
                <ContentTitle>Rebirth as martians</ContentTitle>
                <ContentText>
                  <li>Creation of marvolutionary Smart contract</li>
                  <li>New Website</li>
                  <li>
                    Airdropping new coins to previous
                    <br />
                    Marvin holders
                  </li>
                  <li>Spreading the word via partnerships</li>
                  <li>Trading goes live</li>
                  <li>Updating socials on Etherscan</li>
                  <li>Multiple wallet integrations</li>
                  <li>1000+ holders</li>
                  <li>New DAO infrastructure</li>
                  <li>COMMUNITY EXPANSION</li>
                  <li>Community Contest & Giveaways</li>
                  <li>First Burn event</li>
                  <li>BITMART exchange</li>
                </ContentText>
              </ContentWrapper>
            </RebirthWrapper>
          </ParallaxLayer>
          <ParallaxLayer offset={1} speed={0.2}>
            <VibeWrapper>
              <img src={Planet_3} alt="" />
              <MikyWayWrapper>
                <p>miky way</p>
              </MikyWayWrapper>
              <PlanetFirstWrapper>
                <p>planet ?</p>
              </PlanetFirstWrapper>
              <PlanetLastWrapper>
                <p>planet ?</p>
              </PlanetLastWrapper>
              <ContentWrapper>
                <ContentTitle>Vibe & HODL with Martians</ContentTitle>
                <ContentText>
                  <li>Airdrop for Gamepass holders</li>
                  <li>5k+ holders</li>
                  <li>Marvin Survivors Web3 Release</li>
                  <li>Gaming tournament for Pass HODLERS</li>
                  <li>CEX #2</li>
                  <li>Marvin Leaderboards goes live</li>
                  <li>AMAs & continued marketing campaigns</li>
                  <li>Marvin vaults goes live</li>
                  <li>CEX #3</li>
                  <li>Press Releases</li>
                  <li>2nd BURN event</li>
                </ContentText>
              </ContentWrapper>
            </VibeWrapper>
          </ParallaxLayer>
          <ParallaxLayer offset={2} speed={0.2}>
            <TakeoverWrapper>
              <img src={Planet_4} alt="" />
              <img className="last_img" src={Planet_5} alt="" />
              <UfoWrapper>
                <p>UFO</p>
              </UfoWrapper>
              <ContentWrapper>
                <ContentTitle>Martians Takeover 2023</ContentTitle>
                <ContentText>
                  <li>Appstore & playstore Release</li>
                  <li>T1 listings</li>
                  <li>Marvin merchandise</li>
                  <li>10k+ holders</li>
                  <li>Marvin VISA cards</li>
                  <li>Murderous intent towards Doge coin</li>
                  <li>Doge coin raped left with aids</li>
                  <li>
                    Marvin becomes the bossiest
                    <br />
                    cryptocurrency on the internet
                  </li>
                  <li>👀 nope we ain't ready for this yet</li>
                </ContentText>
              </ContentWrapper>
            </TakeoverWrapper>
          </ParallaxLayer>
        </StyledParallax>
      </div>

      <div className="d-none d-sm-block d-xl-none">
        <StyledParallax ref={parallax} pages={2} horizontal>
          <ParallaxLayer offset={0} speed={0.2}>
            <RebirthWrapper>
              <img className="first_img" src={Planet_1} alt="" />
              <img src={Planet_2} alt="" />
              <CometWrapper>
                <p>comet</p>
              </CometWrapper>
              <ContentWrapper>
                <ContentTitle>Rebirth as martians</ContentTitle>
                <ContentText>
                  <li>Creation of marvolutionary Smart contract</li>
                  <li>New Website</li>
                  <li>
                    Airdropping new coins to previous
                    <br />
                    Marvin holders
                  </li>
                  <li>Spreading the word via partnerships</li>
                  <li>Trading goes live</li>
                  <li>Updating socials on Etherscan</li>
                  <li>Multiple wallet integrations</li>
                  <li>1000+ holders</li>
                  <li>New DAO infrastructure</li>
                  <li>COMMUNITY EXPANSION</li>
                  <li>Community Contest & Giveaways</li>
                  <li>First Burn event</li>
                  <li>BITMART exchange</li>
                </ContentText>
              </ContentWrapper>
            </RebirthWrapper>
            <VibeWrapper>
              <img src={Planet_3} alt="" />
              <MikyWayWrapper>
                <p>miky way</p>
              </MikyWayWrapper>
              <PlanetFirstWrapper>
                <p>planet ?</p>
              </PlanetFirstWrapper>
              <PlanetLastWrapper>
                <p>planet ?</p>
              </PlanetLastWrapper>
              <ContentWrapper>
                <ContentTitle>Vibe & HODL with Martians</ContentTitle>
                <ContentText>
                  <li>Airdrop for Gamepass holders</li>
                  <li>5k+ holders</li>
                  <li>Marvin Survivors Web3 Release</li>
                  <li>Gaming tournament for Pass HODLERS</li>
                  <li>CEX #2</li>
                  <li>Marvin Leaderboards goes live</li>
                  <li>AMAs & continued marketing campaigns</li>
                  <li>Marvin vaults goes live</li>
                  <li>CEX #3</li>
                  <li>Press Releases</li>
                  <li>2nd BURN event</li>
                </ContentText>
              </ContentWrapper>
            </VibeWrapper>
          </ParallaxLayer>
          <ParallaxLayer offset={1} speed={0.2}>
            <TakeoverWrapper>
              <img src={Planet_4} alt="" />
              <img className="last_img" src={Planet_5} alt="" />
              <UfoWrapper>
                <p>UFO</p>
              </UfoWrapper>
              <ContentWrapper>
                <ContentTitle>Martians Takeover 2023</ContentTitle>
                <ContentText>
                  <li>Appstore & playstore Release</li>
                  <li>T1 listings</li>
                  <li>Marvin merchandise</li>
                  <li>10k+ holders</li>
                  <li>Marvin VISA cards</li>
                  <li>Murderous intent towards Doge coin</li>
                  <li>Doge coin raped left with aids</li>
                  <li>
                    Marvin becomes the bossiest
                    <br />
                    cryptocurrency on the internet
                  </li>
                  <li>👀 nope we ain't ready for this yet</li>
                </ContentText>
              </ContentWrapper>
            </TakeoverWrapper>
          </ParallaxLayer>
        </StyledParallax>
      </div>

      <div className="d-none d-xl-block d-xxl-none">
        <RebirthWrapper>
          <img className="first_img" src={Planet_1} alt="" />
          <img src={Planet_2} alt="" />
          <CometWrapper>
            <p>comet</p>
          </CometWrapper>
          <ContentWrapper>
            <ContentTitle>Rebirth as martians</ContentTitle>
            <ContentText>
              <li>Creation of marvolutionary Smart contract</li>
              <li>New Website</li>
              <li>
                Airdropping new coins to previous
                <br />
                Marvin holders
              </li>
              <li>Spreading the word via partnerships</li>
              <li>Trading goes live</li>
              <li>Updating socials on Etherscan</li>
              <li>Multiple wallet integrations</li>
              <li>1000+ holders</li>
              <li>New DAO infrastructure</li>
              <li>COMMUNITY EXPANSION</li>
              <li>Community Contest & Giveaways</li>
              <li>First Burn event</li>
              <li>BITMART exchange</li>
            </ContentText>
          </ContentWrapper>
        </RebirthWrapper>
        <VibeWrapper>
          <img src={Planet_3} alt="" />
          <MikyWayWrapper>
            <p>miky way</p>
          </MikyWayWrapper>
          <PlanetFirstWrapper>
            <p>planet ?</p>
          </PlanetFirstWrapper>
          <PlanetLastWrapper>
            <p>planet ?</p>
          </PlanetLastWrapper>
          <ContentWrapper>
            <ContentTitle>Vibe & HODL with Martians</ContentTitle>
            <ContentText>
              <li>Airdrop for Gamepass holders</li>
              <li>5k+ holders</li>
              <li>Marvin Survivors Web3 Release</li>
              <li>Gaming tournament for Pass HODLERS</li>
              <li>CEX #2</li>
              <li>Marvin Leaderboards goes live</li>
              <li>AMAs & continued marketing campaigns</li>
              <li>Marvin vaults goes live</li>
              <li>CEX #3</li>
              <li>Press Releases</li>
              <li>2nd BURN event</li>
            </ContentText>
          </ContentWrapper>
        </VibeWrapper>
        <TakeoverWrapper>
          <img src={Planet_4} alt="" />
          <img className="last_img" src={Planet_5} alt="" />
          <UfoWrapper>
            <p>UFO</p>
          </UfoWrapper>
          <ContentWrapper>
            <ContentTitle>Martians Takeover 2023</ContentTitle>
            <ContentText>
              <li>Appstore & playstore Release</li>
              <li>T1 listings</li>
              <li>Marvin merchandise</li>
              <li>10k+ holders</li>
              <li>Marvin VISA cards</li>
              <li>Murderous intent towards Doge coin</li>
              <li>Doge coin raped left with aids</li>
              <li>
                Marvin becomes the bossiest
                <br />
                cryptocurrency on the internet
              </li>
              <li>👀 nope we ain't ready for this yet</li>
            </ContentText>
          </ContentWrapper>
        </TakeoverWrapper>
      </div>

      <DesktopWrapper>
        <RebirthWrapper>
          <CometWrapper>
            <p>comet</p>
          </CometWrapper>
          <ContentWrapper>
            <ContentTitle>Rebirth as martians</ContentTitle>
            <ContentText>
              <li>Creation of marvolutionary Smart contract</li>
              <li>New Website</li>
              <li>
                Airdropping new coins to previous
                <br />
                Marvin holders
              </li>
              <li>Spreading the word via partnerships</li>
              <li>Trading goes live</li>
              <li>Updating socials on Etherscan</li>
              <li>Multiple wallet integrations</li>
              <li>1000+ holders</li>
              <li>New DAO infrastructure</li>
              <li>COMMUNITY EXPANSION</li>
              <li>Community Contest & Giveaways</li>
              <li>First Burn event</li>
              <li>BITMART exchange</li>
            </ContentText>
          </ContentWrapper>
        </RebirthWrapper>
        <VibeWrapper>
          <MikyWayWrapper>
            <p>miky way</p>
          </MikyWayWrapper>
          <PlanetFirstWrapper>
            <p>planet ?</p>
          </PlanetFirstWrapper>
          <PlanetLastWrapper>
            <p>planet ?</p>
          </PlanetLastWrapper>
          <ContentWrapper>
            <ContentTitle>Vibe & HODL with Martians</ContentTitle>
            <ContentText>
              <li>Airdrop for Gamepass holders</li>
              <li>5k+ holders</li>
              <li>Marvin Survivors Web3 Release</li>
              <li>Gaming tournament for Pass HODLERS</li>
              <li>CEX #2</li>
              <li>Marvin Leaderboards goes live</li>
              <li>AMAs & continued marketing campaigns</li>
              <li>Marvin vaults goes live</li>
              <li>CEX #3</li>
              <li>Press Releases</li>
              <li>2nd BURN event</li>
            </ContentText>
          </ContentWrapper>
        </VibeWrapper>
        <TakeoverWrapper>
          <UfoWrapper>
            <p>UFO</p>
          </UfoWrapper>
          <ContentWrapper>
            <ContentTitle>Martians Takeover 2023</ContentTitle>
            <ContentText>
              <li>Appstore & playstore Release</li>
              <li>T1 listings</li>
              <li>Marvin merchandise</li>
              <li>10k+ holders</li>
              <li>Marvin VISA cards</li>
              <li>Murderous intent towards Doge coin</li>
              <li>Doge coin raped left with aids</li>
              <li>
                Marvin becomes the bossiest
                <br />
                cryptocurrency on the internet
              </li>
              <li>👀 nope we ain't ready for this yet</li>
            </ContentText>
          </ContentWrapper>
        </TakeoverWrapper>
      </DesktopWrapper>

      {/* <div className="d-sm-none">
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
                    Lunarcrush /
                    <br />
                    &emsp; Stocktwits listing
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
              </CometWrapper>
              <ContentWrapper>
                <ContentTitle>2. Growth</ContentTitle>
                <ContentText>
                  <li>
                    <i className="fa fa-check" />
                    Influencer &<br />
                    &emsp; Dextools Marketing
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
              </MikyWayWrapper>
              <PlanetFirstWrapper>
                <p>planet ?</p>
              </PlanetFirstWrapper>
              <PlanetLastWrapper>
                <p>planet ?</p>
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
              </UfoWrapper>
              <ContentWrapper>
                <ContentTitle>4. Ignition</ContentTitle>
                <ContentText>
                  <li>Official Marvin Merchandise</li>
                  <li>Twitch Marketing</li>
                  <li>International Marketing</li>
                  <li>250000 $MARVIN Holders</li>
                  <li>
                    $MARVIN Decentralised
                    <br />
                    Exchange
                  </li>
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
                  <li>
                    International Marketing
                    <br />
                    Campaign
                  </li>
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
      </div> */}

      {/* <div className="d-none d-sm-block d-md-none">
        <StyledParallax ref={parallax} pages={3} horizontal>
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
                    Lunarcrush /
                    <br />
                    &emsp; Stocktwits listing
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
            <GrowthWrapper>
              <img src={Planet_2} alt="" />
              <CometWrapper>
                <p>comet</p>
              </CometWrapper>
              <ContentWrapper>
                <ContentTitle>2. Growth</ContentTitle>
                <ContentText>
                  <li>
                    <i className="fa fa-check" />
                    Influencer &<br />
                    &emsp; Dextools Marketing
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
          <ParallaxLayer offset={1} speed={0.2}>
            <LaunchingWrapper>
              <img src={Planet_3} alt="" />
              <MikyWayWrapper>
                <p>miky way</p>
              </MikyWayWrapper>
              <PlanetFirstWrapper>
                <p>planet ?</p>
              </PlanetFirstWrapper>
              <PlanetLastWrapper>
                <p>planet ?</p>
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
            <IgnationWrapper>
              <img src={Planet_4} alt="" />
              <UfoWrapper>
                <p>UFO</p>
              </UfoWrapper>
              <ContentWrapper>
                <ContentTitle>4. Ignition</ContentTitle>
                <ContentText>
                  <li>Official Marvin Merchandise</li>
                  <li>Twitch Marketing</li>
                  <li>International Marketing</li>
                  <li>250000 $MARVIN Holders</li>
                  <li>
                    $MARVIN Decentralised
                    <br />
                    Exchange
                  </li>
                  <li>Large Influencer Partnerships</li>
                  <li>Cross Community AMA's</li>
                  <li>Marvin Inu Launchpad</li>
                </ContentText>
              </ContentWrapper>
            </IgnationWrapper>
          </ParallaxLayer>
          <ParallaxLayer offset={2} speed={0.2}>
            <DestinationWrapper>
              <img src={Planet_5} alt="" />
              <ContentWrapper>
                <ContentTitle>5. Destination Mars</ContentTitle>
                <ContentText>
                  <li>Binance Listing</li>
                  <li>Rewards For Holders</li>
                  <li>
                    International Marketing
                    <br />
                    Campaign
                  </li>
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
      </div> */}

      {/* <div className="d-none d-md-block d-xxl-none">
        <StyledParallax ref={parallax} pages={2} horizontal>
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
                    Lunarcrush /
                    <br />
                    &emsp; Stocktwits listing
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
            <GrowthWrapper>
              <img src={Planet_2} alt="" />
              <CometWrapper>
                <p>comet</p>
              </CometWrapper>
              <ContentWrapper>
                <ContentTitle>2. Growth</ContentTitle>
                <ContentText>
                  <li>
                    <i className="fa fa-check" />
                    Influencer &<br />
                    &emsp; Dextools Marketing
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
            <LaunchingWrapper>
              <img src={Planet_3} alt="" />
              <MikyWayWrapper>
                <p>miky way</p>
              </MikyWayWrapper>
              <PlanetFirstWrapper>
                <p>planet ?</p>
              </PlanetFirstWrapper>
              <PlanetLastWrapper>
                <p>planet ?</p>
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
          <ParallaxLayer offset={1} speed={0.2}>
            <IgnationWrapper>
              <img src={Planet_4} alt="" />
              <UfoWrapper>
                <p>UFO</p>
              </UfoWrapper>
              <ContentWrapper>
                <ContentTitle>4. Ignition</ContentTitle>
                <ContentText>
                  <li>Official Marvin Merchandise</li>
                  <li>Twitch Marketing</li>
                  <li>International Marketing</li>
                  <li>250000 $MARVIN Holders</li>
                  <li>
                    $MARVIN Decentralised
                    <br />
                    Exchange
                  </li>
                  <li>Large Influencer Partnerships</li>
                  <li>Cross Community AMA's</li>
                  <li>Marvin Inu Launchpad</li>
                </ContentText>
              </ContentWrapper>
            </IgnationWrapper>
            <DestinationWrapper>
              <img src={Planet_5} alt="" />
              <ContentWrapper>
                <ContentTitle>5. Destination Mars</ContentTitle>
                <ContentText>
                  <li>Binance Listing</li>
                  <li>Rewards For Holders</li>
                  <li>
                    International Marketing
                    <br />
                    Campaign
                  </li>
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
      </div> */}

      {/* <DesktopWrapper>
        <BegginingWrapper className="desktop-content">
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
                Lunarcrush /<br />
                &emsp; Stocktwits listing
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
        <GrowthWrapper className="desktop-content">
          <CometWrapper>
            <p>comet</p>
          </CometWrapper>
          <ContentWrapper>
            <ContentTitle>2. Growth</ContentTitle>
            <ContentText>
              <li>
                <i className="fa fa-check" />
                Influencer &<br />
                &emsp; Dextools Marketing
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
        <LaunchingWrapper className="desktop-content">
          <MikyWayWrapper>
            <p>miky way</p>
          </MikyWayWrapper>
          <PlanetFirstWrapper>
            <p>planet ?</p>
          </PlanetFirstWrapper>
          <PlanetLastWrapper>
            <p>planet ?</p>
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
        <IgnationWrapper className="desktop-content">
          <UfoWrapper>
            <p>UFO</p>
          </UfoWrapper>
          <ContentWrapper>
            <ContentTitle>4. Ignition</ContentTitle>
            <ContentText>
              <li>Official Marvin Merchandise</li>
              <li>Twitch Marketing</li>
              <li>International Marketing</li>
              <li>250000 $MARVIN Holders</li>
              <li>
                $MARVIN Decentralised
                <br />
                Exchange
              </li>
              <li>Large Influencer Partnerships</li>
              <li>Cross Community AMA's</li>
              <li>Marvin Inu Launchpad</li>
            </ContentText>
          </ContentWrapper>
        </IgnationWrapper>
        <DestinationWrapper className="desktop-content">
          <ContentWrapper>
            <ContentTitle>5. Destination Mars</ContentTitle>
            <ContentText>
              <li>Binance Listing</li>
              <li>Rewards For Holders</li>
              <li>
                International Marketing
                <br />
                Campaign
              </li>
              <li>3D NFT Release</li>
              <li>NFT Marketplace</li>
              <li>Marvin Gamefi</li>
              <li>Metaverse Invasion</li>
              <li>1000000 $MARVIN Holders</li>
            </ContentText>
          </ContentWrapper>
        </DestinationWrapper>
      </DesktopWrapper> */}
    </SectionWrapper>
  );
}

export default Roadmap;
