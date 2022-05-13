/* eslint import/no-anonymous-default-export: [2, {"allowArrowFunction": true}] */
import styled from "styled-components";

export default (component) => styled(component)`
  &,
  td,
  th {
    border-width: 1px !important;
  }
`;
