import styled from "styled-components";

export default (component) => styled(component)`
  border-left: 1px dashed #e5e9ec;
  border-right: 1px dashed #e5e9ec;
  border-top: 1px dashed #e5e9ec;
  overflow: auto;

  table {
    background-color: #fff;
    width: 100%;

    td,
    th {
      font-family: "Lato";
      font-style: normal;
      font-weight: 400;
      font-size: 13px;
      line-height: 16px;
    }
  }
`;
