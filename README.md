# THE CYBER-TERMINAL // PORTFOLIO v2.0.0

> **SYSTEM_STATUS: ONLINE ●**
> A high-contrast, system-inspired portfolio interface built for [Mahar GM](https://github.com/github-mahar).

---

## SYSTEM_OVERVIEW

The Cyber-Terminal is a multi-page personal portfolio that simulates a futuristic developer operating system interface. It is not a generic portfolio template — it is an **engineered system** built with performance, clarity, and technical precision.

**AESTHETIC:** Clean Technical — dark-first, neon cyan accents, terminal-style UI, 1px structural borders, monospace metadata labels, background grid overlay.

---

## TECH_STACK

| Module           | Technology                        |
| ---------------- | --------------------------------- |
| Framework        | Next.js 16 (App Router)           |
| Language         | TypeScript (strict mode)          |
| Styling          | Tailwind CSS v4                   |
| Animation        | Framer Motion                     |
| Fonts            | Space Grotesk + JetBrains Mono    |
| Deployment       | Cloudflare Pages (static export)  |

**Zero** component libraries. **Zero** external APIs. **Zero** CMS dependencies.
All components are custom-built. All content is statically rendered.

---

## ROUTE_MAP

```
/                         → HOME
/system-info              → SYSTEM_INFO (About)
/project-archive          → PROJECT_ARCHIVE (Projects)
/project-archive/[id]     → PROJECT_DETAIL (Dynamic)
/execution-pipeline       → EXECUTION_PIPELINE (Experience)
/initialize-connection    → INITIALIZE_CONNECTION (Contact)
```

---

## PROJECT_STRUCTURE

```
/app
  /system-info
  /project-archive
    /[id]
  /execution-pipeline
  /initialize-connection
  layout.tsx
  page.tsx

/components
  Navigation.tsx
  StatusIndicator.tsx
  TerminalCard.tsx
  Button.tsx
  PipelineNode.tsx
  PageTransition.tsx
  Footer.tsx

/lib
  data.ts
  constants.ts

/styles
  (via globals.css in /app)

/public
  Logo.jpg
  GM.png
  Index_Wise.png
```

---

## COMMANDS

```bash
# Install dependencies
npm install

# Development server
npm run dev

# Production build (static export)
npm run build

# Lint
npm run lint
```

---

## DESIGN_PRINCIPLES

- **Dark-first** — `#050505` primary background
- **Neon cyan accent** — `#00FFFF` for active states, borders, CTAs
- **Terminal aesthetic** — window controls, monospace metadata, system labels
- **1px structural borders** — sharp corners, no soft rounded cards
- **Grid overlay** — subtle fixed background grid (4% opacity)
- **System UI language** — `SYSTEM_INFO`, `PROJECT_ARCHIVE`, `EXECUTION_PIPELINE`, `INITIALIZE_CONNECTION`

---

## MOTION_RULES

- Staggered page load reveal (opacity + translateY, <800ms total)
- Hover border glow transitions (<300ms)
- System status pulse (2.5s cycle, subtle)
- No bounce, spin, elastic, or infinite floating animations

---

## PERFORMANCE_TARGETS

- Lighthouse Performance ≥ 90
- Static export — zero runtime server dependency
- Maximum 2 font families
- Minimal client-side JavaScript
- No layout shift on load

---

## DEPLOYMENT

Platform: **Cloudflare Pages**

```
Build command:    npm run build
Output directory: out
```

Static export mode — all pages pre-rendered at build time. No Node.js runtime required at the edge.

---

## AUTHOR

**Mahar Ghulam Muhammad** (Mahar GM)
Web Developer — *"One-Line At a time"*

- Email: mahargm675@gmail.com
- LinkedIn: [linkedin.com/in/mahar-gm](https://www.linkedin.com/in/mahar-gm)
- GitHub: [github.com/github-mahar](https://github.com/github-mahar)

---

```
BUILD_VERSION: 2.0.0
DEPLOYMENT: CLOUDFLARE_EDGE
LATENCY: OPTIMAL
```
