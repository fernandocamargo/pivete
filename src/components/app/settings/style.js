/* eslint import/no-anonymous-default-export: [2, {"allowArrowFunction": true}] */
import styled from "styled-components";

import Property from "./property";

export default (component) => styled(component)`
  background: #fff;
  border: 0.5px solid #f1f3f5;
  border-radius: 8px;
  box-shadow: 0px 12px 16px rgba(64, 82, 97, 0.2);
  min-height: 355px;
  padding: 25px 35px;
  position: absolute;
  right: 0;
  top: 0;
  width: 229px;

  & > {
    h2 {
      display: none;
    }

    nav {
      left: -5px;
      position: absolute;
      top: -5px;

      a {
        background: center
          url(${process.env
            .PUBLIC_URL}/assets/svg/icons/report-builder/actions/close.svg)
          no-repeat;
        background-size: cover;
        display: block;
        height: 18px;
        overflow: hidden;
        text-indent: -9999px;
        width: 18px;
      }
    }

    blockquote {
      ${Property} {
        &:not(:first-of-type) {
          margin-top: 17px;
        }
      }
    }
  }
`;
