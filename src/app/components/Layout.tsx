import { Outlet } from 'react-router';
import { Header } from './Header';
import { Footer } from './Footer';
import { Toaster } from 'sonner';

export function Layout() {
  return (
    <div className="min-h-screen bg-neutral-50">
      <Toaster position="top-right" />
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}
