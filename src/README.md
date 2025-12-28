# Refactored Portfolio Website

This is your portfolio website broken down into organized, manageable files.

## File Structure

```
src/
├── App.jsx                    # Main app with routing (70 lines)
├── components/
│   ├── CustomCursor.jsx      # Custom cursor effect (20 lines)
│   ├── ParticleCanvas.jsx    # Particle background (100 lines)
│   ├── Navigation.jsx        # Nav bar + mobile menu (70 lines)
│   └── Footer.jsx            # Footer with social links (40 lines)
├── pages/
│   ├── HomePage.jsx          # Landing page (60 lines)
│   ├── AboutPage.jsx         # About me section (70 lines)
│   ├── ProjectsPage.jsx      # Projects showcase (90 lines)
│   ├── SkillsPage.jsx        # Skills breakdown (80 lines)
│   ├── BlogPage.jsx          # Blog posts preview (100 lines)
│   └── ContactPage.jsx       # Contact form (140 lines)
└── styles/
    └── animations.css        # All CSS animations (90 lines)
```

## How to Use

### Option 1: Replace Everything

1. **Delete your current `src` folder**
2. **Create these folders:**
   ```
   src/
   src/components/
   src/pages/
   src/styles/
   ```
3. **Copy each file from `refactored-app/` to your project's `src/` folder**
4. **Make sure you have lucide-react installed:**
   ```bash
   npm install lucide-react
   ```
5. **Run the dev server:**
   ```bash
   npm run dev
   ```

### Option 2: Manual Migration

If you want to keep your existing setup:

1. Create the folder structure in your `src/` directory
2. Copy files one by one
3. Update import paths if needed

## Benefits of This Structure

✅ **Easy to find things** - Each page and component in its own file
✅ **Easy to edit** - Change one section without scrolling through 800 lines
✅ **Reusable components** - Use Navigation, Footer, Cursor anywhere
✅ **Better for teams** - Multiple people can work on different files
✅ **Easier debugging** - Errors point to specific small files

## Files Explained

### Components
- **CustomCursor** - The green circle that follows your mouse
- **ParticleCanvas** - The grey particles that move away from cursor
- **Navigation** - Top menu bar with page links
- **Footer** - Bottom section with social links

### Pages
Each page is a separate component that gets displayed based on the URL hash.

### Styles
- **animations.css** - All the CSS animations, fonts, and effects

## Making Changes

Want to edit the About page?
→ Open `src/pages/AboutPage.jsx`

Want to change the navigation?
→ Open `src/components/Navigation.jsx`

Want to add a new page?
→ Create `src/pages/NewPage.jsx`
→ Import it in `App.jsx`
→ Add a route in `App.jsx`

## Notes

- All files use ES6 imports/exports
- Tailwind classes are already configured
- The custom cursor only works on desktop
- Mobile menu is responsive and works on small screens
