# IMCLABS Landing Page

A highly polished, modern landing page for IMCLABS - an intelligent prescription management system powered by machine learning.

## Features

- **Modern Tech Stack**: Built with React 18, TypeScript, and Vite for blazing-fast development
- **Beautiful Design**: Soft neumorphic design with fresh Menta/Lavanda color palette
- **Smooth Animations**: Powered by Framer Motion for delightful microinteractions
- **Fully Responsive**: Mobile-first design that looks great on all devices
- **Accessible**: WCAG AA compliant with semantic HTML and keyboard navigation
- **Optimized Performance**: Lazy loading, optimized images, and efficient animations

## Tech Stack

- **Framework**: React 18 + TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS v3
- **Animations**: Framer Motion
- **Icons**: Inline SVG
- **Fonts**: Google Fonts (Nunito)

## Getting Started

### Prerequisites

- Node.js 16+ and npm

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open your browser to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The optimized production build will be in the `dist/` directory.

### Preview Production Build

```bash
npm run preview
```

## Deployment

### Deploy to Vercel

This project is optimized for deployment on Vercel. Follow these steps:

#### Option 1: Deploy via Vercel CLI

1. Install Vercel CLI globally:
```bash
npm install -g vercel
```

2. Deploy to Vercel:
```bash
vercel
```

3. Follow the prompts to complete deployment

#### Option 2: Deploy via GitHub

1. Push your code to a GitHub repository
2. Visit [vercel.com](https://vercel.com)
3. Sign in and click "New Project"
4. Import your GitHub repository
5. Vercel will automatically detect the Vite configuration
6. Click "Deploy"

The project includes:
- `vercel.json` - Configuration for proper SPA routing
- `.vercelignore` - Optimized file exclusions for faster deployments

Vercel will automatically:
- Install dependencies
- Run the build command
- Deploy the `dist/` directory
- Set up automatic deployments for future commits

## Project Structure

```
imclabs-landing/
├── src/
│   ├── components/          # Reusable UI components
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   ├── Container.tsx
│   │   ├── AnimatedSection.tsx
│   │   ├── IconWrapper.tsx
│   │   ├── Header.tsx
│   │   └── Footer.tsx
│   ├── sections/            # Landing page sections
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Features.tsx
│   │   ├── HowItWorks.tsx
│   │   ├── Benefits.tsx
│   │   └── ContactCTA.tsx
│   ├── assets/              # Images and static files
│   ├── App.tsx              # Main app component
│   ├── main.tsx             # App entry point
│   └── index.css            # Global styles
├── public/                  # Public static files
├── index.html               # HTML template
├── tailwind.config.js       # Tailwind configuration
├── vite.config.ts           # Vite configuration
└── package.json
```

## Design System

### Color Palette

- **Menta Primary**: `#5CD6B2` - Used for primary CTAs and accents
- **Lavanda Primary**: `#A29BFE` - Used for secondary elements and gradients
- **Neutral Grays**: Full range from 50 to 900 for text and backgrounds

### Typography

- **Font Family**: Nunito (weights: 300, 400, 600, 700, 800)
- **Headings**: Bold, large sizes with gradient accents
- **Body**: Regular weight, optimized for readability

### Neumorphic Shadows

Custom shadow utilities for soft, modern depth:
- `shadow-neu`: Base neumorphic shadow
- `shadow-neu-sm`: Small neumorphic shadow
- `shadow-neu-hover`: Elevated hover state
- `shadow-neu-inset`: Inset shadow for inputs

## Components

### Atomic Components

- **Button**: Multiple variants (menta, lavanda, outline, ghost) with hover animations
- **Card**: Neumorphic cards with automatic scroll reveal
- **Container**: Responsive wrapper with size variants
- **AnimatedSection**: Scroll-triggered fade-up animations
- **IconWrapper**: Gradient icon containers

### Layout Components

- **Header**: Fixed navigation with scroll effect and smooth scrolling
- **Footer**: Contact info, social links, and branding

### Sections

All sections are built with responsiveness and accessibility in mind:

1. **Hero**: Eye-catching intro with animated device mockups
2. **About**: Company mission statement
3. **Features**: 4 key problems solved by the platform
4. **HowItWorks**: 6-step process visualization
5. **Benefits**: Two-column layout for doctors and patients
6. **ContactCTA**: Contact form with validation

## Animations

All animations are optimized for performance:

- Scroll-triggered animations with `IntersectionObserver`
- Staggered delays for sequential reveals
- Smooth hover states (200-300ms duration)
- Floating device mockups in Hero
- Form submission feedback

## Accessibility

- Semantic HTML5 elements
- ARIA labels where needed
- Keyboard navigation support
- Focus indicators (visible focus rings)
- Color contrast meets WCAG AA standards
- Smooth scroll behavior

## Performance Optimizations

- Vite for fast HMR and optimized builds
- Lazy loading for images
- CSS animations over JavaScript where possible
- Minimal bundle size with tree-shaking
- Optimized Tailwind CSS (PurgeCSS in production)

## Contact

- Email: contacto@imclabs.com
- Website: [IMCLABS](https://imclabs.com)

## License

© 2025 IMCLABS. All rights reserved.
# imclabs-landing
