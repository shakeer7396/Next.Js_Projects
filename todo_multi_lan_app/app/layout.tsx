import "./globals.css";
import "./lib/i18n"; // Add this line
import { Suspense } from 'react';

export const metadata = {
  title: "Task-List App",
  description: "A simple task list app using Next.js 14 and TailwindCSS 4",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Suspense fallback={<div>Loading translations...</div>}>
          {children}
        </Suspense>
      </body>
    </html>
  );
}
