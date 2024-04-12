import Button from "../ui/Button";
import PageLayout from "../ui/PageLayout";
import Row from "../ui/Row";

function Page404() {
  return (
    <PageLayout>
      <Row>
        <Button to="/">GO HOME</Button>
      </Row>
      <h1>Page Not Found</h1>
    </PageLayout>
  );
}

export default Page404;
