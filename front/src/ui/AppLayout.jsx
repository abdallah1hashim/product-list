import { Outlet } from "react-router-dom";

import styled from "styled-components";
import Container from "./Container";
import Footer from "./Footer";

const StyledAppLayout = styled.div`
  height: 100dvh;
  display: grid;
  grid-template-rows: 1fr 6rem;
`;

function appLayout() {
  return (
    <Container>
      <StyledAppLayout>
        <Outlet />
        <Footer />
      </StyledAppLayout>
    </Container>
  );
}

export default appLayout;
