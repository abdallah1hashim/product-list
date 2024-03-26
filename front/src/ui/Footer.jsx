import styled from "styled-components";

const StyledFooter = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  border-top: 1px solid var(--color-grey-700);
`;

function Footer() {
  return (
    <StyledFooter>
      <p>Scandiweb Test assignment</p>
    </StyledFooter>
  );
}

export default Footer;
