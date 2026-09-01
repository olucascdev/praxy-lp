---
name: Praxy — The Next Layer of Intelligence
description: A cinematic operational portal that turns AI intent into governed execution.
colors:
  space-black: "#050505"
  silver-ink: "#fafafa"
  operational-acid: "#ffff3c"
  muted-silver: "#a7a6a6"
  navigation-silver: "#b6b5b5"
  partner-graphite: "#8b8a8a"
  white-control: "#ffffff"
  carbon-surface: "#151515"
typography:
  display:
    fontFamily: "Fira Sans, sans-serif"
    fontSize: "clamp(38px, 7vw, 76px)"
    fontWeight: 400
    lineHeight: 0.99
    letterSpacing: "-0.04em"
  hero:
    fontFamily: "Manrope, sans-serif"
    fontSize: "clamp(42px, 13.2vw, 68px)"
    fontWeight: 400
    lineHeight: 0.98
    letterSpacing: "-0.035em"
  title:
    fontFamily: "Fira Sans, sans-serif"
    fontSize: "24px"
    fontWeight: 500
  body:
    fontFamily: "Inter, system-ui, -apple-system, Segoe UI, sans-serif"
    fontSize: "15px"
    fontWeight: 400
    lineHeight: 1.6
  detail:
    fontFamily: "Lora, serif"
    fontWeight: 500
  label:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: "12px"
    fontWeight: 400
rounded:
  focus: "4px"
  art: "10px"
  metric: "12px"
  surface: "14px"
  pill: "999px"
spacing:
  page-gutter: "clamp(20px, 5vw, 76px)"
  section-block: "104px"
  card-inset: "18px"
  rail-gap: "14px"
components:
  button-primary:
    backgroundColor: "{colors.white-control}"
    textColor: "{colors.space-black}"
    typography: "{typography.hero}"
    rounded: "{rounded.pill}"
    padding: "0 26px"
    height: "50px"
  button-primary-hover:
    backgroundColor: "{colors.operational-acid}"
    textColor: "{colors.space-black}"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.silver-ink}"
    typography: "{typography.hero}"
    padding: "0"
    height: "48px"
  card-product:
    backgroundColor: "rgba(255,255,255,0.035)"
    textColor: "{colors.silver-ink}"
    rounded: "{rounded.surface}"
    padding: "18px"
  card-metric:
    backgroundColor: "{colors.carbon-surface}"
    textColor: "{colors.silver-ink}"
    rounded: "{rounded.metric}"
    padding: "22px"
---

# Design System: Praxy — The Next Layer of Intelligence

## Overview

**Creative North Star: "The Operational Portal"**

Praxy is a passage from intent to operation. Its world is cinematic rather than dashboard-like: black-space planes hold a full-bleed portal, silver typography establishes intelligence and restraint, and acid-yellow signals mark the moments where the system becomes active.

The interface moves from atmosphere to evidence with controlled density. Sharp technical diagrams, narrow dividers, restrained glass, and high-contrast controls make advanced infrastructure feel legible without flattening it into generic software chrome. The bolt mark and operational signal color recur as small anchors rather than decorative wallpaper.

**Key Characteristics:**

- Full-bleed portal media dissolving into black space.
- Silver-led typography with rare acid-yellow operational signals.
- Sharp diagrams and fine-line structures inside gently curved surfaces.
- Restrained glass reserved for navigation and product containers.
- Responsive composition governed by viewport shape as well as width.

## Colors

The palette is deliberately near-monochrome; the acid signal is powerful because it is scarce.

### Primary

- **Operational Acid:** Marks activation, selected signal paths, hover emphasis, focus outlines, and the strongest metric surface.

### Neutral

- **Space Black:** The uninterrupted page ground and the terminal fade of the hero portal.
- **Silver Ink:** Primary text and high-contrast icons.
- **Muted Silver:** Supporting copy that must remain readable without competing with the thesis.
- **Navigation Silver:** Resting desktop navigation text.
- **Partner Graphite:** Low-emphasis partner marks in the hero fade.
- **White Control:** Primary pill surfaces before interaction.
- **Carbon Surface:** Solid metric planes and the base behind data treatments.

**The Signal Rarity Rule.** Operational Acid identifies action, focus, or live system state; it does not become a general-purpose background palette.

**The Black-Space Rule.** Major sections remain continuous with Space Black so portal media, diagrams, and proof surfaces appear to emerge from one operational field.

## Typography

**Display Font:** Fira Sans (with sans-serif fallback)  
**Hero Font:** Manrope (with sans-serif fallback)  
**Body Font:** Inter (with system-ui and sans-serif fallbacks)  
**Detail Font:** Lora italic (with serif fallback)

**Character:** Manrope keeps the opening thesis engineered and lucid. Fira Sans carries the larger editorial system, Inter handles operational explanations and labels, and Lora appears only as an italic human counterpoint inside the manifesto.

### Hierarchy

- **Hero** (400, fluid 42–68px on compact viewports, 0.98 line-height): The two-line first-viewport thesis; desktop sizing is calibrated from the 1487 × 1058 reference composition.
- **Display** (400, fluid 38–76px, 0.99 line-height): Section headlines with tightly tracked, balanced wrapping.
- **Title** (500, 24px): Product-card titles; smaller 18–19px Fira Sans titles label protocol and metric content.
- **Body** (400, 15px, 1.6 line-height): Section explanations; product and protocol copy condense to 13px while retaining a 1.55 line-height.
- **Detail** (500 italic): Select manifesto phrases only.
- **Label** (400, 9–12px): Rail instructions, operational captions, illustrative-proof labels, and footer copy.

**The Four-Voice Rule.** Manrope opens the portal, Fira Sans articulates the system, Inter explains it, and Lora humanizes only a few manifesto phrases.

**The Tight-Thesis Rule.** Large statements use compact line-height and negative tracking; body copy stays open and neutral.

## Layout

The page is a vertical sequence of operational reveals. The hero occupies one full small viewport and anchors its thesis to the left while the portal video fills the plane and fades to black at the bottom. Partner marks sit inside that fade. Subsequent sections use a fluid horizontal gutter and substantial 104px vertical padding, with centered manifesto, protocol, metrics, and booking moments alternating against left-led product exploration.

Compact screens use a two-column partner strip, a horizontally scrollable snap rail, stacked protocol steps, and a single-column metric field. Taller tablet-like viewports move partner marks to four columns and introduce two-column products and metrics. Wide landscape layouts switch at an 11:10 aspect ratio into a composition calibrated from a 1487 × 1058 reference: desktop navigation appears, the thesis locks to two lines, partner marks become precisely distributed, protocol steps form three columns, and metrics become an asymmetric three-column grid.

The product rail intentionally escapes the right page gutter on wide screens to imply reach beyond the viewport. Content widths are capped where reading or interaction benefits: the manifesto at 920px, protocol steps at 1100px, and booking/proof surfaces at roughly 1180–1200px.

**The Portal-First Rule.** The first viewport remains a media plane with navigation, a two-line thesis, one supporting statement, one CTA pair, and partner marks—no cards, stats, or secondary marketing blocks.

## Elevation & Depth

The system is flat by default and builds depth through black tonal steps, media gradients, fine translucent borders, blur, and geometric overlap. Glass appears only where it clarifies a floating layer: the compact navigation control, the full-screen mobile menu, and product tiles. The booking shell alone uses a broad ambient shadow to separate an embedded external surface from the black field.

### Shadow Vocabulary

- **Booking Ambient** (`0 24px 80px rgba(0,0,0,.28)`): A broad, quiet shadow under the Cal.com shell.
- **Data Lines** (`0 18px #383838, 0 36px #ffff3c, 0 54px #383838, 0 72px #383838`): A structural repeated-line treatment inside the metric visualization, not general elevation.

**The Restrained-Glass Rule.** Blur supports floating controls and product containers; primary content planes remain materially direct.

## Shapes

The form language pairs sharp operational geometry with selective softness. Core diagrams use lines, rings, skewed bars, and a rotated square scanner; the bolt itself is angular and asymmetrical. Containing surfaces use 10–14px corners, while actions and directional controls are full pills or circles. Borders are typically one-pixel gray or translucent white and are used to locate a plane without brightening the field.

**The Sharp-Inside-Soft Rule.** Curved containers may hold sharp signals and diagrams; do not round the operational graphics into friendly blobs.

## Components

### Buttons

- **Shape:** Full capsule with a 50px minimum height and horizontal 26px inset.
- **Primary:** White Control surface with Space Black Manrope text.
- **Hover / Focus:** Lifts 2px and switches to Operational Acid over 250ms; keyboard focus uses a 2px acid outline offset by 5px.
- **Ghost:** Transparent 48px-high text action ending in an acid northeast arrow.
- **Directional Control:** A 42px circular dark button with a one-pixel gray border; hover turns the border and arrow acid.

### Cards / Containers

- **Corner Style:** Product tiles use the 14px surface radius; metric planes use 12px; product-art wells use 10px.
- **Background:** Product tiles use restrained translucent white over Space Black with 18px blur; art wells use near-black. Metrics use Carbon Surface, near-black, or Operational Acid according to signal strength.
- **Shadow Strategy:** Flat and bordered; only the booking shell receives ambient lift.
- **Border:** Product tiles use a subtle translucent white stroke; signal metrics use a muted olive-acid stroke.
- **Internal Padding:** Product cards use 18px and metric planes use 22px.

### Navigation

Desktop navigation floats directly over the portal: bolt at left, silver links centered, and the primary pill at right. Links become white on hover. Compact screens replace the links with a restrained-glass burger; opening it produces a full-screen blurred black plane with large Fira Sans rows, fine dividers, staggered upward reveals, keyboard focus trapping, Escape dismissal, and background inertness.

### Protocol Core

The protocol signature is a perspective-tilted stack of three heavy rings with one acid segment, flanked by low-contrast signal clouds. A slightly rotated light label overlaps the core. On supported motion settings, the ring stack scales from 72% with a fade as it enters view.

### Metric Signals

Metric cards combine oversized tight Fira Sans numerals with compact operational labels. Acid may fill the highest-energy result or color a live signal on black; illustrative proof is explicitly labeled in small tracked type.

## Do's and Don'ts

### Do:

- **Do** preserve a continuous Space Black field and let media or content dissolve back into it.
- **Do** reserve Operational Acid for action, focus, live pathways, and high-signal proof.
- **Do** pair tight large type with open, neutral explanatory copy.
- **Do** respond to viewport shape: compact portrait, tablet-like portrait, and wide landscape are distinct compositions.
- **Do** remove autoplay media and collapse transitions when reduced motion is requested.

### Don't:

- **Don't** replace the portal with a generic dashboard hero or introduce cards and stats into the first viewport.
- **Don't** spread acid across decorative backgrounds until it stops behaving like a signal.
- **Don't** apply glass blur to every dark surface; the restraint is part of the hierarchy.
- **Don't** soften the bolt, protocol rings, scanner, or data graphics into generic rounded illustration.
- **Don't** present illustrative outcomes as verified commercial proof.
