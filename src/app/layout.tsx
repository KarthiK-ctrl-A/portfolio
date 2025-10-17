import "./globals.css";
import { ThemeProvider } from "next-themes";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const metadata = {
  title: "Sai Karthik Patri | Portfolio",
  description: "Cloud Engineer • Research Assistant • DevOps & AI Enthusiast",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-[#0d0d0d] text-gray-300 min-h-screen">
        <ThemeProvider attribute="class" defaultTheme="dark">
          <div className="max-w-3xl mx-auto px-6">
            <Header />
            {children}
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
