# TECHSTACK.md
## Project: The Cyber-Terminal
## Deployment Target: Cloudflare Pages
## Architecture: Multi-Page Static + Edge Runtime Compatible

---

# 1. CORE STACK

## 1.1 Framework

Framework: Next.js (App Router)

Reasons:
- Native multi-page architecture
- File-based routing
- Static + dynamic rendering control
- Optimized for edge deployment
- Strong TypeScript support

Routing must use App Router structure, not Pages Router.

---

## 1.2 Language

TypeScript (strict mode enabled)

Rules:
- No `any`
- Strict type checking
- Typed props for all components
- Explicit return types for utilities

---

## 1.3 Styling

Primary Styling Method: Tailwind CSS

Requirements:
- Tailwind configured with custom theme tokens
- All design tokens defined in `tailwind.config.ts`
- Colors mapped to CSS variables
- No inline styles except dynamic animation cases
- No component libraries

Do NOT use:
- Bootstrap
- Material UI
- Chakra
- Shadcn
- Pre-built UI kits

All components must be custom-built.

---

## 1.4 Animations

Framer Motion (for controlled animation)

Use only for:
- Page transitions
- Staggered reveal
- Status indicator pulse (if CSS insufficient)

Prefer CSS transitions for:
- Hover states
- Glow effects
- Border transitions

No animation libraries beyond this.

---

# 2. PROJECT STRUCTURE

/app
  /system-info
  /project-archive
  /execution-pipeline
  /initialize-connection
  layout.tsx
  page.tsx

/components
  TerminalCard.tsx
  StatusIndicator.tsx
  PipelineNode.tsx
  Navigation.tsx
  GridBackground.tsx
  Button.tsx

/styles
  globals.css

/lib
  constants.ts
  data.ts

/public
  static assets only

---

# 3. DATA STRATEGY

All portfolio data must be stored locally.

Use:
- `data.ts` for structured JSON-like objects

No CMS.
No external API.
No database.

Content must be statically renderable.

---

# 4. DEPLOYMENT

Platform: Cloudflare Pages

Configuration Requirements:
- Static output compatible
- Edge-compatible
- No Node-only APIs
- No server-side database
- No filesystem runtime dependencies

Build Command:
`next build`

Output Mode:
Static export OR edge-compatible build.

---

# 5. PERFORMANCE REQUIREMENTS

- Lighthouse performance score > 95
- Zero layout shift on load
- Fonts optimized and preloaded
- No unnecessary client components
- Prefer Server Components where possible

Framer Motion must not cause hydration mismatch.

---

# 6. ACCESSIBILITY

- Semantic HTML required
- Buttons must be actual `<button>`
- Links must use `<a>` or `Link`
- Color contrast must meet WCAG AA
- Focus states visible

---

# 7. FONT STRATEGY

Fonts must be:

- Self-hosted or optimized via Next font optimization
- Loaded via `next/font`
- No Google Fonts `<link>` tags

---

# 8. RESPONSIVENESS

Tailwind breakpoints must be used.

Minimum supported width: 320px

No horizontal overflow.

---

# 9. SEO

Each page must include:

- Unique title
- Meta description
- Open Graph tags
- Favicon

---

# 10. PROHIBITED

Do NOT use:

- Component libraries
- Template clones
- Default Tailwind UI layouts
- Random decorative SVG blobs
- Heavy background images
- Overuse of gradients

---

# 11. FINAL ARCHITECTURE MODEL

Rendering Mode:
- Static first
- Minimal client-side JS
- Motion only where required

Deployment Model:
Git → Cloudflare Pages → Edge

No runtime server dependency.

---

END OF TECH STACK
