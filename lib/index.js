/**
 * dsh-mobile-css
 *
 * Mobile adaptation for the DeepSeek Harness Web UI.
 * Pure CSS injection + a couple of non-intrusive helper scripts
 * (drawer close on overlay click, two-page settings navigation).
 * No source modification, fully removable, works across phone widths.
 */

export const name = 'dsh-mobile-css';

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

  html .zGbnIq_rowTag { font-size: 10px; }
  html .oY77xG_desc, html ._5QVD0a_desc, html .T1PP_q_desc,
  html .zGbnIq_notice, html .zGbnIq_savedNotice,
  html ._7KE1Ra_description, html ._7KE1Ra_groupTitle,
  html ._7KE1Ra_error, html ._7KE1Ra_warning,
  html ._7KE1Ra_status, html ._7KE1Ra_empty,
  html .JObwrW_panel, html .uV2eYG_notice, html .uV2eYG_retry {
    font-size: 10px;
  }
  html ._7KE1Ra_trigger, html .uV2eYG_select, html .wSkVaW_tab {
    font-size: 11px;
  }
  html .oY77xG_title, html .oY77xG_selector,
  html ._5QVD0a_title, html ._5QVD0a_selector,
  html .hVGvvW_title, html .hVGvvW_selector,
  html .T1PP_q_title, html .T1PP_q_selector,
  html .zGbnIq_intro, html .zGbnIq_rowName,
  html .zGbnIq_primaryButton, html .zGbnIq_secondaryButton,
  html .zGbnIq_addButton, html .zGbnIq_dangerButton,
  html ._7KE1Ra_modelName, html ._7KE1Ra_cell,
  html .VOzbGW_navCell, html .VOzbGW_trigger,
  html .hHd-Xa_root, html .hHd-Xa_newSession,
  html .wSkVaW_crumb, html .wSkVaW_crumbSep {
    font-size: 12px;
  }
  html .VOzbGW_navTitle, html .zGbnIq_title, html .uV2eYG_card,
  html .gdEzaW_bubble {
    font-size: 14px;
  }

  [role="menuitem"], [role="menuitemcheckbox"], [role="menuitemradio"],
  [role="option"], [role="switch"], [role="checkbox"], [role="radio"],
  select, summary,
  input[type="checkbox"], input[type="radio"], input[type="range"] {
    min-height: 44px;
  }
  .VOzbGW_navCell, .oY77xG_selector, .T1PP_q_selector,
  .zGbnIq_primaryButton, .zGbnIq_secondaryButton, .zGbnIq_dangerButton,
  .zGbnIq_addButton, .zGbnIq_addModelButton {
    min-height: 44px;
  }
  
  .hHd-Xa_collapsed .hHd-Xa_iconButton,
  .hHd-Xa_collapsed .hHd-Xa_newSession,
  .VOzbGW_trigger {
    min-width: 44px;
    min-height: 44px;
  }
  input:not([type]), input[type="text"], input[type="search"], input[type="email"],
  input[type="tel"], input[type="url"], input[type="password"], input[type="number"],
  
  textarea:not(.uV2eYG_input) {
    min-height: 44px;
    font-size: 16px !important; 
  }
  
  html .uV2eYG_input {
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
  html .pI_x6G_frame,
  html .wSkVaW_root {
    min-height: 100dvh;
  }
  html .wSkVaW_root {
    --dsh-composer-side-clearance: 0px; 
  }
  
  html .uV2eYG_root {
    padding-left: 0;
    padding-right: 0;
  }
  html .wSkVaW_header {
    padding: 4px 12px 0 12px;
  }
  html .wSkVaW_titleRow {
    min-height: 24px;
  }
  html .wSkVaW_crumb {
    max-width: 150px;
  }
  
  html ._7KE1Ra_triggerLabel {
    display: none;
  }
  html ._7KE1Ra_trigger {
    max-width: 190px;      
    min-height: 28px;
    height: 28px;
  }
  html .uV2eYG_root {
    padding-bottom: 4px;
  }
  html .uV2eYG_card {
    padding-top: 4px;      
  }
  html .uV2eYG_select {
    min-height: 28px;      
    height: 28px;
  }
  html .uV2eYG_row {
    flex-wrap: wrap;
    row-gap: 6px;
    padding: 2px 8px 2px;  
  }
  
  html .uV2eYG_trailing {
    flex-wrap: nowrap;
  }
  
  html .gdEzaW_userStack {
    max-width: 100%;
  }

  @media (max-width: 960px) {
    html .VOzbGW_panel {
      flex-direction: row;
      max-width: 100vw;
      height: 100dvh;
      border-radius: 0;
    }
    html .VOzbGW_nav {
      width: clamp(104px, 30%, 128px);
      flex: none;
      flex-direction: column;
      gap: 12px;
      padding: 16px 8px 12px;
      overflow-y: auto;
    }
    html .VOzbGW_navTitle {
      padding: 0 8px;
      white-space: nowrap;
      overflow: hidden;
    }
    html .VOzbGW_navList {
      flex-direction: column;
      gap: 2px;
    }
    html .VOzbGW_navCell {
      height: auto;
      min-height: 44px;
      padding: 10px 8px;
    }
    html .VOzbGW_navLabel {
      white-space: normal;
      text-overflow: clip;
      line-height: 1.35;
    }
    html .VOzbGW_content {
      min-height: 0;
    }
    html .VOzbGW_options {
      padding: 0 12px 16px;
    }
  }

  @media (max-width: 820px) {
    html .oY77xG_row,
    html ._5QVD0a_row,
    html .hVGvvW_row,
    html .T1PP_q_row {
      flex-wrap: wrap;
    }
    html .oY77xG_rowText,
    html ._5QVD0a_rowText,
    html .hVGvvW_rowText,
    html .T1PP_q_rowText {
      flex: 0 0 100%;
      min-width: 0;
      padding-right: 0;
    }
    html .oY77xG_selector,
    html ._5QVD0a_selector,
    html .hVGvvW_selector,
    html .T1PP_q_selector {
      flex: 0 0 auto;
      margin-left: auto;
      max-width: 100%;
      overflow: hidden;
    }
  }

  html .FJxK0a_root > span:first-child,
  html .FJxK0a_root > span:nth-child(2) {
    display: none;
  }
  html .FJxK0a_root {
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
  html .FJxK0a_sep {
    display: none; 
  }

  html .pC0e7a_summary,
  html .pC0e7a_source {
    white-space: normal;
    overflow: visible;
    font-size: 12px;
    line-height: 18px;
  }

  html .p-xYUq_actions {
    flex-wrap: wrap;
    height: auto;
    min-height: 28px;
    row-gap: 2px;
  }
  html .p-xYUq_timeStart,
  html .p-xYUq_timeEnd {
    white-space: nowrap;
    font-size: 11px;
    line-height: 18px;
  }
  html .p-xYUq_runTimeDot {
    margin: 0 4px; 
  }

  html ._tableScroll_1nba0_174 th,
  html ._tableScroll_1nba0_174 td {
    overflow-wrap: anywhere;
    word-break: break-word;
    overflow: hidden;
  }

  html .pI_x6G_frame:has(.pI_x6G_sidebarCol .hHd-Xa_root:not(.hHd-Xa_collapsed)) {
    grid-template-columns: 0 minmax(0, 1fr) 0 !important;
  }
  html .pI_x6G_frame {
    transition: none !important; 
  }
  html .pI_x6G_centerCol {
    grid-column: 2; 
  }
  html .pI_x6G_detailsCol {
    grid-column: 3;
  }
  html .pI_x6G_sidebarCol:has(.hHd-Xa_root:not(.hHd-Xa_collapsed)) {
    position: fixed !important;
    top: 0;
    bottom: 0;
    left: 0;
    z-index: 1000 !important;
    width: min(280px, 85vw) !important;
    box-shadow: 0 0 24px rgba(0, 0, 0, 0.35);
  }
  
  html .pI_x6G_frame:has(.pI_x6G_sidebarCol .hHd-Xa_root:not(.hHd-Xa_collapsed))::after {
    content: "";
    position: absolute;
    inset: 0;
    background: rgba(0, 0, 0, 0.35);
    z-index: 999;
    pointer-events: auto; 
  }

  html .VOzbGW_panel:not([data-dsh-nav-collapsed]) {
    flex-direction: column;
  }
  html .VOzbGW_panel:not([data-dsh-nav-collapsed]) .VOzbGW_content {
    flex: none; 
    order: 0;   
  }
  html .VOzbGW_panel:not([data-dsh-nav-collapsed]) .VOzbGW_header {
    align-items: center; 
    height: 40px;
    padding: 4px 12px 4px 16px; 
  }
  html .VOzbGW_panel:not([data-dsh-nav-collapsed]) .VOzbGW_actions {
    flex-wrap: nowrap; 
    gap: 6px;
  }
  html .VOzbGW_panel:not([data-dsh-nav-collapsed]) .VOzbGW_header::before {
    content: "设置"; 
    font-size: 16px;
    font-weight: 500;
    margin-right: auto;
    white-space: nowrap;
  }
  html .VOzbGW_panel:not([data-dsh-nav-collapsed]) .VOzbGW_navTitle {
    display: none; 
  }
  html .VOzbGW_panel:not([data-dsh-nav-collapsed]) .VOzbGW_nav {
    order: 1; 
  }
  html .VOzbGW_panel:not([data-dsh-nav-collapsed]) .VOzbGW_options {
    display: none;
  }
  html .VOzbGW_nav {
    width: 100%;
    flex: 1;
    padding: 6px 16px 12px; 
    gap: 6px;
  }
  html .VOzbGW_navList {
    gap: 6px;
  }
  html .VOzbGW_navCell {
    height: 50px;
  }
  html .VOzbGW_panel[data-dsh-nav-collapsed] .VOzbGW_nav {
    display: none; 
  }
  html .VOzbGW_panel[data-dsh-nav-collapsed] .VOzbGW_content {
    display: flex; 
  }
  html .VOzbGW_panel[data-dsh-nav-collapsed] .VOzbGW_header::before {
    content: "☰ ";
    font-size: 15px;
    margin-right: 6px;
    color: var(--dsw-alias-label-secondary);
  }

  html .VOzbGW_options {
    padding: 0 10px 12px;
  }
  html .VOzbGW_options input,
  html .VOzbGW_options select,
  html .VOzbGW_options textarea {
    max-width: 100%;
    box-sizing: border-box;
  }
  html .VOzbGW_options img,
  html .VOzbGW_options table,
  html .VOzbGW_options pre {
    max-width: 100%;
  }
  html .eGUBIq_searchInline {
    width: auto;
    flex: 1 1 auto;
    min-width: 0;
    max-width: 100%;
  }

  @media (max-width: 820px) {
    html ._7KE1Ra_root,
    html .JObwrW_root {
      position: static;
    }
    html ._7KE1Ra_menu,
    html .JObwrW_panel {
      right: 8px;
      bottom: 43px;
    }
    html ._7KE1Ra_menu {
      width: min(240px, calc(100vw - 80px));
    }
    html .JObwrW_panel {
      width: min(264px, calc(100vw - 80px));
    }
  }
}
`;

const DRAWER_CLOSE_SCRIPT = `<script data-dsh-tapindex="mobile-drawer-close">
(function () {
  var SB = ".pI_x6G_sidebarCol";
  var TOGGLE = ".hHd-Xa_toggle";
  function drawerOpen() {
    var sb = document.querySelector(SB);
    return !!sb && !!sb.querySelector(".hHd-Xa_root:not(.hHd-Xa_collapsed)");
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
    var panel = document.querySelector(".VOzbGW_panel");
    if (!panel || panel.__dshNavBound) return;
    panel.__dshNavBound = true;
    panel.addEventListener("click", function (e) {
      if (e.target.closest(".VOzbGW_navCell")) { panel.dataset.dshNavCollapsed = "1"; return; }
      var header = e.target.closest(".VOzbGW_header");
      if (header && !e.target.closest(".VOzbGW_close")) delete panel.dataset.dshNavCollapsed;
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
