import { useContext } from "react";
import NextLink from "next/link";
import { AppBar, IconButton, Link, Toolbar, Typography } from "@mui/material";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import { UIContext } from "@/context/ui";

export const Navbar = () => {
  const { openSideMenu } = useContext(UIContext);

  return (
    <AppBar position="sticky">
      <Toolbar>
        <NextLink
          href="/"
          style={{
            color: "white",
            textDecoration: "none",
          }}
        >
          <Typography variant="h6">Tasker</Typography>
        </NextLink>
      </Toolbar>
    </AppBar>
  );
};
