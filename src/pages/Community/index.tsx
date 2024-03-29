import { useEffect, useState } from 'react'
import Scroll from 'react-scroll'
import { Container } from 'react-bootstrap'
import SectionTitle from 'components/SectionTitle'
import {
  ChannelContent,
  ChannelLogo,
  ChannelName,
  ContentInner,
  ContentWrapper,
  SectionWrapper
} from './Styled'
import Telegram from 'assets/images/Community/telegram.svg'
import Discord from 'assets/images/Community/discord.svg'
import Twitter from 'assets/images/Community/twitter.svg'
import Youtube from 'assets/images/Community/youtube.svg'
import { RiShareBoxFill } from 'react-icons/ri'
import Loader from 'components/Loader'
import useSWR from 'swr'

const apiUrl = 'https://api.marvin-ecosystem.com/social/count'
const fetcher = (url: string) => fetch(url).then(res => res.json())

function Community(): JSX.Element {
  const { data, error } = useSWR(apiUrl, fetcher, {
    refreshInterval: 10800000
  })

  const [telegramMembers, setTelegramMembers] = useState<any>()
  const [twitterFollowers, setTwitterFollowers] = useState<any>()
  const [discordMembers, setDiscordMembers] = useState<any>()
  const [youtubeSubscribers, setYoutubeSubscribers] = useState<any>()

  useEffect(() => {
    if (data && data.length > 0) {
      const telegram = data.find((e: any) => e.id === 'telegram')
      const twitter = data.find((e: any) => e.id === 'twitter')
      const discord = data.find((e: any) => e.id === 'discord')
      const youtube = data.find((e: any) => e.id === 'youtube')

      if (telegram && twitter && discord && youtube) {
        setTelegramMembers(telegram.value)
        setTwitterFollowers(twitter.value ?? 60371)
        setDiscordMembers(discord.value)
        setYoutubeSubscribers(youtube.value)
      }
    } else if (error) {
      console.error(error)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data])

  return (
    <Scroll.Element name="community">
      <SectionWrapper>
        <Container>
          <SectionTitle alignCenter subTitle="Community">
            Join Marvin
          </SectionTitle>
          <ContentWrapper>
            <ContentInner>
              <a
                href="https://www.t.me/marvininuofficial"
                target="_blank"
                rel="noreferrer"
              >
                <ChannelLogo src={Telegram} alt="" />
                <ChannelName>
                  Telegram
                  <RiShareBoxFill size={14} />
                </ChannelName>
                <ChannelContent>
                  Join the bossiest Web3 community and{' '}
                  <br className="d-none d-xl-block" />
                  get 24/7 support
                </ChannelContent>
              </a>
              <h5>{telegramMembers ?? <Loader />}</h5>
              <span>Members</span>
            </ContentInner>
            <ContentInner>
              <a
                href="https://discord.com/invite/KXtBnvh3tE"
                target="_blank"
                rel="noreferrer"
              >
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
              <a
                href="https://twitter.com/marvin_inu"
                target="_blank"
                rel="noreferrer"
              >
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
              <a
                href="https://www.youtube.com/marvininu"
                target="_blank"
                rel="noreferrer"
              >
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
  )
}

export default Community
