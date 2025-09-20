import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowRight, Code, Shield, Users, Database, Palette } from 'lucide-react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-[#0c0c0c] relative overflow-hidden">
        {/* Ripple Grid Background */}
        <div className="absolute inset-0 z-0">
        </div>
        {/* Hero Section */}
        <section className="relative z-10 w-full max-w-6xl mx-auto px-4 py-20 text-center">
          <div className="mb-8">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-[#2563EB] via-[#1d4ed8] to-[#2563EB] bg-clip-text text-transparent">
              Claw Boiler Plate
            </h1>
            <p className="text-xl md:text-2xl text-[#c8c8c8] mb-8 max-w-4xl mx-auto leading-relaxed">
              A modern, production-ready Next.js starter template with TypeScript, Tailwind CSS, and shadcn/ui components
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <Button 
              asChild
              size="lg"
              className="bg-[#2563EB] hover:bg-[#1d4ed8] text-white px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              <Link href="/dashboard" className="flex items-center">
                Get Started <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button 
              variant="outline" 
              asChild
              size="lg"
              className="border-[#2563EB] text-[#2563EB] hover:bg-[#2563EB] hover:text-white px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300"
            >
              <Link href="/sign-up">Sign Up</Link>
            </Button>
          </div>
        </section>

        {/* Features Section */}
        <section className="relative z-10 w-full max-w-7xl mx-auto px-4 py-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#c8c8c8]">
              Key Features
            </h2>
            <p className="text-lg text-[#ffffff6e] max-w-2xl mx-auto">
              Everything you need to build modern web applications
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div 
                key={feature.title} 
                className="bg-[#121212] rounded-xl p-8 shadow-2xl border border-[rgba(255,255,255,0.03)] transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-[#2563EB]/20 group"
                style={{ animationDelay: `${0.1 + index * 0.1}s` }}
              >
                <div className="flex items-center mb-6">
                  <div className="bg-[#2563EB]/20 p-4 rounded-xl mr-4 group-hover:bg-[#2563EB]/30 transition-colors">
                    <feature.icon className="h-8 w-8 text-[#2563EB]" />
                  </div>
                  <h3 className="text-xl font-semibold text-[#c8c8c8] group-hover:text-white transition-colors">
                    {feature.title}
                  </h3>
                </div>
                <p className="text-[#ffffff6e] leading-relaxed group-hover:text-[#c8c8c8] transition-colors">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <section className="relative z-10 w-full max-w-6xl mx-auto px-4 py-20">
          <div className="bg-gradient-to-r from-[#2563EB] to-[#1d4ed8] rounded-2xl p-12 md:p-16 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-[#2563EB]/90 to-[#1d4ed8]/90"></div>
            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                Ready to Build Amazing Projects?
              </h2>
              <p className="text-xl text-white/90 mb-10 max-w-3xl mx-auto leading-relaxed">
                Start with this production-ready boilerplate and focus on building your features instead of setting up infrastructure.
              </p>
              <Button 
                asChild
                size="lg" 
                className="bg-white text-[#2563EB] hover:bg-white/90 px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                <Link href="/dashboard" className="flex items-center">
                  Start Building Now <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

      </div>
      <Footer />
    </>
  );
}

const features = [
  {
    title: 'Next.js App Router',
    description: 'Built on the latest Next.js version with App Router for improved routing and layouts.',
    icon: Code,
  },
  {
    title: 'TypeScript Support',
    description: 'Full TypeScript support for type-safe development and better developer experience.',
    icon: Database,
  },
  {
    title: 'Modern UI Components',
    description: 'Beautiful UI with Tailwind CSS and shadcn/ui components for rapid development.',
    icon: Palette,
  },
  {
    title: 'Responsive Design',
    description: 'Mobile-first responsive design that works perfectly on all devices and screen sizes.',
    icon: Users,
  },
  {
    title: 'Security First',
    description: 'OWASP Top 10 security compliance with built-in protection against common vulnerabilities.',
    icon: Shield,
  },
  {
    title: 'Developer Experience',
    description: 'Optimized for developer productivity with hot reload, linting, and modern tooling.',
    icon: Code,
  },
];
