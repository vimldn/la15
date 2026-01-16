import type { Metadata } from 'next';
import { DM_Sans, Space_Grotesk } from 'next/font/google';
import Script from 'next/script';
import './globals.css';

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
});

export const metadata: Metadata = {
  verification: {
    google: "9pHSXLFoWrSi58W1ZhO-oUDaGORNAp8yDcM_zkS75DE",
  },
  title: 'LoanApp.co.ke - Compare Loan Apps in Kenya | Find the Cheapest Rates',
  description:
    "Compare interest rates, limits, and terms across 12+ loan apps in Kenya. Calculate exactly what you'll pay back with M-Shwari, Tala, Branch, Fuliza, Hustler Fund, and more.",
  keywords:
    'loan apps Kenya, M-Pesa loans, Tala, Branch, M-Shwari, Fuliza, Hustler Fund, KCB M-Pesa, loan comparison Kenya, cheapest loans Kenya',
  openGraph: {
    title: 'LoanApp.co.ke - Compare Loan Apps in Kenya',
    description: 'Find the cheapest loan in Kenya. Compare interest rates across 12+ apps.',
    type: 'website',
    locale: 'en_KE',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${dmSans.variable} ${spaceGrotesk.variable}`}>
      <body className="font-sans antialiased">
        {children}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-HTYKMZEF2Z"
          strategy="afterInteractive"
        />
        <Script id="ga4" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-HTYKMZEF2Z');
          `}
        </Script>
      </body>
    </html>
  );
}
