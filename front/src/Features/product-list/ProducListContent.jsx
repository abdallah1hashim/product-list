import styled from "styled-components";
import Box from "../../ui/Box";
import { useProductCollection } from "./useProduct";

const ListLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  justify-content: space-between;
  gap: 40px;
`;

function ProducListContent({ data }) {
  const { data: apiData } = useProductCollection();
  console.log(apiData);
  return (
    <ListLayout>
      {data && data.map((data) => <Box data={data} key={data.productId} />)}
    </ListLayout>
  );
}

export default ProducListContent;
