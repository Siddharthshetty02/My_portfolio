# Antigravity Build Instructions --- Siddharth Shetty Portfolio

## Objective

Build my personal portfolio by adapting the open-source portfolio
template below as closely as practical in overall structure, visual
style, layout, and interactions. This is a **personalization of the
template**, not a portfolio for the original author.

-   **Reference repository:**
    https://github.com/mittal-parth/personal-portfolio
-   **Reference live site:** https://parthmittal.netlify.app/
-   **My GitHub:** https://github.com/Siddharthshetty02
-   **Preferred outcome:** A responsive, polished, dark-themed developer
    portfolio showing my real background, skills, projects, experience,
    activities, and contact links.

Use the reference repository's existing code as the starting point
whenever possible. Do not throw away a working project and generate a
generic replacement. First inspect the repository and the current
workspace, then implement the changes deliberately.

## 1. Important Rules

1.  **Personalize all content.** Remove the reference author's name,
    photo/logo, introduction, resume, links, education, employment
    history, projects, achievements, organizations, blog posts, and any
    other personal details.
2.  **Do not list organizations I hope to join or target employers.**
    The website is about me and my work, not where I want to work.
3.  **Do not invent facts.** Do not fabricate completed projects,
    responsibilities, awards, hackathon results, project metrics, GitHub
    contributions, user counts, performance numbers, or certifications.
4.  **Treat uncertain content carefully.** Several project
    titles/details have been recorded in my notes, but not all current
    implementations have been verified. Include items only when they
    have real supporting information or working artifacts. When a
    project is not implemented or is still a concept, do not present it
    as a finished product.
5.  **Keep the existing app architecture and dependencies where
    practical.** Avoid unnecessary rewrites or the addition of heavy
    dependencies.
6.  **No fake interactions.** Every navigation link, carousel button,
    resume link, project link, social link, and contact action must
    work. Do not show a "message sent" success state unless a real
    submission service succeeds.
7.  **Mobile-first quality.** The site must work on phone, tablet, and
    desktop.
8.  **No secrets in frontend code.** Never put a GitHub token, API key,
    or private credential in a `VITE_*` environment variable or
    client-side code. `VITE_*` values are exposed to the browser.
9.  **Respect source licensing.** Check the source repository's license
    before redistributing or reusing its code and assets. Preserve
    required license notices/attribution. Do not reuse the original
    author's personal imagery or content as mine. If the license does
    not clearly permit reuse, use the repository as a reference and
    write equivalent components with my own content and assets.
10. If the current workspace already contains a project, **inspect it
    before changing files**. Do not overwrite unrelated work.

------------------------------------------------------------------------

## 2. Start by Inspecting the Repository

The reference repository's README describes a ReactJS + Tailwind CSS
project using Vite, React Icons, Framer Motion, and Lottie. The main app
composes reusable sections such as Hero, Skills & Experience, Education,
Achievements, Projects, Blog Posts, Open Source, Extra Curricular, and
Footer. Much of the personal content is held in
`src/constants/index.js`.

### Preferred workflow

-   If the project has already been cloned into the current workspace,
    inspect its files, `package.json`, `src/App.jsx`, `src/components/`,
    `src/constants/`, `src/assets/`, `src/index.css`, and any deployment
    configuration.

-   Otherwise, clone the reference into a **new, separate working
    directory** rather than overwriting an unrelated directory:

    ``` bash
    git clone https://github.com/mittal-parth/personal-portfolio.git
    cd personal-portfolio
    npm install
    npm run dev
    ```

-   Inspect the running site and source before editing.

-   Preserve the existing React + Vite + Tailwind setup if it builds
    properly.

-   Use the existing component organization and central data
    configuration where possible.

-   Do not push changes to the template author's repository. Work in my
    own local copy/fork and connect it to my repository only when I
    choose to.

-   Before replacing data, search for the original author's name, social
    links, email, resume URL, project URLs, achievements, and image
    assets to make sure none remain in the visible site.

### Expected general technology stack

Prefer to retain the template's existing tools when already installed: -
React - Vite - Tailwind CSS - Framer Motion for subtle transitions and
on-scroll reveals - React Icons for skill/social/navigation icons -
Existing Lottie player/assets where license and suitability permit -
Existing testing tools such as Cypress, if configured

Do not add Next.js, a backend, a database, a CMS, or a separate design
system unless there is a genuine requirement. This portfolio can
primarily be a static frontend.

------------------------------------------------------------------------

## 3. Target Design and Visual Direction

Recreate the **same general visual language and page composition** as
the reference:

-   Dark navy/near-black background throughout.
-   White headings and light-gray secondary text.
-   Teal/cyan accent for the name, hover states, small highlights, and
    selected emphasis.
-   Poppins-style sans-serif typography.
-   Large, bold hero heading.
-   Spacious desktop layout with a centered maximum-width content
    container.
-   Wide left/right gutters and deliberate vertical rhythm between
    sections.
-   Rounded dark cards with thin subdued borders.
-   Subtle gradient fills and soft blurred glow effects used sparingly.
-   Icon-led skills, experience and technology details.
-   Fine timeline borders and circular timeline markers.
-   Cards that brighten or gain a gradient on hover.
-   Smooth scrolling and restrained entry animations.
-   No excessive glassmorphism, large neon effects, random gradients, or
    template-like stock imagery that makes it look unrelated to the
    reference.

### Starting color tokens

Use these as a starting point, then visually compare with the
reference: - Main background: `#00040F` or a very similar deep navy. -
Card/surface background: `#11101D` / `#14101D`. - Main text:
`#FFFFFF`. - Muted text: a low-contrast white/gray such as `#B6C3D1`;
maintain accessible contrast. - Accent teal: approximately `#82E8EB`. -
Border: subtle gray/white at low opacity.

### Typography and sizing

-   Use Poppins if available from the existing source stylesheet, with a
    robust sans-serif fallback.
-   The reference uses a very large hero title and large section titles.
    Preserve that visual hierarchy but scale it down smoothly on smaller
    screens.
-   Body text should be comfortably readable, not tiny.
-   Use consistent spacing, maximum text widths, border radii, and icon
    sizes.

### Layout behavior

-   Desktop: wider sections can use two-column layouts, with headings
    aligned consistently.
-   Mobile: stack columns, shrink hero type, prevent horizontal
    overflow, and turn multi-card sections into a usable
    swipe/scroll/stack layout.
-   Keep the background and content width consistent from top to bottom.
-   Add responsive states for nav links, project cards, timeline items,
    and footer links.

------------------------------------------------------------------------

## 4. Page Sections and Interaction Requirements

Build the page as a single-page portfolio, with components and anchor
IDs that match the navbar.

### 4.1 Navbar

Follow the reference's top navigation: - A compact personal
logo/monogram or my name at the left, linked to the top (`#home`). -
Desktop navigation on the right. - Fixed or sticky navigation with a
translucent dark background, subtle border/shadow, and backdrop blur. -
Preserve the reference behavior where the navigation can move out of the
way while scrolling down and reappear when scrolling up, if it works
smoothly. - Smooth-scroll to sections when a nav item is selected. -
Mobile hamburger menu with a clear open/closed state; selecting a link
must close the menu. - Use semantic buttons/links and
keyboard-accessible focus states.

Recommended nav items: - Skills & Experience - Education -
Achievements - Projects - Open Source - Activities - Contact

If a section has no real content, hide its nav item rather than linking
to an empty section.

### 4.2 Hero / Home

Keep the reference's overall composition: - On desktop, text on the left
and coding/technology illustration on the right. - Large greeting and
personal name. - One concise introduction beneath the heading. - Small,
visually clear social/contact shortcuts. - A primary CTA to view
projects and a secondary CTA to contact me. - Use the reference's coding
animation only if its reuse is permitted and the asset remains
appropriate. Otherwise use a suitable original/open asset, a simple
custom illustration, or a photo I provide. Do not use the template
author's photograph/logo. - On small screens, stack the content and
illustration without clipping.

#### Hero text to use

**Greeting:** `Hi there! I'm`

**Name:** `Siddharth Shetty`

**Headline:**
`Computer Science Engineering | AI/ML & Software Development`

**Intro:**
`I enjoy building practical software and exploring how Artificial Intelligence, Machine Learning, and data-driven systems can solve real problems. My work spans AI-powered applications, web projects, data systems, and an IoT-based physiotherapy monitoring prototype.`

**CTAs:** - `Explore Projects` → `#projects` - `Contact Me` →
`#contactMe` - Optional `Download Resume` only if a current resume
file/link is supplied and tested.

Do not mention target employers or organizations I hope to join.

### 4.3 Skills & Experience

Replicate the reference's dual-area section on desktop: - Left: skills
grouped by category, presented as rows/cards/timeline-like groups of
technology icons with labels. - Right: experience timeline with role,
organization, date range, and concise contributions. - On mobile, stack
the skill and experience areas.

Keep the skill set data-driven and avoid arbitrary skill-percentage
bars.

#### Skills content

**Programming and Computer Science** - Python - SQL - Object-Oriented
Programming (OOP) - Data Structures and Algorithms - Git and GitHub

**ML and Data Science** - Machine Learning fundamentals - XGBoost -
scikit-learn - NumPy - Feature extraction / feature engineering -
Classification and model evaluation - Anomaly detection with Isolation
Forest - Sensor time-series processing - Applied data analytics

**Generative AI** - LLM APIs - Prompt engineering - AI application
workflows - Agentic workflow concepts - RAG concepts

**Web / Backend / Data** - FastAPI - Streamlit - SQLite - REST API
concepts - Vercel deployment - JavaScript and web technologies

**Embedded and Mobile** - ESP32 - MPU6050 - I2C - BLE - Android
integration - Complementary-filter-based angle estimation

**Additional tools being practiced** - pandas - Statistics - Jupyter

Only display technologies I can reasonably explain in conversation. If a
skill is still beginner-level or being revised, it can be omitted or
placed in a modest "Currently exploring" group.

#### Experience content

A Web Development Intern role at **InAmigos Foundation**, with a
recorded date of **May 2026**, appears in my notes. Before publishing
it: - Verify the exact dates, official title, and responsibilities. - Do
not invent work descriptions or results. - If exact details are
unavailable, keep the experience entry brief rather than filling it with
generic claims. - If it cannot be verified, omit it until I provide
accurate details.

Do not add any prospective employer or desired organization as
experience.

### 4.4 Education

Follow the reference's education presentation: - A large section
heading. - Desktop two-column composition with an illustration on one
side and rounded education cards on the other. - Card icon or small
academic illustration, institution, degree, duration, and concise
details. - Subtle on-scroll entrance animation. - Stack cleanly on
mobile.

#### Education data

-   **Institution:** AMC Engineering College, Karnataka
-   **Degree:** Bachelor of Engineering (B.E.), Computer Science and
    Engineering
-   **Expected graduation:** 2027
-   **Location:** Bengaluru, Karnataka, India

Do not show university affiliation until confirmed. My saved notes
conflict on CGPA (7.6 in one file and 7.7 in another); **omit CGPA
rather than guessing**.

### 4.5 Achievements / Hackathons

Use the reference's dedicated achievements section rather than
cluttering the hero with awards: - Visually consistent cards or timeline
entries. - Event name and year. - My role or project. - A short, factual
summary. - Optional external link for evidence. - Only show verified
participation and outcomes.

My notes mention participation in hackathons and technical events
including: - Global Fintech Festival (GFF 2026) - Datathon 2026 -
TrackShift 2026 - AMD Slingshot Hackathon - Solution Challenge 2026 -
Smart Horizon International Hackathon - PromptWars - Tech4Bharat

There is one note that says I have participated in five hackathons,
while another file lists eight events; do not display a fixed number
until reconciled. Confirm exact event names, participation, dates, role,
and results before publishing them. **Do not invent wins or awards.** If
a claim cannot be verified, omit it.

If the data is incomplete, show only verified entries rather than empty
cards or placeholder achievements.

### 4.6 Projects --- Primary Showcase

Replicate the reference's horizontally navigable project
carousel/cards: - Large section heading. - Cards with project thumbnail,
title, short description, stack icons/tooltips, GitHub icon/link, and
live-demo link if available. - Dark border, rounded corners, and subtle
hover treatment. - Previous/next controls with correct disabled
states. - Ensure the carousel does not trap keyboard focus and works on
touch/mobile. - On narrow screens, cards should remain readable and must
not cause page-level horizontal overflow. - If the carousel is difficult
to use on mobile, allow horizontal swipe with scroll snapping.

Use a central project data array/object, as in the reference template,
so projects can be updated without rebuilding the component layout.

#### Project ordering

Start with the most distinctive and best-evidenced projects: 1. IoT
Physiotherapy Monitoring System 2. CarbonWise 3. DataLens AI 4. Insider
Threat Detection AI 5. TalentMind AI 6. AI Voice Assistant 7. Virtual
Prompts 8. SEBISense 9. Metro Document Intelligence System 10. Stadium
Management System 11. BioML: The Living Algorithm 12. Autonomous GenAI
Agent Workflows

Only include projects with actual implementation/evidence. If some are
incomplete or are only ideas, omit them from the main carousel until
they are real. A smaller collection of credible projects is better than
an inflated catalogue.

#### Project content

**Project 1: IoT-Based Intelligent Physiotherapy Monitoring and
Real-Time Feedback System** - Type: final-year major project. - Summary:
A sensor-based prototype that estimates knee movement and explores
exercise assessment/feedback. - Hardware: ESP32 and MPU6050
accelerometer/gyroscope. - Processing: complementary filter for
knee-angle estimation and time-window/repetition feature extraction. -
ML: XGBoost classifier with Python/scikit-learn. - App integration:
Android app receives angle data over BLE. - Candidate features
previously discussed: maximum angle, minimum angle, mean angle, angle
standard deviation, range, repetition duration, and peak or mean angular
velocity. Confirm the final seven model features against the final
code. - A previously discussed XGBoost configuration was
`n_estimators=100`, `max_depth=4`, `learning_rate=0.1`; check the final
training script before showing the configuration. - A synthetic dataset
of 5,000 samples was considered during development. If used, label it
synthetic and do not present synthetic-data accuracy as real-world or
clinical validation. - Include a hardware/app image, architecture
diagram, and model result only if available. - Do not claim
medical-grade accuracy or clinical validation.

**Project 2: CarbonWise** - Live demo:
https://carbon-footprint-virtual-prompts.vercel.app/ - Summary: A
deployed web application focused on carbon-footprint tracking and
awareness. - Use this live link as the demo CTA. - Verify the
implementation, tech stack, calculations, and repository before making
detailed technical or impact claims.

**Project 3: DataLens AI** - Summary: AI-assisted data catalog
project. - Technologies recorded in my notes: FastAPI, SQLite,
OpenRouter, and Streamlit. - Verify current functionality and the exact
role of each technology before publication.

**Project 4: Insider Threat Detection AI** - Summary: An
anomaly-detection prototype intended to flag unusual patterns. -
Technologies recorded: Isolation Forest and a Streamlit dashboard. - Do
not describe model output as proof of misconduct. Document the dataset
and evaluation if available.

**Project 5: TalentMind AI** - Summary recorded: Full-stack AI
recruitment platform. - Confirm actual implemented workflow, features,
repository, and demo.

**Project 6: AI Voice Assistant** - Summary recorded: LLM-powered voice
assistant. - Technology recorded: FastAPI. - Confirm whether speech
input/output and the model/API integration are implemented before
describing them as features.

**Project 7: Virtual Prompts** - Summary recorded: Prompt generation and
management tool. - Confirm its features and how it relates to the
CarbonWise deployment before publishing.

**Project 8: SEBISense** - Summary recorded: AI-assisted regulatory
compliance for SEBI filings. - Confirm whether the implementation exists
and document only verified functionality.

**Project 9: Metro Document Intelligence System** - Summary recorded: ML
case study with a written report and matplotlib diagrams. - Describe it
as a case study/report if that is the actual deliverable.

**Project 10: Stadium Management System** - Repository:
https://github.com/Siddharthshetty02/Stadium_management.git - Inspect
the repository and describe actual functionality and technology stack
only.

**Project 11: BioML: The Living Algorithm** - Summary recorded: A
conceptual interactive platform mapping ideas from biological systems to
machine-learning concepts. - Confirm the implementation and demo before
presenting it as a completed application.

**Project 12: Autonomous GenAI Agent Workflows** - Summary recorded:
Goal-driven agent workflows, multi-step processes, and tool-invocation
experiments. - Confirm the real code and exact capabilities before
publication.

The older project notes also mention a Face Recognition System, AI-Based
Disease Diagnosis, and Earth Satellite Viewer. Only add these to "More
Projects" if a working project or report can be verified. Treat
healthcare-related models as educational prototypes unless clinically
validated.

### 4.7 Open Source Contributions

The reference template has an Open Source section with contribution
cards displaying a repository/title, organization or owner/repository,
pull-request number/status, and optional additions/deletions.

Adapt this section for my GitHub account: - **GitHub profile:**
https://github.com/Siddharthshetty02 - Use links to real public
repositories or contributions. - Do not reuse the reference author's
contribution list. - If implementing dynamic GitHub API loading, handle
loading, empty, rate-limited, and error states. - Prefer a no-token
public API for simple public data or a server-side function for
authenticated requests. - Never put a personal access token in client
code or a `VITE_*` variable. - If dynamic contributions are not
reliable, show a small curated set of real repositories with clickable
links instead. - Do not fabricate contribution counts or PRs.

### 4.8 Blogs

The reference contains a Blogs component, but it is disabled in the
reference app. Keep the blog section hidden by default unless I provide
real article links. Do not make up blog posts just to fill space.

If turned on later, use a card layout with title, brief summary, publish
date, and link to the real article.

### 4.9 Extra-Curricular / Activities

Use a compact activity section for confirmed communities, hackathons,
technical meetups, or learning programs I have actually participated in.
Use event/program, my role, date if known, and one concise factual
description.

My notes mention activities or learning programs such as: - Gen AI
Academy - Agentic Knowledge Harness - Wadhwani Ignite Bootcamp - Google
Developers Club activities - PromptWars and technical events

Confirm details before listing. Do not label attendance as a
certification or claim a completion certificate unless earned. Avoid
duplicating every hackathon both here and in Achievements; use
Achievements for competition outcomes and Activities for
participation/learning.

### 4.10 Contact and Footer

Follow the reference's closing section: - A clear heading such as
`Let's connect`. - Social icons/links for GitHub and LinkedIn. - A
professional email link only after I provide/confirm the email
address. - Optional resume download only when a working current resume
URL/file is provided. - Minimal copyright line, for example
`© Siddharth Shetty`. - Back-to-top action if it fits the design.

#### Verified profile links from my notes

-   GitHub: https://github.com/Siddharthshetty02
-   LinkedIn: https://www.linkedin.com/in/siddharth-shetty-657797283/
-   LeetCode: https://leetcode.com/u/nc6bhxIZ0x/
-   HackerRank: https://www.hackerrank.com/profile/siddharthCS207
-   CarbonWise demo:
    https://carbon-footprint-virtual-prompts.vercel.app/
-   Stadium Management repository:
    https://github.com/Siddharthshetty02/Stadium_management.git

Use accessible names for social icons; do not make icon-only links
inaccessible.

------------------------------------------------------------------------

## 5. Suggested Data Organization

Retain the template's data-driven approach. Use the existing
`src/constants/index.js` or refactor it minimally into clearer data
modules only if that improves maintainability.

Possible data groups: - `profile` / `aboutMe` - `navLinks` - `skills` -
`experience` - `education` - `achievements` - `projects` - `openSource`
/ `contributions` - `activities` - `socialLinks` - `resumeLink` (leave
blank or omit until supplied)

Keep content separate from rendering components. A content change should
not require rewriting the UI component.

For every project data entry, support: - Unique ID - Title -
Description - Technology stack - Thumbnail/image path, if available -
GitHub URL, if available - Live demo URL, if available - Optional
detailed case-study URL or local page, if implemented

If a URL is unknown, omit the button. Never use `#`, an unrelated
project's URL, or the template author's link as a placeholder.

------------------------------------------------------------------------

## 6. Assets and Content Migration

-   Replace the template author's profile/logo in navigation with my
    name or a simple `SS` monogram.
-   Replace the hero animation only with a licensed, suitable animation
    or an asset I provide.
-   For project thumbnails, use my own screenshots, diagrams, hardware
    photos, app screenshots, or relevant repository images.
-   If a project image is not available, create a consistent neutral
    placeholder using CSS/iconography; do not use a misleading image of
    another project's actual product.
-   Use a local `public/` or `src/assets/` directory for images that
    belong to my site.
-   Optimize image sizes and add appropriate `alt` text.
-   Replace `index.html` document title, description, favicon, and other
    template branding.
-   Do not reuse the original author's resume, logo, profile image,
    project media, or personal information.
-   Search the final source for `Parth`, `mittal-parth`, `parthmittal`,
    the reference resume URL, and reference-specific project names.
    These should not remain as visible personal content. The original
    repository URL may remain only in a license/attribution notice if
    required.

------------------------------------------------------------------------

## 7. Animation and Interaction Details

Use subtle Framer Motion animation where the reference does: - Initial
page reveal after loading. - Hero content fade/slide in. -
Sections/cards reveal when scrolled into view, once rather than on every
scroll. - Navbar transition as it hides/shows. - Hover transitions on
cards and icon links. - Project carousel slide transition. - Respect
`prefers-reduced-motion`; provide a reduced-motion experience. - Keep
animation duration modest and avoid delaying access to important
content. - Do not use animations that make text hard to read or buttons
difficult to use.

Navigation, menus, and carousels must work with both mouse and keyboard.
Mobile taps should not depend on hover.

------------------------------------------------------------------------

## 8. Responsive and Accessibility Requirements

-   Test widths near 360px, 390px, 768px, 1024px, and 1440px.
-   No unexpected horizontal page scrolling.
-   Heading levels must be logical.
-   Every meaningful image needs appropriate `alt` text; decorative
    images should have empty alt text.
-   Use semantic HTML: `nav`, `main`, `section`, `article`, `footer`,
    buttons and anchors.
-   Ensure adequate text/background contrast.
-   Visible focus indicators for keyboard navigation.
-   Mobile menu has an accessible label and reflects its
    expanded/collapsed state.
-   Disable or reduce motion where the user requests reduced motion.
-   Links opening new tabs should use safe attributes and clear
    behavior.
-   All anchor IDs must be unique and consistent with navigation.
-   Make empty or failed external API data understandable, not a blank
    section or runtime crash.

------------------------------------------------------------------------

## 9. Build, Test, and Deployment

After implementation:

1.  Install dependencies only if necessary.
2.  Run the development server and visually inspect the full page.
3.  Run `npm run build`.
4.  Fix all build errors and warnings caused by my changes.
5.  If Cypress is configured and tests are relevant, run the available
    tests.
6.  Check all external links and section navigation.
7.  Test the mobile menu and project carousel on narrow screens.
8.  Test the GitHub section's success, empty, rate-limited, and failure
    states if dynamic.
9.  Confirm no reference author's personal content remains.
10. Confirm no secrets were committed.
11. Leave the project in a runnable state and summarize files changed,
    commands run, build/test status, any configuration needed, and
    anything I must supply manually.

Keep the existing deployment configuration unless there is a clear
reason to change it. The reference project includes Netlify-related
configuration; do not remove functions or configuration blindly. If
deploying to a platform other than Netlify, verify which features depend
on Netlify functions and adapt those deliberately. The static frontend
should still build using `npm run build`.

------------------------------------------------------------------------

## 10. Acceptance Criteria

Do not consider the task complete until all applicable criteria pass:

-   [ ] The page closely follows the reference's dark navy/teal visual
    style and section composition.
-   [ ] My name, introduction, education, skills, projects, and links
    replace all personal content from the original author.
-   [ ] It contains a hero, skills/experience, education, achievements
    (if verified), project showcase, open-source/projects links,
    activities (if verified), and contact/footer.
-   [ ] The navbar links work and mobile navigation opens, closes, and
    navigates properly.
-   [ ] Project carousel buttons work and disabled states are correct.
-   [ ] Project links lead to the right repositories and demos.
-   [ ] Inaccurate or unverified claims are omitted rather than guessed.
-   [ ] No target-employer/organization wish list appears.
-   [ ] No original-author resume, personal links, project claims, or
    personal image remains.
-   [ ] Responsive layout works on mobile, tablet, and desktop.
-   [ ] Accessible semantic markup, focus states, and reduced-motion
    behavior are present.
-   [ ] `npm run build` succeeds.
-   [ ] No secrets or private credentials are exposed.
-   [ ] The final summary accurately reports what was implemented and
    what remains to be supplied.

## Final Instruction to Antigravity

**Start by inspecting the reference template and current workspace, then
adapt the existing components and data rather than rebuilding a generic
portfolio. Match its visual composition and interactions closely, but
make the site entirely about Siddharth Shetty. Preserve working
features, use only true personal details, omit any employer wish list,
verify before publishing uncertain claims, and run the production build
before finishing.**
