import styled from "styled-components/macro";

export const HeaderMain = styled.header`
  position: relative;
  background-color: transparent;
  top: 0;
  width: 100%;
  z-index: 9;
`;

export const HeaderWrapper = styled.div`
  position: relative;
  z-index: 9;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 70px;

  @media (min-width: 768px) {
    justify-content: space-between;
  }

  @media (min-width: 1200px) {
    padding: 0 3rem;
  }

  @media (min-width: 1920px) {
    padding: 0;
  }
`;

export const LogoWrap = styled.a`
  @media (min-width: 768px) {
    margin-left: 1rem;
  }

  @media (min-width: 992px) {
    margin-left: 6rem;
  }

  @media (min-width: 1400px) {
    margin-left: 10rem;
  }
`;

export const LogoImage = styled.img`
  width: 100px;

  @media (min-width: 768px) {
    width: 110px;
  }
`;

export const MenuToggle = styled.button`
  background: transparent;
  position: absolute;
  right: 0;
  border: none;

  @media (min-width: 768px) {
    display: none;
  }
`;
