import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

const baseStyles = css`
  padding: 0.4rem 0.8rem;
  background-color: var(--color-grey-0);
  border: 1px solid var(--color-grey-700);
  transition: 0.3s;
  &:hover {
    box-shadow: 2px 2px 1px var(--color-grey-700);
  }
`;

const StyledLink = styled(Link)`
  ${baseStyles}
`;
const StyledButton = styled.button`
  ${baseStyles}
`;

function Button({ children, disabled, to, onClick, id }) {
  if (to) {
    return <StyledLink to={to}>{children}</StyledLink>;
  }
  if (onClick) {
    return (
      <StyledButton disabled={disabled} onClick={onClick} id={id}>
        {children}
      </StyledButton>
    );
  }
  return <StyledButton disabled={disabled}>{children}</StyledButton>;
}

export default Button;
