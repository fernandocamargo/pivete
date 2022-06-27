import styled from "styled-components";

export default (component) => styled(component)`
  color: #405261;
  cursor: pointer;
  display: flex;
  font-size: 13px;
  font-style: normal;
  font-weight: 400;
  line-height: 16px;
  position: relative;
  width: 100%;
  word-break: break-all;

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
    padding: 7px 13.5px;
    width: calc(100% - 27px);

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
      margin-right: 7px;
      min-height: 15px;
      min-width: 15px;
    }
  }
`;
