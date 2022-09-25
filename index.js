const foregroundColor = '#593e2c'
const backgroundColor = '#fffffa'
const selection = '#e2dcd8'
const comment = '#aa998e'
const red = '#593e2c'
const green = '#745b4b'
const yellow = '#c6bab3'
const magenta = '#593e2c'
const cyan = '#593e2c'
const gray = '#8f796c'
const brightBlack = '#fffffa'
const brightWhite = '#593e2c'
const cursorColor = '#593e2c'
const cursorAccentColor = cursorColor
const borderColor = backgroundColor
const selectionColor = selection

const colors = [
    selection,
    red,
    green,
    yellow,
    comment,
    magenta,
    cyan,
    gray,
    brightBlack,
    red,
    green,
    yellow,
    comment,
    magenta,
    cyan,
    brightWhite
]

exports.decorateConfig = config => {

  return Object.assign({}, config, {
    foregroundColor,
    backgroundColor,
    borderColor,
    cursorColor,
    cursorAccentColor,
    selectionColor,
    colors,
    termCSS: `
      ${config.termCSS || '::-webkit-scrollbar { display: none; }'}
    `,
    borderColor: selection,
    cursorColor: magenta,
    css: `
      ${config.css || ''}
      * {
        -webkit-font-feature-settings: "liga" on, "calt" on, "dlig" on !important;
        text-rendering: optimizeLegibility !important;
      }
      .hyperterm_main {
      	border: transparent !important;
      }
      .cursor-node {
        width: .325rem !important;
      }
      .tabs_list {
        border-color: transparent !important;
      }
      .tab_tab {
        border: transparent !important;
        color: ${foregroundColor} !important;
        background-color: ${backgroundColor};
      }
      .tabs_title {
        color: ${foregroundColor} !important;
      }
      .tab_tab.tab_active:before {
        border-bottom: transparent !important;
      }
      .tab_tab.tab_active {
        color: ${foregroundColor} !important;
        background-color: ${backgroundColor};
        border-bottom: none !important;
        font-weight: bold;
      }
      .tabs_nav {
      	background-color: ${backgroundColor} !important;
      }
      .tabs_borderShim {
      	border: transparent;
      }
      .splitpane_divider {
      	background-color: ${backgroundColor} !important;
      }
      .header_shape
      {
        color: ${backgroundColor};
      }
      .header_appTitle
      {
        color: ${backgroundColor};
      }
    `
  })
}
