# Joanna Kardas-Śmiechowicz — Digital Business Card

A modern, high-performance web application and digital business card for **Joanna Kardas-Śmiechowicz**, combining real estate brokerage services with expert legal advisory.

Built with **Astro** and deployed at the edge via **Cloudflare Workers**.

---

## Features

- **Property Listings Carousel**: Interactive showcase for featured real estate offers powered by Swiper.js.
- **Legal & Real Estate Advisory**: Integrated presentation of services, credentials, and client consultation booking.
- **MDX Blog Engine**: Powered by Astro Content Collections for publishing real estate insights and legal guides.
- **Edge SSR & Speed**: Instant page loads with Astro Server-Side Rendering (SSR) deployed to Cloudflare.
- **Fully Responsive & Animated**: Micro-interactions, typewriter effects, and responsive design tuned for mobile and desktop.

---

## Tech Stack

- **Framework**: [Astro](https://astro.build)
- **Deployment**: [Cloudflare Workers / Pages](https://workers.cloudflare.com) (`@astrojs/cloudflare` + `wrangler`)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com), [DaisyUI](https://daisyui.com)
- **Content**: Astro Content Collections + [MDX](https://mdxjs.com)
- **UI Components**: Swiper.js

---

## Getting Started

### Prerequisites

- Node.js `>= 22.12.0`
- npm

### Installation

```bash
# Clone the repository
git clone https://github.com/your-username/jks_business_card.git

# Navigate to project directory
cd jks_business_card

# Install dependencies
npm install
```

### Development

Run the local development server:

```bash
npm run dev
```

Open [http://localhost:4321](http://localhost:4321) in your browser to view the site.

---

## ⚙️ Available Scripts

| Script | Description |
| :--- | :--- |
| `npm run dev` | Starts local dev server at `localhost:4321` |
| `npm run build` | Builds the production bundle to `./dist/` |
| `npm run preview` | Builds and starts a local Cloudflare Wrangler dev server |
| `npm run deploy` | Builds and deploys the site to Cloudflare Workers |
| `npm run generate-types` | Generates Wrangler environment type definitions |

---

## 📁 Project Structure

```text
jks_business_card/
├── public/               # Static assets (images, favicon)
├── src/
│   ├── components/       # Reusable Astro UI components (Footer, AuthorCard, etc.)
│   ├── content/          # MDX blog posts and content collections
│   ├── data/             # Static property offers & social media configuration
│   ├── layouts/          # Page layouts (BaseLayout)
│   ├── pages/            # Site routes & blog dynamic pages
│   └── styles/           # Global CSS and custom styles
├── astro.config.mjs      # Astro configuration & Cloudflare adapter setup
├── wrangler.jsonc        # Cloudflare Worker deployment configuration
└── package.json
```
