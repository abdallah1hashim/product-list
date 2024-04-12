import styled from "styled-components";

const Layout = styled.div`
  display: grid;
  grid-template-rows: 8rem 1fr;
`;
const FormLayout = styled.form`
  display: grid;
  grid-template-rows: 8rem 1fr;
`;

function PageLayout({ children, type, onSubmit, id }) {
  if (type === "form")
    return (
      <FormLayout id={id} onSubmit={onSubmit}>
        {children}
      </FormLayout>
    );

  return <Layout>{children}</Layout>;
}

export default PageLayout;
