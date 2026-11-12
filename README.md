# landing-page

Marketing site for TON Construction Group. Static output, deployed as files.

## Stack

- Astro 7, static output, TypeScript strict
- Tailwind CSS v4 through `@tailwindcss/vite`
- shadcn/ui theme, `radix-nova` preset, tokens in `src/styles/global.css`
- Tabler icons
- DM Sans (body), Bebas Neue (headings), Instrument Serif (display)

## Commands

```sh
pnpm install
pnpm dev      # http://localhost:4321
pnpm build    # writes dist/
pnpm preview  # serves dist/ locally
```

## Layout

```
src/
  assets/           # images, optimised at build time by astro:assets
  components/       # NavBar, StyledButton, ScrollTop, Logo
  data/projects.ts  # featured project content
  layouts/main.astro
  pages/index.astro
  scripts/          # navbar, reveal, scroll-top
  styles/global.css # Tailwind entry and theme tokens
```

## Images

Convert sources to WebP before adding them to `src/assets`:

```sh
pnpm sharp -i ~/Downloads/photo.png -o src/assets/photo.webp -f webp -q 82 resize 1600
```

## Deploy

The build is fully static. Any host works.

| Host | Build command | Output |
| --- | --- | --- |
| Cloudflare Pages | `pnpm build` | `dist` |
| Netlify | `pnpm build` | `dist` |
| Vercel | `pnpm build` | `dist` |
| GitHub Pages | `pnpm build` | `dist` |

Node 22 (see `.nvmrc` and the `engines` field). Set `site` in `astro.config.mjs` once the domain is known.

## Content

Project copy lives in `src/data/projects.ts`. Contact details and stats are in the frontmatter of `src/pages/index.astro`.
