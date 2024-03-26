import FormAddProduct from "../Features/add-product/FormAddProduct";
import Button from "../ui/Button";
import Header from "../ui/Header";
import Main from "../ui/Main";
import PageLayout from "../ui/PageLayout";
import Row from "../ui/Row";

function AddPRoduct() {
  return (
    <PageLayout>
      <Header>
        <h1>Add Product</h1>
        <Row>
          <Button>Save</Button>
          <Button to="/">Cancel</Button>
        </Row>
      </Header>
      <Main><FormAddProduct /></Main>
    </PageLayout>
  );
}

export default AddPRoduct;
