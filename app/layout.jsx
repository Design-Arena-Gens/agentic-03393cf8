import "./globals.css";

export const metadata = {
  title: "VitalCare Health | Transform Your Wellness Today",
  description: "Discover VitalCare Health, the all-in-one solution for optimizing wellness with personalized programs, supplements, and expert support."
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
