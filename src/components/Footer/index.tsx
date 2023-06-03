import { Container } from 'react-bootstrap'
import Navigation from '../Navigation'
import { FooterMain, FooterWrapper, Logo, LogoWrap, SocialLinks, StyledLink, SupportedWallets, TagLine } from './Styled'
import LogoDark from 'assets/images/logo-dark.svg'
import IcoTwitter from 'assets/images/twitter.svg'
import IcoTelegram from 'assets/images/telegram.svg'
import IcoDiscord from 'assets/images/discord.svg'
import IcoMedium from 'assets/images/medium.svg'
import Vector1 from 'assets/images/Footer/vector-1.svg'
import Vector2 from 'assets/images/Footer/vector-2.svg'
import Vector3 from 'assets/images/Footer/vector-3.svg'
import CasperWallet from 'assets/images/Footer/casper-wallet.png'
import Casper from 'assets/images/Footer/casper.png'
import CasperDash from 'assets/images/Footer/casperdash.png'
import Torus from 'assets/images/Footer/torus.png'

function Footer(): JSX.Element {
  return (
    <FooterMain>
      <Container>
        <FooterWrapper>
          <LogoWrap href="/">
            <Logo src={LogoDark} alt="" />
          </LogoWrap>
          <div>
            <SupportedWallets>
              <p>Supported Wallets</p>
              <div>
                <img src={CasperWallet} alt="" style={{ maxWidth: '38px' }} />
                <img src={CasperDash} alt="" />
                <img src={Torus} alt="" />
                <img src={Casper} alt="" />
              </div>
            </SupportedWallets>
            <SocialLinks>
              <a href="https://twitter.com/casperpunks_" target="blank_">
                <img src={IcoTwitter} alt="" />
              </a>
              <a href="https://t.me/casperpunks" target="blank_">
                <img src={IcoTelegram} alt="" />
              </a>
              <a href="https://discord.gg/casperpunks" target="blank_">
                <img src={IcoDiscord} alt="" />
              </a>
              <a href="https://medium.com/@casperpunks" target="blank_">
                <img src={IcoMedium} alt="" />
              </a>
            </SocialLinks>
            <Navigation footer={true} />
            <TagLine>
              <span>Casper Punks</span> © 2021 by <span>Punk Games LTD</span>. is licensed under{' '}
              <StyledLink
                href="https://creativecommons.org/licenses/by-nd/4.0/"
                className="link-policy"
                target="_blank"
                rel="noreferrer"
              >
                CC
              </StyledLink>{' '}
              BY-SA 4.0&ensp;
              <img src={Vector1} alt="" />
              <img src={Vector2} alt="" />
              <img src={Vector3} alt="" />
            </TagLine>
          </div>
        </FooterWrapper>
      </Container>
    </FooterMain>
  )
}

export default Footer
