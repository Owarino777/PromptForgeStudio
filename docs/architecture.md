# PromptForge Studio Architecture

## Structure

- `src/app`: application orchestration, shell and navigation constants.
- `src/layout`: frame, navigation, mobile menu and chapter navigation.
- `src/experience`: loader, sticky Forge stage and scroll chapters.
- `src/worlds`: visual world gallery, cards and CSS-only scene markup.
- `src/studio`: deterministic frontend Studio generator.
- `src/domain`: TypeScript models, blueprint generation and prompt templates.
- `src/data`: product data for chapters, offer and visual worlds.
- `src/hooks`: reduced motion, pointer variables, scroll progress and clipboard helpers.
- `src/components/ui`: reusable beveled controls and status UI.
- `src/styles`: tokens, animations and reusable utilities.

## Animation Architecture

The experience uses CSS transforms, opacity, filters and CSS variables. Pointer movement writes CSS variables through `usePointerPosition` without React state updates per animation frame. Scroll progress is written to a CSS variable through a requestAnimationFrame-throttled hook.

## Dependency Decisions

No new dependency was added. Native React, CSS sticky positioning, CSS animations and small hooks are sufficient for this pass. Motion, GSAP, Lenis or 3D libraries are deferred until the native version proves insufficient.

## Future 3D Plan

If true 3D becomes necessary, isolate it behind a `ForgeStage3D` component and feature flag. Keep the current CSS stage as the default fallback for mobile, reduced motion and low-power devices.
