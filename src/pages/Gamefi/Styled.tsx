import styled from "styled-components/macro";

export const SectionWrapper = styled.section`
  position: relative;
  padding: 4.5rem 0;
`;

export const ContentWrapper = styled.div`
  margin-top: 5rem;

  @media (min-width: 992px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 10px;
  }
`;

export const ContentImage = styled.img`
  width: 100%;

  :first-child {
    margin-bottom: 1rem;
  }

  @media (min-width: 992px) {
    width: 45%;

    :first-child {
      margin-bottom: 0;
    }
  }

  @media (min-width: 1400px) {
    width: 50%;
  }
`;

export const ContentText = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 27px;
  color: rgba(255, 255, 255, 0.85);

  @media (min-width: 576px) {
    font-size: 18px;
    line-height: 29px;
  }

  @media (min-width: 992px) {
    font-size: 20px;
    line-height: 31px;
    margin-bottom: 2.5rem;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-bottom: 2rem;

  @media (min-width: 576px) {
    justify-content: flex-start;
    gap: 20px;
  }

  @media (min-width: 992px) {
    margin-bottom: 0;
  }
`;

export const Spacing = styled.div`
  width: 100%;
  margin-top: 3rem;

  @media (min-width: 1400px) {
    margin-top: 5rem;
  }
`
