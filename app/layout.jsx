import "./globals.scss";
import 'bootstrap-icons/font/bootstrap-icons.css'

import { Inter } from 'next/font/google'
import Header from "./components/Header";
import Footer from "./components/Footer";
 
// If loading a variable font, you don't need to specify the font weight
const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
})

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.className}>
      <body>
        <Header/>
        {children}
        <Footer/>
        </body>
    </html>
  );
}
