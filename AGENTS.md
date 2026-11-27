# AI Working Rules

## 9. Local Artifacts

Design studies that live outside the app — mockups, reports, dashboards, diagrams — in `artifacts/`. Every shipped artifact is one self-contained HTML file opened by double-click (`file://`): no server, no build, no network. Called **local artifacts** to distinguish from Claude web artifacts (claude.ai-hosted pages).

| Cast | Kind | Authored |
| --- | --- | --- |
| `local artifacts html` | static | hand-written HTML, straight into `artifacts/[title]-[YYYY-MM-DD]/` |
| `local artifacts react` | react | React study under `artifacts/_lab/src/studies/`, then frozen into `artifacts/[title]-[YYYY-MM-DD]/` |

### Casting

- **Ambiguous "artifact" = ask first.** When the user requests an "artifact" without saying which kind, ask: Claude web artifact (claude.ai) or local artifact (this folder)? Never assume.
- **Bare "local artifacts" = ask which kind.** No `html` and no `react` in the cast → ask one short question, static HTML or React study? Never assume, and never pick by what the design seems to "need".
- **`local artifacts html` / `local artifacts react` = the kind is settled.** Build it that way; don't re-ask, don't switch kinds mid-build.
- **Explicit-only creation.** A local artifact is written only on a direct request — never as a side effect of other work.

### Rules — both kinds

- **Folder per artifact:** `[title]-[YYYY-MM-DD]/` — title first, kebab-case. Revisiting a topic on a later date = new folder with the new date.
- **Master template — the only root-level exception:** `artifacts/master-template.html` (web app pages), explained in `artifacts/README.md`. A new artifact does NOT start from the master — it starts on its own, with only the design tokens pasted in. Edit the master only through the archive cast below.
- **Extending an existing page or flow = only the new part.** An artifact that adds a step, view or page to something already in the master (e.g. a step 4 after an existing step 3) holds just that new part: the design tokens, the CSS it actually uses, and the new UI. It opens straight on the new part, with synthetic data standing in for the earlier steps (e.g. one finished result). Never copy existing pages, steps or sections to give it context or to make it reachable.
- **The master is fed only on archive.** While an artifact is being ideated or revised, every change stays in its own folder — the master is never touched, not even "in sync". Only the cast "archive it" / "archive to master" copies that artifact's pages into `master-template.html`. A new page or area becomes its own `<section data-name="Area">`, replacing an existing section of the same name only when the artifact is a full new version of that section. A new step or view of an existing section is merged into that section — the rest of the section stays as it is. "Apply" is a go signal (rule 0), never an archive cast.
- **Archiving also moves the folder.** The same cast then moves the artifact's whole folder into `artifacts/_archive/`, keeping its name (`artifacts/_archive/[title]-[YYYY-MM-DD]/`). Both steps are one cast; an archive is not done until the folder has moved. Archived folders are never edited again; revisiting the topic means a new folder at the root with the new date. If the target already exists in `_archive/`, stop and ask.
- **Copy master only on cast:** "copy master, focus on X" = keep the shell (`:root` tokens, all CSS, icon sprite, nav/section script) plus only the named `<section>`(s). Delete every other section outright — no hidden or commented-out leftovers. Strictly the named tabs; add neighbors only if the cast names them. "Copy master" with no tab named = ask which tabs; never copy the full master by default.
- **Main file repeats the title:** `floor-plan-2026-09-27/floor-plan.html`. Sibling files (variants, extra pages) live in the same folder.
- **Numbered files on an explicit count cast:** "5 artifacts of the top navbar" = 5 sibling files, each prefixed `01-`…`05-` (`01-top-navbar.html`). One file per artifact, no variant grid inside one file. Without a count cast, one main file named after the title.
- **Versioning: `versions/` subfolder, main file always latest.** On explicit cast only ("version this", "snapshot it"): copy the current main file → `versions/vN-YYYY-MM-DD.html` (N = next number, date = snapshot day), then apply the update to the main file. Snapshots are frozen — never edited again.
- **The shipped HTML makes zero external requests.** No CDN, no fonts over the network, no `fetch()` — it must render offline via `file://`, today and in two years.
- **Design tokens are copied, not shared:** paste the app's `:root` variables once they exist — an artifact is a snapshot of the design system, not a live consumer.
- **Synthetic data only** — no real user data, no keys.
- **Source backlink when one exists:** `<meta name="source" content="docs/...">` plus a visible footer line. Exploratory mockups may predate any spec — backlink is optional.

### Rules — html kind

- One hand-written file: inline `<style>` and classic `<script>` only. No `type="module"`, no build step, no dependencies.

### Rules — react kind

- `artifacts/_lab/` is not set up in this repo yet. On the first `local artifacts react` cast, ask before creating it.
- Source is a study folder in `_lab/src/studies/`, named exactly like the artifact folder (`[title]-[YYYY-MM-DD]`) — `freeze` derives one from the other.
- `pnpm dev` in `_lab/` to work on it; `pnpm freeze <study-folder>` emits `artifacts/<study-folder>/<title>.html`, fonts inlined.
- **Freeze before calling it done.** The study is the source, the frozen HTML is the artifact — an unfrozen study ships nothing.
- Never hand-edit a frozen file. Change the study, freeze again.
- `_lab` runs no typecheck and no lint, by design. Don't add either, and don't route it through the app's linter.
