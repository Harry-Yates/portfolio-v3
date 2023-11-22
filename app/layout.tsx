import "./globals.css";

export const metadata = {
  title: "Harry Yates | Fullstack Developer",
  description: "Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className="flex flex-col items-center justify-start min-h-screen bg-[#F7F7F7]"
        style={{ fontFamily: "'Helvetica Now Display', Arial, sans-serif" }}>
        {children}
      </body>
    </html>
  );
}
