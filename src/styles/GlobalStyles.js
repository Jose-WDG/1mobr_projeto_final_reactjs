import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  /* normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */

  /* Document
     ========================================================================== */

  /**
   * 1. Correct the line height in all browsers.
   * 2. Prevent adjustments of font size after orientation changes in iOS.
   */
  :root{
    font-family: roboto, sans-serif,Inter, system-ui, Avenir, Helvetica, Arial;
  }

  html {
    line-height: 1.15; /* 1 */
    -webkit-text-size-adjust: 100%; /* 2 */
  }

  /* Sections
     ========================================================================== */

  /**
   * Remove the margin in all browsers.
   */

  body {
    margin: 0;
  }

  /**
   * Render the main element consistently in IE.
   */

  main {
    display: block;
  }

  /* Grouping content
     ========================================================================== */

  /**
   * 1. Add the correct box sizing in Firefox.
   * 2. Show the overflow in Edge and IE.
   */

  hr {
    box-sizing: content-box; /* 1 */
    height: 0; /* 1 */
    overflow: visible; /* 2 */
  }

  /**
   * 1. Correct the inheritance and scaling of font size in all browsers.
   * 2. Correct the odd "em" font sizing in all browsers.
   */

  pre {
    //font-family: monospace, monospace; /* 1 */
    font-size: 1em; /* 2 */
  }

  /* Text-level semantics
     ========================================================================== */

  /**
   * Remove the gray background on active links in IE 10.
   */

  a {
    background-color: transparent;
  }

  /**
   * 1. Remove the bottom border in Chrome 57-
   * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.
   */

  abbr[title] {
    border-bottom: none; /* 1 */
    text-decoration: underline; /* 2 */
    text-decoration: underline dotted; /* 2 */
  }

  /**
   * Add the correct font weight in Chrome, Edge, and Safari.
   */

  b,
  strong {
    font-weight: bolder;
  }

  /**
   * 1. Correct the inheritance and scaling of font size in all browsers.
   * 2. Correct the odd "em" font sizing in all browsers.
   */

  code,
  kbd,
  samp {
    //font-family: monospace, monospace; /* 1 */
    font-size: 1em; /* 2 */
  }

  /**
   * Add the correct font size in all browsers.
   */

  small {
    font-size: 80%;
  }

  /**
   * Prevent "sub" and "sup" elements from affecting the line height in
   * all browsers.
   */

  sub,
  sup {
    font-size: 75%;
    line-height: 0;
    position: relative;
    vertical-align: baseline;
  }

  sub {
    bottom: -0.25em;
  }

  sup {
    top: -0.5em;
  }

  /* Embedded content
     ========================================================================== */

  /**
   * Remove the border on images inside links in IE 10.
   */

  img {
    border-style: none;
  }

  /* Forms
     ========================================================================== */

  /**
   * 1. Change the font styles in all browsers.
   * 2. Remove the margin in Firefox and Safari.
   */

  button,
  input,
  optgroup,
  select,
  textarea {
    //font-family: inherit; /* 1 */
    font-size: 100%; /* 1 */
    line-height: 1.15; /* 1 */
    margin: 0; /* 2 */
  }

  /**
   * Show the overflow in IE.
   * 1. Show the overflow in Edge.
   */

  button,
  input { /* 1 */
    overflow: visible;
  }

  /**
   * Remove the inheritance of text transform in Edge, Firefox, and IE.
   * 1. Remove the inheritance of text transform in Firefox.
   */

  button,
  select { /* 1 */
    text-transform: none;
  }

  /**
   * Correct the inability to style clickable types in iOS and Safari.
   */

  button,
  [type="button"],
  [type="reset"],
  [type="submit"] {
    -webkit-appearance: button;
  }

  /**
   * Remove the inner border and padding in Firefox.
   */

  ::-moz-focus-inner {
    border-style: none;
    padding: 0;
  }

  /**
   * Restore the focus styles unset by the previous rule.
   */

  :-moz-focusring {
    outline: 1px dotted ButtonText;
  }

  /**
   * Remove the additional required properties in Chrome, Edge, and Safari.
   */

  :-webkit-autofill {
    -webkit-box-shadow: 0 0 0 1000px white inset;
    transition: background-color 5000s ease-in-out 0s;
  }

  /**
   * Correct the cursor style of increment and decrement buttons in Chrome.
   */

  ::-webkit-inner-spin-button,
  ::-webkit-outer-spin-button {
    height: auto;
  }

  /**
   * 1. Correct the odd appearance in Chrome and Safari.
   * 2. Correct the outline style in Safari.
   */

  ::-webkit-input-placeholder {
    color: inherit;
    opacity: 0.54;
  }

  /**
   * Remove the inner padding and cancel buttons in Chrome and Safari on macOS.
   */

  ::-webkit-search-cancel-button,
  ::-webkit-search-decoration {
    -webkit-appearance: none;
  }

  /**
   * 1. Correct the inability to style clickable types in iOS and Safari.
   * 2. Change font properties to inherit in Safari.
   */

  ::-webkit-file-upload-button {
    -webkit-appearance: button;
    font: inherit;
  }

  /* Interactive
     ========================================================================== */

  /*
   * Add the correct display in Chrome and Safari.
   */

  details {
    display: block;
  }

  /*
   * Add the correct display in IE 10-.
   */

  summary {
    display: list-item;
  }

  /* Misc
     ========================================================================== */

  /**
   * Add the correct display in IE 10-.
   */

  template {
    display: none;
  }

  /**
   * Add the correct display in IE 10.
   */

  [hidden] {
    display: none;
  }
`;

export default GlobalStyle;