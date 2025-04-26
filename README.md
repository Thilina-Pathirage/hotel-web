# H.otel - Modern Hotel Booking Website

<div align="center">
  <img src="public/hero.png" alt="H.otel Website" width="800" />
</div>

## Overview

H.otel is a modern, responsive hotel booking website designed to provide users with a seamless experience for browsing rooms, exploring facilities, reading reviews, and making bookings. The site features a clean and elegant design with a focus on usability across all device sizes.

## Features

- **Responsive Design**: Fully optimized for mobile, tablet, and desktop devices
- **Interactive UI Components**: 
  - Floating search bar with date pickers and guest selection
  - Dynamic room browsing with filtering options
  - Facility showcase with hover animations
  - Customer review carousel
- **Smooth Navigation**: Section-based scrolling with a sticky header
- **Modern Aesthetics**: Clean typography, subtle animations, and elegant color scheme

## Tech Stack

- **Framework**: React with TypeScript
- **Build Tool**: Vite
- **UI Library**: Material UI (MUI)
- **Date Handling**: dayjs with MUI date pickers
- **Styling**: MUI styled components and sx props

## Getting Started

### Prerequisites

- Node.js 14+ and npm/yarn

### Installation

1. Clone the repository
   ```bash
   git clone https://github.com/yourusername/hotel-site.git
   cd hotel-site
   ```

2. Install dependencies
   ```bash
   npm install
   # or
   yarn
   ```

3. Start the development server
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open your browser at `http://localhost:5173`

## Project Structure

```
hotel-site/
├── public/               # Static assets
├── src/
│   ├── components/       # UI components
│   │   ├── Hero.tsx      # Hero section with search functionality
│   │   ├── Navbar.tsx    # Navigation bar
│   │   ├── Rooms.tsx     # Room listings
│   │   ├── Facilities.tsx # Hotel facilities
│   │   ├── CustomerReviews.tsx # Reviews carousel
│   │   └── Footer.tsx    # Site footer
│   ├── assets/           # Images and other assets
│   ├── App.tsx           # Main app component
│   └── main.tsx          # Application entry point
├── package.json          # Dependencies and scripts
└── vite.config.ts        # Vite configuration
```

## Deployment

The site can be built for production using:

```bash
npm run build
# or
yarn build
```

This will generate optimized assets in the `dist` directory, ready for deployment to any static hosting service.

## License

[MIT License](LICENSE)
