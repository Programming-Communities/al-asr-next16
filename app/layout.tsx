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
    <html 
      lang="ur" 
      suppressHydrationWarning 
      data-scroll-behavior="smooth"
      className={`${jameelNoori.variable}`} // Add font variable to html
    >
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        
        {/* Critical CSS Inline */}
        <style 
          dangerouslySetInnerHTML={{
            __html: `
              /* Critical CSS for above-the-fold content */
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
        
        {/* Preload critical resources */}
        <link rel="preconnect" href="https://admin-al-asr.centers.pk" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://admin-al-asr.centers.pk" />
        
        {/* Additional explicit OG image tags */}
        <meta property="og:image" content={`${baseUrl}/og-image.png`} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:alt" content="Al-Asr Islamic Service" />
        
        {/* Twitter Card image */}
        <meta name="twitter:image" content={`${baseUrl}/og-image.png`} />
        <meta name="twitter:image:alt" content="Al-Asr Islamic Service" />
        
        {/* Prevent dark reader from modifying styles */}
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