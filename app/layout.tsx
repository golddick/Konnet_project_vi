import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { SessionProvider} from 'next-auth/react'
import "./globals.css";
import Nav from "@/components/Navbar/Nav";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
     
    <html lang="en">
      <body className={inter.className}>

          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
        <main className="flex-1   max-w-[1500px]   mx-auto" >{children}</main>
        </ThemeProvider>

        </body>
    </html>
  );
}
