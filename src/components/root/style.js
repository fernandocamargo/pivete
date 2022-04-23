/* eslint import/no-anonymous-default-export: [2, {"allowArrowFunction": true}] */
import styled from "styled-components";

export default (component) => styled(component)`
  table {
    border: dotted 1px red;
    width: 100%;
  }

  td,
  th {
    border: dotted 1px blue;
  }

  div {
    display: flex;
  }

  pre {
    font-size: 0.75rem;
    width: calc(100% / 3);
  }
`;
