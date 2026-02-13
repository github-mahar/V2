# DESIGN SPECIFICATION
## Project: The Cyber-Terminal
## Mode: Dark-First
## Architecture: Multi-Page
## Purpose: Implementation Reference for AI Code Generation

---

# 1. DESIGN INTENT

The Cyber-Terminal is a high-contrast, system-inspired portfolio interface.

It must resemble:
- A futuristic developer OS
- A technical command environment
- A live running system

It must NOT resemble:
- A SaaS landing page
- A startup template
- A soft minimal portfolio
- A pastel or gradient-heavy theme

Design must feel structured, sharp, technical.

---

# 2. VISUAL IDENTITY RULES

## 2.1 Core Theme: "System Transparency"

UI elements must appear functional.

Use:
- Grid overlays
- Status indicators
- Thin structural borders
- Metadata labels
- Machine-style headings

Avoid:
- Decorative blobs
- Soft shadows
- Rounded bubbly UI
- Friendly startup design language

---

# 3. COLOR SYSTEM (STRICT)

Use CSS variables.

## 3.1 Base Colors

--color-bg-primary: #050505;
--color-bg-secondary: #0A0A0A;
--color-surface: #1A1A1A;

## 3.2 Accent Colors

--color-accent-primary: #00FFFF;  (Neon Cyan)
--color-accent-secondary: #FF007F; (Hot Pink, use sparingly)

## 3.3 Text Colors

--color-text-primary: #EAEAEA;
--color-text-muted: #9A9A9A;

Rules:
- Accent primary used for:
  - Headings
  - Active states
  - Borders on hover
  - Primary buttons
- Accent secondary used only for:
  - Emphasis tags
  - Code highlights
  - Rare visual moments

Never mix multiple bright accents in one component.

---

# 4. TYPOGRAPHY SYSTEM

## 4.1 Heading Font

Heavy Sans-Serif.
Used for:
- Section titles
- Page headers
- Major UI labels

Rules:
- ALL CAPS for section titles
- Tight line height (1.1–1.2)
- Letter spacing: 1px–2px for large headings

---

## 4.2 Monospace Font

Used for:
- Metadata
- Labels
- Tags
- Status indicators
- Navigation subtext

Example label format:

TECH_STACK: [REACT, RUST]
SYSTEM_STATUS: ONLINE ●

Monospace must not be used for large body paragraphs.

---

## 4.3 Body Text

- High readability
- Medium weight
- No excessive letter spacing
- Max width ~70ch

---

# 5. BACKGROUND SYSTEM

## 5.1 Grid Overlay

Must include subtle background grid.

Implementation requirements:
- Very low opacity (3–8%)
- Thin 1px grid lines
- Square or dot pattern
- Must not overpower text

Grid must remain fixed and consistent across pages.

---

# 5.2 Depth Layering

Layer structure:

Layer 1: Background color
Layer 2: Grid overlay
Layer 3: Content
Layer 4: Glow effects

Never collapse layers into flat design.

---

# 6. COMPONENT SYSTEM

---

## 6.1 Navigation Bar

Must include:
- Logo / Name
- Navigation links
- SYSTEM_STATUS: ONLINE ● indicator

Indicator dot:
- Neon cyan
- Subtle pulse animation (2–3s cycle)
- Not aggressive

Active nav item:
- Accent color
- Underline or border highlight

---

## 6.2 Terminal Card Component

Used for:
- Projects
- Skill clusters

Structure:

--------------------------------
| ●  ●  ●                      |
| ---------------------------- |
| TITLE                        |
| Description                  |
|                              |
| TECH_STACK: [X, Y, Z]        |
--------------------------------

Requirements:
- 1px border (#2A2A2A default)
- Hover → border transitions to neon cyan
- Slight glow on hover (controlled)
- Sharp corners (no heavy rounding)
- Padding consistent

Traffic light dots:
- Small circles
- Red / Yellow / Green
- Static visual (no animation)

---

## 6.3 Buttons

### Primary Button
- Solid neon cyan background
- Black text
- Sharp corners
- Subtle glow
- On hover:
  - Slight brightness increase
  - Glow intensity increases

### Secondary Button
- Transparent
- 1px cyan border
- Cyan text
- On hover:
  - Background becomes cyan
  - Text turns black

---

## 6.4 Experience Pipeline

Vertical structure:

Node
|
Node
|
Node

Each node includes:
- Title
- Duration
- Description

Optional:
- Current node has pulsing dot

Line must be thin (1px).
Nodes aligned consistently.

On mobile:
- Stack vertically
- Maintain connecting visual logic

---

# 7. MOTION SPECIFICATION

Motion must be minimal but impactful.

## 7.1 Page Load

- Staggered reveal
- Delay between elements: 80–120ms
- Opacity + slight translateY (10–20px)
- Total animation duration under 800ms

---

## 7.2 Hover States

Allowed:
- Border color transition
- Glow increase
- Slight background shift

Not allowed:
- Bounce
- Rotation
- Scale > 1.02
- Continuous floating animations

---

## 7.3 Status Pulse

SYSTEM_STATUS dot:
- Subtle scale pulse
- 2–3 second interval
- No large glow bursts

---

# 8. RESPONSIVENESS RULES

Breakpoints must preserve:

- Grid integrity
- Card structure
- Terminal aesthetic

Mobile constraints:

- Reduce padding proportionally
- Maintain 1px borders
- Keep metadata readable
- Avoid stacking too tightly

No horizontal scrolling allowed.

---

# 9. UI LANGUAGE (STRICT)

Replace common labels:

About → SYSTEM_INFO
Contact → INITIALIZE_CONNECTION
Projects → PROJECT_ARCHIVE
Experience → EXECUTION_PIPELINE
Skills → CORE_MODULES

Use uppercase labels consistently.

---

# 10. ANTI-GENERIC SAFEGUARDS

The design fails if:

- Rounded 16px soft cards are used
- Drop shadows are soft and blurry
- Colors are muted pastels
- Layout resembles centered hero template
- Cards arranged in generic 3-column grid without variation
- No grid overlay present

The interface must feel engineered.

---

# 11. FINAL CHECK

Before implementation is considered complete:

- Background grid visible but subtle
- Accent usage controlled
- Typography hierarchy strong
- Cards feel like terminal windows
- Navigation feels system-level
- No startup aesthetic leakage

This is not a portfolio.

It is a running system.

It is a terminal.