import Scroll from "react-scroll";
import { Container } from "react-bootstrap";
import SectionTitle from "components/SectionTitle";
import {
  ChannelContent,
  ChannelLogo,
  ChannelName,
  ContentInner,
  ContentWrapper,
  SectionWrapper,
} from "./Styled";
import Telegram from "assets/images/Community/telegram.svg";
import Discord from "assets/images/Community/discord.svg";
import Twitter from "assets/images/Community/twitter.svg";
import Youtube from "assets/images/Community/youtube.svg";
import { RiShareBoxFill } from "react-icons/ri";

function Community(): JSX.Element {
  return (
    <Scroll.Element name="community">
      <SectionWrapper>
        <Container>
          <SectionTitle alignCenter subTitle="Community">
            Join the Marvin army
          </SectionTitle>
          <ContentWrapper>
            <ContentInner>
              <ChannelLogo src={Telegram} alt="" />
              <ChannelName>
                Telegram
                <RiShareBoxFill size={14} />
              </ChannelName>
              <ChannelContent>
                Join the bossiest Web3 community and get 24/7 support
              </ChannelContent>
              <h5>160000</h5>
              <span>Members</span>
            </ContentInner>
            <ContentInner>
              <ChannelLogo src={Discord} alt="" />
              <ChannelName>
                Discord
                <RiShareBoxFill size={14} />
              </ChannelName>
              <ChannelContent>
                Join the official Marvin NFT discord
              </ChannelContent>
              <h5>837</h5>
              <span>Members</span>
            </ContentInner>
            <ContentInner>
              <ChannelLogo src={Twitter} alt="" />
              <ChannelName>
                Twitter
                <RiShareBoxFill size={14} />
              </ChannelName>
              <ChannelContent>
                Follow Marvin and spread the Mars Mission
              </ChannelContent>
              <h5>61000</h5>
              <span>Followers</span>
            </ContentInner>
            <ContentInner>
              <ChannelLogo src={Youtube} alt="" />
              <ChannelName>
                Youtube
                <RiShareBoxFill size={14} />
              </ChannelName>
              <ChannelContent>
                Education, gameplay videos & more!
              </ChannelContent>
              <h5>319</h5>
              <span>Subscribers</span>
            </ContentInner>
          </ContentWrapper>
        </Container>
      </SectionWrapper>
    </Scroll.Element>
  );
}

export default Community;
