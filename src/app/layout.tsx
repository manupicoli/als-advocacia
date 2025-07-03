import Navbar from "@/components/Navbar";
import "../styles/globals.css";
import Footer from "@/components/Footer";

export const metadata = {
  metadataBase: new URL("https://alsadvocacia.adv.br"),
  title: "ALS Advocacia",
  description: "ALS Advocacia - Escritório de Advocacia e Assessoria Jurídica",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "ALS Advocacia",
    description: "Escritório de Advocacia e Assessoria Jurídica",
    url: "https://alsadvocacia.adv.br",
    siteName: "ALS Advocacia",
    images: [
      {
        url: "/og-image.jpg",
        width: 800,
        height: 600,
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
