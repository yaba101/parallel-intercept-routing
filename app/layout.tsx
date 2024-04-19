import { cn } from "@/lib/utils";
import { Inter } from "next/font/google";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Nextjs Parallel + Intercept Route",
  description: "Next.js and TypeScript.",
};

export default function RootLayout({
  children,
  authModal,
}: {
  children: React.ReactNode;
  authModal: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={cn(
        "bg-white text-slate-900 antialiased light",
        inter.className
      )}
    >
      <body className="min-h-screen pt-12 antialiased bg-slate-50">
        {authModal}

        <div className="container h-full pt-12 mx-auto max-w-7xl">
          {children}
        </div>
      </body>
    </html>
  );
}
