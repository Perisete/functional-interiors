import "../globals.css";
import Header from '@/app/ui/header';
import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <main className={montserrat.className}>
          <Header />
          {children}
        </main>
      </body>
    </html>
  );
}
