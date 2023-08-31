import CustomNavbar from "@/components/CustomNavbar";
import "react-toastify/dist/ReactToastify.css";
import "./globals.css";
import { Inter } from "next/font/google";
import GlobalProvider from "@/Redux/GlobalProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Team Reporter",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <GlobalProvider>
          <CustomNavbar />
          {children}
        </GlobalProvider>
      </body>
    </html>
  );
}
