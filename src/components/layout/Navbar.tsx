'use client';

import * as React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
// Authentication will be implemented here
// Theme toggle removed
import { Menu, X } from 'lucide-react';

// Error boundary removed since theme toggle was deleted

export function Navbar() {
  // Authentication state will be managed here
  const isSignedIn = false; // Placeholder for auth state
  const user = null; // Placeholder for user data
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const pathname = usePathname();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  return (
    <nav className="sticky top-0 z-50 bg-[#121212] border-b border-[rgba(255,255,255,0.03)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex">
              <Link href="/" className="flex-shrink-0 flex items-center">
                <span className="text-xl font-bold text-[#c8c8c8]">Claw</span>
              </Link>
              <div className="hidden lg:ml-6 lg:flex lg:space-x-8">
                <Link
                  href="/"
                  className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium ${
                    pathname === '/'
                      ? 'border-[#2563EB] text-[#c8c8c8]'
                      : 'border-transparent text-[#ffffff6e] hover:text-[#c8c8c8] hover:border-[#2563EB]'
                  }`}
                >
                  Home
                </Link>
                <Link
                  href="/dashboard"
                  className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium ${
                    pathname === '/dashboard'
                      ? 'border-[#2563EB] text-[#c8c8c8]'
                      : 'border-transparent text-[#ffffff6e] hover:text-[#c8c8c8] hover:border-[#2563EB]'
                  }`}
                >
                  Dashboard
                </Link>
              </div>
            </div>
            <div className="flex items-center">
              <div className="flex-shrink-0 flex items-center">
                <div className="flex items-center space-x-4">
                  <Link
                    href="/sign-in"
                    className="text-sm font-medium text-[#2563EB] hover:text-[#1d4ed8]"
                  >
                    Sign in
                  </Link>
                  <Link
                    href="/sign-up"
                    className="ml-4 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-[#2563EB] hover:bg-[#1d4ed8]"
                  >
                    Sign up
                  </Link>
                </div>
                {/* Mobile menu button */}
                <div className="flex items-center lg:hidden">
                  <button
                    type="button"
                    className="ml-2 inline-flex items-center justify-center p-2 rounded-md text-[#ffffff6e] hover:text-[#c8c8c8] hover:bg-[#0c0c0c] focus:outline-none"
                    aria-expanded="false"
                    aria-label="toggle menu"
                    onClick={toggleMobileMenu}
                  >
                    {isMobileMenuOpen ? (
                      <X className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <Menu className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile menu, show/hide based on menu state. */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-[#0c0c0c] border-t border-[rgba(255,255,255,0.03)]">
            <div className="pt-2 pb-3 space-y-1">
              <Link
                href="/"
                className={`block pl-3 pr-4 py-2 border-l-4 text-base font-medium ${
                  pathname === '/'
                    ? 'bg-[#2563EB]/10 border-[#2563EB] text-[#c8c8c8]'
                    : 'border-transparent text-[#ffffff6e] hover:bg-[#0c0c0c] hover:border-[#2563EB] hover:text-[#c8c8c8]'
                }`}
              >
                Home
              </Link>
              <Link
                href="/dashboard"
                className={`block pl-3 pr-4 py-2 border-l-4 text-base font-medium ${
                  pathname === '/dashboard'
                    ? 'bg-[#2563EB]/10 border-[#2563EB] text-[#c8c8c8]'
                    : 'border-transparent text-[#ffffff6e] hover:bg-[#0c0c0c] hover:border-[#2563EB] hover:text-[#c8c8c8]'
                }`}
              >
                Dashboard
              </Link>
            </div>
          </div>
        )}
      </nav>
  );
}

// CustomErrorBoundary class removed since theme toggle was deleted 