# TalentFlow

A recruiter dashboard built from a Figma design, implementing three screens:

- **Dashboard** — metrics bento grid (total members, follow-ups, avg. performance, recent activity) + an activity stream.
- **Member List** — team overview with summary stats and member cards (expandable to show all 8 members).
- **Member Detail** — profile header, quarterly performance history, recent activity log, and a follow-up notes form.

## Tech stack

- [React 18](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/) for dev/build tooling
- [Tailwind CSS](https://tailwindcss.com/) for styling (design tokens defined in `tailwind.config.js`)
- [React Router](https://reactrouter.com/) for navigation
- [lucide-react](https://lucide.dev/) for icons

## Getting started

```bash
npm install
npm run dev
```

Then open the URL printed in the terminal (default `http://localhost:5173`).

## Scripts

- `npm run dev` — start the dev server
- `npm run build` — type-check and build for production
- `npm run preview` — preview the production build

## Project structure

```
src/
  components/   Reusable UI (AppShell, TopAppBar, BottomNav, Avatar, StatusBadge)
  data/         Mock member + activity data and types
  pages/        Dashboard, MemberList, MemberDetail, Settings
  App.tsx       Routes
  main.tsx      App entry
```

## Design notes

- Colors, fonts (Hanken Grotesk / Inter / Geist), shadows, and radii are mapped from the
  Figma file into Tailwind theme tokens, so the implementation stays close to the source design.
- The app is laid out inside a phone-style frame to match the mobile design; it scales to full
  screen on small viewports.
- Avatars are rendered from initials (no remote image dependencies) so the UI works offline.
