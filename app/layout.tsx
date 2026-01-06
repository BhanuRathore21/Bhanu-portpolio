import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
export const metadata = {
  title: "Bhanu Pratap Singh | Software Engineer | Fintech & SaaS",
  description:
    "Bhanu Pratap Singh is a Software Engineer specializing in PHP, Laravel, Golang, Fintech platforms, payment gateway integrations, SaaS products, microservices architecture, AWS, Docker, and DevOps.",
  keywords: [
    "Bhanu Pratap Singh",
    "Software Engineer",
    "PHP Developer",
    "Laravel Developer",
    "Golang Developer",
    "Fintech Developer",
    "Payment Gateway Integration",
    "SaaS Development",
    "Microservices Architecture",
    "API Development",
    "AWS",
    "Docker",
    "DevOps"
  ],
  authors: [{ name: "Bhanu Pratap Singh" }],
  creator: "Bhanu Pratap Singh",
  openGraph: {
    title: "Bhanu Pratap Singh | Software Engineer | Fintech & SaaS",
    description:
      "Experienced Software Engineer with 4+ years in fintech, SaaS, cloud-native applications, payment gateways, APIs, AWS, Docker, and DevOps.",
    url: "https://your-domain.com",
    siteName: "Bhanu Pratap Singh Portfolio",
    images: [
      {
        url: "https://your-domain.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "Bhanu Pratap Singh Portfolio"
      }
    ],
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Bhanu Pratap Singh | Software Engineer",
    description:
      "Fintech & SaaS Software Engineer | PHP, Laravel, Golang | AWS | Docker | API Architecture",
    images: ["https://your-domain.com/og-image.png"]
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="font-sans">{children}</body>
    </html>
  );
}
