/* eslint import/no-anonymous-default-export: [2, {"allowArrowFunction": true}] */
import styled from "styled-components";

import { Checkbox } from "components/widgets/fields";

export default (component) => styled(component)`
  background: #fff;
  border: 0.5px solid #f1f3f5;
  border-radius: 8px;
  box-shadow: 0px 12px 16px rgba(64, 82, 97, 0.2);
  padding: 9px 25px 25px 25px;
  position: absolute;
  right: 0;
  top: calc(100% + 11px);
  width: 229px;
  z-index: 1;

  & > {
    details {
      & > summary,
      & > details > summary {
        align-items: center;
        border-bottom: solid 1px #e5e9ec;
        color: #3084f2;
        font-family: "Lato";
        font-style: normal;
        font-weight: 500;
        font-size: 10px;
        letter-spacing: 0.04em;
        line-height: 10px;
        list-style: none;
        padding: 3px 0;
        text-transform: uppercase;

        &:before {
          background: center
            url(${process.env
              .PUBLIC_URL}/assets/svg/icons/report-builder/settings/actions/toggle.svg)
            no-repeat;
          background-size: cover;
          content: "";
          display: inline-flex;
          height: 6px;
          margin: 0 10px 0 5px;
          overflow: hidden;
          text-indent: -9999px;
          transition: transform 0.15s ease-in-out;
          width: 4px;
        }
      }

      &:not(:first-of-type) {
        & > {
          summary {
            filter: grayscale(1);
            opacity: 0.5;
            pointer-events: none;
          }
        }
      }
    }
  }

  & > details,
  summary + details {
    & > {
      details {
        margin-left: 16px;
      }
    }
  }

  details {
    &[open] {
      & > {
        summary:before {
          transform: rotate(90deg);
        }
      }
    }
  }

  summary {
    cursor: pointer;
    display: flex;
  }

  legend {
    display: flex;
    width: 100%;

    & + {
      details {
        &[open] {
          & > {
            summary {
              transform: rotate(90deg);
            }
          }
        }

        & > {
          summary {
            background: center
              url(${process.env
                .PUBLIC_URL}/assets/svg/icons/report-builder/settings/property/value/actions/toggle.svg)
              no-repeat;
            bottom: calc(100% + 6px);
            display: block;
            height: 18px;
            left: 12px;
            overflow: hidden;
            position: absolute;
            text-indent: -9999px;
            transition: transform 0.15s ease-in-out;
            width: 18px;
            z-index: 1;
          }
        }

        ${Checkbox} {
          margin: 5px 0 0 28px;
          width: calc(100% - 28px);

          span {
            padding: 7px 13.5px;
            width: calc(100% - 27px);
          }
        }
      }
    }
  }
`;
