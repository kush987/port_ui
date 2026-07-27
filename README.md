# Backend Engineer Portfolio

Single-page portfolio built with **Next.js**, **TypeScript**, **Tailwind CSS**, and **[shadcn/ui](https://ui.shadcn.com/docs/installation)**. Content lives in one typed file so the UI stays easy to read and change.

## Quick start

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
pnpm build   # production build
pnpm lint    # eslint
```

## Edit your content

Update everything in:

```
src/content/portfolio.ts
```

Types and enums live in `src/content/types.ts`. Sections only read from that content module — do not hardcode copy in UI components.

| Field | What it drives |
| --- | --- |
| `profile` | Hero, about, contact, footer |
| `nav` | Sticky navigation anchors |
| `experience` | Experience accordion |
| `systems` | Systems / projects grid |
| `skills` | Skills tabs |
| `contact` | Contact CTA copy |

Replace placeholder links (`resumeUrl`, socials, system links) with your own. Drop a PDF at `public/resume.pdf` if you keep the default resume path.

## Project structure

```
src/
  app/                  # App Router layout + page
  components/
    ui/                 # shadcn primitives (CLI / MCP owned)
    shared/             # SiteHeader, Section, ThemeToggle, SiteFooter
    sections/           # Hero, About, Experience, Systems, Skills, Contact
  content/              # Typed portfolio data
  lib/utils.ts          # cn() helper
.cursor/mcp.json        # shadcn MCP server for Cursor
components.json         # shadcn project config
```

To add a new section:

1. Extend `PortfolioContent` in `src/content/types.ts` and data in `portfolio.ts`
2. Create `src/components/sections/your-section.tsx`
3. Mount it from `src/app/page.tsx` and add a `nav` item if needed

## shadcn/ui + MCP

This repo is configured for the [shadcn MCP server](https://ui.shadcn.com/docs/mcp).

Config: [`.cursor/mcp.json`](.cursor/mcp.json)

Uses absolute paths to your nvm Node + the local `shadcn` package (avoids Cursor AppImage `npx` ENOENT failures).

1. Open **Cursor Settings → MCP**
2. Disable then re-enable the **shadcn** server (or reload the window)
3. Confirm a green dot next to **shadcn**
4. Ask the agent things like:
   - “Show available components in the shadcn registry”
   - “Add the dialog component to my project”
   - “Add a chart using shadcn chart”

Or use the CLI:

```bash
pnpm dlx shadcn@latest add dialog
pnpm dlx shadcn@latest add chart
```

## Design notes

- Dark-first, terminal/docs palette (cool charcoal + muted emerald)
- IBM Plex Sans / Mono for readable engineer-facing typography
- Sticky nav with mobile sheet menu
- Light/dark toggle persists in `localStorage`

## License

Private / personal use unless you add a license.
