# landing-page

Placeholder static landing page. Astro with Tailwind CSS v4 and shadcn/ui.

## Stack

- Astro 7, static output
- Tailwind CSS v4 through `@tailwindcss/vite`
- shadcn/ui (`radix-nova` preset), React islands only where needed
- Motion for animation, vanilla API in a plain script, no React hydration
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
  scripts/reveal.ts      # scroll reveal for [data-reveal] elements
components.json          # shadcn config, points at src/styles/global.css
```

## Adding components

```sh
pnpm dlx shadcn@latest add card
```

## Animating

Add `data-reveal` to any element to fade and lift it in on scroll. `data-reveal-delay` in seconds staggers it.

```html
<h2 data-reveal data-reveal-delay="0.1">Section title</h2>
```

The hidden state is behind a `.js` class added before first paint, so content stays visible when JavaScript never runs, and `prefers-reduced-motion` skips the whole thing.
