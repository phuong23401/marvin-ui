import { CgSpinner } from "react-icons/cg";
import styled, { keyframes } from "styled-components/macro";

export const StyledButton = styled.button<{ disabled: boolean | undefined }>`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  border: none;
  border-radius: 99px;
  padding: 0.75rem 1rem;
  color: #000;
  font-weight: 400;
  font-size: 14px;
  line-height: 14px;
  text-transform: capitalize;
  transition: all 0.3s ease;
  opacity: ${({ disabled }) => disabled && "0.5"};

  svg {
    margin-left: 0.5rem;
    width: 14px;
    height: 14px;
  }

  a {
    width: 100%;
    height: 100%;
  }

  &:hover {
    transform: scale(1.025);
  }

  @media (min-width: 576px) {
    padding: 1rem 1.25rem;
    font-weight: 500;
    font-size: 16px;
    line-height: 16px;

    svg {
      width: 16px;
      height: 16px;
    }
  }
`;

export const ButtonPrimary = styled(StyledButton)<{ color?: string }>`
  color: ${({ color }) => (color ? color : "#000")};

  a,
  &:hover {
    color: ${({ color }) => (color ? color : "#000")};
  }
`;

export const ButtonSecondary = styled(StyledButton)`
  background: rgba(255, 255, 255, 0.12);
  color: #fff;

  a,
  &:hover {
    color: ${({ color }) => (color ? color : "#fff")};
  }
`;

export const ButtonOutline = styled(StyledButton)`
  background: transparent;
  border: 1px solid #fff;
  padding: 0.75rem 1.5rem;
  color: #fff;

  a {
    color: #fff;
  }

  &:hover {
    background: #f1f1f1;
    border-color: transparent;
    color: #0f0f0f;

    a {
      color: #0f0f0f;
    }
  }
`;

export const SubmitButton = styled(StyledButton)`
  background-color: #3749e9;
  width: 100%;
  padding: 10px 0;
  font-weight: 500;
  font-size: 16px;
  font-weight: 400;
  color: #fff;
  border: none;
  margin-top: 1.5rem;

  &:hover {
    background-color: #3749e9;
  }
`;

const spin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const Spinner = styled(CgSpinner)`
  animation: ${spin} 0.75s linear infinite;
  margin-right: 0.5rem;
`;
