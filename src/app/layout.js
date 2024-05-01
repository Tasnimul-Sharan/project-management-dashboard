import { Athiti } from "next/font/google";
import "../styles/globals.css";
import AppProviders from "@/lib/providers/app-providers";

const inter = Athiti({ subsets: ["latin"], weight: ["500", "600"] });

export const metadata = {
  title: "Project Management Dashboard",
  description: "Created By Tasnimul Alam.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AppProviders>
          {children}
        </AppProviders>
      </body>
    </html>
  );
}
