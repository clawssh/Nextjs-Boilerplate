'use client';

import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '@/components/ui/breadcrumb';
import { ChevronsUp, Home, Settings, User, Bell, Sparkles } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface DashboardLayoutProps {
  children: React.ReactNode;
  title?: string;
  description?: string;
  showWelcomeBanner?: boolean;
}

export function DashboardLayout({
  children,
  title = "Settings",
  description = "Your personal dashboard at Claw Boiler Plate",
  showWelcomeBanner = true
}: DashboardLayoutProps) {
  const pathname = usePathname();

  const sidebarItems = [
    { name: 'Home', href: '/dashboard', icon: Home },
    { name: 'Settings', href: '/dashboard/settings', icon: Settings },
  ];

  return (
    <div className="min-h-screen bg-[#0c0c0c]">
      {/* Sidebar */}
      <div className="fixed inset-y-0 left-0 z-50 w-64">
        <div className="flex flex-col h-full">
          {/* Logo */}
          <div className="flex items-center px-6 py-4 border-b border-[rgba(255,255,255,0.03)]">
            <div className="flex items-center space-x-2">
              <Sparkles className="h-6 w-6 text-[#2563EB]" />
              <span className="text-xl font-bold text-[#c8c8c8]">Claw</span>
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex-1 px-4 py-6 space-y-2">
            {sidebarItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`flex items-center px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                    isActive
                      ? 'bg-[#2563EB]/20 text-[#c8c8c8] border border-[#2563EB]/30'
                      : 'text-[#ffffff6e] hover:text-[#c8c8c8] hover:bg-[#121212]'
                  }`}
                >
                  <item.icon className="h-4 w-4 mr-3" />
                  {item.name}
                </Link>
              );
            })}
          </nav>

          {/* User Section */}
          <div className="px-4 py-4 border-t border-[rgba(255,255,255,0.03)]">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-[#2563EB] rounded-full flex items-center justify-center">
                <User className="h-4 w-4 text-white" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-[#c8c8c8] truncate">User Name</p>
                <p className="text-xs text-[#ffffff6e] truncate">user@example.com</p>
              </div>
              <Bell className="h-4 w-4 text-[#ffffff6e] hover:text-[#c8c8c8] cursor-pointer" />
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="fixed inset-y-0 right-0 left-64 p-4">
        <div className="h-full bg-[#121212] rounded-xl border border-[rgba(255,255,255,0.03)] p-8 overflow-hidden">
          {/* Breadcrumb Navigation */}
          <div className="mb-8">
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink href="/dashboard" className="text-[#ffffff6e] hover:text-[#c8c8c8]">
                    Home
                  </BreadcrumbLink>
                </BreadcrumbItem>
                {pathname !== '/dashboard' && (
                  <>
                    <BreadcrumbSeparator className="text-[#ffffff6e]" />
                    <BreadcrumbItem>
                      <BreadcrumbPage className="text-[#c8c8c8]">
                        {title}
                      </BreadcrumbPage>
                    </BreadcrumbItem>
                  </>
                )}
              </BreadcrumbList>
            </Breadcrumb>
          </div>

          {/* Welcome Alert */}
          <Alert className="mb-8 border-[#2563EB]/20 bg-[#2563EB]/5">
            <ChevronsUp className="h-4 w-4 text-[#2563EB]" />
            <AlertTitle className="text-[#c8c8c8]">Ready to Build Something Amazing</AlertTitle>
            <AlertDescription className="text-[#ffffff6e]">
              This is a protected page that only authenticated users can access. Start building your amazing project now!
            </AlertDescription>
          </Alert>

          {children}
        </div>
      </div>
    </div>
  );
}