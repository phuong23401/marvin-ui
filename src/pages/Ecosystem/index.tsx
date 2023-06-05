import { Container } from "react-bootstrap";
import {
  BackgroundSubtitle,
  BackgroundTitle,
  BackgroundWrapper,
  ButtonWrapper,
  Introduce,
  SectionWrapper,
  StyledPrimaryButton,
  StyledSecondaryButton,
  TitleWrapper,
} from "./Styled";
import CrewTheMoon from "./CrewTheMoon/CrewTheMoon";
import Partners from "./Partners/Partners";

function Ecosystem(): JSX.Element {
  return (
    <SectionWrapper>
      <Container>
        <BackgroundWrapper>
          <TitleWrapper>
            <Introduce>Marvin inu ecosystem</Introduce>
            <BackgroundTitle>Elon's bossy dog</BackgroundTitle>
            <BackgroundSubtitle>
              Ignite your rocket and join the bossiest Web3 community now!
            </BackgroundSubtitle>
            <ButtonWrapper>
              <StyledPrimaryButton>Launch Dapp</StyledPrimaryButton>
              <StyledSecondaryButton>Mint Pass</StyledSecondaryButton>
            </ButtonWrapper>
          </TitleWrapper>
        </BackgroundWrapper>

        <CrewTheMoon />

        <Partners />
      </Container>
    </SectionWrapper>
  );
}

export default Ecosystem;
