import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

export const metadata = {
  title: "Reality Slovakia",
  description: "Realitný web vytvorený Petrom Hajdu",
};

export default function RootLayout({ children }) {
  return (
    <html lang="sk">
      <body className="bg-white flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
