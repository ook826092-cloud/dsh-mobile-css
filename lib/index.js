/**
 * dsh-mobile-css
 *
 * Mobile adaptation for the DeepSeek Harness Web UI.
 * Pure CSS injection + a couple of non-intrusive helper scripts
 * (drawer close on overlay click, two-page settings navigation).
 * No source modification, fully removable, works across phone widths.
 *
 * Class names verified against the dsh-v0.1.0-rc.7 client bundles
 * (shell assets + plugin client.js of the running instance).
 */

export const name = 'dsh-mobile-css';

const FONT_BUMP = {
  "base-16": [16, 24],
  "base-strong-16": [16, 24],
  "m-18": [16, 28],
  "l-20": [20, 28],
  "xl-24": [24, 32],
  "s-14": [14, 22],
  "s-strong-14": [14, 22],
  "xs-13": [13, 20],
  "xs-strong-13": [13, 20],
  "xxs-12": [12, 18],
  "xxs-strong-12": [12, 18],
  "xxxs-11": [11, 14],
  "xxxs-strong-11": [11, 14],
  "markdown-base": [16, 28],
  "markdown-base-italic": [16, 28],
  "markdown-base-strong": [16, 28],
  "markdown-base-strong-italic": [16, 28],
  "markdown-small": [14, 24],
  "markdown-small-italic": [14, 24],
  "markdown-small-strong": [14, 24],
  "markdown-small-strong-italic": [14, 24],
  "markdown-code": [14, 22],
  "markdown-code-block": [13, 22],
  "markdown-code-block-small": [12, 18],
  "markdown-table": [15, 25],
  "markdown-table-head": [15, 25],
  "markdown-h1": [24, 34],
  "markdown-h2": [22, 32],
  "markdown-h3": [20, 30],
  "markdown-h4": [16, 28],
};

function buildFontRules() {
  const lines = [];
  const weights = {
    "base-strong-16": 500, "m-18": 500, "l-20": 500, "xl-24": 600,
    "s-strong-14": 500, "xs-strong-13": 500, "xxs-strong-12": 500, "xxxs-strong-11": 500,
    "markdown-base-strong": 600, "markdown-base-strong-italic": 600,
    "markdown-small-strong": 600, "markdown-small-strong-italic": 600,
    "markdown-table-head": 500, "markdown-h1": 700, "markdown-h2": 700,
    "markdown-h3": 700, "markdown-h4": 600,
  };
  const codeFonts = new Set([
    "markdown-code", "markdown-code-block", "markdown-code-block-small",
  ]);
  for (const [token, [size, lh]] of Object.entries(FONT_BUMP)) {
    const bumped = Math.max(10, size - 2); // 缩小 -2px，下限 10
    const lineHeight = Math.max(12, lh - 2); // 行高同步 -2，下限 12
    const fam = codeFonts.has(token) ? "var(--ds-font-family-code)" : "var(--dsw-font-family)";
    const w = weights[token];
    let prefix = "";
    if (token.includes("italic")) prefix = "italic ";
    if (w) prefix += `${w} `;
    lines.push(`--dsw-font-${token}: ${prefix}${bumped}px/${lineHeight}px ${fam};`);
    lines.push(`--dsw-font-${token}-font-size: ${bumped}px;`);
    lines.push(`--dsw-font-${token}-line-height: ${lineHeight}px;`);
  }
  return lines.join("\n  ");
}

const MOBILE_CSS = `

@media (pointer: coarse), (max-width: 1024px) {

  html body {
    font-size: 14px;
  }
  body, :root {
  ${buildFontRules()}
  }
  body {
    --dsw-font-family: -apple-system, BlinkMacSystemFont, "PingFang SC",
      "HarmonyOS Sans SC", "MiSans", "MiSans Latin", Roboto,
      "Noto Sans CJK SC", "Noto Sans SC", "Microsoft YaHei", sans-serif;
    font-family: var(--dsw-font-family);
  }

  html .zxAGWW_rowTag { font-size: 10px; }
  html .IgG8fa_desc, html .Ja5FKq_desc, html ._3aV7pG_desc,
  html .zxAGWW_notice, html .zxAGWW_savedNotice,
  html ._5Gq7yq_description, html ._5Gq7yq_groupTitle,
  html ._5Gq7yq_error, html ._5Gq7yq_warning,
  html ._5Gq7yq_status, html ._5Gq7yq_empty,
  html .INT69W_notice, html .INT69W_retry {
    font-size: 10px;
  }
  html ._5Gq7yq_trigger, html .INT69W_select, html .XjcEga_tab {
    font-size: 11px;
  }
  html .EuF0Ca_title, html .EuF0Ca_selector,
  html .IgG8fa_title, html .IgG8fa_selector,
  html .Ja5FKq_title, html .Ja5FKq_selector,
  html ._3aV7pG_title, html ._3aV7pG_selector,
  html .zxAGWW_intro, html .zxAGWW_rowName,
  html .zxAGWW_primaryButton, html .zxAGWW_secondaryButton,
  html .zxAGWW_addButton, html .zxAGWW_dangerButton,
  html ._5Gq7yq_modelName, html ._5Gq7yq_cell,
  html ._402fhG_navCell, html ._402fhG_trigger,
  html .vPLHSG_root, html .vPLHSG_newSession,
  html .XjcEga_crumb, html .XjcEga_crumbSep {
    font-size: 12px;
  }
  html ._402fhG_navTitle, html .zxAGWW_title, html .INT69W_card,
  html ._8o7YHW_bubble {
    font-size: 14px;
  }

  [role="menuitem"], [role="menuitemcheckbox"], [role="menuitemradio"],
  [role="option"], [role="switch"], [role="checkbox"], [role="radio"],
  select, summary,
  input[type="checkbox"], input[type="radio"], input[type="range"] {
    min-height: 44px;
  }
  ._402fhG_navCell, .EuF0Ca_selector, .IgG8fa_selector,
  .Ja5FKq_selector, ._3aV7pG_selector,
  .zxAGWW_primaryButton, .zxAGWW_secondaryButton, .zxAGWW_dangerButton,
  .zxAGWW_addButton, .zxAGWW_addModelButton {
    min-height: 44px;
  }
  
  .vPLHSG_collapsed .vPLHSG_iconButton,
  .vPLHSG_collapsed .vPLHSG_newSession,
  ._402fhG_trigger {
    min-width: 44px;
    min-height: 44px;
  }
  input:not([type]), input[type="text"], input[type="search"], input[type="email"],
  input[type="tel"], input[type="url"], input[type="password"], input[type="number"],
  
  textarea:not(.INT69W_input) {
    min-height: 44px;
    font-size: 16px !important; 
  }
  
  html .INT69W_input {
    font-size: inherit !important;
  }
  * {
    touch-action: manipulation;      
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0.08);
  }
  html {
    -webkit-text-size-adjust: 100%;
    text-size-adjust: 100%;
  }
  img, svg, video, canvas, iframe { max-width: 100%; height: auto; }
  pre, code { overflow-wrap: break-word; }
  body { overflow-x: hidden; }

  html, body, #root {
    min-height: 100dvh;
  }
  html .NThjHW_frame,
  html .XjcEga_root {
    min-height: 100dvh;
  }
  html .XjcEga_root {
    --dsh-composer-side-clearance: 0px; 
  }
  
  html .INT69W_root {
    padding-left: 0;
    padding-right: 0;
  }
  html .XjcEga_header {
    padding: 4px 12px 0 12px;
  }
  html .XjcEga_titleRow {
    min-height: 24px;
  }
  html .XjcEga_crumb {
    max-width: 150px;
  }
  
  html ._5Gq7yq_triggerLabel {
    display: none;
  }
  html ._5Gq7yq_trigger {
    max-width: 190px;      
    min-height: 28px;
    height: 28px;
  }
  html .INT69W_root {
    padding-bottom: 4px;
  }
  html .INT69W_card {
    padding-top: 4px;      
  }
  html .INT69W_select {
    min-height: 28px;      
    height: 28px;
  }
  html .INT69W_row {
    flex-wrap: wrap;
    row-gap: 6px;
    padding: 2px 8px 2px;  
  }
  
  html .INT69W_trailing {
    flex-wrap: nowrap;
  }
  
  html ._8o7YHW_userStack {
    max-width: 100%;
  }

  @media (max-width: 960px) {
    html ._402fhG_panel {
      flex-direction: row;
      max-width: 100vw;
      height: 100dvh;
      border-radius: 0;
    }
    html ._402fhG_nav {
      width: clamp(104px, 30%, 128px);
      flex: none;
      flex-direction: column;
      gap: 12px;
      padding: 16px 8px 12px;
      overflow-y: auto;
    }
    html ._402fhG_navTitle {
      padding: 0 8px;
      white-space: nowrap;
      overflow: hidden;
    }
    html ._402fhG_navList {
      flex-direction: column;
      gap: 2px;
    }
    html ._402fhG_navCell {
      height: auto;
      min-height: 44px;
      padding: 10px 8px;
    }
    html ._402fhG_navLabel {
      white-space: normal;
      text-overflow: clip;
      line-height: 1.35;
    }
    html ._402fhG_content {
      min-height: 0;
    }
    html ._402fhG_options {
      padding: 0 12px 16px;
    }
  }

  @media (max-width: 820px) {
    html .EuF0Ca_row,
    html .IgG8fa_row,
    html .Ja5FKq_row,
    html ._3aV7pG_row {
      flex-wrap: wrap;
    }
    html .EuF0Ca_rowText,
    html .IgG8fa_rowText,
    html .Ja5FKq_rowText,
    html ._3aV7pG_rowText {
      flex: 0 0 100%;
      min-width: 0;
      padding-right: 0;
    }
    html .EuF0Ca_selector,
    html .IgG8fa_selector,
    html .Ja5FKq_selector,
    html ._3aV7pG_selector {
      flex: 0 0 auto;
      margin-left: auto;
      max-width: 100%;
      overflow: hidden;
    }
  }

  html .Sy-53q_root > span:first-child,
  html .Sy-53q_root > span:nth-child(2) {
    display: none;
  }
  html .Sy-53q_root {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 2px 6px;         
    font-size: 9px;       
    line-height: 14px;
    padding: 2px 8px 0;
    white-space: normal;
    text-overflow: clip;
    overflow: visible;
  }
  html .Sy-53q_sep {
    display: none; 
  }

  html .tVkpCG_summary,
  html .tVkpCG_source {
    white-space: normal;
    overflow: visible;
    font-size: 12px;
    line-height: 18px;
  }

  html .G2Qy1G_actions {
    flex-wrap: wrap;
    height: auto;
    min-height: 28px;
    row-gap: 2px;
  }
  html .G2Qy1G_timeStart,
  html .G2Qy1G_timeEnd {
    white-space: nowrap;
    font-size: 11px;
    line-height: 18px;
  }
  html .G2Qy1G_runTimeDot {
    margin: 0 4px; 
  }

  html ._tableScroll_1nba0_174 th,
  html ._tableScroll_1nba0_174 td {
    overflow-wrap: anywhere;
    word-break: break-word;
    overflow: hidden;
  }

  html .NThjHW_frame:has(.NThjHW_sidebarCol .vPLHSG_root:not(.vPLHSG_collapsed)) {
    grid-template-columns: 0 minmax(0, 1fr) 0 !important;
  }
  html .NThjHW_frame {
    transition: none !important; 
  }
  html .NThjHW_centerCol {
    grid-column: 2; 
  }
  html .NThjHW_detailsCol {
    grid-column: 3;
  }
  html .NThjHW_sidebarCol:has(.vPLHSG_root:not(.vPLHSG_collapsed)) {
    position: fixed !important;
    top: 0;
    bottom: 0;
    left: 0;
    z-index: 1000 !important;
    width: min(280px, 85vw) !important;
    box-shadow: 0 0 24px rgba(0, 0, 0, 0.35);
  }
  
  html .NThjHW_frame:has(.NThjHW_sidebarCol .vPLHSG_root:not(.vPLHSG_collapsed))::after {
    content: "";
    position: absolute;
    inset: 0;
    background: rgba(0, 0, 0, 0.35);
    z-index: 999;
    pointer-events: auto; 
  }

  html ._402fhG_panel:not([data-dsh-nav-collapsed]) {
    flex-direction: column;
  }
  html ._402fhG_panel:not([data-dsh-nav-collapsed]) ._402fhG_content {
    flex: none; 
    order: 0;   
  }
  html ._402fhG_panel:not([data-dsh-nav-collapsed]) ._402fhG_header {
    align-items: center; 
    height: 40px;
    padding: 4px 12px 4px 16px; 
  }
  html ._402fhG_panel:not([data-dsh-nav-collapsed]) ._402fhG_actions {
    flex-wrap: nowrap; 
    gap: 6px;
  }
  html ._402fhG_panel:not([data-dsh-nav-collapsed]) ._402fhG_header::before {
    content: "设置"; 
    font-size: 16px;
    font-weight: 500;
    margin-right: auto;
    white-space: nowrap;
  }
  html ._402fhG_panel:not([data-dsh-nav-collapsed]) ._402fhG_navTitle {
    display: none; 
  }
  html ._402fhG_panel:not([data-dsh-nav-collapsed]) ._402fhG_nav {
    order: 1; 
  }
  html ._402fhG_panel:not([data-dsh-nav-collapsed]) ._402fhG_options {
    display: none;
  }
  html ._402fhG_nav {
    width: 100%;
    flex: 1;
    padding: 6px 16px 12px; 
    gap: 6px;
  }
  html ._402fhG_navList {
    gap: 6px;
  }
  html ._402fhG_navCell {
    height: 50px;
  }
  html ._402fhG_panel[data-dsh-nav-collapsed] ._402fhG_nav {
    display: none; 
  }
  html ._402fhG_panel[data-dsh-nav-collapsed] ._402fhG_content {
    display: flex; 
  }
  html ._402fhG_panel[data-dsh-nav-collapsed] ._402fhG_header::before {
    content: "☰ ";
    font-size: 15px;
    margin-right: 6px;
    color: var(--dsw-alias-label-secondary);
  }

  html ._402fhG_options {
    padding: 0 10px 12px;
  }
  html ._402fhG_options input,
  html ._402fhG_options select,
  html ._402fhG_options textarea {
    max-width: 100%;
    box-sizing: border-box;
  }
  html ._402fhG_options img,
  html ._402fhG_options table,
  html ._402fhG_options pre {
    max-width: 100%;
  }
  html .U-DjuG_searchSlot {
    max-width: 100%;
    flex: 1 1 auto;
    min-width: 0;
  }

  @media (max-width: 820px) {
    html ._5Gq7yq_root {
      position: static;
    }
    html ._5Gq7yq_menu {
      right: 8px;
      bottom: 43px;
      width: min(240px, calc(100vw - 80px));
    }
  }
}
`;

const DRAWER_CLOSE_SCRIPT = `<script data-dsh-tapindex="mobile-drawer-close">
(function () {
  var SB = ".NThjHW_sidebarCol";
  var TOGGLE = ".vPLHSG_toggle";
  function drawerOpen() {
    var sb = document.querySelector(SB);
    return !!sb && !!sb.querySelector(".vPLHSG_root:not(.vPLHSG_collapsed)");
  }
  document.addEventListener("click", function (e) {
    if (!drawerOpen()) return;
    var sb = document.querySelector(SB);
    if (sb && sb.contains(e.target)) return;
    var tg = sb && sb.querySelector(TOGGLE);
    if (tg) tg.click();
  });
})();
</script>`;

const SETTINGS_NAV_SCRIPT = `<script data-dsh-tapindex="mobile-settings-nav">
(function () {
  function bind() {
    var panel = document.querySelector("._402fhG_panel");
    if (!panel || panel.__dshNavBound) return;
    panel.__dshNavBound = true;
    panel.addEventListener("click", function (e) {
      if (e.target.closest("._402fhG_navCell")) { panel.dataset.dshNavCollapsed = "1"; return; }
      var header = e.target.closest("._402fhG_header");
      if (header && !e.target.closest("._402fhG_close")) delete panel.dataset.dshNavCollapsed;
    });
  }
  function scan() { bind(); }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", scan); else scan();
  if (window.MutationObserver) new MutationObserver(scan).observe(document.body, { childList: true, subtree: true });
})();
</script>`;

export function injectMobileCss(html) {
  const style = `<style data-dsh-tapindex="mobile-css">${MOBILE_CSS}</style>`;
  const head = /<\/head>/i.exec(html);
  if (head === null) return `${html}${style}${DRAWER_CLOSE_SCRIPT}${SETTINGS_NAV_SCRIPT}`;
  const at = head.index;
  let out = `${html.slice(0, at)}${style}${html.slice(at)}`;
  const bodyEnd = /<\/body>/i.exec(out);
  if (bodyEnd !== null) {
    out = `${out.slice(0, bodyEnd.index)}${DRAWER_CLOSE_SCRIPT}${SETTINGS_NAV_SCRIPT}${out.slice(bodyEnd.index)}`;
  } else {
    out = `${out}${DRAWER_CLOSE_SCRIPT}${SETTINGS_NAV_SCRIPT}`;
  }
  return out;
}

export function apply(ctx) {
  ctx.inject(["webServer"], (httpCtx) => {
    httpCtx.effect(() => httpCtx.webServer.tapIndex(injectMobileCss), "dsh-mobile-css: mobile adaptation injection");
  });
}
