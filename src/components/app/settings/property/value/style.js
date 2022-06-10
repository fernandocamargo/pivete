/* eslint import/no-anonymous-default-export: [2, {"allowArrowFunction": true}] */
import styled from "styled-components";

export default (component) => styled(component)`
  background: #fff;
  border: 0.5px solid #f1f3f5;
  border-radius: 8px;
  box-shadow: 0px 12px 16px rgba(64, 82, 97, 0.2);
  padding: 9px 25px 25px 25px;
  position: absolute;
  right: 0;
  top: 100%;
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
    margin-top: 16px;

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

  form {
    display: block;
    margin-top: 5px;
    position: relative;
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
            display: block;
            height: 18px;
            left: 11px;
            overflow: hidden;
            position: absolute;
            text-indent: -9999px;
            transition: transform 0.15s ease-in-out;
            top: 7px;
            width: 18px;
          }
        }

        label {
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

  label {
    color: #405261;
    cursor: pointer;
    display: flex;
    font-size: 13px;
    font-style: normal;
    font-weight: 400;
    line-height: 16px;
    position: relative;
    width: 100%;

    input {
      opacity: 0;
      position: absolute;

      &:focus {
        & + span {
          border-color: #b7babc;
        }
      }

      &:checked {
        & + span {
          border-color: #3084f2;
        }
      }

      &:checked {
        & + span {
          &:before {
            background-image: url(${process.env
              .PUBLIC_URL}/assets/svg/icons/form/checkbox/checked.svg);
          }
        }
      }
    }

    span {
      align-items: center;
      border: 0.5px solid #e5e9ec;
      border-radius: 4px;
      display: flex;
      padding: 7px 13.5px 7px 34.5px;
      width: calc(100% - 48px);

      &:hover {
        border-color: #3084f2;
      }

      &:before {
        background: center
          url(${process.env
            .PUBLIC_URL}/assets/svg/icons/form/checkbox/default.svg)
          no-repeat;
        content: "";
        display: flex;
        height: 15px;
        margin-right: 7px;
        width: 15px;
      }
    }
  }
`;

/*
      background: 12.5px center
        url(${process.env
          .PUBLIC_URL}/assets/svg/icons/forms/checkbox/default.svg)
        no-repeat;

          background-image: url(${process.env
            .PUBLIC_URL}/assets/svg/icons/forms/checkbox/checked.svg);
*/
