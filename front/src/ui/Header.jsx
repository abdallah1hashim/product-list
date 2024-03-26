import styled from "styled-components";

function Header({ children }) {
  const StyledHeader = styled.header`
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid var(--color-grey-700);
    padding-top: 30px;
  `;
  return <StyledHeader>{children}</StyledHeader>;
}

export default Header;
