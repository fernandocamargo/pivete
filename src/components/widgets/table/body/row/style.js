import styled, { css } from "styled-components";

export const expand = () => css`
  &:after {
    background: center
      url(${process.env
        .PUBLIC_URL}/assets/svg/icons/report-builder/table/row/actions/expand.svg)
      no-repeat;
    content: "";
    display: inline-flex;
    height: 12px;
    margin-left: 9px;
    width: 12px;
  }
`;

export const toggle = () => css`
  &:before {
    background: center
      url(${process.env
        .PUBLIC_URL}/assets/svg/icons/report-builder/table/row/actions/toggle.svg)
      no-repeat;
    content: "";
    display: inline-flex;
    height: 18px;
    margin-right: 5.5px;
    transition: transform 0.15s ease-in-out;
    width: 18px;
  }

  dfn {
    align-items: center;
    display: inline-flex;

    &:before {
      background-color: #efeffd;
      border-radius: 5px;
      color: #5e5ce6;
      content: attr(aria-label);
      display: inline-flex;
      font-family: "Lato";
      font-size: 12px;
      font-style: normal;
      font-weight: 500;
      line-height: 12px;
      margin-right: 8px;
      padding: 5px 7px;
      text-transform: uppercase;
    }
  }
`;

export default (component) => styled(component)`
  &[aria-expanded="true"] {
    td {
      a:before {
        transform: rotate(90deg);
      }
    }
  }

  td {
    &:first-of-type {
      a {
        ${({ details }) => (!!details?.length ? toggle() : expand())}
        align-items: center;
        display: inline-flex;
      }
    }
  }
`;
