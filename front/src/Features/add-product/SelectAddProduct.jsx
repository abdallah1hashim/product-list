import styled from "styled-components";

const StyledSelect = styled.select`
  border-radius: 5px;
  padding: 5px;
`;
const Div = styled.div`
  display: flex;
  gap: 10px;
  padding: 0 20px;
  justify-content: start;
  align-items: center;
`;

function SelectAddProduct() {
  return (
    <Div>
      <label htmlFor="productType">Type Switcher </label>
      <StyledSelect id="productType" defaultValue="Type Switcher">
        <option>DVD</option>
        <option>Furniture</option>
        <option>Weight</option>
      </StyledSelect>
    </Div>
  );
}

export default SelectAddProduct;
