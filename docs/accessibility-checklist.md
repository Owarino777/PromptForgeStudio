# Accessibility Checklist

- Semantic `main`, `section`, `nav`, `aside`, `footer` and form markup.
- One logical `h1` in the intro chapter.
- Heading hierarchy proceeds through section headings.
- Navigation links are real anchors.
- Buttons have visible text or accessible labels.
- Focus states use visible accent outlines.
- Loader uses `role="status"` and does not trap focus.
- Studio form controls have labels.
- Generated content is rendered as React data, not injected HTML.
- Copy feedback uses polite accessible labeling.
- Motion is reduced via `prefers-reduced-motion`.
- Check contrast after every palette change.
