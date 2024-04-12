import styled from "styled-components";
import currency from "currency.js";
import Delete from "./Delete";

const StyledBox = styled.div`
  border: 1px solid var(--color-grey-700);
  flex-direction: column;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  position: relative;
`;

function Box({ data, deleteList }) {
  function handleDelete() {
    if (deleteList.current.productId.includes(data.productId)) {
      return (deleteList.current.productId =
        deleteList.current.productId.filter((id) => id !== data.productId));
    }
    deleteList.current.productId.push(data.productId);
  }
  return (
    <StyledBox>
      <p>{data.sku}</p>
      <p>{data.name}</p>
      <p>{currency(data.price).format()}</p>
      {data.type === 1 && <p>Dimension: {data.value}</p>}
      {data.type === 2 && <p>Weight: {data.value + " KG"}</p>}
      {data.type === 3 && <p>Size: {data.value + " MB"}</p>}
      <Delete onChange={handleDelete} className="delete-checkbox" />
    </StyledBox>
  );
}

export default Box;
