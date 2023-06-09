import styled from "styled-components/macro";
import { Link } from "react-scroll";

export const MainMenu = styled.div<{ footer?: boolean }>`
  position: relative;
  flex: 1;
  display: ${({ footer }) => (footer ? "block" : "none")};

  @media (min-width: 768px) {
    display: block;
  }
`;

export const NavBarWrap = styled.div<{ footer?: boolean }>`
  width: fit-content;
  margin: auto;

  ul {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    list-style: none;
    justify-content: ${({ footer }) => (footer ? "flex-start" : "center")};
    width: fit-content;
    margin-bottom: 0;

    li {
      margin: ${({ footer }) => (footer ? "0.75rem 10px" : "0 10px")};

      @media (min-width: 992px) {
        margin: ${({ footer }) => (footer && "0.75rem 0")};
      }

      @media (min-width: 1200px) {
        margin: ${({ footer }) => (footer ? "0.75rem 0" : "0 1rem")};
      }

      @media (min-width: 1400px) {
        margin: ${({ footer }) => (footer ? "0.75rem 0" : "0 1.25rem")};
      }
    }

    @media (min-width: 992px) {
      display: ${({ footer }) => (footer ? "block" : "flex")};
    }
  }
`;

export const StyledLink = styled(Link)`
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
