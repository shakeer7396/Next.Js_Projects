import './globals.css';

export const metadata = {
  title: 'Task-List App',
  description: 'A simple task list app using Next.js 14 and TailwindCSS 4',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
