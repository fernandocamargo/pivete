/* eslint import/no-anonymous-default-export: [2, {"allowArrowFunction": true}] */
import styled from "styled-components";

export default (component) => styled(component)`
  display: block;
  margin-top: 5px;
  position: relative;

  & > details {
    max-height: 25vh;
    overflow-y: auto;
  }
`;
