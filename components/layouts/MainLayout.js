'use client';

import Navbar from '../navigation/Navbar';
import ScrollToTop from '../ScrollToTop';

export default function MainLayout({ children }) {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      {children}
      <ScrollToTop />
    </main>
  );
}