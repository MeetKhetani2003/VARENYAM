import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: {
    default: "Varenyam Neurocare Center | Advanced Neurorehabilitation",
    template: "%s | Varenyam Neurocare"
  },
  description: "Specialized neurorehabilitation center in Ankleshwar providing evidence-based precision care for stroke, SCI, and pediatric conditions. Restoring movement, rebuilding lives.",
  keywords: ["Neurorehabilitation", "Stroke Recovery", "Ankleshwar Physiotherapy", "Cerebral Palsy Center", "Brain Injury Rehab", "Varenyam Neurocare"],
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
  openGraph: {
    title: "Varenyam Neurocare Center",
    description: "Expert Neurorehabilitation & Pediatric Care in Ankleshwar.",
    url: "https://varenyamneuro.com",
    siteName: "Varenyam Neurocare",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Varenyam Neurocare Center",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
};

import SmoothScroll from "@/components/SmoothScroll";

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
