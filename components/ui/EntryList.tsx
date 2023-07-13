import { List, Paper } from "@mui/material";
import { EntryCard } from "./";

export const EntryList = () => {
  return (
    <div>
      <Paper
        sx={{
          height: "calc(100vh - 180px)",
          overflowY: "auto",
          backgroundColor: "transparent",
          padding: "0px 8px",
        }}
      >
        <List sx={{ opacity: 1 }}>
          <EntryCard />
        </List>
      </Paper>
    </div>
  );
};
