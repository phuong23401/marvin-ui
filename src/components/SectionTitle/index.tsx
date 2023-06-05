import styled from "styled-components/macro";

const TitleWrapper = styled.div<{ align?: boolean }>`
  text-align: ${({ align }) => (align ? "center" : "left")};
`;

const StyledTitle = styled.h4<{ size?: string }>`
  font-weight: ${({ size }) => (size === "sm" ? 600 : 700)};
  font-size: ${({ size }) => (size === "sm" ? "24px" : "40px")};
  line-height: ${({ size }) => (size === "sm" ? "31px" : "48px")};
  color: #fff;
`;

const StyledSubtitle = styled.p`
  font-weight: 500;
  font-size: 20px;
  line-height: 30px;
  color: rgba(255, 255, 255, 0.5);
  margin-bottom: 5px;
`;

interface ITitleProps {
  alignCenter: boolean;
  size?: "sm" | "lg";
  subTitle?: string;
  children: React.ReactNode;
}

function SectionTitle(props: ITitleProps): JSX.Element {
  const { alignCenter, size, subTitle, children } = props;

  return (
    <TitleWrapper align={alignCenter}>
      <StyledSubtitle>{subTitle}</StyledSubtitle>
      <StyledTitle size={size}>{children}</StyledTitle>;
    </TitleWrapper>
  );
}

export default SectionTitle;
