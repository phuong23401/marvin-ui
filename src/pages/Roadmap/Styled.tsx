import { Parallax } from "@react-spring/parallax";
import styled from "styled-components/macro";
import BgImage from "assets/images/Roadmap/roadmap_bg.png";
import ContentBg from "assets/images/Roadmap/content_bg.png";
import Vector_1 from "assets/images/Roadmap/Beginning/vector.png";
import Vector_2 from "assets/images/Roadmap/Growth/vector.png";
import Vector_3 from "assets/images/Roadmap/Launching/vector.png";
import Vector_4 from "assets/images/Roadmap/Ignition/vector.png";
import Vector_5 from "assets/images/Roadmap/Destination/vector.png";

export const SectionWrapper = styled.section`
  position: relative;
  background-image: url(${BgImage});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 1200px;
  padding-top: 6rem;

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
`;

export const StyledParallax = styled(Parallax)`
  top: 0;
  left: 0;
  margin-top: 5rem;
`;

export const BegginingWrapper = styled.div`
  position: absolute;
  width: fit-content;
  bottom: 11rem;

  img {
    position: absolute;
    top: -13.5rem;
    left: 0;
    z-index: 1;
  }

  &::before {
    content: "";
    position: absolute;
    background-image: url(${Vector_1});
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
    top: -1rem;
    left: 7rem;
    width: 248.95px;
    height: 23.04px;
    z-index: 3;
  }
`;

export const GrowthWrapper = styled.div`
  position: absolute;
  width: fit-content;
  bottom: 11.5rem;
  left: -7rem;

  img {
    position: absolute;
    top: -26rem;
    right: -1rem;
    z-index: 1;
  }

  &::before {
    content: "";
    position: absolute;
    background-image: url(${Vector_2});
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
    top: -14.5rem;
    left: 7rem;
    width: 184.2px;
    height: 237.55px;
    z-index: 3;
  }

  @media (min-width: 375px) {
    left: -11rem;
  }
`;

export const LaunchingWrapper = styled.div`
  position: absolute;
  width: fit-content;
  bottom: 2rem;
  left: -8rem;

  img {
    position: absolute;
    top: -39rem;
    right: -10rem;
    z-index: 1;
  }

  &::before {
    content: "";
    position: absolute;
    background-image: url(${Vector_3});
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
    top: -18rem;
    left: 0;
    width: 444.89px;
    height: 298.37px;
    z-index: 3;
  }

  @media (min-width: 375px) {
    left: -16rem;
  }
`;

export const IgnationWrapper = styled.div`
  position: absolute;
  width: fit-content;
  bottom: 2rem;
  left: -12rem;

  img {
    position: absolute;
    top: -30rem;
    right: -13rem;
    z-index: 1;
  }

  &::before {
    content: "";
    position: absolute;
    background-image: url(${Vector_4});
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
    top: -1.25rem;
    left: 7rem;
    width: 22.13px;
    height: 23.04px;
    z-index: 3;
  }

  @media (min-width: 375px) {
    left: -24rem;
  }
`;

export const DestinationWrapper = styled.div`
  position: absolute;
  width: fit-content;
  bottom: 9.5rem;
  left: -18rem;

  img {
    position: absolute;
    top: -12rem;
    left: 2rem;
    z-index: 1;
  }

  &::before {
    content: "";
    position: absolute;
    background-image: url(${Vector_5});
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
    top: -1rem;
    left: -8rem;
    width: 261.44px;
    height: 65.02px;
    z-index: 3;
  }

  @media (min-width: 375px) {
    left: -34rem;
  }
`;

export const ContentWrapper = styled.div`
  position: relative;
  background-image: url(${ContentBg});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  padding: 3rem 1.5rem;
  z-index: 2;
`;

export const ContentTitle = styled.p`
  font-family: "Zen Dots";
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
`;

export const ContentText = styled.ul`
  list-style: none;
  padding-left: 0;
  margin-bottom: 0;

  li {
    font-family: "Zilla Slab";
    font-weight: 500;
    font-size: 14px;
    line-height: 17px;
    margin-bottom: 10px;

    &:last-child {
      margin-bottom: 0;
    }

    i {
      color: #b1cc33;
      margin-right: 5px;
    }
  }
`;

const SubContent = styled.div`
  position: absolute;
  text-align: right;
  z-index: 2;

  p {
    font-family: "Zen Dots";
    font-weight: 400;
    font-size: 14px;
    line-height: 18px;
    margin-bottom: 0;
  }

  span {
    font-family: "Zilla Slab";
    font-weight: 400;
    font-size: 12px;
    line-height: 16px;
    margin-right: 1rem;
  }
`;

export const CometWrapper = styled(SubContent)`
  top: -19rem;
  left: -3rem;
`;

export const MikyWayWrapper = styled(SubContent)`
  top: -30rem;
  left: 5rem;
`;

export const PlanetFirstWrapper = styled(SubContent)`
  top: -17rem;
  left: -3rem;
`;

export const PlanetLastWrapper = styled(SubContent)`
  text-align: center;
  top: -14rem;
  right: -2rem;
`;

export const UfoWrapper = styled(SubContent)`
  top: -22rem;
  right: 1rem;
`;
