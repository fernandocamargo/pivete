import styled from "styled-components";

export default (component) => styled(component)`
  td {
    box-shadow: inset 0px 1px 0px #ececec, inset 0px -1px 0px #ececec;
    padding: 13px;

    &:first-of-type {
      border-right: 1px dashed #e5e9ec;
    }

    &:not(:first-of-type) {
      text-align: center;
    }
  }
`;
