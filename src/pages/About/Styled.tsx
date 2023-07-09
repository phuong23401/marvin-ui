import styled from "styled-components/macro";
import Hero from "assets/images/About/hero.png";

export const SectionWrapper = styled.section`
  position: relative;
  width: 100%;
  border-bottom: 2px solid #1f1f1f;
  padding: 4.5rem 0 5.5rem;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: -1rem;
    right: -3rem;
    width: 490px;
    height: 490px;
    background: #92001e;
    opacity: 0.2;
    filter: blur(85px);
    z-index: -1;
  }

  &::after {
    content: "";
    position: absolute;
    background-image: url(${Hero});
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    bottom: 0;
    left: -1rem;
    width: 170px;
    height: 170px;
    z-index: -1;

    @media (min-width: 576px) {
      width: 200px;
      height: 200px;
    }

    @media (min-width: 992px) {
      width: 300px;
      height: 300px;
      left: -2rem;
    }

    @media (min-width: 1200px) {
      width: 400px;
      height: 400px;
      z-index: 2;
    }

    @media (min-width: 1400px) {
      width: 420px;
      height: 420px;
      left: 0;
    }
  }
`;

export const Introduce = styled.div`
  background: #111111;
  border: 2px solid #222222;
  border-radius: 32px;
  padding: 0.75rem 1rem;
  width: fit-content;
  margin: auto;
  margin-top: 1.5rem;
  text-align: center;

  p {
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: rgba(255, 255, 255, 0.5);
    margin-bottom: 0;
  }

  @media (min-width: 576px) {
    padding: 0.75rem 5rem;
  }

  @media (min-width: 768px) {
    width: 68%;
    padding: 0.75rem 4.5rem;
  }

  @media (min-width: 992px) {
    width: 51%;
  }

  @media (min-width: 1200px) {
    width: 43%;
  }

  @media (min-width: 1400px) {
    width: 37%;
  }
`;

export const ContentMobile = styled.div`
  margin-top: 3.5rem;

  @media (min-width: 992px) {
    display: none;
  }
`;

export const ContentDesktop = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 3rem;

  &:last-child {
    gap: 3rem;
  }
`;

export const ContentInner = styled.div`
  position: relative;
  background: #111111;
  border-radius: 24px;
  text-align: center;
  padding: 2.5rem;
  width: 350px;
  height: 348px;

  &.no-text {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  img {
    width: 75px;
    margin-bottom: 1rem;
  }

  p {
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;
    color: rgba(255, 255, 255, 0.5);
    margin-bottom: 0.5rem;

    @media (min-width: 768px) {
      font-size: 20px;
      line-height: 31px;
    }
  }

  h5 {
    font-weight: 600;
    font-size: 18px;
    line-height: 26px;
    margin-bottom: 0;

    @media (min-width: 768px) {
      font-size: 24px;
      line-height: 31px;
    }
  }

  @media (min-width: 768px) {
    min-width: 365px;
    width: fit-content;
    height: 365px;
  }
`;

export const ContentText = styled.div`
  font-weight: 400;
  font-size: 18px;
  line-height: 29px;
  color: rgba(255, 255, 255, 0.85);
  margin-bottom: 1rem;

  @media (min-width: 768px) {
    font-size: 20px;
    line-height: 31px;
  }
`;

export const ContentSubText = styled.div`
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
`;

export const BottomWrapper = styled.div`
  text-align: center;
  margin-top: 2rem;

  @media (min-width: 992px) {
    margin-top: 3rem;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 2rem;

  p {
    font-weight: 400;
    font-size: 18px;
    line-height: 29px;
    color: rgba(255, 255, 255, 0.85);
    margin-bottom: 1rem;

    @media (min-width: 768px) {
      font-size: 20px;
      line-height: 31px;
    }
  }
`;
