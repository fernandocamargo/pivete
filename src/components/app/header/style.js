import styled from "styled-components";

export default (component) => styled(component)`
  background: #ffffff;
  box-shadow: inset -1px 0px 0px #ececec;
  display: flex;
  flex-direction: column;
  height: 100vh;
  position: fixed;
  width: 142px;
  z-index: 1;

  & + {
    * {
      margin-left: 142px;
    }
  }

  h2 {
    margin-top: 40px;

    a {
      background: no-repeat url(${process.env.PUBLIC_URL}/assets/png/logo.png)
        center;
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
`;
