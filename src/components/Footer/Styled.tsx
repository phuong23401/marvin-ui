import styled from "styled-components/macro";

export const FooterMain = styled.footer`
  width: 100%;
  padding-top: 4rem;
  padding-bottom: 4rem;
  border-top: 2px solid #1f1f1f;

  @media (min-width: 992px) {
    padding-top: 6rem;
  }
`;

export const FooterWrapper = styled.div`
  position: relative;
  width: 100%;

  @media (min-width: 992px) {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
  }
`;

export const Informations = styled.div`
  @media (min-width: 1400px) {
    width: 36%;
  }
`;

export const LogoWrap = styled.div`
  width: fit-content;
  margin: auto;

  @media (min-width: 992px) {
    margin: 0;
  }
`;

export const LogoImage = styled.img``;

export const SubText = styled.p`
  font-weight: 400;
  font-size: 17px;
  line-height: 28px;
  letter-spacing: 0.3px;
  color: #808080;
  margin-top: 1.5rem;
  text-align: center;

  @media (min-width: 992px) {
    text-align: left;
  }
`;

export const SocialLinks = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  margin-top: 2rem;
  margin-bottom: 1.5rem;
  gap: 15px;

  @media (min-width: 576px) {
    margin: 2rem 5rem 1.5rem;
  }

  @media (min-width: 768px) {
    margin: 2rem 9rem 1.5rem;
  }
  
  @media (min-width: 992px) {
    margin: 2rem 0 1.5rem;
    justify-content: flex-start;
  }
`;

export const SocialIcon = styled.a`
  background: rgba(255, 255, 255, 0.06);
  border-radius: 99px;
  display: flex;
  justify-content: center;
  padding: 1rem;

  &:hover {
    box-shadow: 0 3px 10px rgba(153, 0, 0, 0.5);
    transition: all 0.5s ease;
  }
`;

export const FooterTitle = styled.p`
  font-family: "Space Grotesk";
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  text-align: center;
  margin-top: 1rem;

  @media (min-width: 992px) {
    margin-top: 5rem;
    text-align: left;
  }
`;

export const InputField = styled.div`
  background: rgba(255, 255, 255, 0.06);
  position: relative;
  display: flex;
  width: 100%;
  border-radius: 99px;

  span {
    text-align: center;
    padding: 1rem 1.25rem;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
  }

  input {
    background-color: transparent;
    border: none;
    color: rgba(255, 255, 255, 0.5);

    &:focus {
      border-color: transparent;
    }
  }

  svg {
    position: absolute;
    right: 1rem;
    top: 50%;
    transform: translateY(-50%);
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 1.75rem;

  button:first-child {
    margin-right: 1rem;
  }

  @media (min-width: 992px) {
    justify-content: flex-start;
  }
`;
