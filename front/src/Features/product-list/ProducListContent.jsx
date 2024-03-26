import styled from "styled-components";
import Box from "../../ui/Box";

const fakeData = [
  { sku: "JVC200123", name: "Acme Disc", price: 1, size: 700 },
  { sku: "JVC200124", name: "Acme Disc", price: 1, size: 700 },
  { sku: "JVC200125", name: "Acme Disc", price: 1, size: 700 },
  { sku: "JVC200126", name: "Acme Disc", price: 1, size: 700 },
  { sku: "GGWP00007", name: "War And Peace", price: 20, weight: 2 },
  { sku: "GGWP00008", name: "War And Peace", price: 20, weight: 2 },
  { sku: "GGWP00009", name: "War And Peace", price: 20, weight: 2 },
  { sku: "GGWP00010", name: "War And Peace", price: 20, weight: 2 },
  { sku: "TR120555", name: "Chair", price: 40, dimension: "24x45x15" },
  { sku: "TR120556", name: "Chair", price: 40, dimension: "24x45x15" },
  { sku: "TR120557", name: "Chair", price: 40, dimension: "24x45x15" },
  { sku: "TR120558", name: "Chair", price: 40, dimension: "24x45x15" },
];

const ListLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  justify-content: space-between;
  gap: 40px;
`;

function ProducListContent() {
  return (
    <ListLayout>
      {fakeData.map((data) => (
        <Box data={data} key={data.sku} />
      ))}
    </ListLayout>
  );
}

export default ProducListContent;
