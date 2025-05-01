<div align="center">

# Venture Pulse

[![Next.js](https://img.shields.io/badge/Next.js-14-black?logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38B2AC?logo=tailwind-css)](https://tailwindcss.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

A modern web application for tracking and visualizing venture capital investments and startup funding trends. Built with Next.js 14 and TypeScript, featuring interactive data visualizations and real-time market insights.

[Features](#-features) • [Tech Stack](#️-tech-stack) • [Getting Started](#-getting-started) • [Project Structure](#-project-structure) • [Documentation](#-documentation)

</div>

## 🌟 Features

- **Interactive Dashboard**: Real-time visualization of venture capital trends
- **Investment Tracking**: Monitor startup funding rounds and investor activities
- **Market Analytics**: Comprehensive analysis of industry sectors and funding patterns
- **Dark Mode**: System-aware theme switching with next-themes
- **Data Export**: Export reports and analytics in multiple formats
- **Type Safety**: Built with TypeScript for better development experience
- **SEO Optimized**: Meta tags and optimized content structure

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **State Management**: Zustand
- **Data Visualization**: D3.js / Chart.js
- **Database**: PostgreSQL with Prisma ORM
- **Authentication**: NextAuth.js
- **API**: RESTful endpoints with tRPC
- **UI Components**: Radix UI primitives
- **Charts**: Recharts for data visualization

## 🚀 Getting Started

1. **Clone the repository**

```bash
git clone https://github.com/irisfaustina/venture-pulse.git
cd venture-pulse
```

2. **Install dependencies**

```bash
npm install
```

3. **Set up environment variables**

Create a `.env` file in the root directory and add:

```env
DATABASE_URL=your_database_url
NEXTAUTH_SECRET=your_nextauth_secret
NEXTAUTH_URL=http://localhost:3000
```

4. **Run the development server**

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

## 📁 Project Structure

```
├── app/                  # Next.js app directory
│   ├── api/             # API routes
│   ├── dashboard/       # Dashboard pages
│   ├── analytics/       # Analytics pages
│   └── auth/           # Authentication pages
├── components/          # React components
├── lib/                # Utility functions
│   ├── db/             # Database utilities
│   ├── api/            # API utilities
│   └── utils/          # Helper functions
├── prisma/             # Database schema and migrations
└── public/             # Static assets
```

## 📊 Documentation

### API Endpoints

API documentation is available at `/api/docs` when running the development server.

### Database Schema

The database schema is defined in `prisma/schema.prisma`. Run migrations with:

```bash
npx prisma migrate dev
```

### Environment Variables

Required environment variables:

- `DATABASE_URL`: PostgreSQL database connection string
- `NEXTAUTH_SECRET`: Secret key for NextAuth.js
- `NEXTAUTH_URL`: Your application URL

## 🎨 Customization

- **Styling**: Edit `tailwind.config.ts` for theme customization
- **Components**: Modify components in `components/` directory
- **Analytics**: Configure analytics settings in `lib/analytics`

## 📄 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! See [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines.

## 📧 Contact

For any questions or feedback, please open an issue in the GitHub repository.
