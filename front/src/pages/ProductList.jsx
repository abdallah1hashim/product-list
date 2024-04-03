import Header from "../ui/Header";
import Main from "../ui/Main";
import Row from "../ui/Row";
import PageLayout from "../ui/PageLayout";
import Button from "../ui/Button";
import ProducListContent from "../Features/product-list/ProducListContent";

const fakeData = [
  { sku: "JVC200123", name: "Acme Disc", price: 1, value: 700 },
  { sku: "JVC200124", name: "Acme Disc", price: 1, value: 700 },
  { sku: "JVC200125", name: "Acme Disc", price: 1, value: 700 },
  { sku: "JVC200126", name: "Acme Disc", price: 1, value: 700 },
  { sku: "GGWP00007", name: "War And Peace", price: 20, value: 2 },
  { sku: "GGWP00008", name: "War And Peace", price: 20, value: 2 },
  { sku: "GGWP00009", name: "War And Peace", price: 20, value: 2 },
  { sku: "GGWP00010", name: "War And Peace", price: 20, value: 2 },
  { sku: "TR120555", name: "Chair", price: 40, value: "24x45x15" },
  { sku: "TR120556", name: "Chair", price: 40, value: "24x45x15" },
  { sku: "TR120557", name: "Chair", price: 40, value: "24x45x15" },
  { sku: "TR120558", name: "Chair", price: 40, value: "24x45x15" },
];

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
        <ProducListContent data={fakeData} />
      </Main>
    </PageLayout>
  );
}

export default ProductList;
