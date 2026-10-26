# Sne's Gourmet Table — Premium Fine Catering Website
### WEDE-POE-PART3: Enhancing Functionality and SEO

Welcome to the comprehensive repository for **Sne's Gourmet Table**, a premium boutique culinary brand specializing in bespoke event catering across South Africa. This submission marks the final execution tier (**Part 3**), extending structural layouts with semantic HTML5 elements, modular vanilla JavaScript features, advanced form validation models, and automated on-page/technical SEO structures.

---

##Part 3 Core Deliverables & Learning Outcomes

This phase completes the technical objectives outlined below:
* **Implemented JavaScript (Programming):** Developed an interactive tab switcher, custom content filtering mechanics, a zero-dependency image lightbox viewer, and a real-time event budget cost calculation framework.
* **Applied SEO Best Practices:** Embedded structured description tags, target keyword matrices, custom Open Graph configurations, structured header sequencing (`<h1>`-`<h3>`), explicit image accessibility `alt` descriptors, a valid root `robots.txt` collector, and a structural `sitemap.xml` roadmap map.
* **Form Creation & Advanced Validation:** Built distinct, semantic layouts for `contact.html` and `enquiry.html` with explicit input limits (`minlength`, phone string format restrictions, attendance thresholds).
* **Dynamic Form Interaction:** Programmed client-side calculations and real-time validation badges (`.error-alert`, `.success-alert`) that provide instant feedback without refreshing the viewport page.
* **Platform Deployment:** Configured structural code layouts ready for integration onto free platforms (e.g., Netlify / GitHub Pages).

---

##Project Workspace & Directory Structure

Developed using **Visual Studio Code (VS Code)**. The live project relies on a clean, scalable relative path matrix:

```text
snes-gourmet-table/
├── 📁 css/
│   └── style.css            # Fully integrated responsive presentation rules sheet
├── 📁 images/
│   ├── chef-cooking.jpeg          # Optimized about banner image asset
│   ├── intimate-gathering.jpeg    # Fluid grid column layout banner asset
│   ├── professional-event.jpeg    # Fluid grid column layout banner asset
│   └── wedding-day.jpeg           # Fluid grid column layout banner asset
├── index.html               # Semantic Landing Environment
├── about.html               # Brand Profile & Experience Workspace
├── services.html            # Dynamic Catered Packages Filter Board
├── menu.html                # Interactive Tabbed Culinary Showcase
├── testimonials.html        # ARIA-Compliant Guest Review Arrays
├── contact.html             # Mail Client Submission Layout Form
├── enquiry.html             # Cost Estimate Computational Calculator Form
├── script.js                # Integrated App Execution Logic Layer
├── robots.txt               # Crawler Indexing Directive Properties
└── sitemap.xml              # XML Architecture Page Priority Index
```

---

##Part 3 Changelog (Retroactive Part 2 Fixes)

As requested by the assignment guidelines, all updates, corrections, and modifications made following the release of Part 2 marks and lecturer feedback are documented in full below:

### Entry 1: Typography Configuration Corrections
* **Date:** 2026-10-24
* **Description:** Discovered breaking asset bugs linked to incorrect Google Fonts paths across the header layouts.
* **Correction Made:** Updated the external CDN reference endpoints from `https://googleapis.com` to the correct structure `https://googleapis.com` inside all page templates. This ensures typography weights render uniformly.

### Entry 2: Semantic Header Tree Regularization
* **Date:** 2026-10-25
* **Description:** Identified faulty header sequence architectures (e.g., jumping from structural elements directly into nested native `<h2>` or `<h4>` tags), which triggered search accessibility indexing warnings.
* **Correction Made:** Streamlined the layout framework across `services.html`, `menu.html`, and `testimonials.html`. Standardized primary view tags to use `<h1>` elements for primary landmarks, and mapped local item subtitles to clean `<h2>` or `<h3>` targets, preserving search engine outline integrity.

### Entry 3: Menu Interface Bug Remediation
* **Date:** 2026-10-26
* **Description:** Evaluated code crashes in browser consoles during tab interface testing. The baseline calculation string `tab.dataset("data-category")` was throwing runtime invocation script exceptions.
* **Correction Made:** Refactored the core logic module inside `script.js` to extract data attributes via the native property assignment mapping standard (`tab.dataset.category`). This completely cleared console errors.

### Entry 4: Specialized Form Separation
* **Date:** 2026-10-26
* **Description:** Handled lecturer requirements stating that `enquiry.html` and `contact.html` must possess distinct behavioral differences instead of using identical duplication fields.
* **Correction Made:** 
  1. Configured `contact.html` to function as a direct communication form that compiles text data using a `mailto:` layout target.
  2. Created a dedicated `enquiry.html` environment featuring a custom South African 10-digit telephone pattern validation lock (`pattern="^[0-9]{10}$"`) alongside an event budget tier calculation module.

---

##Updated References List

All concepts, structural design layouts, and technical specifications used to complete this implementation were guided by the following industry standards:

1. **W3Schools. (2026).** *HTML Form Validation and Input Attributes Standard Documentation.* Available at: [https://w3schools.com](https://w3schools.com) [Accessed 26 October 2026].
2. **MDN Web Docs. (2026).** *Using the Web Dataset API for DOM Node Manipulation.* Mozilla Developer Network. Available at: [https://mozilla.org](https://mozilla.org) [Accessed 26 October 2026].
3. **Google Search Central. (2026).** *Build and Submit a Valid Sitemap.xml Schema Configuration Guide.* Available at: [https://google.com](https://google.com) [Accessed 26 October 2026].
4. **The Independent Institute of Education (Pty) Ltd. (2026).** *Web Development 1A (WEDE5111) Project of Evidence Guide.* Johannesburg: IIE.

---

## Local Execution Guide

To run and inspect the interactive functional tiers locally inside your VS Code setup:
1. Ensure the **Live Server** extension is active inside your VS Code editor.
2. Select `index.html` from the workspace folder menu.
3. Click the **"Go Live"** anchor token on the blue VS Code status bar.
4. Interact with the **Menu Tabs**, try out the **Services Filters**, click any card item image to see the **Lightbox Popup**, and test the computational accuracy of the budget tracker inside `enquiry.html`.
