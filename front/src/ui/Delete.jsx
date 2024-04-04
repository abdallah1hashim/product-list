import styled from "styled-components";

const Div = styled.div`
  position: absolute;
  top: 10px;
  left: 10px;
`;
function Delete({ onChange }) {
  return (
    <Div>
      <input type="checkbox" onChange={() => onChange()} />
    </Div>
  );
}

export default Delete;
