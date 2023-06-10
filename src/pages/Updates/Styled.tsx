import styled from "styled-components/macro";
import Hero from "assets/images/Updates/hero.png";

export const SectionWrapper = styled.section`
  position: relative;
  padding: 10rem 0 2rem;

  &::after {
    content: "";
    position: absolute;
    background-image: url(${Hero});
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
    top: 3rem;
    right: 0rem;
    width: 150px;
    height: 150px;
    z-index: -1;
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
    width: 295px;
    border-radius: 32px;
  }

  &::after {
    content: "";
    position: absolute;
    background: linear-gradient(
      26deg,
      rgba(0, 0, 0, 0.98) 10%,
      rgba(0, 0, 0, 0) 65%
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
  left: 2rem;
  z-index: 1;

  @media (min-width: 576px) {
    bottom: 6rem;
  }

  @media (min-width: 992px) {
    top: 12rem;
  }

  @media (min-width: 1200px) {
    top: 21rem;
  }
`;

export const Date = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: rgba(255, 255, 255, 0.5);
  margin-bottom: 0.5rem;
`;

export const ContentText = styled.p`
  font-weight: 500;
  font-size: 18px;
  line-height: 28px;
  margin-bottom: 0;

  @media (min-width: 576px) {
    font-size: 20px;
    line-height: 30px;
    margin-right: 2rem;
  }
`;

export const ButtonWrapper = styled.div`
  position: absolute;
  bottom: 1rem;
  left: 2rem;
  z-index: 1;

  @media (min-width: 576px) {
    bottom: 2rem;
  }

  @media (min-width: 1200px) {
    bottom: 2.5rem;
  }
`;
