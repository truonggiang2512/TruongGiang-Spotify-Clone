import Footer from "./components/footer";
import Navbar from "./components/Navbar";
import ThemeRegistry from "@/app/lib/ThemeRegistry";
import DrawerComponent from "./components/DrawerComponent";
const metadata = {
  title: "Giangdev Spotify",
  description: "Clone Spotify",
};

export default function RootLayout({
  children,
  isHeader,
  isDrawer,
}: {
  children: React.ReactNode;
  isHeader?: boolean;
  isDrawer?: boolean;
}) {
  return (
    <html lang="en">
      <body>
        <ThemeRegistry>
          {isHeader ? <Navbar /> : <></>}
          {isDrawer ? <DrawerComponent /> : <></>}
          {children}
        </ThemeRegistry>
      </body>
    </html>
  );
}
