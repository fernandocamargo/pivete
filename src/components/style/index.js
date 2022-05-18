import property from "lodash/property";
import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  html {
    background-color: #fff;
    opacity: 1;
  }

  body {
    font-family: ${property("theme.typography.main")};
  }

  table {
    border: solid 0.5px #333;
    border-spacing: 0;
    width: 100%;
  }

  thead {
    background-color: #f4f0ec;
  }

  td,
  th {
    border: solid 0.5px #333;
    font-size: 0.75rem;
    padding: 0.25rem 0.5rem;
    text-align: center;
  }

  th {
    font-weight: bold;
  }

  pre {
    font-size: 0.75rem;
  }
`;
