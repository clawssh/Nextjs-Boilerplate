import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Sparkles } from 'lucide-react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';

interface AuthLayoutProps {
  children: React.ReactNode;
  title: string;
  description?: string;
  showCard?: boolean;
  cardClassName?: string;
}

export function AuthLayout({ 
  children, 
  title, 
  description,
  showCard = true,
  cardClassName = ""
}: AuthLayoutProps) {
  return (
    <>
      <Navbar />
      <div className="min-h-screen flex items-center justify-center bg-[#0c0c0c] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        {/* Header */}
        <div className="text-center">
          <div className="flex justify-center mb-4">
            <div className="flex items-center space-x-2">
              <Sparkles className="h-8 w-8 text-[#2563EB]" />
              <span className="text-2xl font-bold text-[#c8c8c8]">Claw</span>
            </div>
          </div>
          <h1 className="text-3xl font-bold text-[#c8c8c8] mb-2">
            {title}
          </h1>
          {description && (
            <p className="text-[#ffffff6e]">
              {description}
            </p>
          )}
        </div>

        {/* Content */}
        {showCard ? (
          <Card className={`bg-[#121212] border-[rgba(255,255,255,0.03)] ${cardClassName}`}>
            <CardHeader className="space-y-1">
              <CardTitle className="text-2xl text-center text-[#c8c8c8]">{title}</CardTitle>
              {description && (
                <CardDescription className="text-center text-[#ffffff6e]">
                  {description}
                </CardDescription>
              )}
            </CardHeader>
            <CardContent>
              {children}
            </CardContent>
          </Card>
        ) : (
          <div className="space-y-6">
            {children}
          </div>
        )}

        {/* Footer */}
        <div className="text-center">
          <p className="text-sm text-[#ffffff6e]">
            Claw Boiler Plate - Ready to build something amazing!
          </p>
        </div>
      </div>
      </div>
      <Footer />
    </>
  );
}

