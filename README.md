# College Portal Refresh 🎓

A modern, feature-rich college portal application built with React, TypeScript, and Tailwind CSS. Provides students with a centralized dashboard for managing academics, attendance, assessments, payments, and more.

## 🎯 Features

- **Dashboard** - Overview of academic progress and important updates
- **Timetable** - View class schedules and exam timetables
- **Attendance** - Track attendance records and statistics
- **Assessments** - View assignments and coursework
- **Announcements** - Stay updated with college announcements
- **Exam Results** - View exam scores and grades
- **Payments** - Manage tuition and fee payments
- **Discussion Forum** - Connect with peers and share knowledge
- **Profile** - Manage personal academic profile
- **Responsive Design** - Works seamlessly on desktop, tablet, and mobile
- **Dark Mode Support** - Theme switching capability
- **Real-time Updates** - React Query for efficient data fetching

## 🏗️ Project Structure

```
college-portal-refresh/
├── src/
│   ├── components/
│   │   ├── portal/
│   │   │   ├── PortalLayout.tsx      # Main layout wrapper
│   │   │   └── Sidebar.tsx           # Navigation sidebar
│   │   ├── ui/                       # Radix UI components (Button, Card, etc.)
│   │   └── NavLink.tsx               # Navigation link component
│   ├── pages/
│   │   ├── Dashboard.tsx             # Home page
│   │   ├── Timetable.tsx             # Class schedule
│   │   ├── Attendance.tsx            # Attendance records
│   │   ├── Assessments.tsx           # Assignments & coursework
│   │   ├── Announcements.tsx         # College announcements
│   │   ├── ExamResults.tsx           # Exam scores & grades
│   │   ├── Payments.tsx              # Fee management
│   │   ├── Discussion.tsx            # Forum discussion
│   │   ├── Profile.tsx               # User profile
│   │   └── NotFound.tsx              # 404 page
│   ├── hooks/
│   │   ├── use-toast.ts              # Toast notification hook
│   │   └── use-mobile.tsx            # Mobile detection hook
│   ├── lib/
│   │   └── utils.ts                  # Utility functions
│   ├── App.tsx                       # Main app component with routing
│   ├── main.tsx                      # Entry point
│   ├── App.css                       # App styles
│   └── index.css                     # Global styles
├── public/                           # Static assets
├── package.json                      # Project dependencies
├── tsconfig.json                     # TypeScript configuration
├── vite.config.ts                    # Vite configuration
├── tailwind.config.ts                # Tailwind CSS configuration
├── vitest.config.ts                  # Testing configuration
└── playwright.config.ts              # E2E testing configuration
```

## 🛠️ Tech Stack

### Frontend Framework
- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool & dev server
- **React Router v6** - Client-side routing

### UI & Styling
- **Tailwind CSS** - Utility-first CSS framework
- **Radix UI** - Headless UI components
- **Lucide React** - Icon library
- **Framer Motion** - Animation library
- **Class Variance Authority** - Component styling utilities

### State Management & Data
- **React Query (TanStack Query)** - Server state management
- **React Hook Form** - Form state management
- **Zod** - Schema validation

### Additional Libraries
- **next-themes** - Theme management (light/dark mode)
- **date-fns** - Date utilities
- **recharts** - Data visualization
- **sonner** - Toast notifications
- **embla-carousel** - Carousel component
- **input-otp** - OTP input component

### Development Tools
- **ESLint** - Code linting
- **Vitest** - Unit testing
- **Playwright** - E2E testing
- **PostCSS** - CSS preprocessing
- **Autoprefixer** - CSS vendor prefixes

## 🚀 Getting Started

### Prerequisites
- Node.js 16+ 
- Bun (recommended) or npm/yarn

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd college-portal-refresh

# Install dependencies using Bun
bun install

# Or using npm
npm install
```

### Development

```bash
# Start development server (runs on http://localhost:8080)
bun run dev
# or
npm run dev
```

### Build for Production

```bash
# Build the project
bun run build
# or
npm run build

# Preview production build
bun run preview
# or
npm run preview
```

## 📝 Available Scripts

| Script | Description |
|--------|-------------|
| `dev` | Start development server with hot reload |
| `build` | Build for production (optimized) |
| `build:dev` | Build in development mode |
| `preview` | Preview production build locally |
| `lint` | Run ESLint to check code quality |
| `test` | Run unit tests with Vitest |
| `test:watch` | Run tests in watch mode |

## 🗂️ File Structure Details

### Component Architecture

**Page Components** (`src/pages/*.tsx`)
- Self-contained pages with their own state and business logic
- Each exported as default export
- Follow naming convention: PascalCase

**Layout Components** (`src/components/portal/`)
- `PortalLayout.tsx` - Wraps all portal pages, handles layout structure
- `Sidebar.tsx` - Main navigation with collapsible menu

**UI Components** (`src/components/ui/`)
- Reusable UI primitives from Radix UI
- Composed with Tailwind CSS for styling
- Support dark mode out of the box

### Routing Configuration

All routes are defined in `App.tsx`:

```typescript
<Route element={<PortalLayout />}>
  <Route path="/" element={<Dashboard />} />
  <Route path="/timetable" element={<Timetable />} />
  <Route path="/attendance" element={<Attendance />} />
  <Route path="/assessments" element={<Assessments />} />
  <Route path="/profile" element={<Profile />} />
  <Route path="/announcements" element={<Announcements />} />
  <Route path="/results" element={<ExamResults />} />
  <Route path="/payments" element={<Payments />} />
  <Route path="/forum" element={<Discussion />} />
</Route>
```

The `PortalLayout` acts as a wrapper for all authenticated pages.

### State Management Pattern

- **Server State**: React Query (`@tanstack/react-query`) for API data
- **Form State**: React Hook Form for form submission
- **UI State**: React useState for local component state
- **Theme State**: next-themes for dark/light mode

## 🎨 Styling Guide

### Tailwind Configuration
- Custom colors and components defined in `tailwind.config.ts`
- Uses Tailwind CSS v3 for utility-first styling
- Includes animation utilities via `tailwindcss-animate`

### CSS Variables
- Global styles in `index.css`
- App-specific styles in `App.css`
- Component-specific styles inline or in CSS modules

### Dark Mode
- Managed via `next-themes`
- Toggle available in theme provider
- All components support light and dark modes

## 📦 Dependency Management

- **Lock file**: `bun.lockb` (Bun package manager)
- Package manager: Bun (faster, drop-in replacement for npm)
- Can also use npm or yarn as alternatives

## 🧪 Testing

### Unit Tests
```bash
bun run test
```

### Watch Mode
```bash
bun run test:watch
```

### E2E Tests
Tests configured via Playwright (`playwright.config.ts`)

### Test Setup
- Framework: Vitest
- DOM testing library: @testing-library/react
- Configuration: `vitest.config.ts`

## 🔍 Code Quality

### Linting
```bash
bun run lint
```

Configured with ESLint to enforce code standards across:
- TypeScript files
- React components
- React hooks usage

## 🌐 Browser Support

- Modern browsers that support ES modules
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## 🔐 Environment Setup

- Development server runs on `http://localhost:8080`
- Source maps included for debugging
- HMR (Hot Module Replacement) enabled

## 📖 Development Workflow

1. Start dev server: `bun run dev`
2. Create feature branch
3. Implement changes following component structure
4. Run tests: `bun run test`
5. Lint code: `bun run lint`
6. Create pull request

## 🚧 Future Enhancements

- Backend API integration
- Authentication/Authorization
- Real-time notifications
- File upload/download
- Advanced filtering and search
- Analytics dashboard
- Mobile app version

## 📄 License

[Add your license here]

## 👥 Contributing

[Add contribution guidelines here]

## 📧 Support

For issues or questions, please open an issue in the repository.

---

**Built with ❤️ for the college community**
