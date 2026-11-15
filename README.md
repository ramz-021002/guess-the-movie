# Guess the Movie

Read one line of dialogue and name the movie or show it comes from.

It's a party game for playing with friends. No typing: read the line out loud, everyone shouts a guess, press **Hint** to see the moment (what's happening in the scene) and **Reveal** to show the answer, then **Next line**. Pick Mixed, Easy, Medium or Hard, and Movies, TV shows or Both. Keyboard: `H` hint, `R` reveal, `N` next line. There's a light/dark toggle in the header.

Unofficial fan project. Not affiliated with Marvel, Disney or Sony. Never monetized.

## Run it

No build step. Either:

- double-click `index.html`, or
- serve the folder: `python3 -m http.server 8000`, then open http://localhost:8000

## Deploy

It's a static site. Push this folder to GitHub Pages, Netlify or Vercel as-is.

## Files

```
index.html        layout, styles and game logic
data/catalog.js   window.CATALOG: every guessable title
data/scenes.js    window.SCENES: the puzzles
```

## Adding lines

Add an entry to `data/scenes.js`:

```js
{ id: "im-press", title: "iron-man", difficulty: "easy",
  quote: "I am Iron Man.", speaker: "Tony Stark",
  context: "A press conference where the hero throws away the cover story he was handed.", still: null },
```

- `title` must be a catalog `id`. Scenes with an unknown title are dropped on load, with a console warning.
- `id` must be unique. Duplicates are dropped with a warning.
- For two speakers, separate their lines with ` / ` (they render on separate lines).
- `context` is the only hint, so make it helpful, and never name the title.
- Check the quote against the actual scene. A misquote costs fans' trust fast.

Difficulty guide: easy = quoted in memes; medium = fans who've seen it once will get it; hard = deep cuts, side characters, TV shows.

## Adding titles

Add to `data/catalog.js`:

```js
{ id: "avengers-doomsday", title: "Avengers: Doomsday", year: 2026, type: "Movie", group: "MCU Phase 6" },
```

`type` is `Movie`, `Series` or `Special`. `group` is `MCU Phase 1` to `MCU Phase 6`, `Marvel Television`, `Sony Spider-Man`, `Fox X-Men` or `Other Marvel`. `type` decides whether a line shows under Movies or TV shows.

## Saved data (localStorage)

| Key | Holds |
|---|---|
| `ss-endless-state` | `{ n, sceneId, hints, status, label, diff, format }` (`status` is `playing` or `revealed`) |
| `ss-endless-count` | puzzle counter |
| `ss-recent` | recently seen scene ids |
| `ss-diff` | chosen difficulty |
| `ss-format` | `both`, `movies` or `tv` |
| `ss-seen-help` | first-visit flag |
| `ss-theme` | `light` or `dark`, once the player picks one (otherwise the system setting is used) |

There's no score, so the game keeps no stats. Every read and write is wrapped in try/catch, so the game still plays (without saving) when storage is blocked.

Players who tried the old Daily mode may still have `ss-daily-state`, `ss-mode` and `ss-stats-daily` saved. The game ignores them.

To reset everything during testing, run `localStorage.clear()` in the browser console.

## Behavior notes

- Next line never repeats the line just played, and avoids roughly the last 70% of lines seen at the current difficulty.
- Changing difficulty or format applies from the next line. The one exception: if the hint hasn't been taken yet, the current line is swapped right away.
- **Movies** means catalog type `Movie`; **TV shows** means `Series` and `Special`.
- If a format + difficulty combo has no other line left (e.g. TV shows + Easy has only one right now), the next line keeps the format, mixes difficulties, and a toast says so.
