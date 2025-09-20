import "./globals.css";
import { BaseLayout } from "@/components/layout/BaseLayout";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <BaseLayout>
      {children}
    </BaseLayout>
  );
}
