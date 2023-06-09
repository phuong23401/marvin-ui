import styled from "styled-components/macro";

export const SectionWrapper = styled.section`
  position: relative;
  width: 100%;
  border-bottom: 2px solid #1f1f1f;
  padding: 8rem 0;
  overflow: hidden;

  &::after {
    content: "";
    position: absolute;
    top: -1rem;
    right: -3rem;
    width: 711px;
    height: 440px;
    background: #92001e;
    opacity: 0.2;
    filter: blur(85px);
    transform: rotate(-14.07deg);
    z-index: -1;
  }
`;

export const ActionsWrapper = styled.div`
  text-align: center;
  margin: auto;
  margin-top: 2rem;

  @media (min-width: 576px) {
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
`;

export const DecentralizedButtons = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-bottom: 2rem;

  @media (min-width: 576px) {
    margin-bottom: 0;
    gap: 10px;
  }

  @media (min-width: 768px) {
    gap: 20px;
  }
`;

export const SectionSubtitle = styled.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
  color: rgba(255, 255, 255, 0.5);
  text-align: center;
  margin: 0 auto 1rem;

  span {
    font-weight: 700;
  }

  @media (min-width: 576px) {
    font-size: 16px;
    line-height: 24px;
  }
`;

export const ContentWrapper = styled.div`
  border: 1px solid #1f1f1f;
  border-radius: 25px;
  padding: 2rem 1rem;
  width: fit-content;
  margin: auto;
  margin-top: 3rem;

  @media (min-width: 992px) {
    padding: 2rem 0 3rem;
  }
`;

export const PartnersWrapper = styled.div`
  margin-top: 2rem;

  @media (min-width: 768px) {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
  }
`;

export const ContentInner = styled.div`
  position: relative;
  background: rgba(255, 255, 255, 0.06);
  box-sizing: border-box;
  border-radius: 32px;
  text-align: center;
  padding: 4rem 0;
  width: 250px;
  margin: auto;
  margin-bottom: 1rem;

  @media (min-width: 768px) {
    width: 210px;
    padding: 3rem 0;
    margin: 0;
  }

  @media (min-width: 992px) {
    width: 280px;
    padding: 4rem 0;
  }
`;

export const PartnerLogo = styled.img`
  width: 70px;
  margin-bottom: 1rem;
`;

export const PartnerName = styled.p`
  position: relative;
  font-weight: 600;
  font-size: 16px;
  line-height: 18px;
  color: rgba(255, 255, 255, 0.25);
  margin-bottom: 0;
`;
