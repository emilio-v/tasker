import { useContext, useState } from "react";
import NextLink from "next/link";
import { AppBar, IconButton, Link, Toolbar, Typography } from "@mui/material";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import { UIContext } from "@/context/ui";
import AddToPhotosIcon from "@mui/icons-material/AddToPhotos";
import AddNewEntry from "./AddNewEntry";

export const Navbar = () => {
  const { openSideMenu } = useContext(UIContext);
  const [openModal, setOpenModal] = useState(false);

  const handleOpen = () => setOpenModal(true);
  const handleClose = () => setOpenModal(false);

  return (
    <>
      <AppBar position="sticky">
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <NextLink
            href="/"
            style={{
              color: "white",
              textDecoration: "none",
            }}
          >
            <Typography variant="h6" fontSize={25} fontWeight={700}>
              Tasker
            </Typography>
          </NextLink>
          <IconButton aria-label="add" color="primary" onClick={handleOpen}>
            <AddToPhotosIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <AddNewEntry openModal={openModal} handleClose={handleClose} />
    </>
  );
};
