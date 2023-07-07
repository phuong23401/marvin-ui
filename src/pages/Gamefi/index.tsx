import { Container } from 'react-bootstrap'
import Button from 'components/Button'
import {
  ButtonWrapper,
  ContentImage,
  ContentText,
  ContentWrapper,
  SectionWrapper,
  Spacing
} from './Styled'
import SectionTitle from 'components/SectionTitle'
import Vault from 'assets/images/Gamefi/vault.png'
import GamePass from 'assets/images/Gamefi/game_pass.png'
import { FaSearchPlus } from 'react-icons/fa'

function Gamefi(): JSX.Element {
  return (
    <SectionWrapper>
      <Container>
        <SectionTitle subTitle="Gamefi">Marvin Vault & Game pass</SectionTitle>
        <div>
          <ContentWrapper>
            <ContentImage className="d-lg-none" src={Vault} alt="" />
            <div className="col-lg-6 col-xxl-5">
              <SectionTitle size="sm">Marvin Vault</SectionTitle>
              <ContentText>
                We are super thrilled to reveal our hidden utility for the game
                passes - The Marvin Vault. Apart from all the sauce already
                revealed, we are introducing a groundbreaking system for holder
                rewards - The Marvin Vault.
              </ContentText>
              <ButtonWrapper>
                <a
                  href="https://www.t.me/marvininuofficial"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Button type="primary">Join Community</Button>
                </a>
                <a
                  href="https://www.reddit.com/r/marvininu_ETH"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Button type="secondary">
                    Read more <FaSearchPlus />
                  </Button>
                </a>
              </ButtonWrapper>
            </div>
            <ContentImage className="d-none d-lg-block" src={Vault} alt="" />
          </ContentWrapper>
          <Spacing className="d-none d-lg-flex" />
          <ContentWrapper>
            <ContentImage src={GamePass} alt="" />
            <div className="col-lg-6 col-xxl-5">
              <SectionTitle size="sm">Game Pass</SectionTitle>
              <ContentText>
                Marvin Inu offers tiered Marvinaut game passes designed to
                provide long-term value in the whole GameFi ecosystem. These
                passes unlock the earliest access to the game, in-game
                rewards....
              </ContentText>
              <ButtonWrapper>
                <a href="https://nft.marvin-ecosystem.com/" target="_blank">
                  <Button type="primary">Mint Pass</Button>
                </a>
                {/* <Button type="secondary">
                  Read more <FaSearchPlus />
                </Button> */}
              </ButtonWrapper>
            </div>
          </ContentWrapper>
        </div>
      </Container>
    </SectionWrapper>
  )
}

export default Gamefi
