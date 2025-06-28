import "./globals.css";
import Navbar from "./components/Navbar";

export const metadata = {
  title: "CustomerApp",
  description: "Customer management system",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gray-50 min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow w-full">{children}</main>
        <footer className="bg-indigo-700 text-white text-center p-4 mt-8">
          © 2025 CustomerApp. All rights reserved.
        </footer>
      </body>
    </html>
  );
}
