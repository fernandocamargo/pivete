/* eslint import/no-anonymous-default-export: [2, {"allowArrowFunction": true}] */
import property from "lodash/property";
import styled from "styled-components";

export default (component) => styled(component)`
  border-left: 1px dashed #e5e9ec;
  border-right: 1px dashed #e5e9ec;
  border-top: 1px dashed #e5e9ec;
  overflow: auto;

  table {
    background-color: #fff;
    width: 100%;

    td,
    th {
      font-family: "Lato";
      font-style: normal;
      font-weight: 400;
      font-size: 13px;
      line-height: 16px;
    }

    thead {
      tr {
        &:first-of-type {
          th {
            font-size: 0;

            &:first-of-type {
              border-right: 1px dashed #e5e9ec;
            }
          }
        }

        &:last-of-type {
          th {
            box-shadow: inset 0px 1px 0px #ececec;
            color: #3084f2;
            font-family: ${property("theme.typography.main")};
            font-style: normal;
            font-weight: 600;
            font-size: 10px;
            line-height: 10px;
            padding: 6px;
          }
        }
      }

      th {
        color: #93a1b0;
        font-family: ${property("theme.typography.emphasis")};
        font-style: normal;
        font-weight: 500;
        font-size: 12px;
        line-height: 12px;
        padding: 8px;
        text-align: center;
      }
    }

    tbody {
      td {
        box-shadow: inset 0px 1px 0px #ececec, inset 0px -1px 0px #ececec;
        padding: 13px;
        text-align: center;

        &[aria-roledescription="label"] {
          border-right: 1px dashed #e5e9ec;
        }
      }
    }
  }
`;
