import styled from "styled-components";

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid var(--color-grey-700);
  padding-top: 30px;
`;
function Header({ children }) {
  return <StyledHeader>{children}</StyledHeader>;
}

export default Header;
