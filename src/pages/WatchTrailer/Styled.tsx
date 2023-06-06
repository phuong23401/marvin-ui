import styled from "styled-components/macro";
import BgImage from "assets/images/WatchTrailer/watch_trailer_bg.png";
import ButtonBg from "assets/images/WatchTrailer/button_bg.png";

export const SectionWrapper = styled.section`
  position: relative;
  background-image: url(${BgImage});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  padding: 10rem 0;

  &::after {
    content: "";
    position: absolute;
    background: linear-gradient(
      180deg,
      #000000 0%,
      rgba(0, 0, 0, 0) 56.84%,
      rgba(0, 0, 0, 0) 67.32%,
      #000000 100%
    );
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 0;
  }
`;

export const ContentImage = styled.img`
  position: relative;
  width: 100%;
  z-index: 1;
  
  @media (min-width: 992px) {
    width: auto;
  }
`;

export const StyledButton = styled.button`
  position: relative;
  background: transparent;
  background-image: url(${ButtonBg});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  border: none;
  display: flex;
  width: 200px;
  height: 53.82px;
  margin: auto;
  margin-top: 1rem;
  transition: all 0.3s ease;
  z-index: 1;

  a {
    width: 100%;
    height: 100%;
  }

  &:hover {
    transform: scale(1.025);
  }

  @media (min-width: 576px) {
    width: 241px;
    height: 63.82px;
  }
`;
