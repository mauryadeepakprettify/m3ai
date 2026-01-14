import "./globals.css";
import MainTemplate from "@/components/templates/MainTemplate";
import ReduxProvider from "@/store/provider";
import localFont from "next/font/local";
import { Toaster } from "react-hot-toast";

const roobert = localFont({
  src: [
    {
      path: "../../public/fonts/roobert-regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/roobert-medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/roobert-semibold.woff2",
      weight: "600",
      style: "normal",
    },
  ],
  variable: "--font-roobert",
  display: "swap",
});

export const metadata = {
  title: "M3AI",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-scroll-behavior="smooth" className={roobert.variable}>
      <body className="antialiased">
        <ReduxProvider>
          <Toaster position="top-center" reverseOrder={false} />
          <MainTemplate>{children}</MainTemplate>
        </ReduxProvider>
      </body>
    </html>
  );
}
