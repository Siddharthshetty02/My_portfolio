# 🚀 Complete Build Instructions — Siddharth Shetty Portfolio

> **Goal**: Clone, personalize, and deploy the [mittal-parth/personal-portfolio](https://github.com/mittal-parth/personal-portfolio) open-source template as **Siddharth Shetty's** portfolio website. This document gives Antigravity every detail it needs to execute the build end-to-end.

---

## Table of Contents

1. [Project Setup](#1-project-setup)
2. [Repository Architecture](#2-repository-architecture)
3. [Tech Stack & Dependencies](#3-tech-stack--dependencies)
4. [Theming & Visual Design](#4-theming--visual-design)
5. [Component-by-Component Build Guide](#5-component-by-component-build-guide)
6. [Data Configuration — `src/constants/index.js`](#6-data-configuration--srcconstantsindexjs)
7. [Animation System](#7-animation-system)
8. [Assets & Content Migration](#8-assets--content-migration)
9. [Responsive & Accessibility Requirements](#9-responsive--accessibility-requirements)
10. [Build, Test & Deployment](#10-build-test--deployment)
11. [Critical Rules & Acceptance Criteria](#11-critical-rules--acceptance-criteria)

---

## 1. Project Setup

### Step 1: Clone the Template

```bash
cd c:\Users\siddh\OneDrive\Documents\new_portfolio
git clone https://github.com/mittal-parth/personal-portfolio.git .
```

> [!IMPORTANT]
> Clone INTO the current `new_portfolio` directory (note the `.` at the end). Move the existing `antigravity_portfolio_clone_instructions.md` to a safe location first, or clone into a subdirectory and merge.

### Step 2: Install Dependencies

```bash
npm install
```

### Step 3: Start the Dev Server

```bash
npm run dev
```

### Step 4: Verify the Template Runs

Open the browser URL shown by Vite (usually `http://localhost:5173`). Confirm you see the original template author's portfolio. **Do not push anything yet.**

---

## 2. Repository Architecture

The template follows this folder structure:

```
personal-portfolio/
├── public/                          # Static assets (favicon, etc.)
├── snippets/
│   ├── bulk_import_from_linkedin.py # LinkedIn data importer (optional, can ignore)
│   └── linkedin-export/             # LinkedIn export data directory
├── src/
│   ├── assets/
│   │   └── index.js                 # Central asset exports (images, logos)
│   ├── components/
│   │   ├── Navbar.jsx               # Top navigation bar
│   │   ├── Hero.jsx                 # Landing/hero section
│   │   ├── Skills.jsx               # Technical skills display
│   │   ├── Experience.jsx           # Work experience timeline
│   │   ├── Education.jsx            # Education cards
│   │   ├── Projects.jsx             # Project showcase carousel
│   │   ├── Blogs.jsx                # Blog posts section
│   │   ├── OpenSource.jsx           # Open source contributions
│   │   ├── ExtraCurricular.jsx      # Achievements/activities
│   │   ├── Contact.jsx              # Contact section
│   │   └── Footer.jsx               # Page footer
│   ├── constants/
│   │   ├── index.js                 # ⭐ PRIMARY DATA FILE — all content lives here
│   │   └── index-example.js         # Example/generated template
│   ├── hoc/
│   │   └── SectionWrapper.jsx       # HOC for section animations & layout
│   ├── utils/
│   │   └── motion.js                # Framer Motion animation variants
│   ├── styles.js                    # Centralized Tailwind CSS class constants
│   ├── App.jsx                      # Root component — composes all sections
│   ├── main.jsx                     # Vite entry point
│   └── index.css                    # Global CSS & Tailwind directives
├── index.html                       # HTML entry point (meta tags, title, fonts)
├── tailwind.config.cjs              # Tailwind theme configuration
├── postcss.config.cjs               # PostCSS configuration
├── vite.config.js                   # Vite build configuration
├── package.json                     # Dependencies & scripts
├── .env                             # Environment variables (VITE_GH_TOKEN)
├── .gitignore
├── CODE_OF_CONDUCT.md
├── LICENSE
└── README.md
```

> [!NOTE]
> The **single most important file to edit** is `src/constants/index.js`. This is where ALL personal content (name, skills, projects, experience, education, social links, etc.) is configured as JavaScript arrays/objects.

---

## 3. Tech Stack & Dependencies

### Core Dependencies (already in `package.json`)

| Package | Purpose |
|---------|---------|
| `react` + `react-dom` | UI framework |
| `vite` | Build tool & dev server |
| `tailwindcss` + `postcss` + `autoprefixer` | Utility-first CSS |
| `framer-motion` | Smooth scroll animations & transitions |
| `react-icons` | Icon library for skills, social links, navigation |
| `react-lottie` (or `lottie-react`) | Animated coding illustration in Hero |
| `axios` | HTTP client for GitHub API calls (Open Source section) |
| `meraki-ui` | UI component patterns |
| `cypress` | E2E testing (dev dependency) |

### What NOT to Add

- ❌ Next.js
- ❌ Backend/database/CMS
- ❌ Three.js / 3D elements
- ❌ `react-vertical-timeline`, `emailjs`, `react-tilt` (those belong to a different portfolio template)
- ❌ Any heavy new design system

---

## 4. Theming & Visual Design

### Color Tokens

Edit `tailwind.config.cjs` to match these values:

| Token | Value | Usage |
|-------|-------|-------|
| Main background | `#00040F` | Deep navy page background |
| Card/surface | `#11101D` / `#14101D` | Card backgrounds |
| Main text | `#FFFFFF` | Headings and primary text |
| Muted text | `#B6C3D1` | Secondary/body text |
| Accent teal | `#82E8EB` | Name highlight, hover states, CTA accents |
| Border | `rgba(255,255,255,0.08)` | Subtle card borders |

### Typography

- **Font**: Poppins (loaded via Google Fonts in `index.html`)
- **Fallback**: system sans-serif stack
- **Hero title**: Very large (80px desktop → scales down)
- **Section headings**: ~60px desktop, responsive
- **Body text**: 16-18px, readable

### Styles Configuration (`src/styles.js`)

This file centralizes reusable Tailwind class strings:

```javascript
const styles = {
  paddingX: "sm:px-16 px-6",
  paddingY: "sm:py-16 py-6",
  padding: "sm:px-16 px-6 sm:py-16 py-10",
  heroHeadText: "font-black text-white lg:text-[80px] sm:text-[60px] xs:text-[50px] text-[40px] lg:leading-[98px] mt-2",
  heroSubText: "text-[#dfd9ff] font-medium lg:text-[30px] sm:text-[26px] xs:text-[20px] text-[16px] lg:leading-[40px]",
  sectionHeadText: "text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]",
  sectionSubText: "sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider",
};
```

### Design Rules

- Dark navy/near-black background throughout
- Rounded dark cards with thin subdued borders
- Cards brighten or gain gradient on hover
- Subtle gradient fills and soft blurred glow effects (sparingly)
- Wide left/right gutters, centered max-width container
- Deliberate vertical rhythm between sections
- No excessive glassmorphism, neon effects, or stock imagery

---

## 5. Component-by-Component Build Guide

### `App.jsx` — Root Component

The main app renders all sections sequentially:

```jsx
function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Skills />
      <Experience />
      <Education />
      <Projects />
      {/* <Blogs /> — hidden unless real blog content exists */}
      <OpenSource />
      <ExtraCurricular />
      <Contact />
      <Footer />
    </div>
  );
}
```

### `SectionWrapper` — Higher-Order Component

Every section component is wrapped with `SectionWrapper(Component, 'sectionId')`:
- Applies consistent padding (`styles.padding`)
- Adds Framer Motion `staggerContainer` animation
- Sets a unique HTML `id` for anchor navigation
- Triggers `whileInView="show"` with `viewport={{ once: true, amount: 0.25 }}`

---

### 5.1 Navbar (`Navbar.jsx`)

**Behavior:**
- Fixed/sticky at top with translucent dark background + backdrop blur
- Hides on scroll-down, reappears on scroll-up (track `window.scrollY` with `useState`/`useEffect`)
- Left: Name or `SS` monogram linked to `#home`
- Right: Desktop nav links (smooth-scroll to anchors)
- Mobile: Hamburger menu → slide-out with links; selecting a link closes menu
- Keyboard accessible with visible focus indicators

**Nav Items** (only show if section has content):
- Skills & Experience → `#skills`
- Education → `#education`
- Achievements → `#achievements`
- Projects → `#projects`
- Open Source → `#openSource`
- Activities → `#activities`
- Contact → `#contactMe`

---

### 5.2 Hero (`Hero.jsx`)

**Layout:**
- Desktop: Text on left (60-65%), coding illustration on right (35-40%)
- Mobile: Stacked (text above, illustration below)

**Content to use:**

```
Greeting:  "Hi there! I'm"
Name:      "Siddharth Shetty"  (in accent teal color)
Headline:  "Computer Science Engineering | AI/ML & Software Development"
Intro:     "I enjoy building practical software and exploring how Artificial 
            Intelligence, Machine Learning, and data-driven systems can solve 
            real problems. My work spans AI-powered applications, web projects, 
            data systems, and an IoT-based physiotherapy monitoring prototype."
```

**CTAs:**
- `Explore Projects` → scrolls to `#projects`
- `Contact Me` → scrolls to `#contactMe`
- `Download Resume` → **only include if a real, current resume file/URL is provided**

**Social Icons** (small row below CTAs):
- GitHub: https://github.com/Siddharthshetty02
- LinkedIn: https://www.linkedin.com/in/siddharth-shetty-657797283/

**Illustration:**
- Use the template's Lottie coding animation (by Yamesh Sai Balaji) if its license permits reuse
- Otherwise, source a similar open-licensed Lottie from [LottieFiles](https://lottiefiles.com)
- **Never** use the template author's personal photo/logo

---

### 5.3 Skills & Experience (`Skills.jsx` + `Experience.jsx`)

**Layout:** Desktop two-column (Skills left, Experience right). Mobile: stacked.

#### Skills Data

Organize into groups with `react-icons` icons for each technology:

**Programming & Computer Science:**
- Python, SQL, OOP, Data Structures & Algorithms, Git/GitHub

**ML & Data Science:**
- Machine Learning fundamentals, XGBoost, scikit-learn, NumPy
- Feature extraction/engineering, Classification & model evaluation
- Anomaly detection (Isolation Forest), Sensor time-series processing, Applied analytics

**Generative AI:**
- LLM APIs, Prompt engineering, AI application workflows
- Agentic workflow concepts, RAG concepts

**Web / Backend / Data:**
- FastAPI, Streamlit, SQLite, REST APIs, Vercel deployment, JavaScript

**Embedded & Mobile:**
- ESP32, MPU6050, I2C, BLE, Android integration
- Complementary-filter angle estimation

**Currently Exploring:**
- pandas, Statistics, Jupyter

> [!WARNING]
> No arbitrary skill-percentage bars. Only list technologies Siddharth can reasonably explain in conversation. Beginner-level skills go in "Currently Exploring" or are omitted.

#### Experience Data

```javascript
{
  title: "Web Development Intern",
  company_name: "InAmigos Foundation",
  date: "May 2026",
  points: [
    // Keep BRIEF — do not invent responsibilities or results
    // Verify exact dates, title, and responsibilities before publishing
    // If details unavailable, use a minimal factual description
  ],
}
```

> [!CAUTION]
> Do NOT add prospective employers, target companies, or organizations Siddharth hopes to join. The experience section shows only **real past work**.

---

### 5.4 Education (`Education.jsx`)

**Layout:** Desktop two-column (illustration left, education cards right). Mobile: stacked.

**Data:**

```javascript
{
  title: "Bachelor of Engineering (B.E.), Computer Science and Engineering",
  company: "AMC Engineering College, Karnataka",
  date: "Expected Graduation: 2027",
  location: "Bengaluru, Karnataka, India",
  points: [
    // Keep factual and concise
  ],
}
```

> [!IMPORTANT]
> **OMIT CGPA** — notes conflict between 7.6 and 7.7. Do not guess. Do not show university affiliation until confirmed.

---

### 5.5 Achievements / Hackathons (`ExtraCurricular.jsx` or dedicated section)

**Use consistent cards or timeline entries** with: event name, year, role/project, short factual summary, optional evidence link.

**Known events from notes** (include only verified ones):
- Global Fintech Festival (GFF 2026)
- Datathon 2026
- TrackShift 2026
- AMD Slingshot Hackathon
- Solution Challenge 2026
- Smart Horizon International Hackathon
- PromptWars
- Tech4Bharat

> [!CAUTION]
> Notes conflict: one says 5 hackathons, another lists 8. **Do NOT display a fixed count.** Do NOT invent wins, awards, or placements. If a claim can't be verified, omit it. Show only verified entries rather than empty placeholder cards.

---

### 5.6 Projects (`Projects.jsx`) — Primary Showcase

**Layout:** Horizontally navigable carousel with dark cards.

**Card contents:** thumbnail, title, short description, tech stack icons, GitHub link, live demo link.

**Controls:** Previous/Next buttons with correct disabled states at boundaries. Touch/swipe support on mobile with scroll snapping.

**Project Data** (ordered by distinctiveness/evidence):

| # | Project | Summary | Tech | Links |
|---|---------|---------|------|-------|
| 1 | **IoT-Based Physiotherapy Monitoring** | Sensor-based prototype: knee movement estimation + exercise assessment. ESP32 + MPU6050, complementary filter, XGBoost classifier, Android BLE app. **Do NOT claim medical-grade accuracy.** Label synthetic data as synthetic. | ESP32, MPU6050, Python, scikit-learn, XGBoost, BLE, Android | GitHub (if available) |
| 2 | **CarbonWise** | Deployed carbon-footprint tracking web app. | Verify stack | [Live Demo](https://carbon-footprint-virtual-prompts.vercel.app/) |
| 3 | **DataLens AI** | AI-assisted data catalog. | FastAPI, SQLite, OpenRouter, Streamlit | GitHub (if available) |
| 4 | **Insider Threat Detection AI** | Anomaly detection prototype using Isolation Forest + Streamlit dashboard. | Isolation Forest, Streamlit | — |
| 5 | **TalentMind AI** | Full-stack AI recruitment platform. | Verify | — |
| 6 | **AI Voice Assistant** | LLM-powered voice assistant. | FastAPI | — |
| 7 | **Virtual Prompts** | Prompt generation/management tool. | Verify | — |
| 8 | **SEBISense** | AI-assisted SEBI regulatory compliance. | Verify | — |
| 9 | **Metro Document Intelligence** | ML case study with report + matplotlib diagrams. Describe as case study if that's the deliverable. | Verify | — |
| 10 | **Stadium Management System** | Inspect repo for actual functionality. | Verify from repo | [GitHub](https://github.com/Siddharthshetty02/Stadium_management.git) |
| 11 | **BioML: The Living Algorithm** | Conceptual platform mapping biology to ML concepts. Confirm implementation before listing as complete. | Verify | — |
| 12 | **Autonomous GenAI Agent Workflows** | Goal-driven agent workflows. Confirm real code/capabilities. | Verify | — |

> [!IMPORTANT]
> **Only include projects with actual implementation/evidence.** A smaller collection of credible projects is better than an inflated catalogue. If a project is incomplete or conceptual, omit from carousel until real. If URL is unknown, omit the button — never use `#` or another project's URL as placeholder.

For each project entry in `src/constants/index.js`:

```javascript
{
  id: "unique-id",
  name: "Project Name",
  description: "Short factual description",
  tags: [
    { name: "python", color: "blue-text-gradient" },
    { name: "fastapi", color: "green-text-gradient" },
  ],
  image: projectImage,          // import from assets or use placeholder
  source_code_link: "https://github.com/...",  // or omit
  live_demo_link: "https://...",               // or omit
}
```

---

### 5.7 Open Source (`OpenSource.jsx`)

**GitHub Profile:** https://github.com/Siddharthshetty02

**Options:**
1. **Dynamic** — Use the GitHub public API (no token needed for basic public data) to fetch real repos. Handle loading, empty, rate-limited, and error states gracefully.
2. **Static curated** — Show a small set of real public repositories with clickable links.

> [!CAUTION]
> - **NEVER** put a GitHub personal access token in `VITE_*` variables or client code (they're exposed to the browser!)
> - Do NOT fabricate contribution counts, PRs, or stats
> - Do NOT reuse the template author's contribution list

---

### 5.8 Blogs (`Blogs.jsx`)

**Keep hidden/disabled by default.** The template has this component but it's disabled in the reference app. Do NOT make up blog posts. Only enable when real article links are provided.

In `App.jsx`, comment out or conditionally render:
```jsx
{/* <Blogs /> */}
```

---

### 5.9 Activities / Extra-Curricular

Compact section for confirmed communities, learning programs, and technical events.

**Known from notes** (verify each before listing):
- Gen AI Academy
- Agentic Knowledge Harness
- Wadhwani Ignite Bootcamp
- Google Developers Club activities
- PromptWars and technical events

> [!WARNING]
> Do NOT label attendance as certification. Do NOT claim completion certificates unless earned. Avoid duplicating hackathons in both Achievements and Activities — put competition outcomes in Achievements, participation/learning here.

---

### 5.10 Contact & Footer (`Contact.jsx` + `Footer.jsx`)

**Contact section:**
- Heading: `Let's Connect`
- Social icons with accessible labels:
  - GitHub: https://github.com/Siddharthshetty02
  - LinkedIn: https://www.linkedin.com/in/siddharth-shetty-657797283/
  - LeetCode: https://leetcode.com/u/nc6bhxIZ0x/
  - HackerRank: https://www.hackerrank.com/profile/siddharthCS207
- Email link: **only after Siddharth provides/confirms the email address**
- Resume download: **only when a working current resume URL/file is provided**

**Footer:**
- `© Siddharth Shetty`
- Back-to-top button/link
- Attribution to original template if license requires it

---

## 6. Data Configuration — `src/constants/index.js`

This is the **master data file**. All section content is exported as named arrays/objects:

```javascript
// Navigation
export const navLinks = [
  { id: "skills", title: "Skills & Experience" },
  { id: "education", title: "Education" },
  { id: "achievements", title: "Achievements" },
  { id: "projects", title: "Projects" },
  { id: "openSource", title: "Open Source" },
  { id: "activities", title: "Activities" },
  { id: "contactMe", title: "Contact" },
];

// Profile
export const profile = {
  name: "Siddharth Shetty",
  greeting: "Hi there! I'm",
  headline: "Computer Science Engineering | AI/ML & Software Development",
  intro: "I enjoy building practical software...",
  github: "https://github.com/Siddharthshetty02",
  linkedin: "https://www.linkedin.com/in/siddharth-shetty-657797283/",
  leetcode: "https://leetcode.com/u/nc6bhxIZ0x/",
  hackerrank: "https://www.hackerrank.com/profile/siddharthCS207",
};

// Skills (array of category objects)
export const skills = [ ... ];

// Experiences (array of experience objects)
export const experiences = [ ... ];

// Education (array of education objects)  
export const education = [ ... ];

// Projects (array of project objects)
export const projects = [ ... ];

// Achievements (array)
export const achievements = [ ... ];

// Open Source repos/contributions
export const openSource = [ ... ];

// Activities
export const activities = [ ... ];

// Social links
export const socialLinks = [ ... ];

// Resume link (empty until provided)
export const resumeLink = "";
```

> [!TIP]
> Keep content separate from rendering components. A content change should only require editing this file, not rewriting UI components.

---

## 7. Animation System

### Framer Motion Variants (`src/utils/motion.js`)

The template provides these reusable animation functions:

| Function | Effect | Usage |
|----------|--------|-------|
| `textVariant(delay)` | Slide up + fade in (spring) | Section headings |
| `fadeIn(direction, type, delay, duration)` | Directional fade in | Cards, paragraphs |
| `slideIn(direction, type, delay, duration)` | Slide from edge | Panels, images |
| `staggerContainer(stagger, delayChildren)` | Orchestrates child animations | Section wrappers |

### Animation Rules

- ✅ Hero content fade/slide in on page load
- ✅ Sections reveal on scroll (once, not every scroll)
- ✅ Hover transitions on cards and icon links
- ✅ Navbar show/hide transition
- ✅ Project carousel slide transition
- ✅ Respect `prefers-reduced-motion` media query
- ❌ No animations that delay access to content
- ❌ No animations that make text hard to read

### Lottie Animation

- Hero coding illustration uses a Lottie JSON file rendered via `react-lottie`
- Original credit: "Coding Lottie" by Yamesh Sai Balaji
- If license permits reuse → keep it
- Otherwise → find similar open-licensed animation on [LottieFiles](https://lottiefiles.com) (search "coding" or "developer")

---

## 8. Assets & Content Migration

### Mandatory Replacements

Search the entire codebase for and replace/remove:

| Search For | Action |
|-----------|--------|
| `Parth` | Replace with `Siddharth Shetty` or remove |
| `mittal-parth` | Remove from visible content (keep in license attribution if required) |
| `parthmittal` | Remove from all visible content |
| Original resume URL | Remove or replace |
| Original project names/URLs | Replace with Siddharth's projects |
| Original social links | Replace with Siddharth's links |
| Original profile photo/logo | Replace with `SS` monogram or Siddharth's provided image |

### File Updates

| File | Changes |
|------|---------|
| `index.html` | Update `<title>`, meta description, favicon, OG tags |
| `src/constants/index.js` | Replace ALL personal content |
| `src/assets/` | Replace profile images, project thumbnails |
| `.env` | Remove any `VITE_GH_TOKEN` if not using server-side proxy |

### Image Guidelines

- Use real screenshots, diagrams, or hardware photos for projects
- If image unavailable → create CSS/icon-based neutral placeholder (not a misleading image)
- Optimize image sizes
- Add meaningful `alt` text to every image
- Store in `public/` or `src/assets/`

---

## 9. Responsive & Accessibility Requirements

### Breakpoints to Test

| Width | Device |
|-------|--------|
| 360px | Small mobile |
| 390px | iPhone 14 |
| 768px | Tablet |
| 1024px | Small desktop |
| 1440px | Large desktop |

### Accessibility Checklist

- [ ] Semantic HTML: `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`
- [ ] Logical heading hierarchy (h1 → h2 → h3)
- [ ] All images have appropriate `alt` text
- [ ] Adequate text/background contrast ratio
- [ ] Visible focus indicators for keyboard navigation
- [ ] Mobile menu has `aria-label` and reflects expanded/collapsed state
- [ ] `prefers-reduced-motion` reduces or disables animations
- [ ] Links opening new tabs use `rel="noopener noreferrer"` and `target="_blank"`
- [ ] All anchor IDs are unique and match navigation
- [ ] No horizontal scrollbar on any screen size
- [ ] Failed API calls show a graceful message, not blank sections or crashes

---

## 10. Build, Test & Deployment

### Build & Verify

```bash
# 1. Install dependencies
npm install

# 2. Run dev server and visually inspect all sections
npm run dev

# 3. Production build — must succeed with zero errors
npm run build

# 4. Preview the production build locally
npm run preview

# 5. Run Cypress tests if configured
npx cypress run   # or: npm run test:e2e
```

### Pre-Deployment Checklist

- [ ] `npm run build` succeeds with no errors
- [ ] All section nav links work (smooth scroll)
- [ ] Mobile hamburger menu opens, closes, and navigates
- [ ] Project carousel Previous/Next buttons work; disabled states correct
- [ ] All external links go to correct destinations
- [ ] GitHub section handles success, empty, rate-limit, and error states
- [ ] No original author content remains visible
- [ ] No secrets/tokens in client code
- [ ] Responsive layout works on all test widths

### Deployment

The template includes Netlify configuration. To deploy:

1. Push to your own GitHub repo (connected to `https://github.com/Siddharthshetty02`)
2. Connect repo to Netlify → Import existing project
3. Build command: `npm run build` (auto-detected by Netlify for Vite)
4. Publish directory: `dist`
5. Add environment variables in Netlify UI if needed (never in code)
6. Deploy

> [!WARNING]
> Do NOT push to the template author's repository. Work in your own fork/copy only.

---

## 11. Critical Rules & Acceptance Criteria

### Non-Negotiable Rules

1. **Personalize ALL content** — remove every trace of the template author
2. **Do NOT list target employers** — no "organizations I hope to join"
3. **Do NOT invent facts** — no fabricated projects, metrics, awards, or certifications
4. **Uncertain content → omit** — if it can't be verified, leave it out
5. **Keep existing architecture** — no unnecessary rewrites
6. **No fake interactions** — every link, button, and form must work or be removed
7. **Mobile-first quality** — works on phone, tablet, desktop
8. **No secrets in frontend** — `VITE_*` values are browser-exposed
9. **Respect source license** — preserve attribution if required

### Acceptance Criteria

- [ ] Page closely matches reference's dark navy/teal visual style
- [ ] Siddharth's name, intro, education, skills, projects, and links replace all original content
- [ ] Contains: Hero, Skills/Experience, Education, Achievements (if verified), Projects, Open Source, Activities (if verified), Contact/Footer
- [ ] Navbar works on desktop and mobile
- [ ] Project carousel is functional with correct disabled states
- [ ] Project links go to correct repos/demos
- [ ] No unverified claims present
- [ ] No target-employer wish list appears
- [ ] No original-author content remains
- [ ] Responsive on mobile/tablet/desktop
- [ ] Accessible markup, focus states, reduced-motion support
- [ ] `npm run build` succeeds
- [ ] No secrets exposed
- [ ] Final summary reports what was implemented and what remains to supply

---

> [!TIP]
> **To Antigravity**: Start by inspecting the cloned template and current workspace. Adapt existing components and data in `src/constants/index.js` rather than rebuilding from scratch. Match the reference's visual composition closely. Make the site entirely about **Siddharth Shetty**. Preserve working features. Use only true personal details. Omit any employer wish list. Verify before publishing uncertain claims. Run `npm run build` before finishing.

