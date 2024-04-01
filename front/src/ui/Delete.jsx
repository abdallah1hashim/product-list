import styled from "styled-components";

const Div = styled.div`
  position: absolute;
  top: 10px;
  left: 10px;
`;
function Delete() {
  return (
    <Div>
      <input type="checkbox" />
    </Div>
  );
}

export default Delete;
