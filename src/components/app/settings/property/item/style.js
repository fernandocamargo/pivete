import styled from "styled-components";

export default (component) => styled(component)`
  border: 0.5px solid #e5e9ec;
  border-radius: 4px;
  padding: 7px 28px;
  position: relative;
  width: calc(100% - 56px);

  & > {
    dt {
      color: #405261;
      font-size: 13px;
      font-style: normal;
      font-weight: 400;
      line-height: 16px;
    }

    dd {
      & > {
        nav {
          ul {
            align-items: center;
            display: flex;
            height: 100%;
            justify-content: space-between;
            left: 0;
            position: absolute;
            top: 0;
            width: 100%;
          }

          li {
            &[aria-roledescription="edit"] {
              margin-right: 15px;
              position: relative;

              a {
                background: center
                  url(${process.env
                    .PUBLIC_URL}/assets/svg/icons/report-builder/settings/property/edit.svg)
                  no-repeat;
                height: 5px;
                width: 8px;
              }
            }

            &[aria-roledescription="sort"] {
              margin-left: 10px;

              a {
                background: center
                  url(${process.env
                    .PUBLIC_URL}/assets/svg/icons/report-builder/settings/property/sort.svg)
                  no-repeat;
                cursor: move;
                height: 12px;
                width: 8px;

                &:before {
                  content: "";
                  display: block;
                  height: 100%;
                  left: 0;
                  position: absolute;
                  top: 0;
                  width: 100%;
                }
              }
            }

            a {
              display: block;
              overflow: hidden;
              text-indent: -9999px;
            }
          }
        }
      }
    }
  }
`;
