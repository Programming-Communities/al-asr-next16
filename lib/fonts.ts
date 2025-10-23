import { Inter, Noto_Sans_Arabic } from 'next/font/google';

// Jameel Noori replacement - using Noto Sans Arabic for Urdu/Arabic support
export const jameelNoori = Noto_Sans_Arabic({
  subsets: ['arabic', 'latin'],
  variable: '--font-jameel-noori',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
});

// Fallback font
export const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

// Export default for backward compatibility
export default { jameelNoori, inter };