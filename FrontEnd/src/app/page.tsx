import { Typography } from "@mui/material";
import Image from "next/image";
import RootLayout from "./layout";

export default function Home() {
  return (
    <RootLayout isFooter={true} isHeader={true}>
      <Image
        src="/next.svg"
        alt="Next.js Logo"
        width={180}
        height={37}
        priority
      />
      <Typography>312312312312</Typography>
    </RootLayout>
  );
}
