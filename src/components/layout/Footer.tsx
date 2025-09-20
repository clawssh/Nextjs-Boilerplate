import React from 'react';

export function Footer() {
  return (
    <footer className="py-6 text-center text-sm text-gray-400 border-t border-gray-700">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center space-y-4">
          <div className="text-center">
            <p className="text-gray-300 mb-2">
              <span className="text-blue-400 font-semibold">Claw Boiler Plate</span>
            </p>
            <p className="text-gray-500 text-sm">
              Ready to build something amazing!
            </p>
            <div className="flex space-x-4 mt-3 justify-center">
              <SocialLink href="https://github.com" label="GitHub" />
              <SocialLink href="https://nextjs.org" label="Next.js" />
              <SocialLink href="https://tailwindcss.com" label="Tailwind CSS" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

function SocialLink({ href, label }: { href: string; label: string }) {
  return (
    <a 
      href={href} 
      target="_blank" 
      rel="noopener noreferrer" 
      className="text-gray-400 hover:text-blue-400 transition-colors"
      aria-label={label}
    >
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        className="h-5 w-5" 
        fill="currentColor" 
        viewBox="0 0 24 24"
      >
        <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z" />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    </a>
  );
} 