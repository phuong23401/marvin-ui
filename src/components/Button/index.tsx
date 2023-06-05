import {
  ButtonPrimary,
  ButtonSecondary,
  SubmitButton,
  StyledButton,
  Spinner,
  ButtonOutline,
} from "./Styled";

interface IButtonProps {
  children: React.ReactNode;
  type?: "primary" | "secondary" | "submit" | "outline";
  handleClick?: () => void;
  loading?: boolean;
  style?: string;
  disabled?: boolean;
}

function Button(props: IButtonProps): JSX.Element {
  const { children, type, loading, handleClick, disabled } = props;

  if (type === "primary") {
    return (
      <ButtonPrimary
        type="button"
        disabled={disabled ?? loading}
        onClick={handleClick}
      >
        <span>
          {loading && <Spinner />}
          {children}
        </span>
      </ButtonPrimary>
    );
  }

  if (type === "outline") {
    return (
      <ButtonOutline
        type="button"
        disabled={disabled ?? loading}
        onClick={handleClick}
      >
        <span>
          {loading && <Spinner />}
          {children}
        </span>
      </ButtonOutline>
    );
  }

  if (type === "secondary") {
    return (
      <ButtonSecondary
        type="button"
        disabled={disabled ?? loading}
        onClick={handleClick}
      >
        <span>
          {loading && <Spinner />}
          {children}
        </span>
      </ButtonSecondary>
    );
  }

  if (type === "submit") {
    return (
      <SubmitButton
        type="button"
        disabled={disabled ?? loading}
        onClick={handleClick}
      >
        <span>
          {loading && <Spinner />}
          {children}
        </span>
      </SubmitButton>
    );
  }

  return (
    <>
      <StyledButton
        type="button"
        disabled={disabled ?? loading}
        onClick={handleClick}
      >
        <span>
          {loading && <Spinner />}
          {children}
        </span>
      </StyledButton>
    </>
  );
}

export default Button;
