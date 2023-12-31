import { FC, ReactNode } from "react";
import Head from "next/head";

import { Box } from "@mui/material";
import { Navbar, Sidebar } from "../ui";

interface LayoutProps {
  title?: string;
  children: ReactNode;
}

export const Layout: FC<LayoutProps> = ({ title = "Tasker App", children }) => {
  return (
    <Box sx={{ flexFlow: 1 }}>
      <Head>
        <title>{title}</title>
      </Head>

      <Navbar />

      <Box sx={{ padding: "10px 20px" }}>{children}</Box>
    </Box>
  );
};
