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

function SelectAddProduct({ type, setType }) {
  return (
    <Div>
      <label htmlFor="productType">Type Switcher </label>
      <StyledSelect
        required
        name="type"
        id="productType"
        value={type}
        onChange={(e) => setType(e.target.value)}
      >
        <option disabled>chosse a type</option>
        <option value={1}>Furniture</option>
        <option value={2}>Book</option>
        <option value={3}>Disc</option>
      </StyledSelect>
    </Div>
  );
}

export default SelectAddProduct;
