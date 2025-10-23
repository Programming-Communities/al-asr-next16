# 🚀 **Complete Project Setup Guide**

## 📋 **Project Overview**

**Islamic Blog Platform** built with modern technology stack:

### 🌐 **Website Structure:**
```
https://abc.com              (Next.js Frontend)
https://admin.abc.com        (WordPress Backend)
```

## 🛠 **Tech Stack**

### **Frontend (Next.js)**
- **Framework:** Next.js 16
- **Styling:** Tailwind CSS
- **UI Components:** Radix UI
- **Icons:** Lucide React
- **Deployment:** Vercel

### **Backend (WordPress)**
- **CMS:** WordPress with GraphQL
- **API:** WPGraphQL
- **Hosting:** Any WordPress hosting

## 📁 **Project Setup Steps**

### **1. WordPress Backend Setup**
```bash
# Install WordPress on admin.abc.com
# Install these plugins:
- WPGraphQL
- WPGraphQL Smart Cache (optional)
- Custom Post Type UI
- Advanced Custom Fields
```

### **2. Environment Configuration**
```env
# .env.local
WORDPRESS_API_URL=https://admin.abc.com/graphql
WP_PREVIEW_SECRET=your_secret_key_here
NEXT_PUBLIC_WORDPRESS_URL=https://admin.abc.com
```

### **3. Next.js Setup**
```bash
# Create new Next.js project
npx create-next-app@latest islamic-blog
cd islamic-blog

# Install dependencies
npm install @radix-ui/react-dropdown-menu lucide-react next-themes graphql-request
npm install -D @types/node @types/react @types/react-dom typescript

# Start development
npm run dev
```

## 🎯 **Core Features**

### ✅ **Multi-language Support**
- Urdu/Arabic (RTL)
- English (LTR)
- Automatic language detection

### ✅ **Dark/Light Theme**
- System preference detection
- Manual toggle
- Persistent settings

### ✅ **SEO Optimized**
- Automatic meta tags
- Open Graph support
- Twitter Cards
- XML sitemap

### ✅ **Performance**
- Image optimization
- Static generation
- Fast loading
- Mobile responsive

## 📄 **File Structure**
```
islamic-blog/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   ├── globals.css
│   └── posts/[slug]/page.tsx
├── components/
│   ├── layout/
│   ├── blog/
│   ├── ui/
│   └── shared/
├── lib/
│   ├── api.ts
│   ├── fonts.ts
│   └── utils.ts
└── public/
```

## 🔧 **Key Configuration Files**

### **next.config.ts**
```typescript
export default {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'admin.abc.com',
        pathname: '/wp-content/uploads/**',
      }
    ],
  }
}
```

### **package.json**
```json
{
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start"
  },
  "dependencies": {
    "next": "16.0.0",
    "react": "19.0.0",
    "@radix-ui/react-dropdown-menu": "^2.0.0",
    "lucide-react": "^0.300.0"
  }
}
```

## 🚀 **Deployment**

### **Frontend (Vercel)**
1. Push code to GitHub
2. Connect Vercel to repository
3. Add environment variables
4. Deploy automatically

### **Backend (WordPress)**
1. Standard WordPress hosting
2. Install required plugins
3. Configure permalinks
4. Set up WPGraphQL

## 💡 **Quick Start for Beginners**

### **Step 1: WordPress Setup**
1. Buy domain: `abc.com` and `admin.abc.com`
2. Install WordPress on `admin.abc.com`
3. Install WPGraphQL plugin
4. Create some posts

### **Step 2: Next.js Setup**
1. Download this project code
2. Update environment variables
3. Run `npm run build`
4. Deploy to Vercel

### **Step 3: Connect Both**
1. WordPress provides content via GraphQL
2. Next.js displays content beautifully
3. Both work together seamlessly

## 📞 **Support**
- **Frontend Issues:** Next.js documentation
- **Backend Issues:** WordPress forums
- **Integration:** WPGraphQL documentation

## 🎊 **Result**
✅ **Modern, fast website** at `abc.com`  
✅ **Easy content management** at `admin.abc.com`  
✅ **SEO optimized**  
✅ **Mobile friendly**  
✅ **Multi-language ready**

---

**Time to build:** 2-3 days  
**Technical level:** Intermediate  
**Result:** Professional Islamic blog platform 🎯



-+-------------------------------------------------------------------------------------------------------------------------------------------------------------




Bilkul! Main complete project structure aur code ki `README.md` file bana ke deta hoon:

# Al-Asr Islamic Service Platform

A modern Islamic blog platform built with Next.js 16, featuring multi-language support (Urdu/Arabic RTL + English LTR), dark mode, and optimized performance.

## 🚀 Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Styling:** Tailwind CSS + Custom CSS
- **UI Library:** Radix UI (Dropdowns)
- **Icons:** Lucide React
- **Content:** WordPress API
- **Fonts:** Noto Sans Arabic + Inter
- **Deployment:** Vercel

## 📁 Project Structure

```
al-asr/
├── app/                          # Next.js 16 App Router (SERVER SIDE)
│   ├── layout.tsx               # Root layout with metadata
│   ├── page.js                  # Home page
│   ├── globals.css              # Global styles
│   ├── posts/
│   │   └── [slug]/
│   │       └── page.js          # Individual post page
│   └── api/                     # API routes
├── components/                   # CLIENT COMPONENTS
│   ├── layout/                  # Layout components
│   │   ├── Header/
│   │   │   ├── Header.jsx
│   │   │   └── index.js
│   │   └── ThemeProvider/
│   │       ├── ThemeProvider.jsx
│   │       └── index.js
│   ├── blog/                    # Blog components
│   │   ├── BlogCard/
│   │   │   ├── BlogCard.jsx
│   │   │   └── index.js
│   │   ├── BlogList/
│   │   │   ├── BlogList.jsx
│   │   │   └── index.js
│   │   └── PostContent/
│   │       ├── PostContent.jsx
│   │       └── index.js
│   ├── ui/                      # Reusable UI components
│   │   ├── buttons/
│   │   │   ├── PrimaryButton.jsx
│   │   │   └── index.js
│   │   ├── dropdowns/
│   │   │   ├── CategoryDropdown.jsx
│   │   │   └── index.js
│   │   ├── images/
│   │   │   ├── CoverImage.jsx
│   │   │   ├── Logo.jsx
│   │   │   └── index.js
│   │   └── skeletons/           # Skeleton loaders
│   │       ├── CardSkeleton.jsx
│   │       ├── PostSkeleton.jsx
│   │       ├── HomeSkeleton.jsx
│   │       └── index.js
│   └── shared/                  # Shared components
│       ├── Search/
│       │   ├── Search.jsx
│       │   └── index.js
│       └── index.js
├── lib/                         # Utilities & configs
│   ├── utils.js                 # Common utilities
│   ├── api.js                   # API functions
│   ├── fonts.ts                 # Font configuration
│   └── constants.js             # App constants
├── hooks/                       # Custom React hooks
│   ├── useTheme.js
│   └── index.js
├── public/                      # Static assets
│   ├── images/
│   │   ├── covers/              # Cover images
│   │   ├── avatars/             # Profile images
│   │   └── icons/               # App icons
│   └── fonts/                   # Custom fonts
└── config/                      # Configuration files
    ├── site.config.js
    └── api.config.js
```

## 🎯 Key Features

- 🌙 **Dark/Light Theme** - Automatic + manual toggle
- 🌍 **Multi-language** - Urdu/Arabic (RTL) + English (LTR) support
- 📱 **Responsive Design** - Mobile-first approach
- 🖼️ **Image Optimization** - Cover effects, lazy loading
- ⚡ **Fast Loading** - Skeleton screens, optimized images
- 🔍 **SEO Ready** - Metadata, semantic HTML
- 🎨 **Modern UI** - Clean design with smooth animations

## 📄 Core Files Code

### `app/layout.tsx`
```typescript
import { ThemeProvider } from "@/components/theme/theme-provider";
import { jameelNoori } from "@/lib/fonts";
import "./globals.css";
import type { Metadata } from "next";

const baseUrl = 'https://al-asr.centers.pk';

interface RootLayoutProps {
  children: React.ReactNode;
}

export const metadata: Metadata = {
  title: "Al-Asr ( Islamic Service )",
  description: "Islamic Services, Calendar Events, and Community Programs",
  metadataBase: new URL(baseUrl),
  openGraph: {
    title: "Al-Asr ( Islamic Service )",
    description: "Islamic Services, Calendar Events, and Community Programs",
    url: baseUrl,
    siteName: "Al-Asr Islamic Service",
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: "Al-Asr Islamic Service",
        type: 'image/png',
      },
    ],
    locale: "ur_PK",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Al-Asr ( Islamic Service )",
    description: "Islamic Services, Calendar Events, and Community Programs",
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: baseUrl,
  },
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="ur" suppressHydrationWarning data-scroll-behavior="smooth" className={`${jameelNoori.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <style 
          dangerouslySetInnerHTML={{
            __html: `
              body { 
                margin: 0; 
                font-family: var(--font-jameel-noori), system-ui, -apple-system, sans-serif;
                background: white;
                color: #171717;
              }
              html[class~="dark"] body {
                background: #0a0a0a;
                color: #ededed;
              }
            `
          }}
          suppressHydrationWarning={true}
        />
        <link rel="preconnect" href="https://admin-al-asr.centers.pk" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://admin-al-asr.centers.pk" />
        <meta property="og:image" content={`${baseUrl}/og-image.png`} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:alt" content="Al-Asr Islamic Service" />
        <meta name="twitter:image" content={`${baseUrl}/og-image.png`} />
        <meta name="twitter:image:alt" content="Al-Asr Islamic Service" />
        <meta name="darkreader-lock" />
      </head>
      <body className="antialiased" suppressHydrationWarning>
        <ThemeProvider>
          <main role="main" id="main-content" tabIndex={-1}>
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
```

### `next.config.ts`
```typescript
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Remove experimental.turbo - Next.js 16 main Turbopack by default enabled hai
  // experimental: {
  //   turbo: {} // REMOVE THIS - Not needed in Next.js 16
  // },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'admin-al-asr.centers.pk',
        pathname: '/wp-content/uploads/**',
      },
      {
        protocol: 'https', 
        hostname: 'via.placeholder.com',
      },
    ],
  },
  reactStrictMode: true,
  productionBrowserSourceMaps: false,
};

export default nextConfig;
```

### `components/layout/Header/Header.jsx`
```jsx
"use client"

import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { ModeToggle } from "@/components/theme/mode-toggle";

const Header = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="py-5 px-5 md:px-12 lg:px-28 bg-linear-to-b from-white to-red-50 dark:from-gray-800 dark:to-gray-700">
      <div className="flex justify-between items-center">
        <div className="relative w-[130px] sm:w-40 h-[60px]">
          {mounted ? (
            <Link href="/" aria-label="Al-Asr Home">
              <Image
                src="/logo.png"
                alt="Al-Asr (Islamic Service)"
                width={160}
                height={60}
                className="w-auto h-auto max-w-full object-contain cursor-pointer hover:opacity-90 transition-opacity"
                priority
              />
            </Link>
          ) : (
            <div className="w-full h-full bg-gray-200 dark:bg-gray-600 rounded animate-pulse"></div>
          )}
        </div>
        
        <div className="min-h-10 min-w-10">
          {mounted && <ModeToggle />}
        </div>
      </div>

      <div className="text-center my-12">
        <h1 className="text-3xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4 leading-tight">
          Al-Asr ( Islamic Service )
        </h1>
        <p className="mt-6 max-w-[740px] mx-auto text-base text-gray-600 dark:text-gray-300 leading-relaxed text-balance">
          Islamic services, calendar events, and community programs. Stay updated with the latest from Al-Asr ( Islamic Service ).
        </p>
        <div className="flex justify-center mt-8">
          <div className="bg-red-900 text-white px-6 py-3 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-200">
            <p className="font-semibold text-sm sm:text-base">📅 Islamic Calendar • 🕌 Services • 👥 Community</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
```

### `lib/fonts.ts`
```typescript
import { Inter, Noto_Sans_Arabic } from 'next/font/google';

export const jameelNoori = Noto_Sans_Arabic({
  subsets: ['arabic', 'latin'],
  variable: '--font-jameel-noori',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
});

export const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export default { jameelNoori, inter };
```

### `app/globals.css`
```css
@import "tailwindcss";

:root {
  --background: #ffffff;
  --foreground: #171717;
}

[data-theme="dark"] {
  --background: #0a0a0a;
  --foreground: #ededed;
}

body {
  background: var(--background);
  color: var(--foreground);
  font-family: system-ui, -apple-system, sans-serif;
  margin: 0;
  padding: 0;
}

/* Image Cover Effects */
.card-image {
  width: 100%;
  height: 250px;
  object-fit: cover;
  display: block;
}

.post-image {
  width: 100%;
  height: 400px;
  object-fit: cover;
  display: block;
}

/* RTL/LTR Text Styling */
.urdu-arabic-content {
  font-family: system-ui, -apple-system, "Segoe UI", sans-serif;
  direction: rtl;
  text-align: right;
  line-height: 2;
}

.english-content {
  direction: ltr;
  text-align: left;
  line-height: 1.7;
}

/* Dark Mode Support */
.dark {
  --background: #0a0a0a;
  --foreground: #ededed;
}

.dark body {
  background: #0a0a0a;
  color: #ededed;
}
```

### `components/ui/skeletons/CardSkeleton.jsx`
```jsx
"use client";

export default function CardSkeleton() {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden animate-pulse">
      <div className="h-48 w-full bg-gray-300 dark:bg-gray-700"></div>
      <div className="p-6">
        <div className="w-20 h-6 bg-gray-300 dark:bg-gray-600 rounded-full mb-3"></div>
        <div className="h-6 bg-gray-300 dark:bg-gray-600 rounded mb-2 w-4/5"></div>
        <div className="space-y-2 mb-4">
          <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded w-full"></div>
          <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded w-5/6"></div>
        </div>
        <div className="flex justify-between items-center">
          <div className="w-16 h-3 bg-gray-300 dark:bg-gray-600 rounded"></div>
          <div className="w-12 h-4 bg-gray-300 dark:bg-gray-600 rounded"></div>
        </div>
      </div>
    </div>
  );
}
```

### `package.json`
```json
{
  "name": "al-asr",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "biome check",
    "format": "biome format --write"
  },
  "dependencies": {
    "@radix-ui/react-dropdown-menu": "^2.1.16",
    "class-variance-authority": "^0.7.1",
    "clsx": "^2.1.1",
    "graphql-request": "^7.3.1",
    "lucide-react": "^0.546.0",
    "next": "16.0.0",
    "next-themes": "^0.4.6",
    "react": "19.2.0",
    "react-dom": "19.2.0",
    "tailwind-merge": "^3.3.1"
  },
  "devDependencies": {
    "@biomejs/biome": "2.2.0",
    "@tailwindcss/postcss": "^4",
    "@types/node": "^20",
    "@types/react": "^19",
    "@types/react-dom": "^19",
    "tailwindcss": "^4",
    "typescript": "^5"
  }
}
```

## 🚀 Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Run development server:**
   ```bash
   npm run dev
   ```

3. **Build for production:**
   ```bash
   npm run build
   ```

4. **Start production server:**
   ```bash
   npm start
   ```

## 🎯 Development Status

✅ **Project Setup Complete**  
✅ **UI Components Ready**  
✅ **Styling System Implemented**  
✅ **Image Optimization Done**  
✅ **Categories System Working**  
✅ **Dark/Light Theme Implemented**  
✅ **RTL/LTR Support Added**  
✅ **Performance Optimized**  
✅ **SEO Metadata Configured**  
✅ **Build Successful**  

## 🌐 Live Demo

- **Local:** http://localhost:3000
- **Production:** https://al-asr.centers.pk

---

**Built with ❤️ for the Islamic Community**


