/* eslint import/no-anonymous-default-export: [2, {"allowArrowFunction": true}] */
import property from "lodash/property";
import styled from "styled-components";

export default (component) => styled(component)`
  display: flex;

  & > {
    div[role="main"] {
      flex-grow: 1;
      padding-top: 100px;

      section {
        padding: 0 80px;
        position: relative;

        & > {
          h1 {
            color: #405261;
            font-family: ${property("theme.typography.emphasis")};
            font-style: normal;
            font-weight: 300;
            font-size: 26px;
            line-height: 32px;
          }

          p {
            color: #93a1b0;
            font-style: normal;
            font-weight: 400;
            font-size: 13px;
            line-height: 16px;
            margin-top: 8px;
          }

          nav {
            position: absolute;
            right: 80px;
            top: 8px;

            ul {
              display: flex;
              flex-direction: row;
            }

            a {
              align-items: center;
              color: #93a1b0;
              display: inline-flex;
              font-family: ${property("theme.typography.emphasis")};
              font-style: normal;
              font-weight: 500;
              font-size: 12px;
              letter-spacing: 0.04em;
              line-height: 16px;
              text-decoration: none;
              text-transform: uppercase;

              &:before {
                background-position: center;
                background-repeat: no-repeat;
                background-size: cover;
                content: "";
                display: inline-flex;
                height: 16px;
                margin-right: 8px;
                width: 16px;
              }
            }

            li {
              &[aria-roledescription="settings"] {
                a:before {
                  background-image: url(${process.env
                    .PUBLIC_URL}/assets/svg/icons/report-builder/actions/settings.svg);
                }
              }

              &[aria-roledescription="chart"] {
                margin-left: 29px;

                a:before {
                  background-image: url(${process.env
                    .PUBLIC_URL}/assets/svg/icons/report-builder/actions/chart.svg);
                }
              }

              &[aria-roledescription="create"] {
                margin-left: 20px;

                a:before {
                  background-image: url(${process.env
                    .PUBLIC_URL}/assets/svg/icons/report-builder/actions/create.svg);
                }
              }

              &[aria-roledescription="formula"] {
                margin-left: 32px;

                a:before {
                  background-image: url(${process.env
                    .PUBLIC_URL}/assets/svg/icons/report-builder/actions/formula.svg);
                }
              }

              &[aria-roledescription="templates"] {
                margin-left: 27px;

                a:before {
                  background-image: url(${process.env
                    .PUBLIC_URL}/assets/svg/icons/report-builder/actions/templates.svg);
                }
              }

              &[aria-roledescription="save"] {
                margin-left: 20px;

                a:before {
                  background-image: url(${process.env
                    .PUBLIC_URL}/assets/svg/icons/report-builder/actions/save.svg);
                }
              }
            }
          }

          article {
            margin-top: 45px;
            position: relative;
          }
        }
      }
    }
  }
`;
