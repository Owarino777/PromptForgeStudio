# PromptForge Design System

## Visual Language

PromptForge uses dark technical luxury: black stage, icy off-blue atmospheric light, acid yellow for generated or active states, mono labels, oversized headings, beveled borders and map/grid markers.

## Tokens

Core tokens live in `src/styles/tokens.css`:

- background: near-black `#030303`
- text: white and muted white alpha
- accent: acid yellow `#f5ff6b`
- ice: `#bae5ff`
- borders: thin translucent white and accent variants
- motion: fast and medium cubic-bezier timings

## Component Rules

- Prefer beveled controls and framed technical panels.
- Avoid default rounded SaaS cards.
- Use acid yellow only for active, generated or important conversion states.
- Keep visual world cards unique through CSS scenes, not fake screenshots.
- Typography should be oversized but readable; no negative letter spacing.

## Anti-template Rules

Do not use plain centered hero sections, generic feature cards, stock dashboards, random blobs, cheap glassmorphism or decorative-only animation.
