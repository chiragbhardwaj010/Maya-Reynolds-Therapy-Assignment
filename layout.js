import "./globals.css";

export const metadata = {
  title: "Dr. Maya Reynolds, PsyD | Therapy in Santa Monica, CA",
  description:
    "Warm, collaborative therapy for adults navigating anxiety, trauma, burnout, panic, and stress in Santa Monica and across California.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
