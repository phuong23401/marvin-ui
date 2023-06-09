import styled from "styled-components/macro";

const TitleWrapper = styled.div<{ align?: boolean }>`
  text-align: center;

  @media (min-width: 768px) {
    text-align: ${({ align }) => (align ? "center" : "left")};
  }
`;

const StyledTitle = styled.h4<{ size?: string }>`
  font-weight: ${({ size }) => (size === "sm" ? 600 : 700)};
  font-size: ${({ size }) => (size === "sm" ? "18px" : "30px")};
  line-height: ${({ size }) => (size === "sm" ? "26px" : "38px")};
  color: #fff;

  @media (min-width: 576px) {
    font-size: ${({ size }) => (size === "sm" ? "20px" : "34px")};
    line-height: ${({ size }) => (size === "sm" ? "28px" : "42px")};
  }

  @media (min-width: 992px) {
    font-size: ${({ size }) => (size === "sm" ? "24px" : "40px")};
    line-height: ${({ size }) => (size === "sm" ? "31px" : "48px")};
  }
`;

const StyledSubtitle = styled.p`
  font-weight: 500;
  font-size: 16px;
  line-height: 26px;
  color: rgba(255, 255, 255, 0.5);
  margin-bottom: 5px;

  @media (min-width: 576px) {
    font-size: 18px;
    line-height: 28px;
  }

  @media (min-width: 992px) {
    font-size: 20px;
    line-height: 30px;
  }
`;

interface ITitleProps {
  alignCenter?: boolean;
  size?: "sm" | "lg";
  subTitle?: string;
  children: React.ReactNode;
}

function SectionTitle(props: ITitleProps): JSX.Element {
  const { alignCenter, size, subTitle, children } = props;

  return (
    <TitleWrapper align={alignCenter}>
      <StyledSubtitle>{subTitle}</StyledSubtitle>
      <StyledTitle size={size}>{children}</StyledTitle>
    </TitleWrapper>
  );
}

export default SectionTitle;
