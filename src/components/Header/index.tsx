import { useState } from "react";
import { Container } from "react-bootstrap";
import {
  HeaderMain,
  HeaderWrapper,
  LogoImage,
  LogoWrap,
  MenuToggle,
} from "./Styled";
import Navigation from "../Navigation";
import Logo from "assets/images/logo.png";
import { HiOutlineMenuAlt4 } from "react-icons/hi";

function Header(): JSX.Element {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleMobileMenuOpen = () => {
    setMobileMenuOpen(true);
  };

  return (
    <HeaderMain>
      <Container>
        <HeaderWrapper>
          <LogoWrap href="/">
            <LogoImage src={Logo} />
          </LogoWrap>
          <Navigation
            isOpen={mobileMenuOpen}
            onHide={() => setMobileMenuOpen(false)}
          />
          <MenuToggle onClick={handleMobileMenuOpen}>
            <HiOutlineMenuAlt4 stroke="rgba(255, 255, 255, 0.5)" size={24} />
          </MenuToggle>
        </HeaderWrapper>
      </Container>
    </HeaderMain>
  );
}

export default Header;
