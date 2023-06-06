import { Container } from "react-bootstrap";
import { SectionWrapper } from "./Styled";
import SectionTitle from "components/SectionTitle";

function Roadmap(): JSX.Element {
  return (
    <SectionWrapper>
      <Container>
        <SectionTitle subTitle="Roadmap">Roadmap To Mars</SectionTitle>
      </Container>
    </SectionWrapper>
  );
}

export default Roadmap;
