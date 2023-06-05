import { Offcanvas } from "react-bootstrap";
import { StyledLink, MainMenu, MobileMenu, NavBarWrap } from "./Styled";

interface INavigationProps {
  isOpen?: boolean;
  onHide?: any;
  footer?: boolean;
}

function Navigation(props: INavigationProps): JSX.Element {
  const { isOpen, onHide, footer } = props;

  return (
    <MainMenu footer={footer}>
      <NavBarWrap className="d-md-flex flex-grow-1" footer={footer}>
        <ul className="main-menu list-unstyled">
          <li>
            <StyledLink to="ecosystem">Ecosystem</StyledLink>
          </li>
          <li>
            <StyledLink to="community">Community</StyledLink>
          </li>
          <li>
            <StyledLink to="team">Team</StyledLink>
          </li>
          <li>
            <StyledLink to="howtobuy">How To Buy</StyledLink>
          </li>
          <li>
            <StyledLink to="documents">Documents</StyledLink>
          </li>
        </ul>
      </NavBarWrap>
      <Offcanvas show={isOpen} onHide={onHide}>
        <Offcanvas.Header closeButton />
        <Offcanvas.Body>
          <MobileMenu>
            <li>
              <StyledLink to="ecosystem">Ecosystem</StyledLink>
            </li>
            <li>
              <StyledLink to="community">Community</StyledLink>
            </li>
            <li>
              <StyledLink to="team">Team</StyledLink>
            </li>
            <li>
              <StyledLink to="howtobuy">How To Buy</StyledLink>
            </li>
            <li>
              <StyledLink to="documents">Documents</StyledLink>
            </li>
          </MobileMenu>
        </Offcanvas.Body>
      </Offcanvas>
    </MainMenu>
  );
}

export default Navigation;
