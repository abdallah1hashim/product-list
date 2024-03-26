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

function Box({ data }) {
  return (
    <StyledBox>
      <p>{data.sku}</p>
      <p>{data.name}</p>
      <p>{currency(data.price).format()}</p>
      {data.size && <p>Size: {data.size + " MB"}</p>}
      {data.weight && <p>Weight: {data.weight + " KG"}</p>}
      {data.dimension && <p>Dimension: {data.dimension}</p>}
      <Delete />
    </StyledBox>
  );
}

export default Box;
