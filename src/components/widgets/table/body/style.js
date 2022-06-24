import styled from "styled-components";

export default (component) => styled(component)`
  td {
    box-shadow: inset 0px 1px 0px #ececec, inset 0px -1px 0px #ececec;

    &:first-of-type {
      background-color: #fff;
      left: 0;
      padding: 13px 23px;
      position: sticky;

      &:after {
        border-right: 1px dashed #e5e9ec;
        content: "";
        display: block;
        height: 100%;
        left: 100%;
        position: absolute;
        top: 0;
        width: 0;
      }

      a {
        color: #405261;
        font-family: "Lato";
        font-size: 13px;
        font-style: normal;
        font-weight: 400;
        line-height: 16px;
        text-decoration: none;
      }
    }

    &:not(:first-of-type) {
      padding: 13px;
      text-align: center;
    }
  }
`;
