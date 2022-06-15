/* eslint import/no-anonymous-default-export: [2, {"allowArrowFunction": true}] */
import styled from "styled-components";

import Item from "./item";

export default (component) => styled(component)`
  cursor: ${({ details }) => (!!details.length ? "default" : "not-allowed")};
  opacity: ${({ details }) => (!!details.length ? 1 : 0.5)};
  pointer-events: ${({ details }) => (!!details.length ? "auto" : "none")};
  position: relative;

  & > {
    dt {
      border-bottom: solid 1px #e5e9ec;
      color: #405261;
      font-style: normal;
      font-weight: 500;
      font-size: 13px;
      line-height: 16px;
      padding-bottom: 10px;
    }

    dd {
      & > {
        nav {
          position: absolute;
          right: 0;
          top: 0;

          a {
            background: center
              url(${process.env
                .PUBLIC_URL}/assets/svg/icons/report-builder/actions/create.svg)
              no-repeat;
            background-size: cover;
            display: block;
            height: 16px;
            overflow: hidden;
            text-indent: -9999px;
            width: 16px;
          }
        }

        ${Item} {
          margin-top: 8px;
        }
      }
    }
  }
`;
