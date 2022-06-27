import isArray from "lodash/isArray";
import styled, { css } from "styled-components";

import { Checkbox } from "components/widgets/fields";

export const deep = () => css`
  padding: 7px 13.5px 7px 34.5px;
  width: calc(100% - 48px);
`;

export default (component) => styled(component)`
  & > {
    legend {
      ${Checkbox} {
        span {
          ${({ value }) => isArray(value) && deep()};
        }
      }
    }
  }
`;
