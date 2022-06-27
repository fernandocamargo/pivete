import styled, { css } from "styled-components";

export const disabled = () => css`
  filter: grayscale(1);
  opacity: 0.5;
  pointer-events: none;
`;

export default (component) => styled(component)`
  & > {
    summary {
      ${({ value }) => !value.length && disabled()};
    }
  }
`;
