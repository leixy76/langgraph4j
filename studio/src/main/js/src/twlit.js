
import { css } from 'lit';
const TWStyles = css` 
*, :before, :after, ::backdrop {
  --tw-border-spacing-x: 0;
  --tw-border-spacing-y: 0;
  --tw-translate-x: 0;
  --tw-translate-y: 0;
  --tw-rotate: 0;
  --tw-skew-x: 0;
  --tw-skew-y: 0;
  --tw-scale-x: 1;
  --tw-scale-y: 1;
  --tw-pan-x: ;
  --tw-pan-y: ;
  --tw-pinch-zoom: ;
  --tw-scroll-snap-strictness: proximity;
  --tw-gradient-from-position: ;
  --tw-gradient-via-position: ;
  --tw-gradient-to-position: ;
  --tw-ordinal: ;
  --tw-slashed-zero: ;
  --tw-numeric-figure: ;
  --tw-numeric-spacing: ;
  --tw-numeric-fraction: ;
  --tw-ring-inset: ;
  --tw-ring-offset-width: 0px;
  --tw-ring-offset-color: #fff;
  --tw-ring-color: #3b82f680;
  --tw-ring-offset-shadow: 0 0 #0000;
  --tw-ring-shadow: 0 0 #0000;
  --tw-shadow: 0 0 #0000;
  --tw-shadow-colored: 0 0 #0000;
  --tw-blur: ;
  --tw-brightness: ;
  --tw-contrast: ;
  --tw-grayscale: ;
  --tw-hue-rotate: ;
  --tw-invert: ;
  --tw-saturate: ;
  --tw-sepia: ;
  --tw-drop-shadow: ;
  --tw-backdrop-blur: ;
  --tw-backdrop-brightness: ;
  --tw-backdrop-contrast: ;
  --tw-backdrop-grayscale: ;
  --tw-backdrop-hue-rotate: ;
  --tw-backdrop-invert: ;
  --tw-backdrop-opacity: ;
  --tw-backdrop-saturate: ;
  --tw-backdrop-sepia: ;
  --tw-contain-size: ;
  --tw-contain-layout: ;
  --tw-contain-paint: ;
  --tw-contain-style: ;
}

*, :before, :after {
  box-sizing: border-box;
  border: 0 solid #e5e7eb;
}

:before, :after {
  --tw-content: "";
}

html, :host {
  -webkit-text-size-adjust: 100%;
  tab-size: 4;
  font-feature-settings: normal;
  font-variation-settings: normal;
  -webkit-tap-highlight-color: transparent;
  font-family: ui-sans-serif, system-ui, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji;
  line-height: 1.5;
}

body {
  line-height: inherit;
  margin: 0;
}

hr {
  color: inherit;
  border-top-width: 1px;
  height: 0;
}

abbr:where([title]) {
  text-decoration: underline dotted;
}

h1, h2, h3, h4, h5, h6 {
  font-size: inherit;
  font-weight: inherit;
}

a {
  color: inherit;
  -webkit-text-decoration: inherit;
  text-decoration: inherit;
}

b, strong {
  font-weight: bolder;
}

code, kbd, samp, pre {
  font-feature-settings: normal;
  font-variation-settings: normal;
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, Liberation Mono, Courier New, monospace;
  font-size: 1em;
}

small {
  font-size: 80%;
}

sub, sup {
  vertical-align: baseline;
  font-size: 75%;
  line-height: 0;
  position: relative;
}

sub {
  bottom: -.25em;
}

sup {
  top: -.5em;
}

table {
  text-indent: 0;
  border-color: inherit;
  border-collapse: collapse;
}

button, input, optgroup, select, textarea {
  font-feature-settings: inherit;
  font-variation-settings: inherit;
  font-family: inherit;
  font-size: 100%;
  font-weight: inherit;
  line-height: inherit;
  letter-spacing: inherit;
  color: inherit;
  margin: 0;
  padding: 0;
}

button, select {
  text-transform: none;
}

button, input:where([type="button"]), input:where([type="reset"]), input:where([type="submit"]) {
  -webkit-appearance: button;
  background-color: #0000;
  background-image: none;
}

:-moz-focusring {
  outline: auto;
}

:-moz-ui-invalid {
  box-shadow: none;
}

progress {
  vertical-align: baseline;
}

::-webkit-inner-spin-button {
  height: auto;
}

::-webkit-outer-spin-button {
  height: auto;
}

[type="search"] {
  -webkit-appearance: textfield;
  outline-offset: -2px;
}

::-webkit-search-decoration {
  -webkit-appearance: none;
}

::-webkit-file-upload-button {
  -webkit-appearance: button;
  font: inherit;
}

summary {
  display: list-item;
}

blockquote, dl, dd, h1, h2, h3, h4, h5, h6, hr, figure, p, pre {
  margin: 0;
}

fieldset {
  margin: 0;
  padding: 0;
}

legend {
  padding: 0;
}

ol, ul, menu {
  margin: 0;
  padding: 0;
  list-style: none;
}

dialog {
  padding: 0;
}

textarea {
  resize: vertical;
}

input::placeholder, textarea::placeholder {
  opacity: 1;
  color: #9ca3af;
}

button, [role="button"] {
  cursor: pointer;
}

:disabled {
  cursor: default;
}

img, svg, video, canvas, audio, iframe, embed, object {
  vertical-align: middle;
  display: block;
}

img, video {
  max-width: 100%;
  height: auto;
}

[hidden]:where(:not([hidden="until-found"])) {
  display: none;
}

:root, [data-theme] {
  background-color: var(--fallback-b1, oklch(var(--b1) / 1));
  color: var(--fallback-bc, oklch(var(--bc) / 1));
}

@supports not (color: oklch(0% 0 0)) {
  :root {
    color-scheme: light;
    --fallback-p: #491eff;
    --fallback-pc: #d4dbff;
    --fallback-s: #ff41c7;
    --fallback-sc: #fff9fc;
    --fallback-a: #00cfbd;
    --fallback-ac: #00100d;
    --fallback-n: #2b3440;
    --fallback-nc: #d7dde4;
    --fallback-b1: #fff;
    --fallback-b2: #e5e6e6;
    --fallback-b3: #e5e6e6;
    --fallback-bc: #1f2937;
    --fallback-in: #00b3f0;
    --fallback-inc: #000;
    --fallback-su: #00ca92;
    --fallback-suc: #000;
    --fallback-wa: #ffc22d;
    --fallback-wac: #000;
    --fallback-er: #ff6f70;
    --fallback-erc: #000;
  }

  @media (prefers-color-scheme: dark) {
    :root {
      color-scheme: dark;
      --fallback-p: #7582ff;
      --fallback-pc: #050617;
      --fallback-s: #ff71cf;
      --fallback-sc: #190211;
      --fallback-a: #00c7b5;
      --fallback-ac: #000e0c;
      --fallback-n: #2a323c;
      --fallback-nc: #a6adbb;
      --fallback-b1: #1d232a;
      --fallback-b2: #191e24;
      --fallback-b3: #15191e;
      --fallback-bc: #a6adbb;
      --fallback-in: #00b3f0;
      --fallback-inc: #000;
      --fallback-su: #00ca92;
      --fallback-suc: #000;
      --fallback-wa: #ffc22d;
      --fallback-wac: #000;
      --fallback-er: #ff6f70;
      --fallback-erc: #000;
    }
  }
}

html {
  -webkit-tap-highlight-color: transparent;
}

* {
  scrollbar-color: color-mix(in oklch, currentColor 35%, transparent) transparent;
}

:hover {
  scrollbar-color: color-mix(in oklch, currentColor 60%, transparent) transparent;
}

:root {
  color-scheme: light;
  --in: 72.06% .191 231.6;
  --su: 64.8% .15 160;
  --wa: 84.71% .199 83.87;
  --er: 71.76% .221 22.18;
  --pc: 89.824% .06192 275.75;
  --ac: 15.352% .0368 183.61;
  --inc: 0% 0 0;
  --suc: 0% 0 0;
  --wac: 0% 0 0;
  --erc: 0% 0 0;
  --rounded-box: 1rem;
  --rounded-btn: .5rem;
  --rounded-badge: 1.9rem;
  --animation-btn: .25s;
  --animation-input: .2s;
  --btn-focus-scale: .95;
  --border-btn: 1px;
  --tab-border: 1px;
  --tab-radius: .5rem;
  --p: 49.12% .3096 275.75;
  --s: 69.71% .329 342.55;
  --sc: 98.71% .0106 342.55;
  --a: 76.76% .184 183.61;
  --n: 32.1785% .02476 255.702;
  --nc: 89.4994% .011585 252.096;
  --b1: 100% 0 0;
  --b2: 96.1151% 0 0;
  --b3: 92.4169% .00108 197.138;
  --bc: 27.8078% .029596 256.848;
}

@media (prefers-color-scheme: dark) {
  :root {
    color-scheme: dark;
    --in: 72.06% .191 231.6;
    --su: 64.8% .15 160;
    --wa: 84.71% .199 83.87;
    --er: 71.76% .221 22.18;
    --pc: 13.138% .0392 275.75;
    --sc: 14.96% .052 342.55;
    --ac: 14.902% .0334 183.61;
    --inc: 0% 0 0;
    --suc: 0% 0 0;
    --wac: 0% 0 0;
    --erc: 0% 0 0;
    --rounded-box: 1rem;
    --rounded-btn: .5rem;
    --rounded-badge: 1.9rem;
    --animation-btn: .25s;
    --animation-input: .2s;
    --btn-focus-scale: .95;
    --border-btn: 1px;
    --tab-border: 1px;
    --tab-radius: .5rem;
    --p: 65.69% .196 275.75;
    --s: 74.8% .26 342.55;
    --a: 74.51% .167 183.61;
    --n: 31.3815% .021108 254.139;
    --nc: 74.6477% .0216 264.436;
    --b1: 25.3267% .015896 252.418;
    --b2: 23.2607% .013807 253.101;
    --b3: 21.1484% .01165 254.088;
    --bc: 74.6477% .0216 264.436;
  }
}

[data-theme="light"] {
  color-scheme: light;
  --in: 72.06% .191 231.6;
  --su: 64.8% .15 160;
  --wa: 84.71% .199 83.87;
  --er: 71.76% .221 22.18;
  --pc: 89.824% .06192 275.75;
  --ac: 15.352% .0368 183.61;
  --inc: 0% 0 0;
  --suc: 0% 0 0;
  --wac: 0% 0 0;
  --erc: 0% 0 0;
  --rounded-box: 1rem;
  --rounded-btn: .5rem;
  --rounded-badge: 1.9rem;
  --animation-btn: .25s;
  --animation-input: .2s;
  --btn-focus-scale: .95;
  --border-btn: 1px;
  --tab-border: 1px;
  --tab-radius: .5rem;
  --p: 49.12% .3096 275.75;
  --s: 69.71% .329 342.55;
  --sc: 98.71% .0106 342.55;
  --a: 76.76% .184 183.61;
  --n: 32.1785% .02476 255.702;
  --nc: 89.4994% .011585 252.096;
  --b1: 100% 0 0;
  --b2: 96.1151% 0 0;
  --b3: 92.4169% .00108 197.138;
  --bc: 27.8078% .029596 256.848;
}

[data-theme="dark"] {
  color-scheme: dark;
  --in: 72.06% .191 231.6;
  --su: 64.8% .15 160;
  --wa: 84.71% .199 83.87;
  --er: 71.76% .221 22.18;
  --pc: 13.138% .0392 275.75;
  --sc: 14.96% .052 342.55;
  --ac: 14.902% .0334 183.61;
  --inc: 0% 0 0;
  --suc: 0% 0 0;
  --wac: 0% 0 0;
  --erc: 0% 0 0;
  --rounded-box: 1rem;
  --rounded-btn: .5rem;
  --rounded-badge: 1.9rem;
  --animation-btn: .25s;
  --animation-input: .2s;
  --btn-focus-scale: .95;
  --border-btn: 1px;
  --tab-border: 1px;
  --tab-radius: .5rem;
  --p: 65.69% .196 275.75;
  --s: 74.8% .26 342.55;
  --a: 74.51% .167 183.61;
  --n: 31.3815% .021108 254.139;
  --nc: 74.6477% .0216 264.436;
  --b1: 25.3267% .015896 252.418;
  --b2: 23.2607% .013807 253.101;
  --b3: 21.1484% .01165 254.088;
  --bc: 74.6477% .0216 264.436;
}

.container {
  width: 100%;
}

@media (width >= 640px) {
  .container {
    max-width: 640px;
  }
}

@media (width >= 768px) {
  .container {
    max-width: 768px;
  }
}

@media (width >= 1024px) {
  .container {
    max-width: 1024px;
  }
}

@media (width >= 1280px) {
  .container {
    max-width: 1280px;
  }
}

@media (width >= 1536px) {
  .container {
    max-width: 1536px;
  }
}

.alert {
  text-align: center;
  border-radius: var(--rounded-box, 1rem);
  --tw-border-opacity: 1;
  border-width: 1px;
  border-color: var(--fallback-b2, oklch(var(--b2) / var(--tw-border-opacity)));
  --tw-text-opacity: 1;
  color: var(--fallback-bc, oklch(var(--bc) / var(--tw-text-opacity)));
  --alert-bg: var(--fallback-b2, oklch(var(--b2) / 1));
  --alert-bg-mix: var(--fallback-b1, oklch(var(--b1) / 1));
  background-color: var(--alert-bg);
  grid-auto-flow: row;
  align-content: flex-start;
  place-items: center;
  gap: 1rem;
  width: 100%;
  padding: 1rem;
  display: grid;
}

@media (width >= 640px) {
  .alert {
    text-align: start;
    grid-template-columns: auto minmax(auto, 1fr);
    grid-auto-flow: column;
    justify-items: start;
  }
}

.avatar {
  display: inline-flex;
  position: relative;
}

.avatar > div {
  aspect-ratio: 1;
  display: block;
  overflow: hidden;
}

.avatar img {
  object-fit: cover;
  width: 100%;
  height: 100%;
}

.avatar.placeholder > div {
  justify-content: center;
  align-items: center;
  display: flex;
}

.badge {
  border-radius: var(--rounded-badge, 1.9rem);
  --tw-border-opacity: 1;
  border-width: 1px;
  border-color: var(--fallback-b2, oklch(var(--b2) / var(--tw-border-opacity)));
  --tw-bg-opacity: 1;
  background-color: var(--fallback-b1, oklch(var(--b1) / var(--tw-bg-opacity)));
  --tw-text-opacity: 1;
  color: var(--fallback-bc, oklch(var(--bc) / var(--tw-text-opacity)));
  justify-content: center;
  align-items: center;
  width: fit-content;
  height: 1.25rem;
  padding-left: .563rem;
  padding-right: .563rem;
  font-size: .875rem;
  line-height: 1.25rem;
  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, -webkit-backdrop-filter, backdrop-filter;
  transition-duration: .2s;
  transition-timing-function: cubic-bezier(0, 0, .2, 1);
  display: inline-flex;
}

.btm-nav {
  padding-bottom: env(safe-area-inset-bottom);
  --tw-bg-opacity: 1;
  background-color: var(--fallback-b1, oklch(var(--b1) / var(--tw-bg-opacity)));
  color: currentColor;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 4rem;
  display: flex;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
}

.btm-nav > * {
  cursor: pointer;
  border-color: currentColor;
  flex-direction: column;
  flex-basis: 100%;
  justify-content: center;
  align-items: center;
  gap: .25rem;
  height: 100%;
  display: flex;
  position: relative;
}

@media (hover: hover) {
  .label a:hover {
    --tw-text-opacity: 1;
    color: var(--fallback-bc, oklch(var(--bc) / var(--tw-text-opacity)));
  }

  .menu li > :not(ul, .menu-title, details, .btn):active, .menu li > :not(ul, .menu-title, details, .btn).active, .menu li > details > summary:active {
    --tw-bg-opacity: 1;
    background-color: var(--fallback-n, oklch(var(--n) / var(--tw-bg-opacity)));
    --tw-text-opacity: 1;
    color: var(--fallback-nc, oklch(var(--nc) / var(--tw-text-opacity)));
  }

  .tab:hover {
    --tw-text-opacity: 1;
  }

  .tabs-boxed :is(.tab-active, [aria-selected="true"]):not(.tab-disabled):not([disabled]):hover, .tabs-boxed input:checked:hover {
    --tw-text-opacity: 1;
    color: var(--fallback-pc, oklch(var(--pc) / var(--tw-text-opacity)));
  }

  .table tr.hover:hover, .table tr.hover:nth-child(2n):hover {
    --tw-bg-opacity: 1;
    background-color: var(--fallback-b2, oklch(var(--b2) / var(--tw-bg-opacity)));
  }

  .table-zebra tr.hover:hover, .table-zebra tr.hover:nth-child(2n):hover {
    --tw-bg-opacity: 1;
    background-color: var(--fallback-b3, oklch(var(--b3) / var(--tw-bg-opacity)));
  }
}

.btn {
  cursor: pointer;
  -webkit-user-select: none;
  user-select: none;
  border-radius: var(--rounded-btn, .5rem);
  border-color: #0000;
  border-color: oklch(var(--btn-color, var(--b2)) / var(--tw-border-opacity));
  text-align: center;
  border-width: var(--border-btn, 1px);
  --tw-text-opacity: 1;
  color: var(--fallback-bc, oklch(var(--bc) / var(--tw-text-opacity)));
  --tw-shadow: 0 1px 2px 0 #0000000d;
  --tw-shadow-colored: 0 1px 2px 0 var(--tw-shadow-color);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
  outline-color: var(--fallback-bc, oklch(var(--bc) / 1));
  background-color: oklch(var(--btn-color, var(--b2)) / var(--tw-bg-opacity));
  --tw-bg-opacity: 1;
  --tw-border-opacity: 1;
  flex-wrap: wrap;
  flex-shrink: 0;
  justify-content: center;
  align-items: center;
  gap: .5rem;
  height: 3rem;
  min-height: 3rem;
  padding-left: 1rem;
  padding-right: 1rem;
  font-size: .875rem;
  font-weight: 600;
  line-height: 1em;
  text-decoration-line: none;
  transition-property: color, background-color, border-color, opacity, box-shadow, transform;
  transition-duration: .2s;
  transition-timing-function: cubic-bezier(0, 0, .2, 1);
  display: inline-flex;
}

.btn-disabled, .btn[disabled], .btn:disabled {
  pointer-events: none;
}

:where(.btninput[type="checkbox"]), :where(.btninput[type="radio"]) {
  appearance: none;
  width: auto;
}

.btninput[type="checkbox"]:after, .btninput[type="radio"]:after {
  --tw-content: attr(aria-label);
  content: var(--tw-content);
}

.card {
  border-radius: var(--rounded-box, 1rem);
  flex-direction: column;
  display: flex;
  position: relative;
}

.card:focus {
  outline-offset: 2px;
  outline: 2px solid #0000;
}

.card-body {
  padding: var(--padding-card, 2rem);
  flex-direction: column;
  flex: auto;
  gap: .5rem;
  display: flex;
}

.card-body :where(p) {
  flex-grow: 1;
}

.card figure {
  justify-content: center;
  align-items: center;
  display: flex;
}

.card.image-full {
  display: grid;
}

.card.image-full:before {
  content: "";
  z-index: 10;
  border-radius: var(--rounded-box, 1rem);
  --tw-bg-opacity: 1;
  background-color: var(--fallback-n, oklch(var(--n) / var(--tw-bg-opacity)));
  opacity: .75;
  position: relative;
}

.card.image-full:before, .card.image-full > * {
  grid-row-start: 1;
  grid-column-start: 1;
}

.card.image-full > figure img {
  object-fit: cover;
  height: 100%;
}

.card.image-full > .card-body {
  z-index: 20;
  --tw-text-opacity: 1;
  color: var(--fallback-nc, oklch(var(--nc) / var(--tw-text-opacity)));
  position: relative;
}

.checkbox {
  --chkbg: var(--fallback-bc, oklch(var(--bc) / 1));
  --chkfg: var(--fallback-b1, oklch(var(--b1) / 1));
  cursor: pointer;
  appearance: none;
  border-radius: var(--rounded-btn, .5rem);
  border-width: 1px;
  border-color: var(--fallback-bc, oklch(var(--bc) / var(--tw-border-opacity)));
  --tw-border-opacity: .2;
  flex-shrink: 0;
  width: 1.5rem;
  height: 1.5rem;
}

.collapse:not(td):not(tr):not(colgroup) {
  visibility: visible;
}

.collapse {
  border-radius: var(--rounded-box, 1rem);
  grid-template-rows: auto 0fr;
  width: 100%;
  transition: grid-template-rows .2s;
  display: grid;
  position: relative;
  overflow: hidden;
}

.collapse-title, .collapse > input[type="checkbox"], .collapse > input[type="radio"], .collapse-content {
  grid-row-start: 1;
  grid-column-start: 1;
}

.collapse > input[type="checkbox"], .collapse > input[type="radio"] {
  appearance: none;
  opacity: 0;
}

.collapse-content {
  visibility: hidden;
  cursor: unset;
  grid-row-start: 2;
  grid-column-start: 1;
  min-height: 0;
  padding-left: 1rem;
  padding-right: 1rem;
  transition: padding .2s ease-out, background-color .2s ease-out;
}

.collapse[open], .collapse-open, .collapse:focus:not(.collapse-close), .collapse:not(.collapse-close):has( > input[type="checkbox"]:checked), .collapse:not(.collapse-close):has( > input[type="radio"]:checked) {
  grid-template-rows: auto 1fr;
}

.collapse[open] > .collapse-content, .collapse-open > .collapse-content, .collapse:focus:not(.collapse-close) > .collapse-content, .collapse:not(.collapse-close) > input[type="checkbox"]:checked ~ .collapse-content, .collapse:not(.collapse-close) > input[type="radio"]:checked ~ .collapse-content {
  visibility: visible;
  min-height: fit-content;
}

.dropdown {
  display: inline-block;
  position: relative;
}

.dropdown > :not(summary):focus {
  outline-offset: 2px;
  outline: 2px solid #0000;
}

.dropdown .dropdown-content {
  position: absolute;
}

.dropdown:not(details) .dropdown-content {
  visibility: hidden;
  opacity: 0;
  transform-origin: top;
  --tw-scale-x: .95;
  --tw-scale-y: .95;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, -webkit-backdrop-filter, backdrop-filter;
  transition-duration: .2s;
  transition-timing-function: cubic-bezier(0, 0, .2, 1);
}

.dropdown-end .dropdown-content {
  inset-inline-end: 0;
}

.dropdown-left .dropdown-content {
  bottom: auto;
  transform-origin: 100%;
  inset-inline-end: 100%;
  top: 0;
}

.dropdown-right .dropdown-content {
  bottom: auto;
  transform-origin: 0;
  inset-inline-start: 100%;
  top: 0;
}

.dropdown-bottom .dropdown-content {
  transform-origin: top;
  top: 100%;
  bottom: auto;
}

.dropdown-top .dropdown-content {
  transform-origin: bottom;
  top: auto;
  bottom: 100%;
}

.dropdown-end.dropdown-right .dropdown-content, .dropdown-end.dropdown-left .dropdown-content {
  top: auto;
  bottom: 0;
}

.dropdown.dropdown-open .dropdown-content, .dropdown:not(.dropdown-hover):focus .dropdown-content, .dropdown:focus-within .dropdown-content {
  visibility: visible;
  opacity: 1;
}

@media (hover: hover) {
  .dropdown.dropdown-hover:hover .dropdown-content {
    visibility: visible;
    opacity: 1;
  }

  .btm-nav > .disabled:hover, .btm-nav > [disabled]:hover {
    pointer-events: none;
    --tw-border-opacity: 0;
    background-color: var(--fallback-n, oklch(var(--n) / var(--tw-bg-opacity)));
    --tw-bg-opacity: .1;
    color: var(--fallback-bc, oklch(var(--bc) / var(--tw-text-opacity)));
    --tw-text-opacity: .2;
  }

  .btn:hover {
    --tw-border-opacity: 1;
    border-color: var(--fallback-b3, oklch(var(--b3) / var(--tw-border-opacity)));
    --tw-bg-opacity: 1;
    background-color: var(--fallback-b3, oklch(var(--b3) / var(--tw-bg-opacity)));
  }

  @supports (color: color-mix(in oklab, black, black)) {
    .btn:hover {
      background-color: color-mix(in oklab, oklch(var(--btn-color, var(--b2)) / var(--tw-bg-opacity, 1)) 90%, black);
      border-color: color-mix(in oklab, oklch(var(--btn-color, var(--b2)) / var(--tw-border-opacity, 1)) 90%, black);
    }
  }

  @supports not (color: oklch(0% 0 0)) {
    .btn:hover {
      background-color: var(--btn-color, var(--fallback-b2));
      border-color: var(--btn-color, var(--fallback-b2));
    }
  }

  .btn.glass:hover {
    --glass-opacity: 25%;
    --glass-border-opacity: 15%;
  }

  .btn-ghost:hover {
    border-color: #0000;
  }

  @supports (color: oklch(0% 0 0)) {
    .btn-ghost:hover {
      background-color: var(--fallback-bc, oklch(var(--bc) / .2));
    }
  }

  .btn-link:hover {
    background-color: #0000;
    border-color: #0000;
    text-decoration-line: underline;
  }

  .btn-outline:hover {
    --tw-border-opacity: 1;
    border-color: var(--fallback-bc, oklch(var(--bc) / var(--tw-border-opacity)));
    --tw-bg-opacity: 1;
    background-color: var(--fallback-bc, oklch(var(--bc) / var(--tw-bg-opacity)));
    --tw-text-opacity: 1;
    color: var(--fallback-b1, oklch(var(--b1) / var(--tw-text-opacity)));
  }

  .btn-outline.btn-primary:hover {
    --tw-text-opacity: 1;
    color: var(--fallback-pc, oklch(var(--pc) / var(--tw-text-opacity)));
  }

  @supports (color: color-mix(in oklab, black, black)) {
    .btn-outline.btn-primary:hover {
      background-color: color-mix(in oklab, var(--fallback-p, oklch(var(--p) / 1)) 90%, black);
      border-color: color-mix(in oklab, var(--fallback-p, oklch(var(--p) / 1)) 90%, black);
    }
  }

  .btn-outline.btn-secondary:hover {
    --tw-text-opacity: 1;
    color: var(--fallback-sc, oklch(var(--sc) / var(--tw-text-opacity)));
  }

  @supports (color: color-mix(in oklab, black, black)) {
    .btn-outline.btn-secondary:hover {
      background-color: color-mix(in oklab, var(--fallback-s, oklch(var(--s) / 1)) 90%, black);
      border-color: color-mix(in oklab, var(--fallback-s, oklch(var(--s) / 1)) 90%, black);
    }
  }

  .btn-outline.btn-accent:hover {
    --tw-text-opacity: 1;
    color: var(--fallback-ac, oklch(var(--ac) / var(--tw-text-opacity)));
  }

  @supports (color: color-mix(in oklab, black, black)) {
    .btn-outline.btn-accent:hover {
      background-color: color-mix(in oklab, var(--fallback-a, oklch(var(--a) / 1)) 90%, black);
      border-color: color-mix(in oklab, var(--fallback-a, oklch(var(--a) / 1)) 90%, black);
    }
  }

  .btn-outline.btn-success:hover {
    --tw-text-opacity: 1;
    color: var(--fallback-suc, oklch(var(--suc) / var(--tw-text-opacity)));
  }

  @supports (color: color-mix(in oklab, black, black)) {
    .btn-outline.btn-success:hover {
      background-color: color-mix(in oklab, var(--fallback-su, oklch(var(--su) / 1)) 90%, black);
      border-color: color-mix(in oklab, var(--fallback-su, oklch(var(--su) / 1)) 90%, black);
    }
  }

  .btn-outline.btn-info:hover {
    --tw-text-opacity: 1;
    color: var(--fallback-inc, oklch(var(--inc) / var(--tw-text-opacity)));
  }

  @supports (color: color-mix(in oklab, black, black)) {
    .btn-outline.btn-info:hover {
      background-color: color-mix(in oklab, var(--fallback-in, oklch(var(--in) / 1)) 90%, black);
      border-color: color-mix(in oklab, var(--fallback-in, oklch(var(--in) / 1)) 90%, black);
    }
  }

  .btn-outline.btn-warning:hover {
    --tw-text-opacity: 1;
    color: var(--fallback-wac, oklch(var(--wac) / var(--tw-text-opacity)));
  }

  @supports (color: color-mix(in oklab, black, black)) {
    .btn-outline.btn-warning:hover {
      background-color: color-mix(in oklab, var(--fallback-wa, oklch(var(--wa) / 1)) 90%, black);
      border-color: color-mix(in oklab, var(--fallback-wa, oklch(var(--wa) / 1)) 90%, black);
    }
  }

  .btn-outline.btn-error:hover {
    --tw-text-opacity: 1;
    color: var(--fallback-erc, oklch(var(--erc) / var(--tw-text-opacity)));
  }

  @supports (color: color-mix(in oklab, black, black)) {
    .btn-outline.btn-error:hover {
      background-color: color-mix(in oklab, var(--fallback-er, oklch(var(--er) / 1)) 90%, black);
      border-color: color-mix(in oklab, var(--fallback-er, oklch(var(--er) / 1)) 90%, black);
    }
  }

  .btn-disabled:hover, .btn[disabled]:hover, .btn:disabled:hover {
    --tw-border-opacity: 0;
    background-color: var(--fallback-n, oklch(var(--n) / var(--tw-bg-opacity)));
    --tw-bg-opacity: .2;
    color: var(--fallback-bc, oklch(var(--bc) / var(--tw-text-opacity)));
    --tw-text-opacity: .2;
  }

  @supports (color: color-mix(in oklab, black, black)) {
    .btninput[type="checkbox"]:checked:hover, .btninput[type="radio"]:checked:hover {
      background-color: color-mix(in oklab, var(--fallback-p, oklch(var(--p) / 1)) 90%, black);
      border-color: color-mix(in oklab, var(--fallback-p, oklch(var(--p) / 1)) 90%, black);
    }
  }

  .dropdown.dropdown-hover:hover .dropdown-content {
    --tw-scale-x: 1;
    --tw-scale-y: 1;
    transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
  }

  :where(.menu li:not(.menu-title, .disabled) > :not(ul, details, .menu-title)):not(.active, .btn):hover, :where(.menu li:not(.menu-title, .disabled) > details > summary:not(.menu-title)):not(.active, .btn):hover {
    cursor: pointer;
    outline-offset: 2px;
    outline: 2px solid #0000;
  }

  @supports (color: oklch(0% 0 0)) {
    :where(.menu li:not(.menu-title, .disabled) > :not(ul, details, .menu-title)):not(.active, .btn):hover, :where(.menu li:not(.menu-title, .disabled) > details > summary:not(.menu-title)):not(.active, .btn):hover {
      background-color: var(--fallback-bc, oklch(var(--bc) / .1));
    }
  }

  .tab[disabled], .tab[disabled]:hover {
    cursor: not-allowed;
    color: var(--fallback-bc, oklch(var(--bc) / var(--tw-text-opacity)));
    --tw-text-opacity: .2;
  }
}

.dropdown:is(details) summary::-webkit-details-marker {
  display: none;
}

.label {
  -webkit-user-select: none;
  user-select: none;
  justify-content: space-between;
  align-items: center;
  padding: .5rem .25rem;
  display: flex;
}

.input {
  appearance: none;
  border-radius: var(--rounded-btn, .5rem);
  --tw-bg-opacity: 1;
  background-color: var(--fallback-b1, oklch(var(--b1) / var(--tw-bg-opacity)));
  border-width: 1px;
  border-color: #0000;
  flex-shrink: 1;
  height: 3rem;
  padding-left: 1rem;
  padding-right: 1rem;
  font-size: 1rem;
  line-height: 1.5rem;
}

.input[type="number"]::-webkit-inner-spin-button {
  margin-top: -1rem;
  margin-bottom: -1rem;
  margin-inline-end: -1rem;
}

.input-md[type="number"]::-webkit-inner-spin-button {
  margin-top: -1rem;
  margin-bottom: -1rem;
  margin-inline-end: -1rem;
}

.join {
  border-radius: var(--rounded-btn, .5rem);
  align-items: stretch;
  display: inline-flex;
}

.join :where(.join-item), .join .join-item:not(:first-child):not(:last-child), .join :not(:first-child):not(:last-child) .join-item {
  border-start-start-radius: 0;
  border-start-end-radius: 0;
  border-end-end-radius: 0;
  border-end-start-radius: 0;
}

.join .join-item:first-child:not(:last-child), .join :first-child:not(:last-child) .join-item {
  border-start-end-radius: 0;
  border-end-end-radius: 0;
}

.join .dropdown .join-item:first-child:not(:last-child), .join :first-child:not(:last-child) .dropdown .join-item {
  border-start-end-radius: inherit;
  border-end-end-radius: inherit;
}

.join :where(.join-item:first-child:not(:last-child)), .join :where(:first-child:not(:last-child) .join-item) {
  border-start-start-radius: inherit;
  border-end-start-radius: inherit;
}

.join .join-item:last-child:not(:first-child), .join :last-child:not(:first-child) .join-item {
  border-start-start-radius: 0;
  border-end-start-radius: 0;
}

.join :where(.join-item:last-child:not(:first-child)), .join :where(:last-child:not(:first-child) .join-item) {
  border-start-end-radius: inherit;
  border-end-end-radius: inherit;
}

@supports not selector(:has(*)) {
  :where(.join *) {
    border-radius: inherit;
  }
}

@supports selector(:has(*)) {
  :where(.join :has(.join-item)) {
    border-radius: inherit;
  }
}

.kbd {
  border-radius: var(--rounded-btn, .5rem);
  border-width: 1px;
  border-color: var(--fallback-bc, oklch(var(--bc) / var(--tw-border-opacity)));
  --tw-border-opacity: .2;
  --tw-bg-opacity: 1;
  background-color: var(--fallback-b2, oklch(var(--b2) / var(--tw-bg-opacity)));
  --tw-text-opacity: 1;
  color: var(--fallback-bc, oklch(var(--bc) / var(--tw-text-opacity)));
  border-bottom-width: 2px;
  justify-content: center;
  align-items: center;
  min-width: 2.2em;
  min-height: 2.2em;
  padding-left: .5rem;
  padding-right: .5rem;
  display: inline-flex;
}

.menu {
  flex-flow: column wrap;
  padding: .5rem;
  font-size: .875rem;
  line-height: 1.25rem;
  display: flex;
}

.menu :where(li ul) {
  white-space: nowrap;
  margin-inline-start: 1rem;
  padding-inline-start: .5rem;
  position: relative;
}

.menu :where(li:not(.menu-title) > :not(ul, details, .menu-title, .btn)), .menu :where(li:not(.menu-title) > details > summary:not(.menu-title)) {
  -webkit-user-select: none;
  user-select: none;
  grid-auto-columns: minmax(auto, max-content) auto max-content;
  grid-auto-flow: column;
  align-content: flex-start;
  align-items: center;
  gap: .5rem;
  display: grid;
}

.menu li.disabled {
  cursor: not-allowed;
  -webkit-user-select: none;
  user-select: none;
  color: var(--fallback-bc, oklch(var(--bc) / .3));
}

.menu :where(li > .menu-dropdown:not(.menu-dropdown-show)) {
  display: none;
}

:where(.menu li) {
  flex-flow: column wrap;
  flex-shrink: 0;
  align-items: stretch;
  display: flex;
  position: relative;
}

:where(.menu li) .badge {
  justify-self: end;
}

.mockup-browser {
  border-radius: var(--rounded-box, 1rem);
  position: relative;
  overflow: auto hidden;
}

.mockup-browser pre[data-prefix]:before {
  content: attr(data-prefix);
  text-align: right;
  display: inline-block;
}

.navbar {
  padding: var(--navbar-padding, .5rem);
  align-items: center;
  width: 100%;
  min-height: 4rem;
  display: flex;
}

:where(.navbar > :not(script, style)) {
  align-items: center;
  display: inline-flex;
}

.progress {
  appearance: none;
  border-radius: var(--rounded-box, 1rem);
  background-color: var(--fallback-bc, oklch(var(--bc) / .2));
  width: 100%;
  height: .5rem;
  position: relative;
  overflow: hidden;
}

.radio {
  --chkbg: var(--bc);
  cursor: pointer;
  appearance: none;
  border-width: 1px;
  border-color: var(--fallback-bc, oklch(var(--bc) / var(--tw-border-opacity)));
  --tw-border-opacity: .2;
  border-radius: 9999px;
  flex-shrink: 0;
  width: 1.5rem;
  height: 1.5rem;
}

.select {
  cursor: pointer;
  -webkit-user-select: none;
  user-select: none;
  appearance: none;
  border-radius: var(--rounded-btn, .5rem);
  --tw-bg-opacity: 1;
  background-color: var(--fallback-b1, oklch(var(--b1) / var(--tw-bg-opacity)));
  background-image: linear-gradient(45deg, #0000 50%, currentColor 50%), linear-gradient(135deg, currentColor 50%, #0000 50%);
  background-position: calc(100% - 20px) calc(1px + 50%), calc(100% - 16.1px) calc(1px + 50%);
  background-repeat: no-repeat;
  background-size: 4px 4px, 4px 4px;
  border-width: 1px;
  border-color: #0000;
  height: 3rem;
  min-height: 3rem;
  padding-inline: 1rem 2.5rem;
  font-size: .875rem;
  line-height: 2;
  display: inline-flex;
}

.select[multiple] {
  height: auto;
}

.tabs {
  align-items: flex-end;
  display: grid;
}

.tabs-lifted:has(.tab-content[class^="rounded-"]) .tab:first-child:not(:is(.tab-active, [aria-selected="true"])), .tabs-lifted:has(.tab-content[class*=" rounded-"]) .tab:first-child:not(:is(.tab-active, [aria-selected="true"])) {
  border-bottom-color: #0000;
}

.tab {
  cursor: pointer;
  -webkit-user-select: none;
  user-select: none;
  appearance: none;
  text-align: center;
  --tab-padding: 1rem;
  --tw-text-opacity: .5;
  --tab-color: var(--fallback-bc, oklch(var(--bc) / 1));
  --tab-bg: var(--fallback-b1, oklch(var(--b1) / 1));
  --tab-border-color: var(--fallback-b3, oklch(var(--b3) / 1));
  color: var(--tab-color);
  flex-wrap: wrap;
  grid-row-start: 1;
  justify-content: center;
  align-items: center;
  height: 2rem;
  padding-inline-start: var(--tab-padding, 1rem);
  padding-inline-end: var(--tab-padding, 1rem);
  font-size: .875rem;
  line-height: 2;
  display: inline-flex;
  position: relative;
}

.tabinput[type="radio"] {
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
  width: auto;
}

.tabinput[type="radio"]:after {
  --tw-content: attr(aria-label);
  content: var(--tw-content);
}

.tab:not(input):empty {
  cursor: default;
  grid-column-start: span 9999;
}

.tab-content {
  margin-top: calc(var(--tab-border) * -1);
  border-color: #0000;
  border-width: var(--tab-border, 0);
  grid-column: 1 / span 9999;
  grid-row-start: 2;
  display: none;
}

:checked + .tab-content:nth-child(2), :is(.tab-active, [aria-selected="true"]) + .tab-content:nth-child(2) {
  border-start-start-radius: 0;
}

input.tab:checked + .tab-content, :is(.tab-active, [aria-selected="true"]) + .tab-content {
  display: block;
}

.table {
  border-radius: var(--rounded-box, 1rem);
  text-align: left;
  width: 100%;
  font-size: .875rem;
  line-height: 1.25rem;
  position: relative;
}

.table :where(.table-pin-rows thead tr) {
  z-index: 1;
  --tw-bg-opacity: 1;
  background-color: var(--fallback-b1, oklch(var(--b1) / var(--tw-bg-opacity)));
  position: sticky;
  top: 0;
}

.table :where(.table-pin-rows tfoot tr) {
  z-index: 1;
  --tw-bg-opacity: 1;
  background-color: var(--fallback-b1, oklch(var(--b1) / var(--tw-bg-opacity)));
  position: sticky;
  bottom: 0;
}

.table :where(.table-pin-cols tr th) {
  --tw-bg-opacity: 1;
  background-color: var(--fallback-b1, oklch(var(--b1) / var(--tw-bg-opacity)));
  position: sticky;
  left: 0;
  right: 0;
}

.table-zebra tbody tr:nth-child(2n) :where(.table-pin-cols tr th) {
  --tw-bg-opacity: 1;
  background-color: var(--fallback-b2, oklch(var(--b2) / var(--tw-bg-opacity)));
}

.textarea {
  border-radius: var(--rounded-btn, .5rem);
  --tw-bg-opacity: 1;
  background-color: var(--fallback-b1, oklch(var(--b1) / var(--tw-bg-opacity)));
  border-width: 1px;
  border-color: #0000;
  flex-shrink: 1;
  min-height: 3rem;
  padding: .5rem 1rem;
  font-size: .875rem;
  line-height: 2;
}

.avatar-group {
  display: flex;
  overflow: hidden;
}

.avatar-group :where(.avatar) {
  --tw-border-opacity: 1;
  border-width: 4px;
  border-color: var(--fallback-b1, oklch(var(--b1) / var(--tw-border-opacity)));
  border-radius: 9999px;
  overflow: hidden;
}

.btm-nav > :not(.active) {
  padding-top: .125rem;
}

.btm-nav > :where(.active) {
  --tw-bg-opacity: 1;
  background-color: var(--fallback-b1, oklch(var(--b1) / var(--tw-bg-opacity)));
  border-top-width: 2px;
}

.btm-nav > .disabled, .btm-nav > [disabled] {
  pointer-events: none;
  --tw-border-opacity: 0;
  background-color: var(--fallback-n, oklch(var(--n) / var(--tw-bg-opacity)));
  --tw-bg-opacity: .1;
  color: var(--fallback-bc, oklch(var(--bc) / var(--tw-text-opacity)));
  --tw-text-opacity: .2;
}

.btm-nav > * .label {
  font-size: 1rem;
  line-height: 1.5rem;
}

@media (prefers-reduced-motion: no-preference) {
  .btn {
    animation: button-pop var(--animation-btn, .25s) ease-out;
  }
}

.btn:active:hover, .btn:active:focus {
  transform: scale(var(--btn-focus-scale, .97));
  animation: ease-out button-pop;
}

@supports not (color: oklch(0% 0 0)) {
  .btn {
    background-color: var(--btn-color, var(--fallback-b2));
    border-color: var(--btn-color, var(--fallback-b2));
  }

  .btn-primary {
    --btn-color: var(--fallback-p);
  }

  .btn-secondary {
    --btn-color: var(--fallback-s);
  }

  .btn-accent {
    --btn-color: var(--fallback-a);
  }

  .btn-info {
    --btn-color: var(--fallback-in);
  }

  .btn-success {
    --btn-color: var(--fallback-su);
  }

  .btn-warning {
    --btn-color: var(--fallback-wa);
  }

  .btn-error {
    --btn-color: var(--fallback-er);
  }
}

@supports (color: color-mix(in oklab, black, black)) {
  .btn-active {
    background-color: color-mix(in oklab, oklch(var(--btn-color, var(--b3)) / var(--tw-bg-opacity, 1)) 90%, black);
    border-color: color-mix(in oklab, oklch(var(--btn-color, var(--b3)) / var(--tw-border-opacity, 1)) 90%, black);
  }

  .btn-outline.btn-primary.btn-active {
    background-color: color-mix(in oklab, var(--fallback-p, oklch(var(--p) / 1)) 90%, black);
    border-color: color-mix(in oklab, var(--fallback-p, oklch(var(--p) / 1)) 90%, black);
  }

  .btn-outline.btn-secondary.btn-active {
    background-color: color-mix(in oklab, var(--fallback-s, oklch(var(--s) / 1)) 90%, black);
    border-color: color-mix(in oklab, var(--fallback-s, oklch(var(--s) / 1)) 90%, black);
  }

  .btn-outline.btn-accent.btn-active {
    background-color: color-mix(in oklab, var(--fallback-a, oklch(var(--a) / 1)) 90%, black);
    border-color: color-mix(in oklab, var(--fallback-a, oklch(var(--a) / 1)) 90%, black);
  }

  .btn-outline.btn-success.btn-active {
    background-color: color-mix(in oklab, var(--fallback-su, oklch(var(--su) / 1)) 90%, black);
    border-color: color-mix(in oklab, var(--fallback-su, oklch(var(--su) / 1)) 90%, black);
  }

  .btn-outline.btn-info.btn-active {
    background-color: color-mix(in oklab, var(--fallback-in, oklch(var(--in) / 1)) 90%, black);
    border-color: color-mix(in oklab, var(--fallback-in, oklch(var(--in) / 1)) 90%, black);
  }

  .btn-outline.btn-warning.btn-active {
    background-color: color-mix(in oklab, var(--fallback-wa, oklch(var(--wa) / 1)) 90%, black);
    border-color: color-mix(in oklab, var(--fallback-wa, oklch(var(--wa) / 1)) 90%, black);
  }

  .btn-outline.btn-error.btn-active {
    background-color: color-mix(in oklab, var(--fallback-er, oklch(var(--er) / 1)) 90%, black);
    border-color: color-mix(in oklab, var(--fallback-er, oklch(var(--er) / 1)) 90%, black);
  }
}

.btn:focus-visible {
  outline-offset: 2px;
  outline-width: 2px;
  outline-style: solid;
}

.btn-primary {
  --tw-text-opacity: 1;
  color: var(--fallback-pc, oklch(var(--pc) / var(--tw-text-opacity)));
  outline-color: var(--fallback-p, oklch(var(--p) / 1));
}

@supports (color: oklch(0% 0 0)) {
  .btn-primary {
    --btn-color: var(--p);
  }

  .btn-secondary {
    --btn-color: var(--s);
  }

  .btn-accent {
    --btn-color: var(--a);
  }

  .btn-info {
    --btn-color: var(--in);
  }

  .btn-success {
    --btn-color: var(--su);
  }

  .btn-warning {
    --btn-color: var(--wa);
  }

  .btn-error {
    --btn-color: var(--er);
  }
}

.btn-secondary {
  --tw-text-opacity: 1;
  color: var(--fallback-sc, oklch(var(--sc) / var(--tw-text-opacity)));
  outline-color: var(--fallback-s, oklch(var(--s) / 1));
}

.btn-accent {
  --tw-text-opacity: 1;
  color: var(--fallback-ac, oklch(var(--ac) / var(--tw-text-opacity)));
  outline-color: var(--fallback-a, oklch(var(--a) / 1));
}

.btn-info {
  --tw-text-opacity: 1;
  color: var(--fallback-inc, oklch(var(--inc) / var(--tw-text-opacity)));
  outline-color: var(--fallback-in, oklch(var(--in) / 1));
}

.btn-success {
  --tw-text-opacity: 1;
  color: var(--fallback-suc, oklch(var(--suc) / var(--tw-text-opacity)));
  outline-color: var(--fallback-su, oklch(var(--su) / 1));
}

.btn-warning {
  --tw-text-opacity: 1;
  color: var(--fallback-wac, oklch(var(--wac) / var(--tw-text-opacity)));
  outline-color: var(--fallback-wa, oklch(var(--wa) / 1));
}

.btn-error {
  --tw-text-opacity: 1;
  color: var(--fallback-erc, oklch(var(--erc) / var(--tw-text-opacity)));
  outline-color: var(--fallback-er, oklch(var(--er) / 1));
}

.btn.glass {
  --tw-shadow: 0 0 #0000;
  --tw-shadow-colored: 0 0 #0000;
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
  outline-color: currentColor;
}

.btn.glass.btn-active {
  --glass-opacity: 25%;
  --glass-border-opacity: 15%;
}

.btn-ghost {
  color: currentColor;
  --tw-shadow: 0 0 #0000;
  --tw-shadow-colored: 0 0 #0000;
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
  background-color: #0000;
  border-width: 1px;
  border-color: #0000;
  outline-color: currentColor;
}

.btn-ghost.btn-active {
  background-color: var(--fallback-bc, oklch(var(--bc) / .2));
  border-color: #0000;
}

.btn-link {
  --tw-text-opacity: 1;
  color: var(--fallback-p, oklch(var(--p) / var(--tw-text-opacity)));
  --tw-shadow: 0 0 #0000;
  --tw-shadow-colored: 0 0 #0000;
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
  background-color: #0000;
  border-color: #0000;
  outline-color: currentColor;
  text-decoration-line: underline;
}

.btn-link.btn-active {
  background-color: #0000;
  border-color: #0000;
  text-decoration-line: underline;
}

.btn-outline {
  --tw-text-opacity: 1;
  color: var(--fallback-bc, oklch(var(--bc) / var(--tw-text-opacity)));
  --tw-shadow: 0 0 #0000;
  --tw-shadow-colored: 0 0 #0000;
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
  background-color: #0000;
  border-color: currentColor;
}

.btn-outline.btn-active {
  --tw-border-opacity: 1;
  border-color: var(--fallback-bc, oklch(var(--bc) / var(--tw-border-opacity)));
  --tw-bg-opacity: 1;
  background-color: var(--fallback-bc, oklch(var(--bc) / var(--tw-bg-opacity)));
  --tw-text-opacity: 1;
  color: var(--fallback-b1, oklch(var(--b1) / var(--tw-text-opacity)));
}

.btn-outline.btn-primary {
  --tw-text-opacity: 1;
  color: var(--fallback-p, oklch(var(--p) / var(--tw-text-opacity)));
}

.btn-outline.btn-primary.btn-active {
  --tw-text-opacity: 1;
  color: var(--fallback-pc, oklch(var(--pc) / var(--tw-text-opacity)));
}

.btn-outline.btn-secondary {
  --tw-text-opacity: 1;
  color: var(--fallback-s, oklch(var(--s) / var(--tw-text-opacity)));
}

.btn-outline.btn-secondary.btn-active {
  --tw-text-opacity: 1;
  color: var(--fallback-sc, oklch(var(--sc) / var(--tw-text-opacity)));
}

.btn-outline.btn-accent {
  --tw-text-opacity: 1;
  color: var(--fallback-a, oklch(var(--a) / var(--tw-text-opacity)));
}

.btn-outline.btn-accent.btn-active {
  --tw-text-opacity: 1;
  color: var(--fallback-ac, oklch(var(--ac) / var(--tw-text-opacity)));
}

.btn-outline.btn-success {
  --tw-text-opacity: 1;
  color: var(--fallback-su, oklch(var(--su) / var(--tw-text-opacity)));
}

.btn-outline.btn-success.btn-active {
  --tw-text-opacity: 1;
  color: var(--fallback-suc, oklch(var(--suc) / var(--tw-text-opacity)));
}

.btn-outline.btn-info {
  --tw-text-opacity: 1;
  color: var(--fallback-in, oklch(var(--in) / var(--tw-text-opacity)));
}

.btn-outline.btn-info.btn-active {
  --tw-text-opacity: 1;
  color: var(--fallback-inc, oklch(var(--inc) / var(--tw-text-opacity)));
}

.btn-outline.btn-warning {
  --tw-text-opacity: 1;
  color: var(--fallback-wa, oklch(var(--wa) / var(--tw-text-opacity)));
}

.btn-outline.btn-warning.btn-active {
  --tw-text-opacity: 1;
  color: var(--fallback-wac, oklch(var(--wac) / var(--tw-text-opacity)));
}

.btn-outline.btn-error {
  --tw-text-opacity: 1;
  color: var(--fallback-er, oklch(var(--er) / var(--tw-text-opacity)));
}

.btn-outline.btn-error.btn-active {
  --tw-text-opacity: 1;
  color: var(--fallback-erc, oklch(var(--erc) / var(--tw-text-opacity)));
}

.btn.btn-disabled, .btn[disabled], .btn:disabled {
  --tw-border-opacity: 0;
  background-color: var(--fallback-n, oklch(var(--n) / var(--tw-bg-opacity)));
  --tw-bg-opacity: .2;
  color: var(--fallback-bc, oklch(var(--bc) / var(--tw-text-opacity)));
  --tw-text-opacity: .2;
}

.btninput[type="checkbox"]:checked, .btninput[type="radio"]:checked {
  --tw-border-opacity: 1;
  border-color: var(--fallback-p, oklch(var(--p) / var(--tw-border-opacity)));
  --tw-bg-opacity: 1;
  background-color: var(--fallback-p, oklch(var(--p) / var(--tw-bg-opacity)));
  --tw-text-opacity: 1;
  color: var(--fallback-pc, oklch(var(--pc) / var(--tw-text-opacity)));
}

.btninput[type="checkbox"]:checked:focus-visible, .btninput[type="radio"]:checked:focus-visible {
  outline-color: var(--fallback-p, oklch(var(--p) / 1));
}

@keyframes button-pop {
  0% {
    transform: scale(var(--btn-focus-scale, .98));
  }

  40% {
    transform: scale(1.02);
  }

  100% {
    transform: scale(1);
  }
}

.card :where(figure:first-child) {
  border-start-start-radius: inherit;
  border-start-end-radius: inherit;
  border-end-end-radius: unset;
  border-end-start-radius: unset;
  overflow: hidden;
}

.card :where(figure:last-child) {
  border-start-start-radius: unset;
  border-start-end-radius: unset;
  border-end-end-radius: inherit;
  border-end-start-radius: inherit;
  overflow: hidden;
}

.card:focus-visible {
  outline-offset: 2px;
  outline: 2px solid;
}

.card.bordered {
  --tw-border-opacity: 1;
  border-width: 1px;
  border-color: var(--fallback-b2, oklch(var(--b2) / var(--tw-border-opacity)));
}

.card.compact .card-body {
  padding: 1rem;
  font-size: .875rem;
  line-height: 1.25rem;
}

.card-title {
  align-items: center;
  gap: .5rem;
  font-size: 1.25rem;
  font-weight: 600;
  line-height: 1.75rem;
  display: flex;
}

.card.image-full :where(figure) {
  border-radius: inherit;
  overflow: hidden;
}

.checkbox:focus {
  box-shadow: none;
}

.checkbox:focus-visible {
  outline-offset: 2px;
  outline-width: 2px;
  outline-style: solid;
  outline-color: var(--fallback-bc, oklch(var(--bc) / 1));
}

.checkbox:disabled {
  cursor: not-allowed;
  --tw-bg-opacity: 1;
  background-color: var(--fallback-bc, oklch(var(--bc) / var(--tw-bg-opacity)));
  opacity: .2;
  border-width: 0;
  border-color: #0000;
}

.checkbox:checked, .checkbox[aria-checked="true"] {
  animation: checkmark var(--animation-input, .2s) ease-out;
  background-repeat: no-repeat;
  background-color: var(--chkbg);
  background-image: linear-gradient(-45deg, transparent 65%, var(--chkbg) 65.99%), linear-gradient(45deg, transparent 75%, var(--chkbg) 75.99%), linear-gradient(-45deg, var(--chkbg) 40%, transparent 40.99%), linear-gradient(45deg, var(--chkbg) 30%, var(--chkfg) 30.99%, var(--chkfg) 40%, transparent 40.99%), linear-gradient(-45deg, var(--chkfg) 50%, var(--chkbg) 50.99%);
}

.checkbox:indeterminate {
  --tw-bg-opacity: 1;
  background-color: var(--fallback-bc, oklch(var(--bc) / var(--tw-bg-opacity)));
  animation: checkmark var(--animation-input, .2s) ease-out;
  background-repeat: no-repeat;
  background-image: linear-gradient(90deg, transparent 80%, var(--chkbg) 80%), linear-gradient(-90deg, transparent 80%, var(--chkbg) 80%), linear-gradient(0deg, var(--chkbg) 43%, var(--chkfg) 43%, var(--chkfg) 57%, var(--chkbg) 57%);
}

@keyframes checkmark {
  0% {
    background-position-y: 5px;
  }

  50% {
    background-position-y: -2px;
  }

  100% {
    background-position-y: 0;
  }
}

details.collapse {
  width: 100%;
}

details.collapse summary {
  outline-offset: 2px;
  outline: 2px solid #0000;
  display: block;
  position: relative;
}

details.collapse summary::-webkit-details-marker {
  display: none;
}

.collapse:focus-visible, .collapse:has(.collapse-title:focus-visible), .collapse:has( > input[type="checkbox"]:focus-visible), .collapse:has( > input[type="radio"]:focus-visible) {
  outline-offset: 2px;
  outline-width: 2px;
  outline-style: solid;
  outline-color: var(--fallback-bc, oklch(var(--bc) / 1));
}

.collapse-arrow > .collapse-title:after {
  --tw-translate-y: -100%;
  --tw-rotate: 45deg;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
  content: "";
  transform-origin: 75% 75%;
  pointer-events: none;
  top: 1.9rem;
  width: .5rem;
  height: .5rem;
  transition-property: all;
  transition-duration: .2s;
  transition-timing-function: cubic-bezier(0, 0, .2, 1);
  display: block;
  position: absolute;
  inset-inline-end: 1.4rem;
  box-shadow: 2px 2px;
}

.collapse-plus > .collapse-title:after {
  content: "+";
  pointer-events: none;
  top: .9rem;
  width: .5rem;
  height: .5rem;
  transition-property: all;
  transition-duration: .3s;
  transition-timing-function: cubic-bezier(0, 0, .2, 1);
  display: block;
  position: absolute;
  inset-inline-end: 1.4rem;
}

.collapse:not(.collapse-open):not(.collapse-close) > input[type="checkbox"], .collapse:not(.collapse-open):not(.collapse-close) > input[type="radio"]:not(:checked), .collapse:not(.collapse-open):not(.collapse-close) > .collapse-title {
  cursor: pointer;
}

.collapse:focus:not(.collapse-open):not(.collapse-close):not(.collapse[open]) > .collapse-title {
  cursor: unset;
}

.collapse-title {
  position: relative;
}

:where(.collapse > input[type="checkbox"]), :where(.collapse > input[type="radio"]) {
  z-index: 1;
}

.collapse-title, :where(.collapse > input[type="checkbox"]), :where(.collapse > input[type="radio"]) {
  padding: 1rem;
  width: 100%;
  min-height: 3.75rem;
  padding-inline-end: 3rem;
  transition: background-color .2s ease-out;
}

.collapse[open] > :where(.collapse-content), .collapse-open > :where(.collapse-content), .collapse:focus:not(.collapse-close) > :where(.collapse-content), .collapse:not(.collapse-close) > :where(input[type="checkbox"]:checked ~ .collapse-content), .collapse:not(.collapse-close) > :where(input[type="radio"]:checked ~ .collapse-content) {
  padding-bottom: 1rem;
  transition: padding .2s ease-out, background-color .2s ease-out;
}

.collapse[open].collapse-arrow > .collapse-title:after, .collapse-open.collapse-arrow > .collapse-title:after, .collapse-arrow:focus:not(.collapse-close) > .collapse-title:after, .collapse-arrow:not(.collapse-close) > input[type="checkbox"]:checked ~ .collapse-title:after, .collapse-arrow:not(.collapse-close) > input[type="radio"]:checked ~ .collapse-title:after {
  --tw-translate-y: -50%;
  --tw-rotate: 225deg;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.collapse[open].collapse-plus > .collapse-title:after, .collapse-open.collapse-plus > .collapse-title:after, .collapse-plus:focus:not(.collapse-close) > .collapse-title:after, .collapse-plus:not(.collapse-close) > input[type="checkbox"]:checked ~ .collapse-title:after, .collapse-plus:not(.collapse-close) > input[type="radio"]:checked ~ .collapse-title:after {
  content: "−";
}

.dropdown.dropdown-open .dropdown-content, .dropdown:focus .dropdown-content, .dropdown:focus-within .dropdown-content {
  --tw-scale-x: 1;
  --tw-scale-y: 1;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.input input {
  --tw-bg-opacity: 1;
  background-color: var(--fallback-p, oklch(var(--p) / var(--tw-bg-opacity)));
  background-color: #0000;
}

.input input:focus {
  outline-offset: 2px;
  outline: 2px solid #0000;
}

.input[list]::-webkit-calendar-picker-indicator {
  line-height: 1em;
}

.input:focus, .input:focus-within {
  box-shadow: none;
  border-color: var(--fallback-bc, oklch(var(--bc) / .2));
  outline-offset: 2px;
  outline-width: 2px;
  outline-style: solid;
  outline-color: var(--fallback-bc, oklch(var(--bc) / .2));
}

.input:has( > input[disabled]), .input-disabled, .input:disabled, .input[disabled] {
  cursor: not-allowed;
  --tw-border-opacity: 1;
  border-color: var(--fallback-b2, oklch(var(--b2) / var(--tw-border-opacity)));
  --tw-bg-opacity: 1;
  background-color: var(--fallback-b2, oklch(var(--b2) / var(--tw-bg-opacity)));
  color: var(--fallback-bc, oklch(var(--bc) / .4));
}

.input:has( > input[disabled])::placeholder, .input-disabled::placeholder, .input:disabled::placeholder, .input[disabled]::placeholder {
  color: var(--fallback-bc, oklch(var(--bc) / var(--tw-placeholder-opacity)));
  --tw-placeholder-opacity: .2;
}

.input:has( > input[disabled]) > input[disabled] {
  cursor: not-allowed;
}

.input::-webkit-date-and-time-value {
  text-align: inherit;
}

.join > :where(:not(:first-child)) {
  margin-top: 0;
  margin-bottom: 0;
  margin-inline-start: -1px;
}

.join > :where(:not(:first-child)).btn {
  margin-inline-start: calc(var(--border-btn) * -1);
}

.join-item:focus {
  isolation: isolate;
}

:where(.menu li:empty) {
  --tw-bg-opacity: 1;
  background-color: var(--fallback-bc, oklch(var(--bc) / var(--tw-bg-opacity)));
  opacity: .1;
  height: 1px;
  margin: .5rem 1rem;
}

.menu :where(li ul):before {
  bottom: .75rem;
  --tw-bg-opacity: 1;
  background-color: var(--fallback-bc, oklch(var(--bc) / var(--tw-bg-opacity)));
  opacity: .1;
  content: "";
  inset-inline-start: 0;
  width: 1px;
  position: absolute;
  top: .75rem;
}

.menu :where(li:not(.menu-title) > :not(ul, details, .menu-title, .btn)), .menu :where(li:not(.menu-title) > details > summary:not(.menu-title)) {
  border-radius: var(--rounded-btn, .5rem);
  text-align: start;
  text-wrap: balance;
  padding: .5rem 1rem;
  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, -webkit-backdrop-filter, backdrop-filter;
  transition-duration: .2s;
  transition-timing-function: cubic-bezier(0, 0, .2, 1);
}

:where(.menu li:not(.menu-title, .disabled) > :not(ul, details, .menu-title)):not(summary, .active, .btn).focus, :where(.menu li:not(.menu-title, .disabled) > :not(ul, details, .menu-title)):not(summary, .active, .btn):focus, :where(.menu li:not(.menu-title, .disabled) > :not(ul, details, .menu-title)):is(summary):not(.active, .btn):focus-visible, :where(.menu li:not(.menu-title, .disabled) > details > summary:not(.menu-title)):not(summary, .active, .btn).focus, :where(.menu li:not(.menu-title, .disabled) > details > summary:not(.menu-title)):not(summary, .active, .btn):focus, :where(.menu li:not(.menu-title, .disabled) > details > summary:not(.menu-title)):is(summary):not(.active, .btn):focus-visible {
  cursor: pointer;
  background-color: var(--fallback-bc, oklch(var(--bc) / .1));
  --tw-text-opacity: 1;
  color: var(--fallback-bc, oklch(var(--bc) / var(--tw-text-opacity)));
  outline-offset: 2px;
  outline: 2px solid #0000;
}

.menu li > :not(ul, .menu-title, details, .btn):active, .menu li > :not(ul, .menu-title, details, .btn).active, .menu li > details > summary:active {
  --tw-bg-opacity: 1;
  background-color: var(--fallback-n, oklch(var(--n) / var(--tw-bg-opacity)));
  --tw-text-opacity: 1;
  color: var(--fallback-nc, oklch(var(--nc) / var(--tw-text-opacity)));
}

.menu :where(li > details > summary)::-webkit-details-marker {
  display: none;
}

.menu :where(li > details > summary):after, .menu :where(li > .menu-dropdown-toggle):after {
  content: "";
  transform-origin: 75% 75%;
  pointer-events: none;
  justify-self: end;
  width: .5rem;
  height: .5rem;
  margin-top: -.5rem;
  transition-property: transform, margin-top;
  transition-duration: .3s;
  transition-timing-function: cubic-bezier(.4, 0, .2, 1);
  display: block;
  transform: rotate(45deg);
  box-shadow: 2px 2px;
}

.menu :where(li > details[open] > summary):after, .menu :where(li > .menu-dropdown-toggle.menu-dropdown-show):after {
  margin-top: 0;
  transform: rotate(225deg);
}

.menu-title {
  color: var(--fallback-bc, oklch(var(--bc) / .4));
  padding: .5rem 1rem;
  font-size: .875rem;
  font-weight: 700;
  line-height: 1.25rem;
}

.mockup-phone {
  background-color: #000;
  border: 4px solid #444;
  border-radius: 50px;
  margin: 0 auto;
  padding: 10px;
  display: inline-block;
  overflow: hidden;
}

.mockup-phone .camera {
  z-index: 11;
  background: #000;
  border-bottom-right-radius: 17px;
  border-bottom-left-radius: 17px;
  width: 150px;
  height: 25px;
  margin: 0 auto;
  position: relative;
  top: 0;
  left: 0;
}

.mockup-phone .camera:before {
  content: "";
  background-color: #0c0b0e;
  border-radius: 5px;
  width: 50px;
  height: 4px;
  position: absolute;
  top: 35%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.mockup-phone .camera:after {
  content: "";
  background-color: #0f0b25;
  border-radius: 5px;
  width: 8px;
  height: 8px;
  position: absolute;
  top: 20%;
  left: 70%;
}

.mockup-phone .display {
  border-radius: 40px;
  margin-top: -25px;
  overflow: hidden;
}

.mockup-browser .mockup-browser-toolbar {
  align-items: center;
  width: 100%;
  margin-top: .75rem;
  margin-bottom: .75rem;
  padding-right: 1.4em;
  display: inline-flex;
}

.mockup-browser .mockup-browser-toolbar:where([dir="rtl"], [dir="rtl"] *) {
  flex-direction: row-reverse;
}

.mockup-browser .mockup-browser-toolbar:before {
  content: "";
  aspect-ratio: 1;
  opacity: .3;
  border-radius: 9999px;
  height: .75rem;
  margin-right: 4.8rem;
  display: inline-block;
  box-shadow: 1.4em 0, 2.8em 0, 4.2em 0;
}

.mockup-browser .mockup-browser-toolbar .input {
  text-overflow: ellipsis;
  white-space: nowrap;
  --tw-bg-opacity: 1;
  background-color: var(--fallback-b2, oklch(var(--b2) / var(--tw-bg-opacity)));
  direction: ltr;
  width: 24rem;
  height: 1.75rem;
  margin-left: auto;
  margin-right: auto;
  padding-left: 2rem;
  display: block;
  position: relative;
  overflow: hidden;
}

.mockup-browser .mockup-browser-toolbar .input:before {
  content: "";
  aspect-ratio: 1;
  --tw-translate-y: -50%;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
  opacity: .6;
  border-width: 2px;
  border-color: currentColor;
  border-radius: 9999px;
  height: .75rem;
  position: absolute;
  top: 50%;
  left: .5rem;
}

.mockup-browser .mockup-browser-toolbar .input:after {
  content: "";
  --tw-translate-y: 25%;
  --tw-rotate: -45deg;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
  opacity: .6;
  border-width: 1px;
  border-color: currentColor;
  border-radius: 9999px;
  height: .5rem;
  position: absolute;
  top: 50%;
  left: 1.25rem;
}

@keyframes modal-pop {
  0% {
    opacity: 0;
  }
}

.progress::-moz-progress-bar {
  border-radius: var(--rounded-box, 1rem);
  --tw-bg-opacity: 1;
  background-color: var(--fallback-bc, oklch(var(--bc) / var(--tw-bg-opacity)));
}

.progress:indeterminate {
  --progress-color: var(--fallback-bc, oklch(var(--bc) / 1));
  background-image: repeating-linear-gradient(90deg, var(--progress-color) -1%, var(--progress-color) 10%, transparent 10%, transparent 90%);
  background-position-x: 15%;
  background-size: 200%;
  animation: 5s ease-in-out infinite progress-loading;
}

.progress::-webkit-progress-bar {
  border-radius: var(--rounded-box, 1rem);
  background-color: #0000;
}

.progress::-webkit-progress-value {
  border-radius: var(--rounded-box, 1rem);
  --tw-bg-opacity: 1;
  background-color: var(--fallback-bc, oklch(var(--bc) / var(--tw-bg-opacity)));
}

.progress:indeterminate::-moz-progress-bar {
  background-color: #0000;
  background-image: repeating-linear-gradient(90deg, var(--progress-color) -1%, var(--progress-color) 10%, transparent 10%, transparent 90%);
  background-position-x: 15%;
  background-size: 200%;
  animation: 5s ease-in-out infinite progress-loading;
}

@keyframes progress-loading {
  50% {
    background-position-x: -115%;
  }
}

.radio:focus {
  box-shadow: none;
}

.radio:focus-visible {
  outline-offset: 2px;
  outline-width: 2px;
  outline-style: solid;
  outline-color: var(--fallback-bc, oklch(var(--bc) / 1));
}

.radio:checked, .radio[aria-checked="true"] {
  --tw-bg-opacity: 1;
  background-color: var(--fallback-bc, oklch(var(--bc) / var(--tw-bg-opacity)));
  animation: radiomark var(--animation-input, .2s) ease-out;
  box-shadow: 0 0 0 4px var(--fallback-b1, oklch(var(--b1) / 1)) inset, 0 0 0 4px var(--fallback-b1, oklch(var(--b1) / 1)) inset;
  background-image: none;
}

.radio:disabled {
  cursor: not-allowed;
  opacity: .2;
}

@keyframes radiomark {
  0% {
    box-shadow: 0 0 0 12px var(--fallback-b1, oklch(var(--b1) / 1)) inset, 0 0 0 12px var(--fallback-b1, oklch(var(--b1) / 1)) inset;
  }

  50% {
    box-shadow: 0 0 0 3px var(--fallback-b1, oklch(var(--b1) / 1)) inset, 0 0 0 3px var(--fallback-b1, oklch(var(--b1) / 1)) inset;
  }

  100% {
    box-shadow: 0 0 0 4px var(--fallback-b1, oklch(var(--b1) / 1)) inset, 0 0 0 4px var(--fallback-b1, oklch(var(--b1) / 1)) inset;
  }
}

@keyframes rating-pop {
  0% {
    transform: translateY(-.125em);
  }

  40% {
    transform: translateY(-.125em);
  }

  100% {
    transform: translateY(0);
  }
}

.select:focus {
  box-shadow: none;
  border-color: var(--fallback-bc, oklch(var(--bc) / .2));
  outline-offset: 2px;
  outline-width: 2px;
  outline-style: solid;
  outline-color: var(--fallback-bc, oklch(var(--bc) / .2));
}

.select-disabled, .select:disabled, .select[disabled] {
  cursor: not-allowed;
  --tw-border-opacity: 1;
  border-color: var(--fallback-b2, oklch(var(--b2) / var(--tw-border-opacity)));
  --tw-bg-opacity: 1;
  background-color: var(--fallback-b2, oklch(var(--b2) / var(--tw-bg-opacity)));
  color: var(--fallback-bc, oklch(var(--bc) / .4));
}

.select-disabled::placeholder, .select:disabled::placeholder, .select[disabled]::placeholder {
  color: var(--fallback-bc, oklch(var(--bc) / var(--tw-placeholder-opacity)));
  --tw-placeholder-opacity: .2;
}

.select-multiple, .select[multiple], .select[size].select:not([size="1"]) {
  background-image: none;
  padding-right: 1rem;
}

[dir="rtl"] .select {
  background-position: 12px calc(1px + 50%), 16px calc(1px + 50%);
}

.skeleton {
  border-radius: var(--rounded-box, 1rem);
  --tw-bg-opacity: 1;
  background-color: var(--fallback-b3, oklch(var(--b3) / var(--tw-bg-opacity)));
  will-change: background-position;
  background-image: linear-gradient(105deg, transparent 0%, transparent 40%, var(--fallback-b1, oklch(var(--b1) / 1)) 50%, transparent 60%, transparent 100%);
  background-position-x: -50%;
  background-repeat: no-repeat;
  background-size: 200%;
  animation: 1.8s ease-in-out infinite skeleton;
}

@media (prefers-reduced-motion) {
  .skeleton {
    animation-duration: 15s;
  }
}

@keyframes skeleton {
  from {
    background-position: 150%;
  }

  to {
    background-position: -50%;
  }
}

.tabs-lifted > .tab:focus-visible {
  border-end-end-radius: 0;
  border-end-start-radius: 0;
}

.tab:is(.tab-active, [aria-selected="true"]):not(.tab-disabled):not([disabled]), .tabinput:checked {
  border-color: var(--fallback-bc, oklch(var(--bc) / var(--tw-border-opacity)));
  --tw-border-opacity: 1;
  --tw-text-opacity: 1;
}

.tab:focus {
  outline-offset: 2px;
  outline: 2px solid #0000;
}

.tab:focus-visible {
  outline-offset: -5px;
  outline: 2px solid;
}

.tab-disabled, .tab[disabled] {
  cursor: not-allowed;
  color: var(--fallback-bc, oklch(var(--bc) / var(--tw-text-opacity)));
  --tw-text-opacity: .2;
}

.tabs-bordered > .tab {
  border-color: var(--fallback-bc, oklch(var(--bc) / var(--tw-border-opacity)));
  --tw-border-opacity: .2;
  border-style: solid;
  border-bottom-width: calc(var(--tab-border, 1px)  + 1px);
}

.tabs-lifted > .tab {
  border: var(--tab-border, 1px) solid transparent;
  border-width: 0 0 var(--tab-border, 1px) 0;
  border-bottom-color: var(--tab-border-color);
  padding-inline-start: var(--tab-padding, 1rem);
  padding-inline-end: var(--tab-padding, 1rem);
  padding-top: var(--tab-border, 1px);
  border-start-start-radius: var(--tab-radius, .5rem);
  border-start-end-radius: var(--tab-radius, .5rem);
}

.tabs-lifted > .tab:is(.tab-active, [aria-selected="true"]):not(.tab-disabled):not([disabled]), .tabs-lifted > .tabinput:checked {
  background-color: var(--tab-bg);
  border-width: var(--tab-border, 1px) var(--tab-border, 1px) 0 var(--tab-border, 1px);
  border-inline-start-color: var(--tab-border-color);
  border-inline-end-color: var(--tab-border-color);
  border-top-color: var(--tab-border-color);
  padding-inline-start: calc(var(--tab-padding, 1rem)  - var(--tab-border, 1px));
  padding-inline-end: calc(var(--tab-padding, 1rem)  - var(--tab-border, 1px));
  padding-bottom: var(--tab-border, 1px);
  padding-top: 0;
}

.tabs-lifted > .tab:is(.tab-active, [aria-selected="true"]):not(.tab-disabled):not([disabled]):before, .tabs-lifted > .tabinput:checked:before {
  z-index: 1;
  content: "";
  width: calc(100% + var(--tab-radius, .5rem) * 2);
  height: var(--tab-radius, .5rem);
  background-size: var(--tab-radius, .5rem);
  --tab-grad: calc(69% - var(--tab-border, 1px));
  --radius-start: radial-gradient(circle at top left, transparent var(--tab-grad), var(--tab-border-color) calc(var(--tab-grad)  + .25px), var(--tab-border-color) calc(var(--tab-grad)  + var(--tab-border, 1px)), var(--tab-bg) calc(var(--tab-grad)  + var(--tab-border, 1px)  + .25px));
  --radius-end: radial-gradient(circle at top right, transparent var(--tab-grad), var(--tab-border-color) calc(var(--tab-grad)  + .25px), var(--tab-border-color) calc(var(--tab-grad)  + var(--tab-border, 1px)), var(--tab-bg) calc(var(--tab-grad)  + var(--tab-border, 1px)  + .25px));
  background-position: 0 0, 100% 0;
  background-repeat: no-repeat;
  background-image: var(--radius-start), var(--radius-end);
  display: block;
  position: absolute;
  bottom: 0;
}

.tabs-lifted > .tab:is(.tab-active, [aria-selected="true"]):not(.tab-disabled):not([disabled]):first-child:before, .tabs-lifted > .tabinput:checked:first-child:before {
  background-image: var(--radius-end);
  background-position: 100% 0;
}

[dir="rtl"] .tabs-lifted > .tab:is(.tab-active, [aria-selected="true"]):not(.tab-disabled):not([disabled]):first-child:before, [dir="rtl"] .tabs-lifted > .tabinput:checked:first-child:before, .tabs-lifted > .tab:is(.tab-active, [aria-selected="true"]):not(.tab-disabled):not([disabled]):last-child:before, .tabs-lifted > .tabinput:checked:last-child:before {
  background-image: var(--radius-start);
  background-position: 0 0;
}

[dir="rtl"] .tabs-lifted > .tab:is(.tab-active, [aria-selected="true"]):not(.tab-disabled):not([disabled]):last-child:before, [dir="rtl"] .tabs-lifted > .tabinput:checked:last-child:before, .tabs-lifted > :is(.tab-active, [aria-selected="true"]):not(.tab-disabled):not([disabled]) + .tabs-lifted :is(.tab-active, [aria-selected="true"]):not(.tab-disabled):not([disabled]):before, .tabs-lifted > .tabinput:checked + .tabs-lifted .tabinput:checked:before {
  background-image: var(--radius-end);
  background-position: 100% 0;
}

.tabs-boxed {
  border-radius: var(--rounded-btn, .5rem);
  --tw-bg-opacity: 1;
  background-color: var(--fallback-b2, oklch(var(--b2) / var(--tw-bg-opacity)));
  padding: .25rem;
}

.tabs-boxed .tab {
  border-radius: var(--rounded-btn, .5rem);
}

.tabs-boxed :is(.tab-active, [aria-selected="true"]):not(.tab-disabled):not([disabled]), .tabs-boxed input:checked {
  --tw-bg-opacity: 1;
  background-color: var(--fallback-p, oklch(var(--p) / var(--tw-bg-opacity)));
  --tw-text-opacity: 1;
  color: var(--fallback-pc, oklch(var(--pc) / var(--tw-text-opacity)));
}

.table:where([dir="rtl"], [dir="rtl"] *) {
  text-align: right;
}

.table :where(th, td) {
  vertical-align: middle;
  padding: .75rem 1rem;
}

.table tr.active, .table tr.active:nth-child(2n), .table-zebra tbody tr:nth-child(2n) {
  --tw-bg-opacity: 1;
  background-color: var(--fallback-b2, oklch(var(--b2) / var(--tw-bg-opacity)));
}

.table-zebra tr.active, .table-zebra tr.active:nth-child(2n), .table-zebra-zebra tbody tr:nth-child(2n) {
  --tw-bg-opacity: 1;
  background-color: var(--fallback-b3, oklch(var(--b3) / var(--tw-bg-opacity)));
}

.table :where(thead tr, tbody tr:not(:last-child), tbody tr:first-child:last-child) {
  --tw-border-opacity: 1;
  border-bottom-width: 1px;
  border-bottom-color: var(--fallback-b2, oklch(var(--b2) / var(--tw-border-opacity)));
}

.table :where(thead, tfoot) {
  white-space: nowrap;
  color: var(--fallback-bc, oklch(var(--bc) / .6));
  font-size: .75rem;
  font-weight: 700;
  line-height: 1rem;
}

.table :where(tfoot) {
  --tw-border-opacity: 1;
  border-top-width: 1px;
  border-top-color: var(--fallback-b2, oklch(var(--b2) / var(--tw-border-opacity)));
}

.textarea:focus {
  box-shadow: none;
  border-color: var(--fallback-bc, oklch(var(--bc) / .2));
  outline-offset: 2px;
  outline-width: 2px;
  outline-style: solid;
  outline-color: var(--fallback-bc, oklch(var(--bc) / .2));
}

.textarea-primary {
  --tw-border-opacity: 1;
  border-color: var(--fallback-p, oklch(var(--p) / var(--tw-border-opacity)));
}

.textarea-primary:focus {
  --tw-border-opacity: 1;
  border-color: var(--fallback-p, oklch(var(--p) / var(--tw-border-opacity)));
  outline-color: var(--fallback-p, oklch(var(--p) / 1));
}

.textarea-disabled, .textarea:disabled, .textarea[disabled] {
  cursor: not-allowed;
  --tw-border-opacity: 1;
  border-color: var(--fallback-b2, oklch(var(--b2) / var(--tw-border-opacity)));
  --tw-bg-opacity: 1;
  background-color: var(--fallback-b2, oklch(var(--b2) / var(--tw-bg-opacity)));
  color: var(--fallback-bc, oklch(var(--bc) / .4));
}

.textarea-disabled::placeholder, .textarea:disabled::placeholder, .textarea[disabled]::placeholder {
  color: var(--fallback-bc, oklch(var(--bc) / var(--tw-placeholder-opacity)));
  --tw-placeholder-opacity: .2;
}

@keyframes toast-pop {
  0% {
    opacity: 0;
    transform: scale(.9);
  }

  100% {
    opacity: 1;
    transform: scale(1);
  }
}

.glass, .glass.btn-active {
  backdrop-filter: blur(var(--glass-blur, 40px));
  background-color: #0000;
  background-image: linear-gradient(135deg, rgb(255 255 255 / var(--glass-opacity, 30%))0%, #0000 100%), linear-gradient(var(--glass-reflex-degree, 100deg), rgb(255 255 255 / var(--glass-reflex-opacity, 10%))25%, #0000 25%);
  box-shadow: 0 0 0 1px rgb(255 255 255 / var(--glass-border-opacity, 10%))inset, 0 0 0 2px #0000000d;
  text-shadow: 0 1px rgb(0 0 0 / var(--glass-text-shadow-opacity, 5%));
  border: none;
}

@media (hover: hover) {
  .glass.btn-active {
    backdrop-filter: blur(var(--glass-blur, 40px));
    background-color: #0000;
    background-image: linear-gradient(135deg, rgb(255 255 255 / var(--glass-opacity, 30%))0%, #0000 100%), linear-gradient(var(--glass-reflex-degree, 100deg), rgb(255 255 255 / var(--glass-reflex-opacity, 10%))25%, #0000 25%);
    box-shadow: 0 0 0 1px rgb(255 255 255 / var(--glass-border-opacity, 10%))inset, 0 0 0 2px #0000000d;
    text-shadow: 0 1px rgb(0 0 0 / var(--glass-text-shadow-opacity, 5%));
    border: none;
  }
}

.btm-nav-xs {
  height: 2.5rem;
}

.btm-nav-xs > :where(.active) {
  border-top-width: 1px;
}

.btm-nav-xs .btm-nav-label {
  font-size: .75rem;
  line-height: 1rem;
}

.btm-nav-sm {
  height: 3rem;
}

.btm-nav-sm > :where(.active) {
  border-top-width: 2px;
}

.btm-nav-sm .btm-nav-label {
  font-size: .75rem;
  line-height: 1rem;
}

.btm-nav-md {
  height: 4rem;
}

.btm-nav-md > :where(.active) {
  border-top-width: 2px;
}

.btm-nav-md .btm-nav-label {
  font-size: .875rem;
  line-height: 1.25rem;
}

.btm-nav-lg {
  height: 5rem;
}

.btm-nav-lg > :where(.active) {
  border-top-width: 4px;
}

.btm-nav-lg .btm-nav-label {
  font-size: 1rem;
  line-height: 1.5rem;
}

.input-md {
  height: 3rem;
  padding-left: 1rem;
  padding-right: 1rem;
  font-size: .875rem;
  line-height: 2;
}

.join.join-vertical {
  flex-direction: column;
}

.join.join-vertical .join-item:first-child:not(:last-child), .join.join-vertical :first-child:not(:last-child) .join-item {
  border-start-start-radius: inherit;
  border-start-end-radius: inherit;
  border-end-end-radius: 0;
  border-end-start-radius: 0;
}

.join.join-vertical .join-item:last-child:not(:first-child), .join.join-vertical :last-child:not(:first-child) .join-item {
  border-start-start-radius: 0;
  border-start-end-radius: 0;
  border-end-end-radius: inherit;
  border-end-start-radius: inherit;
}

.join.join-horizontal {
  flex-direction: row;
}

.join.join-horizontal .join-item:first-child:not(:last-child), .join.join-horizontal :first-child:not(:last-child) .join-item {
  border-start-start-radius: inherit;
  border-start-end-radius: 0;
  border-end-end-radius: 0;
  border-end-start-radius: inherit;
}

.join.join-horizontal .join-item:last-child:not(:first-child), .join.join-horizontal :last-child:not(:first-child) .join-item {
  border-start-start-radius: 0;
  border-start-end-radius: inherit;
  border-end-end-radius: inherit;
  border-end-start-radius: 0;
}

.tabs-md :where(.tab) {
  --tab-padding: 1rem;
  height: 2rem;
  font-size: .875rem;
  line-height: 2;
}

.tabs-lg :where(.tab) {
  --tab-padding: 1.25rem;
  height: 3rem;
  font-size: 1.125rem;
  line-height: 2;
}

.tabs-sm :where(.tab) {
  --tab-padding: .75rem;
  height: 1.5rem;
  font-size: .875rem;
  line-height: .75rem;
}

.tabs-xs :where(.tab) {
  --tab-padding: .5rem;
  height: 1.25rem;
  font-size: .75rem;
  line-height: .75rem;
}

.avatar.online:before {
  content: "";
  z-index: 10;
  --tw-bg-opacity: 1;
  background-color: var(--fallback-su, oklch(var(--su) / var(--tw-bg-opacity)));
  outline-width: 2px;
  outline-style: solid;
  outline-color: var(--fallback-b1, oklch(var(--b1) / 1));
  border-radius: 9999px;
  width: 15%;
  height: 15%;
  display: block;
  position: absolute;
  top: 7%;
  right: 7%;
}

.avatar.offline:before {
  content: "";
  z-index: 10;
  --tw-bg-opacity: 1;
  background-color: var(--fallback-b3, oklch(var(--b3) / var(--tw-bg-opacity)));
  outline-width: 2px;
  outline-style: solid;
  outline-color: var(--fallback-b1, oklch(var(--b1) / 1));
  border-radius: 9999px;
  width: 15%;
  height: 15%;
  display: block;
  position: absolute;
  top: 7%;
  right: 7%;
}

.card-compact .card-body {
  padding: 1rem;
  font-size: .875rem;
  line-height: 1.25rem;
}

.card-compact .card-title {
  margin-bottom: .25rem;
}

.card-normal .card-body {
  padding: var(--padding-card, 2rem);
  font-size: 1rem;
  line-height: 1.5rem;
}

.card-normal .card-title {
  margin-bottom: .75rem;
}

.join.join-vertical > :where(:not(:first-child)) {
  margin-top: -1px;
  margin-left: 0;
  margin-right: 0;
}

.join.join-vertical > :where(:not(:first-child)).btn {
  margin-top: calc(var(--border-btn) * -1);
}

.join.join-horizontal > :where(:not(:first-child)) {
  margin-top: 0;
  margin-bottom: 0;
  margin-inline-start: -1px;
}

.join.join-horizontal > :where(:not(:first-child)).btn {
  margin-inline-start: calc(var(--border-btn) * -1);
  margin-top: 0;
}

.menu-xs :where(li:not(.menu-title) > :not(ul, details, .menu-title)), .menu-xs :where(li:not(.menu-title) > details > summary:not(.menu-title)) {
  border-radius: .25rem;
  padding: .25rem .5rem;
  font-size: .75rem;
  line-height: 1rem;
}

.menu-xs .menu-title {
  padding: .25rem .5rem;
}

.menu-sm :where(li:not(.menu-title) > :not(ul, details, .menu-title)), .menu-sm :where(li:not(.menu-title) > details > summary:not(.menu-title)) {
  border-radius: var(--rounded-btn, .5rem);
  padding: .25rem .75rem;
  font-size: .875rem;
  line-height: 1.25rem;
}

.menu-sm .menu-title {
  padding: .5rem .75rem;
}

.menu-md :where(li:not(.menu-title) > :not(ul, details, .menu-title)), .menu-md :where(li:not(.menu-title) > details > summary:not(.menu-title)) {
  border-radius: var(--rounded-btn, .5rem);
  padding: .5rem 1rem;
  font-size: .875rem;
  line-height: 1.25rem;
}

.menu-md .menu-title {
  padding: .5rem 1rem;
}

.menu-lg :where(li:not(.menu-title) > :not(ul, details, .menu-title)), .menu-lg :where(li:not(.menu-title) > details > summary:not(.menu-title)) {
  border-radius: var(--rounded-btn, .5rem);
  padding: .75rem 1.5rem;
  font-size: 1.125rem;
  line-height: 1.75rem;
}

.menu-lg .menu-title {
  padding: .75rem 1.5rem;
}

.visible {
  visibility: visible;
}

.collapse {
  visibility: collapse;
}

.static {
  position: static;
}

.fixed {
  position: fixed;
}

.absolute {
  position: absolute;
}

.relative {
  position: relative;
}

.sticky {
  position: sticky;
}

.isolate {
  isolation: isolate;
}

.col-span-2 {
  grid-column: span 2 / span 2;
}

.row-span-2 {
  grid-row: span 2 / span 2;
}

.row-span-3 {
  grid-row: span 3 / span 3;
}

.row-span-4 {
  grid-row: span 4 / span 4;
}

.row-span-5 {
  grid-row: span 5 / span 5;
}

.row-start-2 {
  grid-row-start: 2;
}

.-m-5 {
  margin: -1.25rem;
}

.m-2 {
  margin: .5rem;
}

.m-5 {
  margin: 1.25rem;
}

.mx-2 {
  margin-left: .5rem;
  margin-right: .5rem;
}

.my-3 {
  margin-top: .75rem;
  margin-bottom: .75rem;
}

.mt-2 {
  margin-top: .5rem;
}

.block {
  display: block;
}

.flex {
  display: flex;
}

.table {
  display: table;
}

.grid {
  display: grid;
}

.hidden {
  display: none;
}

.h-1 {
  height: .25rem;
}

.h-10 {
  height: 2.5rem;
}

.h-2 {
  height: .5rem;
}

.h-3 {
  height: .75rem;
}

.h-8 {
  height: 2rem;
}

.h-96 {
  height: 24rem;
}

.h-auto {
  height: auto;
}

.h-fit {
  height: fit-content;
}

.h-full {
  height: 100%;
}

.h-max {
  height: max-content;
}

.h-min {
  height: min-content;
}

.h-px {
  height: 1px;
}

.h-screen {
  height: 100vh;
}

.max-h-\\[95\\%\\] {
  max-height: 95%;
}

.max-h-full {
  max-height: 100%;
}

.w-full {
  width: 100%;
}

.flex-shrink {
  flex-shrink: 1;
}

.flex-grow {
  flex-grow: 1;
}

.border-collapse {
  border-collapse: collapse;
}

.border-spacing-2 {
  --tw-border-spacing-x: .5rem;
  --tw-border-spacing-y: .5rem;
  border-spacing: var(--tw-border-spacing-x) var(--tw-border-spacing-y);
}

.border-spacing-y-1 {
  --tw-border-spacing-y: .25rem;
  border-spacing: var(--tw-border-spacing-x) var(--tw-border-spacing-y);
}

.transform {
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.resize {
  resize: both;
}

.grid-cols-2 {
  grid-template-columns: repeat(2, minmax(0, 1fr));
}

.grid-rows-1 {
  grid-template-rows: repeat(1, minmax(0, 1fr));
}

.grid-rows-2 {
  grid-template-rows: repeat(2, minmax(0, 1fr));
}

.grid-rows-3 {
  grid-template-rows: repeat(3, minmax(0, 1fr));
}

.grid-rows-4 {
  grid-template-rows: repeat(4, minmax(0, 1fr));
}

.grid-rows-5 {
  grid-template-rows: repeat(5, minmax(0, 1fr));
}

.grid-rows-subgrid {
  grid-template-rows: subgrid;
}

.flex-col {
  flex-direction: column;
}

.flex-wrap {
  flex-wrap: wrap;
}

.items-center {
  align-items: center;
}

.justify-end {
  justify-content: flex-end;
}

.justify-center {
  justify-content: center;
}

.gap-0 {
  gap: 0;
}

.gap-10 {
  gap: 2.5rem;
}

.gap-4 {
  gap: 1rem;
}

.gap-5 {
  gap: 1.25rem;
}

.gap-6 {
  gap: 1.5rem;
}

.gap-7 {
  gap: 1.75rem;
}

.gap-8 {
  gap: 2rem;
}

.gap-x-0 {
  column-gap: 0;
}

.gap-x-2 {
  column-gap: .5rem;
}

.gap-y-1 {
  row-gap: .25rem;
}

.gap-y-2 {
  row-gap: .5rem;
}

.gap-y-4 {
  row-gap: 1rem;
}

.gap-y-9 {
  row-gap: 2.25rem;
}

.overflow-auto {
  overflow: auto;
}

.overflow-x-auto {
  overflow-x: auto;
}

.text-wrap {
  text-wrap: wrap;
}

.rounded {
  border-radius: .25rem;
}

.border {
  border-width: 1px;
}

.border-gray-300 {
  --tw-border-opacity: 1;
  border-color: rgb(209 213 219 / var(--tw-border-opacity, 1));
}

.border-slate-50 {
  --tw-border-opacity: 1;
  border-color: rgb(248 250 252 / var(--tw-border-opacity, 1));
}

.border-slate-700 {
  --tw-border-opacity: 1;
  border-color: rgb(51 65 85 / var(--tw-border-opacity, 1));
}

.bg-base-100 {
  --tw-bg-opacity: 1;
  background-color: var(--fallback-b1, oklch(var(--b1) / var(--tw-bg-opacity, 1)));
}

.bg-base-200 {
  --tw-bg-opacity: 1;
  background-color: var(--fallback-b2, oklch(var(--b2) / var(--tw-bg-opacity, 1)));
}

.bg-gray-400 {
  --tw-bg-opacity: 1;
  background-color: rgb(156 163 175 / var(--tw-bg-opacity, 1));
}

.bg-neutral {
  --tw-bg-opacity: 1;
  background-color: var(--fallback-n, oklch(var(--n) / var(--tw-bg-opacity, 1)));
}

.bg-orange-200 {
  --tw-bg-opacity: 1;
  background-color: rgb(254 215 170 / var(--tw-bg-opacity, 1));
}

.bg-slate-50 {
  --tw-bg-opacity: 1;
  background-color: rgb(248 250 252 / var(--tw-bg-opacity, 1));
}

.bg-slate-500 {
  --tw-bg-opacity: 1;
  background-color: rgb(100 116 139 / var(--tw-bg-opacity, 1));
}

.bg-white {
  --tw-bg-opacity: 1;
  background-color: rgb(255 255 255 / var(--tw-bg-opacity, 1));
}

.bg-yellow-50 {
  --tw-bg-opacity: 1;
  background-color: rgb(254 252 232 / var(--tw-bg-opacity, 1));
}

.p-10 {
  padding: 2.5rem;
}

.p-2 {
  padding: .5rem;
}

.p-4 {
  padding: 1rem;
}

.text-xl {
  font-size: 1.25rem;
  line-height: 1.75rem;
}

.font-bold {
  font-weight: 700;
}

.font-semibold {
  font-weight: 600;
}

.italic {
  font-style: italic;
}

.text-neutral-content {
  --tw-text-opacity: 1;
  color: var(--fallback-nc, oklch(var(--nc) / var(--tw-text-opacity, 1)));
}

.underline {
  text-decoration-line: underline;
}

.outline {
  outline-style: solid;
}

.blur {
  --tw-blur: blur(8px);
  filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);
}

.filter {
  filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);
}

.backdrop-filter {
  backdrop-filter: var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);
}

.transition {
  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, -webkit-backdrop-filter, backdrop-filter;
  transition-duration: .15s;
  transition-timing-function: cubic-bezier(.4, 0, .2, 1);
}

.ease-in-out {
  transition-timing-function: cubic-bezier(.4, 0, .2, 1);
}

.ease-out {
  transition-timing-function: cubic-bezier(0, 0, .2, 1);
}

@media (hover: hover) {
  .table .hover\\:hover:hovertr:hover {
    --tw-bg-opacity: 1;
    background-color: var(--fallback-b2, oklch(var(--b2) / var(--tw-bg-opacity)));
  }

  .table .hover\\:hover:hovertr:nth-child(2n):hover {
    --tw-bg-opacity: 1;
    background-color: var(--fallback-b2, oklch(var(--b2) / var(--tw-bg-opacity)));
  }

  .table-zebra .hover\\:hover:hovertr:hover {
    --tw-bg-opacity: 1;
    background-color: var(--fallback-b3, oklch(var(--b3) / var(--tw-bg-opacity)));
  }

  .table-zebra .hover\\:hover:hovertr:nth-child(2n):hover {
    --tw-bg-opacity: 1;
    background-color: var(--fallback-b3, oklch(var(--b3) / var(--tw-bg-opacity)));
  }

  .table .disabled\\:hover:disabledtr:hover {
    --tw-bg-opacity: 1;
    background-color: var(--fallback-b2, oklch(var(--b2) / var(--tw-bg-opacity)));
  }

  .table .disabled\\:hover:disabledtr:nth-child(2n):hover {
    --tw-bg-opacity: 1;
    background-color: var(--fallback-b2, oklch(var(--b2) / var(--tw-bg-opacity)));
  }

  .table-zebra .disabled\\:hover:disabledtr:hover {
    --tw-bg-opacity: 1;
    background-color: var(--fallback-b3, oklch(var(--b3) / var(--tw-bg-opacity)));
  }

  .table-zebra .disabled\\:hover:disabledtr:nth-child(2n):hover {
    --tw-bg-opacity: 1;
    background-color: var(--fallback-b3, oklch(var(--b3) / var(--tw-bg-opacity)));
  }
}
/*# sourceMappingURL=index.75a90472.css.map */
 
`;
export default TWStyles;
