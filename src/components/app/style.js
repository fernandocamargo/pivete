/* eslint import/no-anonymous-default-export: [2, {"allowArrowFunction": true}] */
import property from "lodash/property";
import styled from "styled-components";

import { Table } from "components/widgets";

export default (component) => styled(component)`
  display: flex;

  & > {
    header {
      background: #ffffff;
      box-shadow: inset -1px 0px 0px #ececec;
      display: flex;
      flex-direction: column;
      height: 100vh;
      position: fixed;
      width: 142px;

      & + {
        * {
          margin-left: 142px;
        }
      }

      h2 {
        margin-top: 40px;

        a {
          background: no-repeat
            url(${process.env.PUBLIC_URL}/assets/png/logo.png) center;
          display: block;
          height: 45px;
          margin: 0 auto;
          overflow: hidden;
          text-indent: -9999px;
          width: 42px;
        }

        span {
          display: none;
        }
      }

      nav {
        flex-grow: 1;
        margin: 82.5px 0 40px 0;

        & > {
          ul {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            height: 100%;

            & > {
              li {
                & > {
                  a {
                    align-items: center;
                    color: #808d97;
                    display: flex;
                    flex-direction: column;
                    font-style: normal;
                    font-weight: 500;
                    font-size: 13px;
                    line-height: 16px;
                    text-decoration: none;

                    &:before {
                      content: "LOL";
                      display: inline-flex;

                      background-position: center;
                      background-repeat: no-repeat;
                      background-size: cover;
                      content: "";
                      display: inline-flex;
                    }

                    &:hover {
                      color: #3084f2;
                    }
                  }
                }

                &[aria-current="page"] {
                  & > {
                    a {
                      color: #3084f2;
                    }
                  }
                }
              }
            }
          }
        }

        li {
          &[aria-roledescription="upload"] {
            & > a:before {
              background-image: url(${process.env
                .PUBLIC_URL}/assets/svg/icons/header/menu/upload.svg);
              height: 24px;
              margin-bottom: 7.5px;
              width: 24px;
            }
          }

          &[aria-roledescription="controlling"] {
            & > a:before {
              background-image: url(${process.env
                .PUBLIC_URL}/assets/svg/icons/header/menu/controlling.svg);
              height: 24px;
              margin-bottom: 7.5px;
              width: 24px;
            }
          }

          &[aria-roledescription="builder"] {
            & > a:before {
              background-image: url(${process.env
                .PUBLIC_URL}/assets/svg/icons/header/menu/builder.svg);
              height: 17px;
              margin-bottom: 9.5px;
              width: 23px;
            }
          }

          &[aria-roledescription="workspaces"] {
            & > a:before {
              background-image: url(${process.env
                .PUBLIC_URL}/assets/svg/icons/header/menu/workspaces.svg);
              height: 21px;
              margin-bottom: 7.5px;
              width: 21px;
            }
          }

          &[aria-roledescription="mappings"] {
            & > a:before {
              background-image: url(${process.env
                .PUBLIC_URL}/assets/svg/icons/header/menu/mappings.svg);
              height: 24px;
              margin-bottom: 7.5px;
              width: 24px;
            }
          }

          &[aria-roledescription="kpi"] {
            & > a:before {
              background-image: url(${process.env
                .PUBLIC_URL}/assets/svg/icons/header/menu/kpi.svg);
              height: 22px;
              margin-bottom: 7.5px;
              width: 22px;
            }
          }

          &[aria-roledescription="reports"] {
            & > a:before {
              background-image: url(${process.env
                .PUBLIC_URL}/assets/svg/icons/header/menu/reports.svg);
              height: 23px;
              margin-bottom: 6px;
              width: 21px;
            }
          }

          &[aria-roledescription="settings"] {
            padding-top: 40px;

            &:before {
              background-color: #e5e9ec;
              content: "";
              display: block;
              height: 1px;
              margin: 0 auto;
              position: relative;
              top: -40px;
              width: 62px;
            }

            & > {
              a {
                position: relative;

                &:before {
                  background-image: url(${process.env
                    .PUBLIC_URL}/assets/svg/icons/header/menu/settings.svg);
                  height: 24px;
                  margin-bottom: 6.5px;
                  width: 24px;
                }
              }

              ul {
                align-items: center;
                display: flex;
                justify-content: flex-end;
                left: 142px;
                position: absolute;
                top: 47px;
                width: calc(100vw - (142px + 80px + 15px));

                li {
                  &[aria-roledescription="notifications"] {
                    a {
                      background: no-repeat
                        url(${process.env
                          .PUBLIC_URL}/assets/svg/icons/header/menu/notifications.svg)
                        center;
                      height: 16px;
                      width: 17px;

                      abbr {
                        background: #ff453a;
                        border-radius: 25px;
                        display: inline-flex;
                        left: calc(100% - 10px);
                        padding: 2px 10px;
                        position: absolute;
                        text-decoration: none;
                        top: -10px;

                        &:before {
                          color: #fff;
                          content: attr(title);
                          font-style: normal;
                          font-weight: 500;
                          font-size: 10px;
                          line-height: 10px;
                        }
                      }
                    }
                  }

                  &[aria-roledescription="profile"] {
                    margin-left: 56px;

                    a {
                      align-items: center;
                      background: #e6edfb;
                      border-radius: 5px;
                      height: 32px;
                      justify-content: center;
                      width: 32px;

                      abbr {
                        text-decoration: none;

                        &:before {
                          color: #3084f2;
                          content: attr(title);
                          display: inline-flex;
                          font-style: normal;
                          font-weight: 500;
                          font-size: 13px;
                          line-height: 16px;
                        }
                      }
                    }
                  }
                }

                a {
                  display: flex;
                  font-size: 0;
                  position: relative;
                  text-decoration: none;
                }
              }
            }
          }
        }
      }

      form {
        display: none;
        position: absolute;
        left: 100%;
        top: 0;
      }
    }

    div[role="main"] {
      flex-grow: 1;
      padding-top: 100px;

      section {
        padding: 0 80px;
        position: relative;

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

        ${Table} {
          margin-top: 45px;
        }
      }
    }
  }
`;
