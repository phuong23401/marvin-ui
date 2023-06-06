import styled from "styled-components/macro";
import MobileBg from "assets/images/Roadmap/desktop_bg.png";
import DesktopBg from "assets/images/Roadmap/desktop_bg.png";
import Hero from "assets/images/Roadmap/hero.png";

export const SectionWrapper = styled.section`
  position: relative;
  background-image: url(${MobileBg});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 1063px;
  padding: 8rem 0;

  &::before {
    content: "";
    position: absolute;
    background: radial-gradient(
      256.9% 171.84% at 50% -66.02%,
      #000000 14.21%,
      rgba(0, 0, 0, 0) 100%
    );
    top: 0;
    left: 0;
    width: 100%;
    height: 6.5rem;
    z-index: 0;
  }

  &::after {
    content: "";
    position: absolute;
    background-image: url(${Hero});
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
    bottom: 0;
    right: 0;
    width: 295px;
    height: 295px;
    z-index: 0;
  }

  @media (min-width: 1200px) {
    background-image: url(${DesktopBg});
  }
`;
