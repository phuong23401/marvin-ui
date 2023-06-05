import styled from "styled-components/macro";

export const SectionWrapper = styled.section`
  position: relative;
  width: 100%;
  border-bottom: 2px solid #1f1f1f;
  padding: 4.5rem 0 2rem;
  overflow: hidden;

  &::after {
    content: "";
    position: absolute;
    top: -3rem;
    left: -2rem;
    width: 253px;
    height: 253px;
    background: #92001e;
    opacity: 0.41;
    filter: blur(85px);
    z-index: -1;
  }
`;

export const ContentWrapper = styled.div`
  margin-top: 8rem;

  @media (min-width: 768px) {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    flex-wrap: wrap;
  }
`;

export const ContentInner = styled.div`
  position: relative;
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0.08) 0%,
    rgba(255, 255, 255, 0) 100%
  );
  box-sizing: border-box;
  border-radius: 32px;
  text-align: center;
  padding: 3.5rem 1rem;
  margin-bottom: 5rem;
  z-index: 2;

  h5 {
    margin-bottom: 0;
  }

  span {
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: rgba(255, 255, 255, 0.5);
  }

  &::after {
    content: "";
    position: absolute;
    background: linear-gradient(
      180deg,
      rgba(255, 255, 255, 0.1) 0%,
      rgba(217, 217, 217, 0) 100%
    );
    border-top-left-radius: 99px;
    border-top-right-radius: 99px;
    width: 130px;
    height: 65px;
    top: -4rem;
    left: 50%;
    transform: translateX(-50%);
    z-index: 1;
  }

  @media (min-width: 768px) {
    width: 49%;
  }
`;

export const ChannelLogo = styled.img`
  position: absolute;
  top: -3rem;
  left: 50%;
  transform: translateX(-50%);
`;

export const ChannelName = styled.p`
  position: relative;
  font-weight: 600;
  font-size: 13px;
  line-height: 15px;
  color: rgba(255, 255, 255, 0.25);

  svg {
    position: absolute;
    right: 2rem;
    fill: rgba(255, 255, 255, 0.25);
  }
`;

export const ChannelContent = styled.p`
  font-weight: 500;
  font-size: 24px;
  line-height: 28px;
  color: rgba(255, 255, 255, 0.5);
  margin-bottom: 0.5rem;
`;
