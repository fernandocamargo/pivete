/* eslint import/no-anonymous-default-export: [2, {"allowArrowFunction": true}] */
import styled from "styled-components";

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

    blockquote {
      dl {
        position: relative;

        &:not(:first-of-type) {
          margin-top: 100px;
        }

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
          nav {
            position: absolute;
            right: 0;
            top: 0;

            a {
              background-position: center;
              background-repeat: no-repeat;
              background-size: cover;
              display: block;
              height: 16px;
              overflow: hidden;
              text-indent: -9999px;
              width: 16px;
            }

            li {
              &[aria-roledescription="create"] {
                a {
                  background-image: url(${process.env
                    .PUBLIC_URL}/assets/svg/icons/report-builder/actions/create.svg);
                }
              }
            }
          }
        }
      }
    }
  }
`;
