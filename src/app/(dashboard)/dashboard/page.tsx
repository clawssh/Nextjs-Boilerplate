import { DashboardLayout } from '@/components/layout/DashboardLayout';

export default function DashboardPage() {
  return (
    <DashboardLayout 
      title="Home" 
      description="Your main dashboard overview"
    >
      <div className="text-center py-20">
        <h2 className="text-2xl font-semibold text-[#c8c8c8] mb-4">Welcome to Your Dashboard</h2>
        <p className="text-[#ffffff6e]">
          This is a placeholder dashboard. Add your content here.
        </p>
      </div>
    </DashboardLayout>
  );
} 