import styled from "styled-components/macro";

export const PartnersWrapper = styled.div`
  position: relative;
  border: 2px solid rgba(255, 255, 255, 0.12);
  border-radius: 24px;
  padding: 3rem 0 5rem;
`;

export const StyledButton = styled.button`
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
