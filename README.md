# landing-page

Placeholder static landing page. Astro with Tailwind CSS v4 and shadcn/ui.

## Stack

- Astro 7, static output
- Tailwind CSS v4 through `@tailwindcss/vite`
- shadcn/ui (`radix-nova` preset), React islands only where needed
- Type: DM Sans (body), Bebas Neue (headings), Instrument Serif (display), all self-hosted via Fontsource

## Commands

```sh
pnpm install
pnpm dev      # localhost:4321
pnpm build    # static output in dist/
pnpm preview
```

## Layout

```
src/
  layouts/main.astro     # html shell, pulls in global.css
  pages/index.astro      # the placeholder hero
  components/ui/         # shadcn components
  lib/utils.ts           # cn helper
  styles/global.css      # Tailwind entry + shadcn theme tokens
components.json          # shadcn config, points at src/styles/global.css
```

## Adding components

```sh
pnpm dlx shadcn@latest add card
```
