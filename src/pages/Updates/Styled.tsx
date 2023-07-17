import styled from "styled-components/macro";
import Hero from "assets/images/Updates/hero.png";

export const SectionWrapper = styled.section`
  position: relative;
  padding: 5rem 0 2rem;

  &::after {
    content: "";
    position: absolute;
    background-image: url(${Hero});
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
    top: 1.5rem;
    right: -2rem;
    width: 150px;
    height: 150px;
    z-index: -1;

    @media (min-width: 576px) {
      top: 0;
      right: -1rem;
      width: 200px;
      height: 200px;
    }

    @media (min-width: 992px) {
      top: 1.5rem;
      width: 250px;
      height: 250px;
    }

    @media (min-width: 1400px) {
      top: -1rem;
      width: 295px;
      height: 295px;
    }

    @media (min-width: 1920px) {
      top: 4rem;
    }
  }

  @media (min-width: 576px) {
    padding-top: 6rem;
  }

  @media (min-width: 992px) {
    padding-top: 10rem;
  }

  @media (min-width: 1920px) {
    padding-top: 15rem;
  }
`;

export const ContentWrapper = styled.div`
  margin-top: 2rem;
`;

export const ContentInner = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  width: fit-content;
  height: fit-content;
  border-radius: 32px;

  img {
    width: 250px;
    aspect-ratio: 1 / 1;
    object-fit: cover;
    border-radius: 32px;
  }

  &::after {
    content: "";
    position: absolute;
    background: linear-gradient(
      25deg,
      rgba(0, 0, 0, 0.98) 20%,
      rgba(0, 0, 0, 0) 85%
    );
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 0;
  }

  @media (min-width: 576px) {
    img {
      width: 350px;
    }
  }

  @media (min-width: 992px) {
    img {
      width: 400px;
    }
  }

  @media (min-width: 1200px) {
    img {
      width: 538px;
    }
  }
`;

export const TextWrapper = styled.div`
  position: absolute;
  bottom: 5rem;
  left: 1.5rem;
  z-index: 1;

  @media (min-width: 576px) {
    bottom: 6rem;
  }

  @media (min-width: 992px) {
    top: 12rem;
    left: 2rem;
    bottom: auto;
  }

  @media (min-width: 1200px) {
    top: 21rem;
  }
`;

export const Date = styled.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: rgba(255, 255, 255, 0.5);
  margin-bottom: 0.5rem;

  @media (min-width: 576px) {
    font-size: 16px;
    line-height: 24px;
  }
`;

export const ContentText = styled.p`
  font-weight: 500;
  font-size: 16px;
  line-height: 26px;
  margin-bottom: 0;

  @media (min-width: 576px) {
    font-size: 18px;
    line-height: 28px;
    margin-right: 2rem;
  }

  @media (min-width: 992px) {
    font-size: 20px;
    line-height: 30px;
  }
`;

export const ButtonWrapper = styled.div`
  position: absolute;
  bottom: 1rem;
  left: 1.5rem;
  z-index: 1;

  @media (min-width: 576px) {
    bottom: 2rem;
  }

  @media (min-width: 992px) {
    left: 2rem;
  }

  @media (min-width: 1200px) {
    bottom: 2.5rem;
  }
`;
