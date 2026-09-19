import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = { title: "Sachet — AI Scam Shield", description: "Pause. Check. Stay Safe." };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
