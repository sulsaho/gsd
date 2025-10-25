# Claude Code Build Instructions: Government Services Directory

## Project Goal

Build a **fast, modern, maintainable government services directory website** using **Astro + TailwindCSS + React (for search)**.

The site is a one-stop directory where citizens can find government services by department, search for services, and see requirements, costs, contact info, and processing times.

---

## Why These Technologies

- **Astro**: Generates static HTML (extremely fast, even on slow internet)
- **TailwindCSS**: Modern styling without design skills needed
- **React**: Only used for the interactive search component (Astro renders to static HTML)
- **JSON**: All services data in one file, easy for non-coders to edit

---

## Project Structure to Generate

Create this exact folder structure:

```
government-services-directory/
├── src/
│   ├── layouts/
│   │   └── BaseLayout.astro
│   ├── pages/
│   │   ├── index.astro
│   │   └── service/
│   │       └── [id].astro
│   ├── components/
│   │   ├── SearchBar.tsx
│   │   ├── ServiceCard.astro
│   │   ├── DepartmentSection.astro
│   │   └── Navigation.astro
│   ├── data/
│   │   └── services.json
│   └── styles/
│       └── globals.css
├── public/
├── astro.config.mjs
├── tailwind.config.js
├── tsconfig.json
├── package.json
└── README.md
```

---

## Files to Generate

### 1. package.json

Must include dependencies:
- astro
- react
- react-dom
- @astrojs/react
- tailwindcss
- postcss
- autoprefixer
- typescript

Ensure build commands are:
- `npm run dev` (dev server)
- `npm run build` (static build)
- `npm run preview` (preview build)

### 2. astro.config.mjs

Configure Astro with:
- React integration enabled
- Output format: static
- Base URL configuration

### 3. tailwind.config.js

Modern styling configuration with:
- Professional color palette (blues/greens)
- Responsive design
- TailwindCSS utilities
- Content paths configured for src/

### 4. tsconfig.json

TypeScript configuration for Astro and React projects.

### 5. src/layouts/BaseLayout.astro

Master layout component that includes:
- Header with navigation
- Main content slot
- Footer with government info
- Metadata and SEO tags
- Mobile responsive

### 6. src/pages/index.astro

Homepage with:
- Hero section with search bar (embedded SearchBar component)
- List of all ministries
- Expandable department sections
- Service cards for each service
- Professional, clean design
- Mobile responsive

### 7. src/pages/service/[id].astro

Dynamic service detail page with:
- Service name and description
- Requirements list
- Processing time
- Cost
- Contact information (name, phone, email)
- Office address and hours
- External link (if available)
- Breadcrumb navigation back to home
- Print-friendly styling
- Mobile responsive

### 8. src/components/SearchBar.tsx

React component for client-side search:
- Input field at top of page
- Real-time search as user types
- Filters services by: name, description, ministry, department
- Shows matching services below input
- Debounced for performance
- Mobile-friendly
- Shows result count

### 9. src/components/ServiceCard.astro

Reusable component displaying:
- Service name (as clickable link)
- Brief description
- Cost
- Processing time
- Ministry/department (visual indicator)
- Hover effects

### 10. src/components/DepartmentSection.astro

Component grouping services:
- Department name with icon
- List of service cards
- Collapsible/expandable sections
- Professional styling

### 11. src/components/Navigation.astro

Header component with:
- Government name/logo area
- Simple navigation
- Mobile hamburger menu (if needed)
- Professional styling

### 12. src/styles/globals.css

Custom CSS:
- Global font sizing and spacing
- Color variables (optional, TailwindCSS handles most)
- Custom animations if needed
- Print styles

### 13. src/data/services.json

**CRITICAL: This is the single source of truth for all content**

JSON structure with:

```json
{
  "lastUpdated": "2025-10-25",
  "government": {
    "name": "Government of The Gambia",
    "contact": "+220-XXX-XXXX",
    "website": "www.government.gm"
  },
  "ministries": [
    {
      "id": "health",
      "name": "Ministry of Health",
      "description": "Health services and licensing",
      "phone": "+220-XXX-XXXX",
      "email": "info@health.gm",
      "website": "https://health.gm",
      "departments": [
        {
          "id": "health-licensing",
          "name": "Licensing & Registration",
          "icon": "certificate",
          "services": [
            {
              "id": "medical-license",
              "name": "Medical Professional License",
              "description": "License for doctors, nurses, etc",
              "requirements": [
                "Bachelor's degree in medical field",
                "Pass licensing exam",
                "Police clearance certificate"
              ],
              "processingTime": "4-6 weeks",
              "cost": "D2,500",
              "contactName": "Licensing Department",
              "contactPhone": "+220-XXX-XXXX",
              "contactEmail": "licensing@health.gm",
              "officeAddress": "123 Health Building, Banjul",
              "officeHours": "Monday-Friday, 8 AM - 4 PM",
              "link": "https://health.gm/licenses/medical",
              "notes": "Original documents required"
            }
          ]
        }
      ]
    },
    {
      "id": "interior",
      "name": "Ministry of Interior",
      "description": "Internal security and admin services",
      "phone": "+220-XXX-XXXX",
      "email": "info@interior.gm",
      "website": "https://interior.gm",
      "departments": [
        {
          "id": "interior-passports",
          "name": "Passport & Travel",
          "icon": "passport",
          "services": [
            {
              "id": "passport-new",
              "name": "New Passport Application",
              "description": "Apply for your first passport",
              "requirements": [
                "Birth certificate (original)",
                "National ID or voter card",
                "2 passport photos"
              ],
              "processingTime": "5-7 working days",
              "cost": "D1,200",
              "contactName": "Passport Office",
              "contactPhone": "+220-XXX-XXXX",
              "contactEmail": "passports@interior.gm",
              "officeAddress": "Independence Drive, Banjul",
              "officeHours": "Monday-Friday, 8 AM - 5 PM",
              "link": "https://interior.gm/services/passport"
            }
          ]
        }
      ]
    }
  ]
}
```

Include at least 3 ministries with 2-3 departments each, and 2-3 services per department.

### 14. README.md

Documentation for non-coders:

```markdown
# Government Services Directory

## What This Is
A website showing all government services in one place.

## How to Edit Services

1. Open `src/data/services.json`
2. Find the service you want to edit
3. Change the information (name, phone, requirements, etc)
4. Save the file
5. Push to GitHub - the website updates automatically

## Adding a New Service

1. Open `src/data/services.json`
2. Find the right ministry and department
3. Copy an existing service block
4. Fill in your new information
5. Save and push to GitHub

## Adding a New Department

1. Open `src/data/services.json`
2. Find the right ministry
3. Copy a department block
4. Fill in new department name and services
5. Save and push to GitHub

## Adding a New Ministry

1. Open `src/data/services.json`
2. Copy an entire ministry block
3. Change the name, ID, and departments
4. Save and push to GitHub

## Deploying to Netlify

1. Push code to GitHub
2. Go to netlify.com
3. Connect your GitHub repo
4. Netlify auto-deploys on every push

## Development

```bash
npm install      # Install dependencies
npm run dev      # Start local server (http://localhost:3000)
npm run build    # Build for production
```
```

---

## Design Requirements

- **Modern, professional appearance** (government quality)
- **Mobile responsive** (works on phones and tablets)
- **Clean color scheme** (blues/greens, professional)
- **Easy to navigate** (search at top, clear hierarchy)
- **Readable fonts** (good contrast, appropriate sizing)
- **Accessible** (good alt text, ARIA labels where needed)
- **Fast** (minimal animations, optimized images)

---

## Functionality Requirements

1. **Search**: Real-time client-side search across all services
2. **Filter**: Services organized by ministry and department
3. **Navigation**: Breadcrumbs and back buttons for easy navigation
4. **Links**: Clickable external links to government websites where available
5. **Contact Info**: Phone, email, address all visible
6. **Requirements**: Clear list of what's needed for each service
7. **Processing Time**: How long each service takes
8. **Cost**: Clear pricing information

---

## Performance Requirements

- **Lighthouse score**: 95+ (Google Performance audit)
- **Page load time**: <2 seconds (even on slow 3G internet)
- **Search response**: <100ms (as user types)
- **No JavaScript on initial load** (except search component)
- **Optimized images**: All images compressed
- **Small CSS bundle**: TailwindCSS purges unused styles

---

## Build Checklist

- [ ] All 14 files generated correctly
- [ ] `npm install` works without errors
- [ ] `npm run dev` starts without errors
- [ ] Homepage displays all services
- [ ] Search functionality works
- [ ] Individual service pages load correctly
- [ ] Mobile responsive (test on phone size)
- [ ] Navigation works correctly
- [ ] All links are clickable
- [ ] Styling looks professional and clean
- [ ] No console errors in browser
- [ ] `npm run build` produces dist/ folder
- [ ] Ready to deploy to Netlify

---

## After Build Complete

1. Run `npm install`
2. Run `npm run dev`
3. Test locally at http://localhost:3000
4. Verify search works
5. Verify mobile responsiveness
6. Fix any issues
7. Run `npm run build`
8. Push to GitHub
9. Deploy to Netlify

---

## Important Notes

- **Do NOT hardcode content into components.** All content comes from `services.json`
- **Make it simple.** Government staff with no coding experience should be able to edit the JSON file
- **Use React only for search.** Everything else is Astro for maximum performance
- **Optimize for slow internet.** Remember the use case: Gambia with variable connectivity
- **Keep it maintainable.** Future developers (or government staff) need to understand it easily

---

**Generate all files now. Make it production-ready.**