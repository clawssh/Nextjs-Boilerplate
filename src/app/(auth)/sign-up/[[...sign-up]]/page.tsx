import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Sparkles } from 'lucide-react';

export default function Page() {
  return (
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
            Sign Up
          </h1>
          <p className="mt-2 text-sm text-[#ffffff6e]">
            Create your account to get started.
          </p>
        </div>

        {/* Auth Card */}
        <Card className="mx-auto max-w-sm bg-[#121212] border-[rgba(255,255,255,0.03)]">
          <CardHeader className="space-y-1 text-center">
            <CardTitle className="text-2xl font-bold text-[#c8c8c8]">Sign Up</CardTitle>
            <CardDescription className="text-[#ffffff6e]">Create your account to get started.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-[#c8c8c8]">Full Name</Label>
                <Input 
                  id="name" 
                  type="text" 
                  placeholder="Enter your full name" 
                  required 
                  className="bg-[#0c0c0c] border-[rgba(255,255,255,0.03)] text-[#c8c8c8]"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email" className="text-[#c8c8c8]">Email</Label>
                <Input 
                  id="email" 
                  type="email" 
                  placeholder="Enter your email" 
                  required 
                  className="bg-[#0c0c0c] border-[rgba(255,255,255,0.03)] text-[#c8c8c8]"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password" className="text-[#c8c8c8]">Password</Label>
                <Input 
                  id="password" 
                  type="password" 
                  placeholder="Create a password" 
                  required 
                  className="bg-[#0c0c0c] border-[rgba(255,255,255,0.03)] text-[#c8c8c8]"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="confirmPassword" className="text-[#c8c8c8]">Confirm Password</Label>
                <Input 
                  id="confirmPassword" 
                  type="password" 
                  placeholder="Confirm your password" 
                  required 
                  className="bg-[#0c0c0c] border-[rgba(255,255,255,0.03)] text-[#c8c8c8]"
                />
              </div>
              <Button className="w-full bg-[#2563EB] hover:bg-[#1d4ed8] text-white" type="submit">
                Sign Up
              </Button>
              <div className="text-center text-sm text-[#ffffff6e]">
                Already have an account?{' '}
                <a href="/sign-in" className="text-[#2563EB] hover:underline">
                  Sign in
                </a>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Footer */}
        <div className="text-center">
          <p className="text-sm text-[#ffffff6e]">
            Claw Boiler Plate - Ready to build something amazing!
          </p>
        </div>
      </div>
    </div>
  );
} 