import Header from "../ui/Header";
import Main from "../ui/Main";
import Row from "../ui/Row";
import PageLayout from "../ui/PageLayout";
import Button from "../ui/Button";
import ProducListContent from "../Features/product-list/ProducListContent";

function ProductList() {
  return (
    <PageLayout>
      <Header>
        <h1>Product List</h1>
        <Row>
          <Button to="addproduct">Add</Button>
          <Button>Mass Delete</Button>
        </Row>
      </Header>
      <Main>
        <ProducListContent />
      </Main>
    </PageLayout>
  );
}

export default ProductList;
