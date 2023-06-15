import styled from "styled-components/macro";
import BgImage from "assets/images/Ecosystem/ecosystem_bg.png";

export const SectionWrapper = styled.section`
  width: 100%;
  border-bottom: 2px solid #1f1f1f;
  padding-bottom: 3rem;
`;

export const BackgroundWrapper = styled.div`
  position: relative;
  background-image: url(${BgImage});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  border-radius: 36px;
  margin-bottom: 3.5rem;

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: radial-gradient(
      65.35% 65.35% at 50% 29.11%,
      rgba(0, 0, 0, 0) 0%,
      #050000 100%
    );
    z-index: 0;
  }

  @media (min-width: 992px) {
    margin-bottom: 7.5rem;
  }
`;

export const TitleWrapper = styled.div`
  padding-top: 20rem;
  text-align: center;
`;

export const Introduce = styled.div`
  position: relative;
  background: rgba(255, 255, 255, 0.12);
  border-radius: 99px;
  font-weight: 500;
  font-size: 14px;
  line-height: 21px;
  letter-spacing: 2px;
  text-transform: capitalize;
  width: fit-content;
  padding: 0.5rem 1rem;
  margin: auto;
  margin-bottom: 2rem;
  z-index: 1;

  @media (min-width: 576px) {
    font-weight: 600;
    font-size: 16px;
    line-height: 21px;
    letter-spacing: 4px;
    padding: 1rem 1.5rem;
  }
`;

export const BackgroundTitle = styled.h4`
  position: relative;
  font-weight: 700;
  font-size: 30px;
  line-height: 35px;
  margin-bottom: 0;
  text-transform: uppercase;
  z-index: 1;

  @media (min-width: 576px) {
    font-size: 48px;
    line-height: 53px;
  }

  @media (min-width: 992px) {
    font-size: 64px;
    line-height: 69px;
  }
`;

export const BackgroundSubtitle = styled.p`
  position: relative;
  font-weight: 500;
  font-size: 14px;
  line-height: 19px;
  letter-spacing: 0.75px;
  text-transform: capitalize;
  color: rgba(255, 255, 255, 0.5);
  z-index: 1;

  @media (min-width: 576px) {
    font-weight: 600;
    font-size: 16px;
    line-height: 21px;
    letter-spacing: 2px;
    padding: 1rem 1.5rem;
  }

  @media (min-width: 992px) {
    letter-spacing: 4px;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
`;

export const StyledPrimaryButton = styled.button`
  position: relative;
  background: #fff;
  border: none;
  border-radius: 99px;
  font-weight: 500;
  font-size: 14px;
  line-height: 18px;
  letter-spacing: 0.5px;
  padding: 13px 18px;
  color: #771f25;
  z-index: 1;

  &:hover {
    transform: scale(1.025);
  }

  @media (min-width: 576px) {
    padding: 15px 28px;
  }

  @media (min-width: 992px) {
    padding: 18px 40px;
    border-radius: 24px;
  }
`;

export const StyledSecondaryButton = styled.button`
  position: relative;
  background: rgba(255, 255, 255, 0.12);
  border: none;
  border-radius: 99px;
  font-weight: 500;
  font-size: 14px;
  line-height: 18px;
  letter-spacing: 0.5px;
  padding: 18px 40px;
  color: #fff;
  z-index: 1;

  &:hover {
    transform: scale(1.025);
  }

  @media (min-width: 576px) {
    padding: 15px 28px;
  }

  @media (min-width: 992px) {
    padding: 18px 40px;
    border-radius: 24px;
  }
`;

export const PartnersWrapper = styled.div`
  position: relative;
  border: 2px solid rgba(255, 255, 255, 0.12);
  border-radius: 24px;
  padding: 3rem 0;
`;

export const StyledPartnersButton = styled.button`
  position: absolute;
  background: rgba(255, 255, 255, 0.12);
  border: none;
  border-radius: 99px;
  font-weight: 500;
  font-size: 14px;
  line-height: 18px;
  letter-spacing: 0.5px;
  text-transform: capitalize;
  color: #fff;
  padding: 0.5rem 1.5rem;
  transition: all 0.3s ease;
  bottom: 1rem;
  right: 2rem;

  &:hover {
    transform: scale(1.025);
  }
`;
