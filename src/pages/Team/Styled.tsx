import styled from "styled-components/macro";
import ContentBg from "assets/images/Team/content_bg.png";
import MemberBorder from "assets/images/Team/member_border.png";

export const SectionWrapper = styled.section`
  border-bottom: 2px solid #1f1f1f;
  padding: 2rem 0 3rem;
`;

export const ContentMobile = styled.div`
  background: linear-gradient(0deg, #0f0f0f, #0f0f0f), #d9d9d9;
  border: 1px solid #ac0000;
  box-shadow: -17px -14px 35px rgba(153, 0, 0, 0.51),
    17px 14px 35px rgba(153, 0, 0, 0.51);
  border-radius: 57px;
  padding: 30px;
  padding-bottom: 1rem;
  margin-top: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;

  @media (min-width: 375px) {
    justify-content: space-between;
  }

  @media (min-width: 1200px) {
    display: none;
  }
`;

export const ContentDesktop = styled.div`
  display: none;
  background-image: url(${ContentBg});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  padding: 10rem 5rem;

  @media (min-width: 1200px) {
    display: flex;
    justify-content: space-around;
    align-items: center;
  }

  @media (min-width: 1400px) {
    padding: 16rem 7rem;
  }
`;

export const MemberWrapper = styled.div`
  position: relative;
  background-image: url(${MemberBorder});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  padding: 14px;
  margin-bottom: 5rem;
  width: 90%;

  @media (min-width: 375px) {
    width: 45%;
  }

  @media (min-width: 768px) {
    width: 30%;

    &:nth-child(4) {
      margin-bottom: 3rem;
    }
  }

  @media (min-width: 992px) {
    padding: 20px;
  }

  @media (min-width: 1200px) {
    width: fit-content;
    padding: 14px;

    &:nth-child(4),
    :nth-child(5) {
      margin-bottom: 0;
    }
  }

  &:nth-child(5),
  :last-child {
    margin-bottom: 3rem;
  }
`;

export const MemberImage = styled.div`
  position: relative;
  width: 100%;

  img {
    width: 100%;

    @media (min-width: 1200px) {
      width: 158px;
      height: 195px;
    }
  }

  &::after {
    content: "";
    position: absolute;
    background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0) 19.98%,
      #000000 87.38%
    );
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0.89;
  }
`;

export const MemberInfo = styled.div`
  position: absolute;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 10px;
  padding: 0.5rem 0;
  width: 100px;
  height: 77px;
  text-align: center;
  bottom: -2rem;
  left: 50%;
  transform: translateX(-50%);

  h5 {
    font-weight: 600;
    font-size: 14px;
    line-height: 20px;
    margin-bottom: 0;
  }

  p {
    font-weight: 400;
    font-size: 8px;
    line-height: 11px;
    color: rgba(255, 255, 255, 0.8);
    margin-bottom: 0;
  }

  @media (min-width: 576px) {
    width: 110px;
    height: 87px;

    h5 {
      font-size: 16px;
      line-height: 26px;
    }
  }

  @media (min-width: 768px) {
    height: 90px;
  }
`;

export const SocialWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  margin-top: 5px;

  img {
    width: 1rem;

    @media (min-width: 768px) {
      width: auto;
    }
  }
`;
