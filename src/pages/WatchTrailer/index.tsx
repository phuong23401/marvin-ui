import { Container } from "react-bootstrap";
import { ContentImage, SectionWrapper, StyledButton } from "./Styled";
import ContentImg from "assets/images/WatchTrailer/content.png";

function WatchTrailer(): JSX.Element {
  return (
    <SectionWrapper>
      <Container>
        <div className="text-center">
          <ContentImage src={ContentImg} alt="" />
          <StyledButton>
            <a href="https://youtu.be/jF7RCrc374I" target="_blank">
              &ensp;
            </a>
          </StyledButton>
        </div>
      </Container>
    </SectionWrapper>
  );
}

export default WatchTrailer;
