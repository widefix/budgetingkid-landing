import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'BudgetingKid - Foster good financial habits in your children',
  description: 'Empower your kids with financial literacy and effortlessly manage their allowances. Sign up for our free app today and start fostering a financially savvy future for your children.',
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
