import type { Metadata } from "next";
import { Allison, Poppins } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";

const allison = Allison({
  variable: "--font-allison",
  weight: "400",
  subsets: ["latin"],
});
const poppins = Poppins({
  variable: "--font-poppins",
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://drcharlesigwe.com"),
  title: {
    default: "Dr. Charles Igwe | Speaker | Mentor | Coach",
    template: "%s | Dr. Charles Igwe",
  },
  description: "Inspiring Growth. Empowering Leaders. Driving Transformation.",
  openGraph: {
    siteName: "Dr. Charles Igwe",
    type: "website",
    locale: "en_US",
    url: "https://drcharlesigwe.com",
  },
  twitter: { card: "summary_large_image", creator: "@drcharlesigwe" },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico"
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Dr. Charles Igwe",
    url: "https://drcharlesigwe.com",
    logo: "https://drcharlesigwe.com/favicon.ico",
    sameAs: [
      "https://twitter.com/drcharlesigwe",
      "https://www.linkedin.com/in/drcharlesigwe",
      "https://www.facebook.com/drcharlesigwe",
    ],
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Dr. Charles Igwe",
    url: "https://drcharlesigwe.com",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://drcharlesigwe.com/search?q={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <html lang="en">
      <body className={`${allison.variable} ${poppins.variable} antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([organizationSchema, websiteSchema]),
          }}
        />
        {children}
        <Toaster position="bottom-right" richColors closeButton />
      </body>
    </html>
  );
}
