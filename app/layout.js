import './globals.css';
import { Outfit, Inter, JetBrains_Mono } from 'next/font/google';
import Footer from './components/Footer';
import Nav from './components/Nav';
import { ThemeProvider } from './components/ThemeProvider';

const display = Outfit({
  subsets: ['latin'],
  variable: '--font-display',
  weight: ['400', '500', '600', '700'],
});

const body = Inter({
  subsets: ['latin'],
  variable: '--font-body',
});

const mono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  weight: ['400', '500'],
});

export const metadata = {
  title: 'Yogesh Sharma — Portfolio',
  description:
    'Computer science student at York University, interested in software development and artificial intelligence.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('theme');var d=window.matchMedia('(prefers-color-scheme: dark)').matches;var n=t||(d?'dark':'light');document.documentElement.classList.toggle('dark',n==='dark');}catch(e){}})();`,
          }}
        />
      </head>
      <body
        className={`${display.variable} ${body.variable} ${mono.variable} bg-bg font-body text-ink antialiased`}
      >
        <ThemeProvider>
          <div className="relative min-h-screen bg-grid">
            <div className="pointer-events-none absolute inset-x-0 top-0 h-96 bg-gradient-to-b from-accent/5 to-transparent dark:from-accent/10" />
            <div className="relative mx-auto w-full max-w-7xl px-6 sm:px-10 lg:px-12">
              <Nav />
              <main className="pb-12">{children}</main>
              <Footer />
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
