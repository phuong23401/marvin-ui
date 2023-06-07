import { Container } from "react-bootstrap";
import { ContentText, DAOWrapper, SectionWrapper, SecurityWrapper } from "./Styled";
import SectionTitle from "components/SectionTitle";
import Button from "components/Button";
import MarvinDAO from "assets/images/DAO/marvin_dao.png";
import Security from "assets/images/DAO/security.png";

function DAO(): JSX.Element {
  return (
    <SectionWrapper>
      <Container>
        <DAOWrapper>
          <img src={MarvinDAO} alt="" />
          <div className="col-lg-6">
            <SectionTitle size="sm">Marvin DAO</SectionTitle>
            <ContentText>
              The secret and hidden space of Martian whales supporting Marvin to
              the bone. Only investors holding 0.3% of total supply (or more)
              are eligible to join. Exclusive voting rights, launchpad
              multipliers, whitelists and more!
            </ContentText>
            <Button type="secondary">Join Community</Button>
          </div>
        </DAOWrapper>
        <SecurityWrapper>
          <img src={Security} alt="" />
          <SectionTitle subTitle="Security" alignCenter size="sm">
            Marvin Audit
          </SectionTitle>
          <Button type="primary">Marvin Token</Button>
        </SecurityWrapper>
      </Container>
    </SectionWrapper>
  );
}

export default DAO;
