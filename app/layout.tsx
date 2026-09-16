import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Atlasverse.co.uk — Official Master Portal & Gateway',
  description: 'Atlasverse Ecosystem (UK) — Şemsiye Ekosistem & IP Sahibi',
  icons: {
    icon: [
      { url: '/favicon-32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-192.png', sizes: '192x192', type: 'image/png' },
    ],
    apple: '/favicon-192.png',
    shortcut: '/favicon-32.png',
  },
  openGraph: {
    images: ['/favicon-512.png'],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="tr">
      <body>{children}</body>
    </html>
  );
}
