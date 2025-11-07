# Quick Start Guide

## Run the Development Server

```bash
npm run dev
```

Then open your browser to `http://localhost:5173`

## Build for Production

```bash
npm run build
```

## Preview Production Build

```bash
npm run preview
```

## Project Highlights

### 🎨 Design Features
- **Neumorphic Design**: Soft shadows create depth without harsh borders
- **Fresh Color Palette**: Menta (#5CD6B2) and Lavanda (#A29BFE)
- **Smooth Animations**: Framer Motion powers all interactions
- **Mobile-First**: Fully responsive on all devices

### 📦 What's Included

1. **Header** - Fixed navigation with smooth scroll
2. **Hero Section** - Animated device mockups (iPhone + Notebook)
3. **About Section** - Company mission
4. **Features Section** - 4 problem cards with icons
5. **How It Works** - 6-step process visualization
6. **Benefits Section** - Doctors vs Patients benefits
7. **Contact Form** - With validation and mock submission
8. **Footer** - Social links and contact info

### 🚀 Key Technologies

- React 18 + TypeScript
- Vite (super fast builds)
- Tailwind CSS (utility-first styling)
- Framer Motion (animations)

### 🎯 Next Steps

1. Replace mock images with your actual screenshots
2. Update social media links in Footer.tsx
3. Integrate real form backend in ContactCTA.tsx
4. Add your actual logo in Header.tsx
5. Customize colors in tailwind.config.js if needed

### 📝 Customization Tips

**Change Colors:**
Edit `tailwind.config.js` - update the menta/lavanda color values

**Modify Content:**
All content is in the section files under `src/sections/`

**Add New Sections:**
1. Create component in `src/sections/YourSection.tsx`
2. Export from `src/sections/index.ts`
3. Import and add to `src/App.tsx`

**Update Images:**
Place new images in `src/assets/images/` and update imports

### 🐛 Common Issues

**TypeScript errors on images:**
Make sure `src/vite-env.d.ts` exists with image module declarations

**Tailwind not working:**
Run `npm run dev` - Vite will process Tailwind automatically

**Build fails:**
Check for TypeScript errors with `npm run build`

## Need Help?

Check the main README.md for full documentation!
