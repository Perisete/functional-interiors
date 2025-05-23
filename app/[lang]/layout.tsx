import "../globals.css";
import Header from '@/app/ui/header';
import { Montserrat } from 'next/font/google';
import { getDictionary } from "./dictionaries";

type SupportedLocales = 'en' | 'es' | 'hr';

const montserrat = Montserrat({ subsets: ['latin'] })

export default function RootLayout({
  children,
  params
}: Readonly<{
  children: React.ReactNode,
  params: { lang: SupportedLocales };
}>) {
  const lang = params.lang;
  const dict = getDictionary(lang);
  return (
    <html>
      <body>
        <main className={`${montserrat.className} mb-10`}>
          <Header
            locale={dict}
          />
          {children}
        </main>
      </body>
    </html>
  );
}
