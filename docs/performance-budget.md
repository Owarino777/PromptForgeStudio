# Performance Budget

## Constraints

- No external images for visual world cards.
- No canvas or Three.js in this pass.
- No React state updates per animation frame.
- Keep animation to transform, opacity, filter and CSS variables.
- Clean up every event listener, timeout, interval and RAF loop.
- Respect `prefers-reduced-motion`.

## Bundle

The app remains on React, TypeScript, Vite, Tailwind CSS and lucide-react only. No scroll or animation library was added.

## Mobile Risk

Sticky visual stages and large scenes can cost GPU time on mobile. Mobile CSS reduces visual density by hiding preview/export panels and lowering stage prominence.

## Verification

Run:

```bash
npm run build
npm run lint
```

Manually check desktop and mobile for horizontal overflow, stuck loaders, scroll smoothness, form usability and reduced-motion behavior.
