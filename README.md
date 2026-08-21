# Portfolio — Hersa Rizky Syahputra

My personal portfolio site: [hersa-web.vercel.app](https://hersa-web.vercel.app)

Full-stack developer from Semarang, Indonesia. The site covers my work history, the products I've
shipped, how I work with AI coding agents, and how to reach me.

## Stack

| | |
|---|---|
| Framework | React 18 + TypeScript |
| Build | Vite 5 |
| Styling | Tailwind CSS |
| Animation | Framer Motion |
| Icons | Lucide React |
| Contact form | EmailJS |
| Hosting | Vercel |

## Structure

```
src/
├── components/     UI sections (Hero, About, Experience, Skills, Projects, AIWorkflow, Contact)
├── data/           Project case studies, kept separate from presentation
└── App.tsx         Section composition, theme, and scroll state
```

Project content lives in `src/data/projects.ts` so case studies can be edited without touching
component code. Each entry carries the role I held, the problem, what I built, and the stack.

## Running locally

```bash
npm install
npm run dev      # dev server on http://localhost:5173
npm run build    # type-check and production build
npm run preview  # serve the production build
```

## Notes

- Light and dark themes, with the visitor's system preference as the default.
- Client work from my time at a Singapore-based company is described but not linked: those
  repositories are private.
