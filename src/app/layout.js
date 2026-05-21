import "./globals.css";
import { Inter, Space_Grotesk } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space",
});

export const metadata = {
  title: "Cyber Health AI",
  description: "Futuristic Healthcare SaaS Platform",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`
          ${inter.variable}
          ${spaceGrotesk.variable}
          cyber-grid
          bg-[#070a12]
          text-white
          min-h-screen
        `}
      >
        {children}
      </body>
    </html>
  );
}