# Stop It Now! Australia Rebrand Implementation Roadmap

## Purpose

Use the supplied style-guide mock-up as a controlled visual and interaction reference for evolving the existing application into a cohesive Stop It Now! Australia experience. This roadmap deliberately separates visual alignment work into small, reviewable tasks so that existing support content, routes, and safety-critical behaviour remain stable.

## Scope

- Align homepage, header, navigation, cards, buttons, footer, and shared UI with the approved brand direction.
- Improve responsive layout, readability, interaction states, accessibility, and visual consistency across existing routes.
- Preserve the current application architecture wherever a shared style or component change is sufficient.
- Validate each completed item with targeted manual checks and production builds before starting the next item.

## Non-goals and explicit exclusions

- No email, domain, CNAME, package-name, or repository-directory rename without separate approval.
- No substantive legal, privacy, liability, copyright, ownership, or warranty rewrite.
- No unapproved illustrations, stock imagery, or generated imagery.
- No analytics, measurement-ID, tracking, or form-integration changes.
- No production push, deploy, merge to `main`, or release activity.
- No route, content, or module removal as part of visual alignment unless separately approved.

## Branch and release safety

- All work occurs on `rebrand/mockup-alignment`.
- Do not push, deploy, merge to `main`, or alter production configuration until explicit approval is provided.
- Keep the production CNAME/domain unchanged.
- Before every phase, inspect the current working tree and preserve unrelated changes.
- Each phase ends with a review checkpoint; do not combine unreviewed phases into one broad change.

## Current-state summary and preserved brand decisions

The following decisions are already complete and must be preserved during this roadmap:

- Official Stop It Now! Australia logo asset and placement.
- General Sans for body text and Rubik for display/headline use.
- Official semantic palette, including brand navy, blue, cyan, teal, yellow, and pale surfaces.
- Exact primary action gradient: `#00A88E → #00ABBD → #0074BE` with white action text.
- Solid brand-navy footer (`#153A63`).
- Pale-blue accordion summaries (`--surface-info`, `#DFEBF4`) with navy text and visible controls.
- Stop It Now! Australia naming in active UI, policy/disclaimer copy, and metadata.

The current implementation is a React/Vite application with Bootstrap, MUI, shared SCSS tokens, a `muiTheme.js` theme, route-based pages, and content-heavy module/quiz flows. The style-guide mock-up provides direction for hierarchy, spacing, navigation, pastel pathways, and a more concise homepage; it is not an instruction to discard current content or invent unsupported features.

## Guiding principles

1. Make one visible change-set at a time and verify it before continuing.
2. Prefer semantic tokens and shared component/theme overrides over repeated page-level styles.
3. Preserve support, safety, privacy, and legal content; simplify presentation, not meaning.
4. Treat desktop and mobile as separate acceptance targets.
5. Keep interactions predictable: hover, focus, active, disabled, keyboard, and Quick Exit behaviour must remain clear.
6. Use real approved assets only; placeholders in the guide are not asset approval.
7. Favour reversible, low-risk changes and record any exception in the decision log.

## Delivery sequence and dependency map

```text
0 Baseline audit
  ├─ 1 Homepage hierarchy ─┬─ 3 Homepage hero ─┬─ 4 Module discovery
  │                        │                   └─ 6 Content readability
  └─ 2 Header/navigation ──┼─ 5 Button states
                           ├─ 7 Footer architecture
                           └─ 8 Imagery decision gate
                                      │
                                      ▼
                       9 Cross-site consistency
                                      │
                                      ▼
                         10 Accessibility QA
                                      │
                                      ▼
                     11 Performance/release readiness
```

Do not begin phases 9–11 until all approved visual phases are complete. Phase 8 may block only imagery-dependent work; it must not block text, layout, accessibility, or component consistency work.

## Phase 0 — Baseline screenshots, audit, and regression checklist

**Objective:** establish a visual, functional, and accessibility baseline before further changes.

**Subtasks:**

- Capture desktop and mobile screenshots of `/`, `/privacy`, module discovery pages, a representative module, an accordion page, and both quiz flows.
- Record current header, Quick Exit, primary/secondary button, footer, form, chart, accordion, and card states.
- Create a route-level regression checklist covering navigation, Help/helpline, Quick Exit, printing, quiz progression, and external links.
- Note existing build warnings separately from new warnings.

**Likely files/components:** no source changes required; inspect `src/components/AppRoutes.jsx`, `Header`, `Menu`, `Help`, `Footer`, representative pages, `src/scss/_custom.scss`, and `src/muiTheme.js`.

**Dependencies:** none.

**Risks:** missing a route or responsive state creates a weak comparison point.

**Acceptance criteria:** baseline artifacts identify viewport sizes, route, interaction state, and date; the regression checklist is ready before implementation begins.

**Validation:** manually navigate all recorded routes at desktop and mobile widths; run `pnpm build` and capture its warning baseline.

## Phase 1 — Homepage hierarchy and copy simplification

**Objective:** make the homepage easier to scan without changing support meaning or legal content.

**Subtasks:**

- Remove the redundant full brand prefix from the homepage heading while retaining the approved Stop It Now! Australia identity elsewhere in the header/logo and metadata.
- Reorder homepage information into a clear problem statement, immediate support route, primary pathway, and supporting legal/privacy material.
- Tighten only duplicated presentation copy; preserve sensitive language, safety messaging, helpline information, disclaimer text, and privacy content.
- Verify heading levels remain sequential and descriptive.

**Likely files/components:** `src/pages/Home.jsx`, `src/data/page-data/IntroductionData.jsx`, `Heading`, `MainContent`, and shared typography SCSS.

**Dependencies:** Phase 0 baseline; coordinate with Phase 3 so hierarchy supports the hero rather than being reworked twice.

**Risks:** accidental legal-copy changes, removal of needed support context, or duplicate messages moved out of their accessible reading order.

**Acceptance criteria:** homepage heading does not repeat the brand unnecessarily; important support and legal content remains available and semantically ordered; no route or link changes.

**Validation:** desktop/mobile visual comparison, keyboard heading navigation, route/link smoke test, `pnpm build`, and `git diff --check`.

## Phase 2 — Responsive header, navigation, and Quick Exit

**Objective:** align navigation with the guide while keeping safety controls prominent and reliable.

**Subtasks:**

- Audit header/logo sizing, navigation grouping, menu trigger, breakpoint behaviour, and current focus order.
- Implement approved desktop navigation spacing/alignment and a mobile menu pattern with clear open/close states.
- Keep Quick Exit visually distinct, keyboard reachable, and independent of normal primary-action styling.
- Confirm the Help/helpline affordance remains visible and its yellow exception is not overridden by shared button styles.
- Ensure focus is retained or moved predictably when mobile navigation opens/closes.

**Likely files/components:** `src/components/Header.jsx`, `Menu.jsx`, `Help.jsx`, `AppRoutes.jsx`, `src/scss/_custom.scss`, logo assets, and responsive utility styles.

**Dependencies:** Phase 0; use Phase 1 hierarchy decisions where header-to-home transitions are affected.

**Risks:** hiding Quick Exit at a breakpoint, focus traps, navigation overlap, or reintroducing gradients onto exception controls.

**Acceptance criteria:**

- Desktop: logo, navigation, Help, and Quick Exit fit without wrapping at supported widths.
- Mobile: menu is operable by touch and keyboard, closes predictably, and does not cover essential safety controls.
- Quick Exit keeps its approved navy treatment; helpline keeps its yellow treatment.

**Validation:** manual checks at 320 px, 375 px, 768 px, 1024 px, and wide desktop; keyboard Tab/Shift+Tab/Escape; browser resize; `pnpm build`; `git diff --check`.

## Phase 3 — Style-guide-inspired homepage hero

**Objective:** introduce a concise, reassuring homepage hero using the approved gradient surface, helpline proposition, and clear primary call to action.

**Subtasks:**

- Define hero structure, content order, and responsive spacing before implementation.
- Apply the approved gradient only to the intended hero surface; do not alter the exact action-button gradient.
- Present a concise helpline/support proposition with an unambiguous CTA and visible secondary safety/support route where approved.
- Ensure heading, body copy, and CTA contrast are assessed in their actual rendered locations.
- Keep hero content text-based unless Phase 8 supplies approved imagery.

**Likely files/components:** `Home.jsx`, `IntroductionData.jsx`, `Heading`, `MainContent`, `Help`, `Button`, `src/scss/_custom.scss`.

**Dependencies:** Phase 1 content hierarchy and Phase 2 header behavior.

**Risks:** noisy visual hierarchy, low contrast, oversized hero on mobile, or duplicating helpline calls without a clear priority.

**Acceptance criteria:** hero communicates purpose and immediate next step within one viewport on desktop; mobile wrapping remains intentional; CTA leads to the existing approved destination; no content or route is lost.

**Validation:** side-by-side mock-up comparison, manual mobile/desktop screenshots, contrast review, keyboard focus check, `pnpm build`, and `git diff --check`.

## Phase 4 — Module discovery redesign

**Objective:** make discovery pathways feel like the guide’s pastel cards/pathways while preserving all existing routes and module content.

**Subtasks:**

- Inventory module discovery cards, folder titles, links, and route targets.
- Introduce a shared pathway/card treatment using existing pale-blue, pale-mint, pale-yellow, and warm-off-white surfaces where appropriate.
- Define a limited visual hierarchy for category, module title, short description, and affordance.
- Preserve `Link` targets, card keyboard behavior, and logical reading order.
- Test long titles and dense grids at narrow widths.

**Likely files/components:** `MiniCard`, `ModuleFolder`, module-folder title data, discovery pages such as `UnderstandingYourOnlineBehaviour.jsx`, `WellbeingAndSelfCare.jsx`, `MovingForward.jsx`, and shared SCSS.

**Dependencies:** Phase 1/3 visual hierarchy; Phase 5 button/card interaction rules.

**Risks:** accidental route changes, colour-only distinction, uneven card heights, and card links nested with other interactive elements.

**Acceptance criteria:** every current module remains discoverable and routes identically; cards are readable, keyboard operable, responsive, and use approved semantic surfaces.

**Validation:** click every card in each discovery area, keyboard-test card links, test 1/2/3/4-column breakpoints, `pnpm build`, and `git diff --check`.

## Phase 5 — Button geometry and interaction states

**Objective:** make controls consistent in geometry and state feedback without changing approved exceptions.

**Subtasks:**

- Inventory shared `Button`, print, continue, next/previous, submit, outline, Help, and Quick Exit selectors.
- Define shared minimum target size, radius, padding, display font, disabled appearance, and active/focus treatment.
- Preserve the exact default action gradient and its reversed hover/active gradient.
- Preserve Quick Exit navy and yellow helpline styling, including explicit background-image resets where needed.
- Test button labels that wrap and disabled state affordance.

**Decision gate — white text on the bright action gradient:** the current approved `#00A88E → #00ABBD → #0074BE` action gradient with white text has a known WCAG contrast risk over brighter stops. Before broadening this treatment, obtain explicit stakeholder acceptance of the tradeoff or approve a remediation such as darker text, a darker gradient, a darker overlay, or a different accessible primary-action surface. Do not silently alter the approved gradient.

**Likely files/components:** `src/components/Button.jsx`, print/navigation controls, `src/scss/_custom.scss`, MUI button theme overrides if applicable.

**Dependencies:** Phase 2 for header exceptions; Phase 3 for hero CTA use.

**Risks:** regressions to Help/Quick Exit, poor disabled contrast, inconsistent native/MUI controls, or unapproved accessibility compromise.

**Acceptance criteria:** common buttons share geometry and visible state feedback; exceptions remain visually distinct; decision-gate outcome is documented before any contrast-sensitive expansion.

**Validation:** inspect normal/hover/active/focus/disabled states, keyboard activation, touch target measurement, contrast assessment, `pnpm build`, and `git diff --check`.

## Phase 6 — Content layout and readability

**Objective:** establish comfortable reading measure, spacing rhythm, and responsive typography for long-form support content.

**Subtasks:**

- Set a consistent max line length for prose and align content containers across pages/modules.
- Define responsive type scale and heading margins using General Sans/Rubik decisions already made.
- Normalize vertical rhythm around headings, paragraphs, lists, callouts, accordions, and print controls.
- Avoid shrinking body text below readable mobile sizes; prevent horizontal overflow.
- Confirm print views retain legibility where existing print styles apply.

**Likely files/components:** `MainContent`, `Heading`, `src/scss/_custom.scss`, `src/scss/styles.scss`, `src/print`, representative content/module pages.

**Dependencies:** Phase 1 hierarchy and Phase 4 card layout.

**Risks:** changing global spacing may disturb quizzes, diagrams, charts, or legacy module content.

**Acceptance criteria:** prose stays within the agreed measure, content has predictable spacing, headings do not orphan awkwardly where practical, and no supported viewport has horizontal scrolling.

**Validation:** inspect representative short/long pages at mobile/tablet/desktop, browser zoom at 200%, print preview for a representative module, `pnpm build`, and `git diff --check`.

## Phase 7 — Footer information architecture

**Objective:** adapt the footer to the guide’s structured brand/navigation layout while retaining existing acknowledgements and legal information.

**Subtasks:**

- Propose footer columns for logo/identity, key navigation, support/legal links, and institutional acknowledgement.
- Retain the Traditional Owners acknowledgement, flags, UniSC logo, privacy/disclaimer access, copyright, and website attribution unless separately approved.
- Keep the completed solid navy surface and white text; verify linked text and focus states remain visible.
- Define responsive stacking order so acknowledgement and safety/legal routes remain discoverable on mobile.

**Likely files/components:** `src/components/Footer.jsx`, `Footer` SCSS in `src/scss/_custom.scss`, shared navigation data if introduced.

**Dependencies:** Phase 2 navigation grouping and Phase 6 spacing/type rules.

**Risks:** dropping legal content, poor white-text contrast, broken links, or overly dense mobile footer.

**Acceptance criteria:** all existing footer information remains present; desktop columns are clear; mobile order is readable; footer remains solid `#153A63` with white text.

**Validation:** link smoke test, keyboard/focus test, desktop/mobile screenshots, `pnpm build`, and `git diff --check`.

## Phase 8 — Illustration and imagery strategy gate

**Objective:** decide whether, and how, imagery should be used without treating style-guide placeholders as approved assets.

**Subtasks:**

- Catalogue existing approved logo, flags, UniSC assets, instructional diagrams, and module images.
- Identify guide placeholder locations and classify them as decorative, explanatory, or content-critical.
- Request approved illustration assets, usage rights, source files, alt text, and responsive crop guidance before adding any new imagery.
- If no assets are approved, use robust text-first, colour, icon, and layout treatments instead.

**Likely files/components:** `src/images`, `src/assets`, page-specific image imports, logo/hero/card components.

**Dependencies:** none for the decision; blocks only actual new-image implementation.

**Risks:** unlicensed imagery, misleading support imagery, inaccessible decorative content, or placeholder leakage into production.

**Acceptance criteria:** a written go/no-go decision exists; only approved assets are used; each content image has purposeful alt text or is explicitly decorative.

**Validation:** asset provenance review, image loading check, responsive crop check, alt-text review, and `pnpm build` if assets are added.

## Phase 9 — Cross-site component consistency

**Objective:** apply the approved system consistently without a broad architecture rewrite.

**Subtasks:**

- Audit shared and framework components: accordions, cards, forms, quiz controls, module navigation, charts, alerts, and modal patterns.
- Keep accordion summaries pale blue with navy text, visible expand controls, and consistent hover/expanded/focus states.
- Align MUI theme overrides and Bootstrap/SCSS styles where they affect the same visual role.
- Replace repeated presentational exceptions only when a shared token or component override is demonstrably safer.
- Confirm charts retain meaningful non-colour cues and readable labels.

**Likely files/components:** `src/muiTheme.js`, `src/scss/_custom.scss`, `Accordion` usage, `MiniCard`, form/quiz components, `ModuleNav`, chart components, and shared context/data.

**Dependencies:** approved outcomes from Phases 4–7 and the Phase 5 decision gate.

**Risks:** framework style precedence conflicts, regression in quiz flows, or accidental change to content-specific visual semantics.

**Acceptance criteria:** equivalent controls look and behave consistently across routes; existing accordion, form, quiz, navigation, and chart functions still work.

**Validation:** representative component matrix across routes, keyboard and screen-reader spot checks, chart/data smoke test, `pnpm build`, and `git diff --check`.

## Phase 10 — Accessibility QA

**Objective:** verify that the completed alignment work remains usable without a mouse, at high zoom, and across responsive layouts.

**Subtasks:**

- Test full keyboard order, visible focus, menu behavior, accordions, forms, quizzes, modal interactions, and Quick Exit.
- Review semantic heading hierarchy, landmark usage, labels, error messaging, button names, image alt text, and link purpose.
- Measure text/non-text contrast in actual states; revisit the Phase 5 white-on-gradient decision if requirements are not met.
- Test 200% zoom, narrow viewport reflow, reduced-motion behaviour where animations exist, and browser text scaling.
- Confirm Quick Exit can be discovered and activated quickly at all supported widths.

**Likely files/components:** all changed components; `src/scss/_custom.scss`; `muiTheme.js`; header/menu/footer; forms/quizzes/accordions.

**Dependencies:** all approved visual phases and Phase 5 decision outcome.

**Risks:** style work can conceal focus, introduce colour-only cues, or break responsive keyboard access.

**Acceptance criteria:** no critical keyboard trap; focus is visible; key support/safety controls work at mobile and desktop; known contrast tradeoffs are accepted or remediated explicitly.

**Validation:** manual keyboard audit, browser accessibility tree/inspection, contrast tool, 200% zoom/reflow check, screen-reader spot check, and documented findings.

## Phase 11 — Performance, build QA, and release readiness

**Objective:** prepare an approved, reviewable change set without deploying it.

**Subtasks:**

- Run production build and compare new warnings/assets against the Phase 0 baseline.
- Verify no unintended changes to CNAME, email, analytics, package identity, legal text, routes, or existing approved logo/font assets.
- Check responsive screenshots and regression checklist completion.
- Review diff for token duplication, dead styles, large assets, accidental generated output, and unrelated file changes.
- Prepare a concise review summary with decisions, test evidence, remaining risks, and explicit approval request.

**Likely files/components:** all changed files; package/build config only for inspection unless separately approved.

**Dependencies:** Phases 0–10 completed or intentionally deferred with documented approval.

**Risks:** treating a passing build as sufficient QA, hidden regression outside the homepage, or accidental production action.

**Acceptance criteria:** build and static checks pass; manual regression checklist is complete; reviewer signs off on visual, accessibility, content, and release boundaries; no deployment occurs.

**Validation:** `pnpm build`, `git diff --check`, project lint if baseline permits, route smoke test, screenshot comparison, and final review checklist.

## Prioritized backlog

### Must

- Phase 0 baseline and regression checklist.
- Homepage hierarchy, responsive header/navigation, Quick Exit, and primary support CTA.
- Consistent button states with a documented gradient-contrast decision.
- Module discovery, responsive readability, and footer information retention.
- Accessibility and build/release-readiness QA.

### Should

- Centralize recurring component styles in semantic SCSS/MUI theme overrides.
- Establish a shared content-width/type/spacing system.
- Improve chart/form/quiz visual consistency after core navigation and content layouts are approved.
- Add approved footer navigation columns.

### Could

- Add approved illustrations after the Phase 8 asset decision.
- Expand visual refinements to less-frequent module layouts after regression coverage is strong.
- Document reusable component conventions for future content contributors.

## Review checkpoints and rollback approach

- Review after every numbered phase; pause if acceptance criteria are not met.
- Keep each phase in a separate, focused diff so it can be reverted without undoing prior approved work.
- If a shared token/component causes a regression, restore the last approved selector/theme value and isolate the affected route before retrying.
- Do not use destructive history operations for rollback; use a targeted, reviewed corrective change.
- Escalate any change to domains, email, legal text, analytics, imagery rights, or the action-gradient accessibility tradeoff for explicit approval.

## Definition of done

The rebrand alignment is done only when:

- Approved phases meet their acceptance criteria and are review-signed-off.
- The official logo, fonts, palette, exact action gradient, solid navy footer, pale-blue accordions, and Stop It Now! Australia naming remain intact.
- All existing routes, support pathways, Quick Exit behavior, forms, quizzes, and legal/privacy access work as before.
- Responsive desktop/mobile checks, keyboard/focus checks, contrast decisions, zoom/reflow checks, and build checks are documented.
- No excluded identifiers or production configuration changed without separate approval.
- No push, deploy, or merge to `main` has occurred without explicit approval.

## Decision log

| Decision | Status | Required follow-up |
| --- | --- | --- |
| Official logo, Rubik, General Sans, official palette, solid navy footer, pale-blue accordion summaries, and Stop It Now! Australia naming are approved/current. | Preserve | Do not replace or regress these choices during alignment work. |
| Exact action gradient is `#00A88E → #00ABBD → #0074BE` with white text. | Approved visual direction; accessibility concern open | White text may not meet WCAG contrast over bright teal/cyan stops. Obtain explicit stakeholder acceptance of the tradeoff or approve remediation before expanding this treatment. |
| Guide imagery appears to include placeholders rather than approved deliverables. | Blocked pending assets | Do not create or source new imagery until rights, assets, placement, and alt-text guidance are approved. |
| Production CNAME/domain and external identifiers are outside this roadmap. | Excluded | Leave `gethelpaustralia.netlify.app`, email, package identity, analytics, and repository paths unchanged unless separately authorized. |
