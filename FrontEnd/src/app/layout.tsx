import Footer from "./components/footer";
import Navbar from "./components/Navbar";
import ThemeRegistry from "@/app/lib/ThemeRegistry";
const metadata = {
  title: "Giangdev Spotify",
  description: "Clone Spotify",
};

export default function RootLayout({
  children,
  isHeader,
  isFooter,
}: {
  children: React.ReactNode;
  isHeader?: boolean;
  isFooter?: boolean;
}) {
  return (
    <html lang="en">
      <body>
        <ThemeRegistry>
          {isHeader ? <Navbar /> : <></>}
          {children}
          {isFooter ? <Footer /> : <></>}
        </ThemeRegistry>
      </body>
    </html>
  );
}
