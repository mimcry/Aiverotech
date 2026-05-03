<div align="center">

# ⚡ AiveroTech

### AI-First Technology Partner — Web, Mobile, AI & Cloud

[![Next.js](https://img.shields.io/badge/Next.js-16.2-black?style=flat-square&logo=next.js)](https://nextjs.org)
[![React](https://img.shields.io/badge/React-19-61DAFB?style=flat-square&logo=react)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=flat-square&logo=typescript)](https://www.typescriptlang.org)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-v4-06B6D4?style=flat-square&logo=tailwindcss)](https://tailwindcss.com)
[![License](https://img.shields.io/badge/License-MIT-green?style=flat-square)](LICENSE)

**Live site →** [aiverotech.com](https://aiverotech.com)

</div>

---

## Overview

AiveroTech is the official company website for **AiveroTech** — an AI-first technology company that helps startups and enterprises design, build, automate, and scale digital products.

The site is a high-performance marketing platform built with **Next.js 16**, **React 19**, and **Tailwind CSS v4**, featuring a working contact form, animated sections, and a real case study showcase.

---

## Features

- **Animated landing page** — particle hero, scroll-triggered sections, glassmorphism UI
- **HiLux Limo case study** — real featured project with role-based breakdown (Customer / Driver / Admin)
- **Working contact form** — sends emails via [Resend](https://resend.com) with a styled HTML template
- **Success dialog** — animated modal confirming message receipt
- **Fully responsive** — mobile-first layout across all sections
- **Dark theme** — custom design system with Tailwind v4 CSS variables

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 16 (App Router) |
| Language | TypeScript 5 |
| Styling | Tailwind CSS v4 |
| Animations | Framer Motion 12 |
| Icons | Lucide React |
| Email | Resend API |
| Font | Inter (Google Fonts via next/font) |

---

## Project Structure

```
src/
├── app/
│   ├── api/
│   │   └── contact/route.ts     # Email route handler (Resend)
│   ├── globals.css              # Tailwind v4 theme + custom utilities
│   ├── layout.tsx               # Root layout + metadata
│   └── page.tsx                 # Landing page composition
│
└── components/
    ├── Navbar.tsx
    ├── Footer.tsx
    ├── sections/
    │   ├── Hero.tsx             # Animated hero with particle canvas
    │   ├── TrustBar.tsx         # Scrolling client logo bar
    │   ├── Services.tsx         # Expandable service cards
    │   ├── FeaturedWork.tsx     # HiLux Limo case study
    │   ├── AIShowcase.tsx       # AI features + live chat demo
    │   ├── TechStack.tsx        # Technology badges
    │   ├── WhyUs.tsx            # Differentiators + animated stats
    │   ├── Testimonials.tsx     # Auto-rotating testimonials
    │   ├── Process.tsx          # 5-step process timeline
    │   └── CTA.tsx              # Contact form + success dialog
    └── ui/
        ├── SectionHeading.tsx
        └── AnimatedCounter.tsx
```

---

## Getting Started

### Prerequisites

- Node.js 18+
- npm / yarn / pnpm

### Installation

```bash
# Clone the repo
git clone https://github.com/mimcry/Aiverotech.git
cd Aiverotech

# Install dependencies
npm install
```

### Environment Variables

Create a `.env.local` file in the project root:

```env
# Get your free key at https://resend.com (100 emails/day free)
RESEND_API_KEY=re_xxxxxxxxxxxxxxxxxxxx
```

> The contact form will not send emails without this key.

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build

```bash
npm run build
npm start
```

---

## Contact Form Setup

The contact form POSTs to `/api/contact` which forwards messages to **salongautam4@gmail.com** using the Resend API.

1. Sign up at [resend.com](https://resend.com) (free)
2. Create an API key
3. Add it to `.env.local` as `RESEND_API_KEY`
4. Restart the dev server

Emails arrive with a styled HTML template including sender info, message body, and a one-click reply button.

---

## Featured Project — HiLux Limo

> NYC luxury transportation platform built for **Trupasko Services LLC**

A full-stack ride-booking system with three user roles:

| Role | Capabilities |
|---|---|
| **Customer** | Book rides, apply promo codes, pay via Stripe, track driver |
| **Driver** | OTP-verified signup, trip assignments, status updates, earnings |
| **Admin** | Full reservation control, driver payouts, fleet & promo management |

**Stack:** Next.js · Stripe · OTP Auth · PDF Generation · Admin Panel

**Live →** [nychiluxlimo.com](https://www.nychiluxlimo.com)

---

## Deployment

### Vercel (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

Add `RESEND_API_KEY` to your Vercel project environment variables under **Settings → Environment Variables**.

### Other Platforms

Any platform that supports Node.js 18+ will work (Railway, Render, Fly.io, etc.). Make sure to set the `RESEND_API_KEY` environment variable.

---

## License

MIT © [AiveroTech](https://aiverotech.com)

---

<div align="center">
  <sub>Built with ❤️ by the AiveroTech team</sub>
</div>
