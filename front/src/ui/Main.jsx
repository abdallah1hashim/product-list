import styled from "styled-components";

const StyledMain = styled.main`
  padding: 60px 0;
`;
function Main({ children }) {
  return <StyledMain>{children}</StyledMain>;
}

export default Main;
