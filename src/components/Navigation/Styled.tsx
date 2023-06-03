import styled from "styled-components/macro";

export const MainMenu = styled.div`
  position: relative;
  flex: 1;
  display: none;

  @media (min-width: 768px) {
    display: block;
  }
`;

export const NavBarWrap = styled.div<{ footer?: boolean }>`
  ul {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    list-style: none;
    justify-content: ${({ footer }) => (footer ? "center" : "flex-start")};
    width: 100%;
    margin-bottom: 0;

    @media (min-width: 768px) {
      justify-content: ${({ footer }) => (footer ? "flex-end" : "center")};
    }

    li {
      margin: 0 10px;

      @media (min-width: 1200px) {
        margin: 0 1rem;
      }

      @media (min-width: 1400px) {
        margin: 0 1.25rem;
      }
    }
  }
`;

export const StyledLink = styled.a`
  font-weight: 500;
  font-size: 16px;
  line-height: 16px;
  text-decoration: none;
  color: rgba(255, 255, 255, 0.5);

  &:hover {
    color: rgba(255, 255, 255, 0.5);
    text-shadow: 0 0 1px rgba(255, 255, 255, 0.5);
    transition: all 0.5s ease;
    cursor: pointer;
  }
`;

export const MobileMenu = styled.ul`
  list-style: none;
`;
