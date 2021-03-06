import styled from "styled-components";

export default (component) => styled(component)`
  display: block;
  margin-top: 5px;
  position: relative;

  & > details {
    max-height: 25vh;
    padding-left: 28px;
    padding-right: 14px;
    overflow-y: auto;
  }
`;
