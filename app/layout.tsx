import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://get.budgetingkid.com'),
  alternates: { canonical: new URL('https://budgetingkid.com') },
  title: 'Foster good financial habits in your kids',
  description:
    'Empower your kids with financial literacy and effortlessly manage their allowances. Sign up for our free app today and start fostering a financially savvy future for your children.',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://budgetingkid.com',
    siteName: 'BudgetingKid',
    description:
      'Empower your kids with financial literacy and effortlessly manage their allowances. Sign up for our free app today and start fostering a financially savvy future for your children.',
    title: 'Foster good financial habits in your kids',
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
