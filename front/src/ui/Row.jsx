import styled, { css } from "styled-components";

const Row = styled.div`
  display: flex;
  gap: 15px;
  ${(props) =>
    props.type === "horizontal" &&
    css`
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
    `}
  ${(props) =>
    props.type === "vertical" &&
    css`
      flex-direction: column;
      justify-content: center;
    `}
`;

Row.defaultProps = {
  type: "horizontal",
};

export default Row;
