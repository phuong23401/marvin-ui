import { useState } from "react";
import { Container } from "react-bootstrap";
import {
  ContentImage,
  SectionWrapper,
  StyledButton,
  StyledModal,
  VideoPlayer,
} from "./Styled";
import ContentImg from "assets/images/WatchTrailer/content.png";

function WatchTrailer(): JSX.Element {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <SectionWrapper>
      <Container>
        <div className="text-center">
          <ContentImage src={ContentImg} alt="" />
          <StyledButton onClick={() => setIsOpen(true)}>&ensp;</StyledButton>
        </div>

        <StyledModal size="xl" show={isOpen} onHide={() => setIsOpen(false)}>
          <VideoPlayer
            src="https://www.youtube.com/embed/jF7RCrc374I"
            title="Marvin Survivor Gameplay Trailer"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </StyledModal>
      </Container>
    </SectionWrapper>
  );
}

export default WatchTrailer;
