import styled from "styled-components/macro";
import BgImage from "assets/images/Ecosystem/crewthemoon_bg.png";

export const CardWrapper = styled.div`
  position: relative;
  background-image: url(${BgImage});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  border-radius: 24px;
  padding: 1.5rem;
  margin-bottom: 2rem;

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(274.25deg, rgba(0, 0, 0, 0) 0%, #000000 100%);
    z-index: 0;
  }
`;

export const CardTitle = styled.p`
  position: relative;
  font-weight: 500;
  font-size: 12px;
  line-height: 15px;
  z-index: 1;
  
  @media (min-width: 576px) {
    font-size: 16px;
    line-height: 22px;
  }
  
  @media (min-width: 992px) {
    font-size: 20px;
    line-height: 30px;
    margin-bottom: 3rem;
  }
`;

export const CardSubtitle = styled.p`
  position: relative;
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  letter-spacing: 0.3px;
  color: rgba(246, 246, 246, 0.8);
  margin-bottom: 2rem;
  width: 90%;
  z-index: 1;
  
  @media (min-width: 576px) {
    font-size: 15px;
    line-height: 20px;
    margin-bottom: 1rem;
  }
  
  @media (min-width: 992px) {
    font-size: 17px;
    line-height: 28px;
    margin-bottom: 0;
  }
`;

export const ButtonWrapper = styled.div`
  position: absolute;
  height: fit-content;
  right: 1.5rem;
  bottom: 1.5rem;
  z-index: 1;
  
  @media (min-width: 992px) {
    top: 50%;
    transform: translateY(-50%);
  }
`;
