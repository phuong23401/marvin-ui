import { Parallax } from "@react-spring/parallax";
import styled from "styled-components/macro";
import MobileBg from "assets/images/Roadmap/mobile_bg.png";
import DesktopBg from "assets/images/Roadmap/desktop_bg.png";
import ContentBg from "assets/images/Roadmap/content_bg.png";
// import Vector_1 from "assets/images/Roadmap/Beginning/vector.png";
import Vector_2 from "assets/images/Roadmap/Growth/vector.png";
import Vector_3 from "assets/images/Roadmap/Launching/vector.png";
import Vector_4 from "assets/images/Roadmap/Ignition/vector.png";
// import Vector_5 from "assets/images/Roadmap/Destination/vector.png";

export const SectionWrapper = styled.section`
  position: relative;
  background-image: url(${MobileBg});
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

  @media (min-width: 768px) {
    height: 1450px;
  }

  @media (min-width: 1200px) {
    height: 1150px;
  }

  @media (min-width: 1400px) {
    background-image: url(${DesktopBg});
    background-size: cover;
  }

  @media (min-width: 1920px) {
    background-size: cover;
  }

  @media (min-width: 2560px) {
    height: 1500px;
  }
`;

export const StyledParallax = styled(Parallax)`
  top: 0;
  left: 0;
  margin-top: 2rem;

  @media (min-width: 576px) {
    margin-top: 5rem;
  }

  @media (min-width: 768px) {
    margin-top: 0;
  }

  @media (min-width: 1200px) {
    margin-top: 5rem;
  }
`;

export const DesktopWrapper = styled.div`
  display: none;

  .desktop-content {
    position: relative;
    transform: scale(1);

    @media (min-width: 1400px) {
      transform: scale(1);
    }

    @media (min-width: 1920px) {
      transform: scale(1.25);
    }

    @media (min-width: 2560px) {
      transform: scale(1.5);
    }
  }

  @media (min-width: 1400px) {
    display: flex;
    justify-content: space-around;
    align-items: flex-start;
    margin-top: 30rem;
  }
`;

// export const BegginingWrapper = styled.div`
//   position: absolute;
//   width: fit-content;
//   left: 2.5rem;
//   bottom: 8.5rem;

//   img {
//     position: absolute;
//     top: -13.5rem;
//     left: 0;
//     z-index: 1;

//     @media (min-width: 576px) {
//       left: auto;
//       right: 0;
//     }
//   }

//   &::before {
//     content: "";
//     position: absolute;
//     background-image: url(${Vector_1});
//     background-size: contain;
//     background-position: center;
//     background-repeat: no-repeat;
//     top: -1rem;
//     left: 7rem;
//     width: 248.95px;
//     height: 23.04px;
//     z-index: 3;

//     @media (min-width: 576px) {
//       left: 7.5rem;
//       width: 260px;
//       height: 25px;
//     }

//     @media (min-width: 1400px) {
//       left: 7rem;
//       width: 248.95px;
//       height: 23.04px;
//     }
//   }

//   @media (min-width: 375px) {
//     left: 2rem;
//   }

//   @media (min-width: 992px) {
//     transform: scale(1.25);
//     left: 5rem;
//   }

//   @media (min-width: 1200px) {
//     left: 17rem;
//   }

//   @media (min-width: 1400px) {
//     left: 2rem;
//     top: -1rem;
//   }

//   @media (min-width: 1920px) {
//     left: 4rem;
//     top: 4.5rem;
//   }
// `;

// export const GrowthWrapper = styled.div`
//   position: absolute;
//   width: fit-content;
//   bottom: 9rem;
//   left: -6rem;

//   img {
//     position: absolute;
//     top: -26rem;
//     right: -1rem;
//     z-index: 1;
//   }

//   &::before {
//     content: "";
//     position: absolute;
//     background-image: url(${Vector_2});
//     background-size: contain;
//     background-position: center;
//     background-repeat: no-repeat;
//     top: -14.5rem;
//     left: 7rem;
//     width: 184.2px;
//     height: 237.55px;
//     z-index: 3;

//     @media (min-width: 576px) {
//       width: 190px;
//       height: 240px;
//     }

//     @media (min-width: 1400px) {
//       width: 184.2px;
//       height: 237.55px;
//     }
//   }

//   @media (min-width: 375px) {
//     left: -11rem;
//   }

//   @media (min-width: 576px) {
//     left: 17rem;
//   }

//   @media (min-width: 992px) {
//     transform: scale(1.25);
//     left: 26rem;
//     bottom: 9.5rem;
//   }

//   @media (min-width: 1200px) {
//     left: auto;
//     right: 22rem;
//   }

//   @media (min-width: 1400px) {
//     top: -1.5rem;
//   }

//   @media (min-width: 1920px) {
//     top: 4rem;
//   }
// `;

// export const LaunchingWrapper = styled.div`
//   position: absolute;
//   width: fit-content;
//   bottom: 2rem;
//   left: -8rem;

//   img {
//     position: absolute;
//     top: -39rem;
//     right: -10rem;
//     z-index: 1;
//   }

//   &::before {
//     content: "";
//     position: absolute;
//     background-image: url(${Vector_3});
//     background-size: contain;
//     background-position: center;
//     background-repeat: no-repeat;
//     top: -18rem;
//     left: 0;
//     width: 444.89px;
//     height: 298.37px;
//     z-index: 3;
//   }

//   @media (min-width: 375px) {
//     left: -16rem;
//   }

//   @media (min-width: 576px) {
//     left: -3rem;
//     bottom: 4rem;
//   }

//   @media (min-width: 768px) {
//     left: auto;
//     right: -6rem;
//   }

//   @media (min-width: 992px) {
//     transform: scale(1.25);
//     right: -7rem;
//     bottom: 3rem;
//   }

//   @media (min-width: 1400px) {
//     top: 1.25rem;
//     left: -2.5rem;
//   }

//   @media (min-width: 1920px) {
//     top: 8rem;
//     left: -3rem;
//   }
// `;

// export const IgnationWrapper = styled.div`
//   position: absolute;
//   width: fit-content;
//   bottom: 5rem;
//   left: -11rem;

//   img {
//     position: absolute;
//     top: -30rem;
//     right: -13rem;
//     z-index: 1;
//   }

//   &::before {
//     content: "";
//     position: absolute;
//     background-image: url(${Vector_4});
//     background-size: contain;
//     background-position: center;
//     background-repeat: no-repeat;
//     top: -1.25rem;
//     left: 7rem;
//     width: 22.13px;
//     height: 23.04px;
//     z-index: 3;
//   }

//   @media (min-width: 375px) {
//     left: -23rem;
//   }

//   @media (min-width: 576px) {
//     left: auto;
//     right: 3rem;
//     bottom: 7rem;
//   }

//   @media (min-width: 768px) {
//     left: 2.5rem;
//     right: auto;
//   }

//   @media (min-width: 992px) {
//     transform: scale(1.25);
//     left: 6rem;
//     bottom: 6.25rem;
//   }

//   @media (min-width: 1200px) {
//     left: 3.5rem;
//   }

//   @media (min-width: 1400px) {
//     top: 2.25rem;
//     left: 0.5rem;
//   }

//   @media (min-width: 1920px) {
//     top: 8.5rem;
//     left: 0rem;
//   }
// `;

// export const DestinationWrapper = styled.div`
//   position: absolute;
//   width: fit-content;
//   bottom: 8.5rem;
//   left: -18.5rem;

//   img {
//     position: absolute;
//     top: -12rem;
//     left: 2rem;
//     z-index: 1;
//   }

//   &::before {
//     content: "";
//     position: absolute;
//     background-image: url(${Vector_5});
//     background-size: contain;
//     background-position: center;
//     background-repeat: no-repeat;
//     top: -1rem;
//     left: -8rem;
//     width: 261.44px;
//     height: 65.02px;
//     z-index: 3;

//     @media (min-width: 1400px) {
//       left: -9rem;
//     }
//   }

//   @media (min-width: 375px) {
//     left: -34rem;
//   }

//   @media (min-width: 576px) {
//     left: -8rem;
//     bottom: 10.5rem;
//   }

//   @media (min-width: 768px) {
//     left: 19rem;
//   }

//   @media (min-width: 992px) {
//     transform: scale(1.25);
//     left: auto;
//     right: 21.5rem;
//   }

//   @media (min-width: 1200px) {
//     right: 37rem;
//   }

//   @media (min-width: 1400px) {
//     top: -1rem;
//   }

//   @media (min-width: 1920px) {
//     left: -2rem;
//     top: 4rem;
//   }
// `;

export const RebirthWrapper = styled.div`
  position: absolute;
  width: fit-content;
  right: 0;
  bottom: 0.5rem;

  img {
    position: absolute;
    top: -26rem;
    right: -1rem;
    z-index: 1;

    &.first_img {
      top: -12rem;
      right: auto;
      left: -8rem;
    }
  }

  &::before {
    content: "";
    position: absolute;
    background-image: url(${Vector_2});
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
    top: -14.5rem;
    left: 10rem;
    width: 184.2px;
    height: 237.55px;
    z-index: 3;

    @media (min-width: 576px) {
      width: 190px;
      height: 240px;
    }

    @media (min-width: 1400px) {
      width: 184.2px;
      height: 237.55px;
    }
  }

  @media (min-width: 375px) {
    right: -2rem;
  }

  @media (min-width: 576px) {
    right: auto;
    left: 4rem;
  }

  @media (min-width: 768px) {
    transform: scale(1.25);
    left: 11rem;
  }

  @media (min-width: 992px) {
    left: 25rem;
  }

  @media (min-width: 1200px) {
    transform: scale(0.9);
    left: 7rem;
  }

  @media (min-width: 1400px) {
    left: 7rem;
    bottom: -1rem;
  }

  @media (min-width: 1920px) {
    left: 12rem;
    bottom: -6rem;
  }

  @media (min-width: 2560px) {
    left: 17rem;
    bottom: -20rem;
  }
`;

export const VibeWrapper = styled.div`
  position: absolute;
  width: fit-content;
  bottom: 2rem;
  left: -2rem;

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
    left: 4rem;
    width: 444.89px;
    height: 298.37px;
    z-index: 3;
  }

  @media (min-width: 375px) {
    left: 0;
  }

  @media (min-width: 576px) {
    left: auto;
    right: -9rem;
  }

  @media (min-width: 768px) {
    transform: scale(1.25);
    right: -10rem;
  }

  @media (min-width: 1200px) {
    transform: scale(0.9);
    left: 27rem;
  }

  @media (min-width: 1400px) {
    left: -3rem;
    bottom: -4rem;
  }

  @media (min-width: 1920px) {
    left: -3rem;
    bottom: -9rem;
  }

  @media (min-width: 2560px) {
    left: -5rem;
    bottom: -23rem;
  }
`;

export const TakeoverWrapper = styled.div`
  position: absolute;
  width: fit-content;
  bottom: 3.25rem;
  left: -1rem;

  img {
    position: absolute;
    top: -30rem;
    right: -11rem;
    z-index: 1;

    &.last_img {
      top: -15rem;
      right: -13rem;
    }
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
    left: -3rem;
  }

  @media (min-width: 576px) {
    left: 8rem;
  }

  @media (min-width: 768px) {
    transform: scale(1.25);
    left: 12.5rem;
  }

  @media (min-width: 992px) {
    left: 10rem;
  }

  @media (min-width: 1200px) {
    transform: scale(0.9);
    left: auto;
    right: 8.5rem;
  }

  @media (min-width: 1400px) {
    right: 7.5rem;
    bottom: -5rem;
  }

  @media (min-width: 1920px) {
    right: 12.5rem;
    bottom: -10rem;
  }

  @media (min-width: 2560px) {
    right: 22rem;
    bottom: -24rem;
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
  top: -17rem;
  left: 5rem;
`;

export const MikyWayWrapper = styled(SubContent)`
  top: -30rem;
  left: 9rem;
`;

export const PlanetFirstWrapper = styled(SubContent)`
  top: -17rem;
  left: 3rem;
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
