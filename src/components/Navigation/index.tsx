import { Offcanvas } from 'react-bootstrap'
import {
  StyledLink,
  MainMenu,
  MobileMenu,
  NavBarWrap,
  StyledNavLink,
  MobileBarWrap
} from './Styled'

interface INavigationProps {
  isOpen?: boolean
  onHide?: any
  footer?: boolean
}

function Navigation(props: INavigationProps): JSX.Element {
  const { isOpen, onHide, footer } = props

  return (
    <MainMenu footer={footer}>
      <NavBarWrap className="d-md-flex flex-grow-1" footer={footer}>
        <ul className="main-menu list-unstyled">
          <li>
            <StyledNavLink to="ecosystem">Ecosystem</StyledNavLink>
          </li>
          <li>
            <StyledNavLink to="community">Community</StyledNavLink>
          </li>
          <li>
            <StyledNavLink to="team">Team</StyledNavLink>
          </li>
          <li>
            <StyledNavLink to="howtobuy">How To Buy</StyledNavLink>
          </li>
          <li>
            <StyledLink
              href="https://drive.google.com/file/d/13u_BVImLUX_O21rr4ledTm5FQYP5eTAT/view"
              target="_blank"
            >
              Documents
            </StyledLink>
          </li>
          <li>
            <StyledLink
              href="https://panel.marvin-ecosystem.com/"
              target="_blank"
            >
              Panel
            </StyledLink>
          </li>
        </ul>
      </NavBarWrap>
      <MobileBarWrap show={isOpen} onHide={onHide}>
        <Offcanvas.Header closeButton />
        <Offcanvas.Body>
          <MobileMenu>
            <li>
              <StyledNavLink to="ecosystem">Ecosystem</StyledNavLink>
            </li>
            <li>
              <StyledNavLink to="community">Community</StyledNavLink>
            </li>
            <li>
              <StyledNavLink to="team">Team</StyledNavLink>
            </li>
            <li>
              <StyledNavLink to="howtobuy">How To Buy</StyledNavLink>
            </li>
            <li>
              <StyledLink
                href="https://drive.google.com/file/d/13u_BVImLUX_O21rr4ledTm5FQYP5eTAT/view"
                target="_blank"
              >
                Documents
              </StyledLink>
            </li>
            <li>
              <StyledLink
                href="https://panel.marvin-ecosystem.com/"
                target="_blank"
              >
                Panel
              </StyledLink>
            </li>
          </MobileMenu>
        </Offcanvas.Body>
      </MobileBarWrap>
    </MainMenu>
  )
}

export default Navigation
