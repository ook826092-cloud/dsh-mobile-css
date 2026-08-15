# dsh-mobile-css

Mobile adaptation for the [DeepSeek Harness](https://github.com/deepseek-ai/deepseek-harness) (DSH) Web UI.

A lightweight, zero-dependency plugin that injects responsive CSS (plus two tiny helper scripts) into every `index.html` response via the official `WebServer.tapIndex()` hook. **No source modification** — fully removable by deleting one patch entry.

## Features

- **Typography** — compact font sizes for dense mobile screens, mobile-friendly font stack.
- **Composer** — full-width input card, caret alignment fix, hidden model label with clickable chevron, send button docked right.
- **Sidebar** — drawer mode on phones: expanded sidebar overlays the main view with a dim mask; tap the mask to close.
- **Settings** — two-page mobile flow (full-screen menu → content page with a back affordance); long labels wrap; forms/tables never overflow.
- **Messages** — full-width user bubbles; action row wraps cleanly; tool-call summary wraps instead of truncating.
- **Stats line** — collapses to the useful two lines; fixed line count independent of content width.
- **Tables** — long cell content (e.g. tool names) wraps instead of overlapping neighbours.
- **Touch** — ≥44px targets for standalone controls, no double-tap zoom delay, input font-size guard against mobile auto-zoom.

Applies only on touch devices / narrow viewports (`pointer: coarse` or ≤1024px); desktop layouts are untouched.

## Install

```sh
dsh plugin --profile web add dsh-mobile-css
```

or from GitHub:

```sh
dsh plugin --profile web add github:<owner>/dsh-mobile-css
```

Restart `dsh web`, then hard-refresh the browser.

## Remove

Delete the plugin entry from the profile patch (`cordis.patch.yml`) and restart `dsh web`.

## Compatibility

Targets the DSH Web frontend (`dsh-web-frontend`) and its CSS-module class names. Class names can change between frontend releases; verify selectors after upgrading DSH.

Tested on a range of modern Android phones (Chrome / system browsers). Mobile-first, but desktop (pointer: fine, >1024px) is never affected.

## Security

- Pure CSS + two small event-listener scripts (overlay-tap drawer close; settings nav collapse). No network calls, no credentials, no filesystem access.
- Nothing is sent anywhere.

## License

MIT
