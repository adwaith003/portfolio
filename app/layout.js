export const metadata = {
  title: "Adwaith M Portfolio",
  description: "Cloud Security Engineer Portfolio",
};

import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
