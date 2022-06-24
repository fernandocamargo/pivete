import styled from "styled-components";

export default (component) => styled(component)`
  &:first-of-type {
    & > * {
      margin-left: ${({ depth }) => (depth - 1) * 30}px;
    }
  }
`;
