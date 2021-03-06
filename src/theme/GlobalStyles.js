import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
    font-size: 62.5%;
    line-height: 1.15;
    -webkit-text-size-adjust: 100%;
  }

  *, *::before, *::after {
    box-sizing: inherit;
    padding: 0;
    margin: 0;
    text-decoration: none;
  }

  body {
    width: 100vw;
    overflow-x: hidden;
    position: relative;
    font-family: ${({ theme }) => theme.fontsNames.paragraphs}, sans-serif;
    font-size: 1.6rem;
    margin: 0;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: ${({ theme }) => theme.fontsNames.headers}, sans-serif;
  }

  a, button {
    font-family: 'Roboto', sans-serif;
  }

  table {
    border-collapse: collapse;
  }

  td, th {
    border: 1px solid black;
  }

  main {
    display: block;
  }

  a {
    background-color: transparent;
  }

  abbr[title] {
    border-bottom: none; /* 1 */
    text-decoration: underline dotted; /* 2 */
  }

  b, strong {
    font-weight: bolder;
  }

  code,
  kbd,
  samp {
    font-family: 'Roboto', sans-serif;
    font-size: 1.6rem; /* 2 */
  }

  small {
    font-size: 80%;
  }

  sub,
  sup {
    font-size: 75%;
    line-height: 0;
    position: relative;
    vertical-align: baseline;
  }

  sub {
    bottom: -0.25rem;
  }

  sup {
    top: -0.5rem;
  }

  img {
    border-style: none;
  }

  button,
  input,
  optgroup,
  select,
  textarea {
    font-family: inherit; /* 1 */
    font-size: 100%;
    line-height: 1.15; /* 1 */
    margin: 0; /* 2 */
  }

  button,
  input {
    overflow: visible;
  }

  button,
  select {
    text-transform: none;
  }

  button,
  [type='button'],
  [type='reset'],
  [type='submit'] {
    -webkit-appearance: button;
  }

  button::-moz-focus-inner,
  [type='button']::-moz-focus-inner,
  [type='reset']::-moz-focus-inner,
  [type='submit']::-moz-focus-inner {
    border-style: none;
    padding: 0;
  }

  button:-moz-focusring,
  [type='button']:-moz-focusring,
  [type='reset']:-moz-focusring,
  [type='submit']:-moz-focusring {
    outline: 1px dotted ButtonText;
  }

  fieldset {
    padding: 0.35rem 0.75rem 0.625rem;
  }

  legend {
    box-sizing: border-box; /* 1 */
    color: inherit; /* 2 */
    display: table; /* 1 */
    max-width: 100%; /* 1 */
    padding: 0; /* 3 */
    white-space: normal; /* 1 */
  }

  progress {
    vertical-align: baseline;
  }

  textarea {
    overflow: auto;
  }

  [type='checkbox'],
  [type='radio'] {
    box-sizing: border-box; /* 1 */
    padding: 0; /* 2 */
  }

  [type='number']::-webkit-inner-spin-button,
  [type='number']::-webkit-outer-spin-button {
    height: auto;
  }

  [type='search'] {
    -webkit-appearance: textfield; /* 1 */
    outline-offset: -2px; /* 2 */
  }

  [type='search']::-webkit-search-decoration {
    -webkit-appearance: none;
  }

  ::-webkit-file-upload-button {
    -webkit-appearance: button; /* 1 */
    font: inherit; /* 2 */
  }

  details {
    display: block;
  }

  summary {
    display: list-item;
  }

  template {
    display: none;
  }

  [hidden] {
    display: none;
  }
`;
