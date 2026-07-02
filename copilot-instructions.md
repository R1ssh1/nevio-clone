# Copilot Instructions for Nevio React

## Project State
- This is a React + TypeScript + Vite clone of Nevio Steel India.
- The app already has shared layout, routed pages, homepage sections, SEO metadata, and a placeholder contact form.
- The current work is focused on finalizing assets and polish.

## Working Rules
- Keep changes small and focused on the current step.
- Preserve the existing React/Vite structure and naming style.
- Do not revert user changes or unrelated edits.
- Use the existing route structure and shared components instead of duplicating layout code.
- Use placeholder contact data unless the user provides final business details.
- Prefer readable, maintainable React code over clever abstractions.
- Avoid gradient-heavy designs. Keep the UI grounded, simple, and human-made rather than flashy or AI-generated.
-Refer to the original Nevio Steel India website for design and content guidance, but do not copy it verbatim.
## Asset Rules
- Use webp images instead of jpeg for the clone.
- Assume images will be compressed before use.
- Keep image paths and image naming ready for webp replacements.
- Regenerate the webp assets with `npm run assets:webp` whenever the source images change.
- Do not introduce new heavy dependencies for simple UI work.

## SEO Rules
- Preserve and extend route-level SEO metadata.
- Use unique titles, descriptions, and breadcrumbs for important pages.
- Keep heading structure clear and semantic.
- Prefer internal links that reinforce the site structure.

## Validation Rules
- After each meaningful edit, run a focused build check.
- If a change touches routing, SEO, or contact form behavior, verify the affected route in the browser when possible.
- Keep the app buildable with `npm run build`.
- Update this instructions file whenever a new rule or clarification arises during development.

## Current Page Priorities
1. Finalize assets and polish.
2. Replace placeholder contact details when the user is ready.
3. Continue refining page content from the saved HTML export.
