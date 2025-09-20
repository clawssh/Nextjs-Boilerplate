import type { Metadata } from "next";
import { Toaster } from "sonner";

export const metadata: Metadata = {
  title: "Claw Boiler Plate",
  description: "A modern Next.js boilerplate with Tailwind CSS and shadcn/ui",
  keywords: ["Next.js", "React", "Tailwind CSS", "TypeScript", "Boilerplate"],
  creator: "Claw Boiler Plate",
};

interface BaseLayoutProps {
  children: React.ReactNode;
  className?: string;
}

export function BaseLayout({ 
  children, 
  className = "" 
}: BaseLayoutProps) {
  return (
    <html lang="en" className="light" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@100..900&display=swap" rel="stylesheet" />
      </head>
      <body className={`outfit-app min-h-screen bg-background antialiased transition-colors ${className}`}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
