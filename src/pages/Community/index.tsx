import { useState } from "react";
import Scroll from "react-scroll";
import axios from "axios";
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
import Loader from "components/Loader";

const apiUrl = "http://127.0.0.1:3005/api";

function Community(): JSX.Element {
  const [telegramMembers, setTelegramMembers] = useState<any>();
  const [twitterFollowers, setTwitterFollowers] = useState<any>();
  const [discordMembers, setDiscordMembers] = useState<any>();
  const [youtubeSubscribers, setYoutubeSubscribers] = useState<any>();

  const getData = async () => {
    try {
      const response = await axios.get(`${apiUrl}/getDataCount`);

      if (response.status === 200 && response.data) {
        const telegram = response?.data?.find(
          (data: any) => data.id === "telegram"
        );
        const twitter = response?.data?.find(
          (data: any) => data.id === "twitter"
        );
        const discord = response?.data?.find(
          (data: any) => data.id === "discord"
        );
        const youtube = response?.data?.find(
          (data: any) => data.id === "youtube"
        );

        if (telegram && twitter && discord && youtube) {
          setTelegramMembers(telegram.value ?? 7249);
          setTwitterFollowers(twitter.value ?? 60371);
          setDiscordMembers(discord.value ?? 808);
          setYoutubeSubscribers(youtube.value ?? 320);
        }
      }
    } catch (error) {
      console.error(error);
    }
  };

  getData();
  // setInterval(() => {
  // }, 43200000);

  return (
    <Scroll.Element name="community">
      <SectionWrapper>
        <Container>
          <SectionTitle alignCenter subTitle="Community">
            Join the Marvin army
          </SectionTitle>
          <ContentWrapper>
            <ContentInner>
              <a href="https://www.t.me/marvininuofficial" target="_blank">
                <ChannelLogo src={Telegram} alt="" />
                <ChannelName>
                  Telegram
                  <RiShareBoxFill size={14} />
                </ChannelName>
                <ChannelContent>
                  Join the bossiest Web3 community and{" "}
                  <br className="d-none d-xl-block" />
                  get 24/7 support
                </ChannelContent>
              </a>
              <h5>{telegramMembers ?? <Loader />}</h5>
              <span>Members</span>
            </ContentInner>
            <ContentInner>
              <a href="https://discord.com/invite/KXtBnvh3tE" target="_blank">
                <ChannelLogo src={Discord} alt="" />
                <ChannelName>
                  Discord
                  <RiShareBoxFill size={14} />
                </ChannelName>
                <ChannelContent>
                  Join the official Marvin NFT
                  <br className="d-none d-lg-block" />
                  discord
                </ChannelContent>
              </a>
              <h5>{discordMembers ?? <Loader />}</h5>
              <span>Members</span>
            </ContentInner>
            <ContentInner>
              <a href="https://twitter.com/marvin_inu" target="_blank">
                <ChannelLogo src={Twitter} alt="" />
                <ChannelName>
                  Twitter
                  <RiShareBoxFill size={14} />
                </ChannelName>
                <ChannelContent>
                  Follow Marvin and spread the Mars
                  <br className="d-none d-lg-block" />
                  Mission
                </ChannelContent>
              </a>
              <h5>{twitterFollowers ?? <Loader />}</h5>
              <span>Followers</span>
            </ContentInner>
            <ContentInner>
              <a href="https://www.youtube.com/marvininu" target="_blank">
                <ChannelLogo src={Youtube} alt="" />
                <ChannelName>
                  Youtube
                  <RiShareBoxFill size={14} />
                </ChannelName>
                <ChannelContent>
                  Education, gameplay videos
                  <br className="d-none d-lg-block" />& more!
                </ChannelContent>
              </a>
              <h5>{youtubeSubscribers ?? <Loader />}</h5>
              <span>Subscribers</span>
            </ContentInner>
          </ContentWrapper>
        </Container>
      </SectionWrapper>
    </Scroll.Element>
  );
}

export default Community;
