import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata = {
  title: "Dragon News",
  description: "Stay informed with Dragon News - your trusted source for the latest news, insightful articles, and in-depth analysis on a wide range of topics. From breaking news to feature stories, we bring you the information that matters most, delivered with accuracy and integrity. Explore our diverse content and stay connected to the world around you with Dragon News.",
};

export default function RootLayout({ children }) {
  return (
    <html data-theme="light" lang="en" className={` h-full antialiased`}>
      <body className={`min-h-full flex flex-col ${poppins.className} font-sans`}>
        <main>{children}</main>
        <footer>{/* <Footer /> */}</footer>
      </body>
    </html>
  );
}
