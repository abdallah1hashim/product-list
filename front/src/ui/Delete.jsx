import styled from "styled-components";

const Div = styled.div`
  position: absolute;
  top: 10px;
  left: 10px;
`;
function Delete({ onChange, className }) {
  return (
    <Div>
      <input
        className={className}
        type="checkbox"
        onChange={() => onChange()}
      />
    </Div>
  );
}

export default Delete;
