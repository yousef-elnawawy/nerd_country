---
name: Kinetic Noir
colors:
  surface: '#121414'
  surface-dim: '#121414'
  surface-bright: '#37393a'
  surface-container-lowest: '#0c0f0f'
  surface-container-low: '#1a1c1c'
  surface-container: '#1e2020'
  surface-container-high: '#282a2b'
  surface-container-highest: '#333535'
  on-surface: '#e2e2e2'
  on-surface-variant: '#e4bebc'
  inverse-surface: '#e2e2e2'
  inverse-on-surface: '#2f3131'
  outline: '#ab8987'
  outline-variant: '#5b403f'
  surface-tint: '#ffb3b1'
  primary: '#ffb3b1'
  on-primary: '#680011'
  primary-container: '#ff535b'
  on-primary-container: '#5b000e'
  inverse-primary: '#bb152c'
  secondary: '#c8c6c5'
  on-secondary: '#313030'
  secondary-container: '#4a4949'
  on-secondary-container: '#bab8b7'
  tertiary: '#c6c6c6'
  on-tertiary: '#303030'
  tertiary-container: '#919191'
  on-tertiary-container: '#2a2a2a'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#ffdad8'
  primary-fixed-dim: '#ffb3b1'
  on-primary-fixed: '#410007'
  on-primary-fixed-variant: '#92001c'
  secondary-fixed: '#e5e2e1'
  secondary-fixed-dim: '#c8c6c5'
  on-secondary-fixed: '#1c1b1b'
  on-secondary-fixed-variant: '#474646'
  tertiary-fixed: '#e2e2e2'
  tertiary-fixed-dim: '#c6c6c6'
  on-tertiary-fixed: '#1b1b1b'
  on-tertiary-fixed-variant: '#474747'
  background: '#121414'
  on-background: '#e2e2e2'
  surface-variant: '#333535'
typography:
  display:
    fontFamily: Montserrat
    fontSize: 80px
    fontWeight: '900'
    lineHeight: '1.1'
    letterSpacing: -0.04em
  headline-lg:
    fontFamily: Montserrat
    fontSize: 48px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  headline-lg-mobile:
    fontFamily: Montserrat
    fontSize: 32px
    fontWeight: '700'
    lineHeight: '1.2'
  headline-md:
    fontFamily: Montserrat
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.4'
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-caps:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '700'
    lineHeight: '1'
    letterSpacing: 0.1em
spacing:
  base: 8px
  gutter: 24px
  margin-mobile: 20px
  margin-desktop: 80px
  max-width: 1440px
---

## Brand & Style

The design system is engineered for a high-impact personal portfolio that balances professional authority with aggressive modernism. The brand personality is confident, precise, and tech-forward. It leverages a **High-Contrast / Bold** style infused with **Minimalist** layouts to ensure the work remains the focal point while the interface provides a premium, "built-to-last" atmosphere. 

The emotional response is one of urgency and intentionality. By utilizing a "Dark Mode" foundation, the design system creates a cinematic backdrop where content is illuminated by vibrant crimson accents, mimicking a high-end studio or a developer's terminal environment.

## Colors

This design system utilizes a restricted, high-tension palette to maintain a sleek, premium aesthetic.

- **Primary (#E63946):** A vibrant, high-energy red used exclusively for interactive elements, calls to action, and critical highlights. It acts as the "signal" within the dark void.
- **Secondary/Surface (#121212):** The primary container color. It provides a softer alternative to pure black to allow for subtle depth and layering.
- **Tertiary/Background (#000000):** The base canvas color. Used for large layout sections to create a sense of infinite depth.
- **Neutral (#FFFFFF):** Used for primary headings and body copy to ensure maximum legibility against the dark background.
- **Accents:** Red is also used in low-opacity glows (10-15%) to create "atmospheric" lighting around key components or hover states.

## Typography

The typography strategy relies on the interplay between the geometric strength of **Montserrat** and the utilitarian precision of **Inter**.

- **Headlines:** Use Montserrat with heavy weights (700-900). For "Display" roles, use tight letter-spacing to create a "blocky," architectural feel.
- **Body:** Use Inter for all long-form text and UI labels. It provides a neutral, tech-focused readability that balances the loud headlines.
- **Systematic Scale:** Headlines should scale aggressively. On mobile, "Display" and "Headline-LG" should be reduced to prevent horizontal overflow while maintaining their relative visual weight.

## Layout & Spacing

The layout philosophy follows a **Fluid Grid** model with generous margins to evoke a gallery-like feel.

- **Desktop (12-column):** 80px outer margins with 24px gutters. Content should feel "un-crowded," using vertical white space (or "black space") to separate projects and sections.
- **Mobile (4-column):** 20px outer margins. Components reflow to a single stack.
- **Rhythm:** Use an 8px base grid for all internal component padding and smaller spacing increments to ensure mathematical harmony across the UI.

## Elevation & Depth

This design system avoids traditional soft shadows in favor of **Tonal Layers** and **Red Accents**.

- **Surfaces:** Depth is created by placing `#121212` (Surface) cards on top of `#000000` (Background). 
- **Borders:** Instead of shadows, use 1px solid borders. For inactive states, use `#2A2A2A`. For active or "special" states, use the Primary Red.
- **Glows:** For high-priority elements like a "Contact" button or a featured project card on hover, apply a soft red outer glow (`box-shadow: 0 0 20px rgba(230, 57, 70, 0.3)`).

## Shapes

The shape language is strictly **Sharp (0px)**. 

To maintain the professional, tech-focused, and "architectural" brand identity, all buttons, input fields, cards, and image containers must have square corners. This creates a more aggressive, precise look that differentiates the portfolio from friendlier, rounded consumer apps.

## Components

- **Buttons:** 
  - *Primary:* Solid Primary Red background with White text. Sharp corners.
  - *Secondary:* Outline only (1px White or Red). 
  - *Hover State:* Primary buttons should shift to a slightly darker red or trigger a subtle red "glow" behind the button.
- **Cards:** 
  - Solid `#121212` background with a 1px border. On hover, the border changes to Primary Red and the image inside scales slightly (1.05x).
- **Inputs:** 
  - Background: `#000000`, 1px White border. On focus, the border turns Primary Red.
- **Chips/Labels:** 
  - Small, all-caps Inter font. Use a dark grey background (`#1A1A1A`) with white text for technical tags (e.g., "REACT", "UI/UX").
- **Lists:** 
  - Clean lines with 1px dividers in `#2A2A2A`. Use the Primary Red for bullet points or "arrow" indicators to signify interactivity.
- **Icons:** 
  - Use thin-stroke (1.5px) minimalist SVG icons. Icons should be White by default and turn Red on hover.