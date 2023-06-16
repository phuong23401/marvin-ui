import { useState } from "react";
import styled from "styled-components/macro";
import { BsArrowUpCircleFill } from "react-icons/bs";

const ButtonWrraper = styled.div`
  background: transparent;
  border-radius: 99px;
  position: fixed;
  bottom: 50px;
  right: 10px;
  transition: all 0.3s ease;
  z-index: 1000;

  &:hover {
    cursor: pointer;
    transform: scale(1.125);
  }

  @media (min-width: 576px) {
    right: 20px;
    bottom: 60px;
  }

  @media (min-width: 1200px) {
    right: 30px;
    bottom: 30px;
  }
`;

export const ScrollTopButton = (): JSX.Element => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  window.addEventListener("scroll", toggleVisible);

  return (
    <ButtonWrraper onClick={scrollToTop}>
      <BsArrowUpCircleFill
        size={30}
        fill="rgba(255,255,255,0.5)"
        style={{ display: visible ? "inline" : "none" }}
      />
    </ButtonWrraper>
  );
};
