# Binary assets

The real brand assets are installed here and wired into the components:

- `bg-cream.jpg` — full-page fixed background (from `배경 톤업.jpg`)
- `menu-bg.png` — right menu drawer background (pink halftone, from `back.png`)
- `indexform-wordmark.png` — INDEXForm logotype; shown red on Home, inverted to
  white on Contact and in the footer (cropped from the master `indexform.png`)
- `indexform-emblem.png` — oval "IF" mark; inverted to white in the top bar and
  menu drawer (cropped from the master `indexform.png`)
- `fonts/Eulyoo1945-Regular.otf`, `fonts/Eulyoo1945-SemiBold.otf` — IF-Eulyoo
  Korean webfont (을유1945, 상업적 사용 가능)

The wordmark/emblem are the red PNGs; components apply `filter: brightness(0)
invert(1)` to render them white on red surfaces (see `app/ui.tsx`). To replace
any asset, overwrite the file here — no code change needed (keep the same
filename and roughly the same aspect ratio).
