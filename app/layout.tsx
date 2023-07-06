import Navbar from '@/components/Navbar';
import './globals.css'
import Footer from '@/components/Footer';
export const metadata = {
  title: "Clonibble",
  description: "Showcase and discover Remarkable developer projects",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Navbar/>
        <main>
          {children}
          <Footer/>
        </main>
      </body>
    </html>
  );
}
