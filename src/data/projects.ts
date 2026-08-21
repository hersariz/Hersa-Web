export type Project = {
  id: number;
  title: string;
  category: string;
  role: string;
  year: string;
  image: string;
  description: string;
  technologies: string[];
  liveLink?: string;
  githubLink?: string;
  images: string[];
  challenge: string;
  solution: string;
  features: string[];
};

export const projects: Project[] = [
  {
    id: 1,
    title: 'Government Data Visualization Dashboard',
    category: 'Professional Work',
    role: 'Frontend Developer — owned the frontend end to end',
    year: '2025 – 2026',
    image: '/gambar/nextera/dataviz.svg',
    images: ['/gambar/nextera/dataviz.svg'],
    description:
      'A data-visualization platform for a European government client that turns large public survey datasets into interactive charts and maps for non-technical readers.',
    technologies: ['Angular 19', 'TypeScript', 'amCharts 5', 'ApexCharts', 'GraphQL', 'Apollo', 'Transloco', 'Tailwind CSS'],
    challenge:
      'Public survey data is only useful if people who are not analysts can read it. The dashboard had to stay responsive while rendering thousands of data points, support complex filtering, and present every label and chart in multiple languages.',
    solution:
      'I built the frontend in Angular 19 with amCharts 5 and ApexCharts for interactive charts and geographic maps, on top of an Apollo GraphQL data layer. API types were generated from the schema with GraphQL codegen, so a mismatch between frontend and backend fails the build instead of reaching users. Multi-language support was handled with Transloco.',
    features: [
      'Interactive charts and geographic map visualizations',
      'GraphQL data layer with generated types and complex filtering',
      'Full multi-language support across UI and chart content',
      'Export views as images for offline reporting',
      'Rendering tuned for large datasets',
    ],
  },
  {
    id: 2,
    title: 'Travel Booking Platform — Singapore',
    category: 'Professional Work',
    role: 'Frontend Developer — API layer, auth, booking and payment flows',
    year: '2025 – 2026',
    image: '/gambar/nextera/ukaly.svg',
    images: ['/gambar/nextera/ukaly.svg'],
    description:
      'A travel discovery and booking product for the Singapore market: users find places and experiences, book them, and pay online. It also runs a QR-code treasure hunt played at real locations.',
    technologies: ['React 18', 'Vite', 'React Router', 'GraphQL', 'Stripe', 'TanStack Query', 'Radix UI', 'Tailwind CSS'],
    challenge:
      'The product needed a custom GraphQL login that still had to stay compatible with an SDK expecting its own token format — one sign-in producing credentials for two systems that must never fall out of sync. On top of that: payments, and a treasure hunt with QR codes redeemable at physical locations.',
    solution:
      'I kept every network call behind a small API layer so components never talk to the network directly, which made backend changes a one-file edit. Session and refresh tokens live in sessionStorage while the SDK token is mirrored to localStorage, with guarded routes redirecting unauthenticated users back to where they started. Payments run through the Stripe PaymentElement, and the frontend never decides a price — it only confirms what the backend created.',
    features: [
      'Search and booking flow for places and experiences',
      'Custom GraphQL authentication with Google OAuth login',
      'Stripe payments with server-authoritative pricing',
      'QR-code treasure hunt with claim and admin tooling',
      'Handover documentation: architecture, data flow, auth, known issues',
    ],
  },
  {
    id: 3,
    title: 'Map-Based Business Listing Admin',
    category: 'Professional Work',
    role: 'Frontend Developer — admin panel owner',
    year: '2025 – 2026',
    image: '/gambar/nextera/ukaly.svg',
    images: ['/gambar/nextera/ukaly.svg'],
    description:
      'An internal admin panel for managing map-based business listings: onboarding businesses, editing rich content, moderating submissions, and tracking activity.',
    technologies: ['React 18', 'TypeScript', 'Leaflet', 'TanStack Query', 'Radix UI', 'Recharts', 'Stripe', 'Tailwind CSS'],
    challenge:
      'Admin panels grow fast and get messy faster. This one needed dozens of CRUD screens, map-based editing, and reporting views — without turning into copy-pasted code that nobody wants to maintain.',
    solution:
      'I built a shared component and table layer so new screens compose from existing pieces instead of duplicating them, and used AI coding agents for the repetitive scaffolding while keeping the data model, API contract, and anything touching auth or payments under my own review. Every generated diff was read line by line before it was committed.',
    features: [
      'CRUD management for listings, categories, and users',
      'Map-based location editing with Leaflet',
      'Reporting views and activity charts',
      'Role-aware access to sensitive actions',
      'Reusable table, form, and dialog primitives',
    ],
  },
  {
    id: 4,
    title: 'Padel Coaching & Booking Platform',
    category: 'Professional Work',
    role: 'Frontend Developer',
    year: '2025 – 2026',
    image: '/gambar/nextera/padel.svg',
    images: ['/gambar/nextera/padel.svg'],
    description:
      'A platform connecting padel players with coaches — coach discovery, session booking, and real-time chat between players and coaches.',
    technologies: ['Next.js', 'React 19', 'TypeScript', 'Supabase', 'Socket.IO', 'Tailwind CSS'],
    challenge:
      'Booking is only half the product. Players also needed to talk to coaches before and after a session, which meant combining authentication, scheduling, and real-time messaging without the UI falling apart on mobile.',
    solution:
      'I built the frontend with Next.js and React 19, using Supabase for auth and data and Socket.IO for real-time chat. The API client was generated from the OpenAPI spec, so every request and response stayed typed and any backend change surfaced at compile time.',
    features: [
      'Coach discovery and session booking flows',
      'Real-time chat between players and coaches',
      'Supabase authentication and session handling',
      'Fully typed API client generated from OpenAPI',
      'Mobile-first responsive design',
    ],
  },
  {
    id: 5,
    title: 'PhoneRepair CRM — AI-Assisted Support',
    category: 'AI & Automation',
    role: 'Full-stack — designed and built it solo',
    year: '2025',
    image: '/gambar/CRMapp/c2.png',
    images: [
      '/gambar/CRMapp/c1.png',
      '/gambar/CRMapp/c2.png',
      '/gambar/CRMapp/c3.png',
      '/gambar/CRMapp/c4.png',
      '/gambar/CRMapp/c5.png',
      '/gambar/CRMapp/c6.png',
      '/gambar/CRMapp/c7.png',
    ],
    description:
      'A CRM for a phone repair business covering customers, service tickets, inventory, and technicians — with a built-in AI assistant that can switch between multiple LLM providers.',
    technologies: ['React', 'TypeScript', 'Node.js', 'Express', 'Socket.IO', 'Tailwind CSS', 'OpenAI API', 'Qwen'],
    githubLink: 'https://github.com/hersariz/phone-repair-crm',
    challenge:
      'A repair shop tracks a device through many hands: intake, diagnosis, parts, repair, pickup. Staff were losing that history in notebooks and chat messages, and the front desk could not answer "where is my phone" without walking to the back.',
    solution:
      'I built a CRM around the ticket lifecycle, with role-aware views so an owner and a technician see different things, and real-time updates over Socket.IO so a status change at the bench appears instantly at the front desk. The AI assistant is provider-agnostic: the same chat interface can run against ChatGPT-4o or Qwen, which keeps the app from being locked to one vendor.',
    features: [
      'Service ticket lifecycle from intake to pickup',
      'Customer, inventory, and technician management',
      'Multi-provider AI assistant (ChatGPT-4o, Qwen) behind one interface',
      'Real-time ticket status updates via Socket.IO',
      'Monthly reporting and low-stock reminders',
    ],
  },
  {
    id: 6,
    title: 'Hallo — Real-Time Chat with AI',
    category: 'AI & Automation',
    role: 'Full-stack — solo project',
    year: '2025',
    image: '/gambar/CRMapp/c2.png',
    images: ['/gambar/CRMapp/c2.png'],
    description:
      'A real-time chat application built in Next.js with an integrated AI assistant, automatic message translation, and voice and video calling.',
    technologies: ['Next.js 14', 'React', 'OpenAI API', 'Firebase', 'WebRTC', 'Cloudinary', 'i18next', 'Tailwind CSS'],
    githubLink: 'https://github.com/hersariz/hallo-chat-app',
    challenge:
      'I wanted to see how far a chat product could go when AI is treated as a feature rather than a gimmick — useful inside the conversation, not bolted on beside it.',
    solution:
      'Messaging and presence run on Firebase, with the OpenAI API powering the assistant and Google Translate handling cross-language messages so two people can chat without sharing a language. Voice and video calls use WebRTC peer connections, and media uploads are handled through Cloudinary.',
    features: [
      'Real-time messaging with presence and read state',
      'AI assistant available inside conversations',
      'Automatic message translation between languages',
      'Voice and video calling over WebRTC',
      'Media sharing with cloud image handling',
    ],
  },
  {
    id: 7,
    title: 'AutoBazaar — Vehicle Marketplace',
    category: 'Web Application',
    role: 'Full-stack — solo project',
    year: '2025',
    image: '/gambar/e-commerce/e5.png',
    images: [
      '/gambar/e-commerce/e5.png',
      '/gambar/e-commerce/e6.png',
      '/gambar/e-commerce/e4.png',
      '/gambar/e-commerce/e1.png',
      '/gambar/e-commerce/e2.png',
      '/gambar/e-commerce/e3.png',
    ],
    description:
      'A marketplace for buying cars and motorcycles, with condition and price filtering, side-by-side comparison, saved vehicles, and a full listing detail view.',
    technologies: ['React', 'TypeScript', 'Node.js', 'REST API', 'Tailwind CSS'],
    challenge:
      'Vehicle shopping is a comparison problem, not a browsing problem. A buyer wants to narrow thousands of listings down to three and then look at those three next to each other — most marketplace UIs make that surprisingly hard.',
    solution:
      'I built filtering that combines condition, price range, and category in a single query, a wishlist for shortlisting, and a comparison view that puts saved vehicles side by side. Listings are paginated and sorted server-side so the catalogue stays fast as it grows.',
    features: [
      'Combined filtering by condition, price range, and vehicle type',
      'Side-by-side vehicle comparison',
      'Wishlist for shortlisting listings',
      'Ratings and detailed specification pages',
      'Responsive catalogue with server-side sorting',
    ],
  },
  {
    id: 8,
    title: 'FitTrackr — Fitness Tracking App',
    category: 'Web Application',
    role: 'Full-stack — solo project',
    year: '2025',
    image: '/gambar/fitness/f2.png',
    images: [
      '/gambar/fitness/f1.png',
      '/gambar/fitness/f2.png',
      '/gambar/fitness/f3.png',
      '/gambar/fitness/f4.png',
      '/gambar/fitness/f5.png',
    ],
    description:
      'A workout tracking app where users log sessions, watch their streaks build, set goals, and unlock achievement badges as they hit milestones.',
    technologies: ['React', 'TypeScript', 'Firebase', 'Recharts', 'Tailwind CSS'],
    challenge:
      'Most fitness apps are abandoned in week two. The interesting problem is not logging a workout — it is making someone want to come back tomorrow.',
    solution:
      'I built the product around progress feedback: streak tracking, an achievement system with unlockable badges, and history charts that make consistency visible. Logging a workout takes a few taps, because friction at that step is what kills the habit.',
    features: [
      'Workout logging with custom exercises',
      'Streak tracking and achievement badges',
      'Goal setting with progress indicators',
      'History and progress charts',
      'Responsive dashboard layout',
    ],
  },
  {
    id: 9,
    title: 'Cheese Factory — Restaurant Website',
    category: 'Website',
    role: 'Frontend Developer — freelance client',
    year: '2024',
    image: '/gambar/portofolio/p3.png',
    images: [
      '/gambar/portofolio/p1.png',
      '/gambar/portofolio/p2.png',
      '/gambar/portofolio/p3.png',
      '/gambar/portofolio/p4.png',
      '/gambar/portofolio/p5.png',
      '/gambar/portofolio/p6.png',
      '/gambar/portofolio/p7.png',
    ],
    description:
      'A company website for a restaurant chain with outlets across Indonesia — brand story, product range, and an outlet finder covering every location.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Responsive Design'],
    challenge:
      'A chain with over a hundred outlets has one job on its website: help someone find the nearest one and decide to go. Everything else is secondary.',
    solution:
      'I built a location section organised by city with address, phone, and opening hours for each outlet, and a nearest-location shortcut. The rest of the site carries the brand — product range, story, and contact — in a layout that holds together on a phone, which is where most of the traffic comes from.',
    features: [
      'Outlet finder organised by city',
      'Product and menu presentation',
      'Brand story and company profile pages',
      'Contact and enquiry section',
      'Mobile-first responsive layout',
    ],
  },
];
