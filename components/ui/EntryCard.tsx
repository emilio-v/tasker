import { DragEvent, FC, useContext } from "react";
import { useRouter } from "next/router";
import { Entry } from "@/interfaces";
import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";
import { UIContext } from "@/context/ui";
import { dateFunctions } from "@/utils";

interface EntryCardProps {
  entry: Entry;
}

export const EntryCard: FC<EntryCardProps> = ({ entry }) => {
  const { startDragging, endDragging } = useContext(UIContext);
  const { title, createdAt } = entry;
  const router = useRouter();

  const onDragStart = (event: DragEvent) => {
    event.dataTransfer.setData("text", entry._id);
    startDragging();
  };

  const onDragEnd = () => {
    endDragging();
  };

  return (
    <Card
      onClick={() => {
        router.push(`/entries/${entry._id}`);
      }}
      sx={{ borderRadius: "10px", marginBottom: 1 }}
      // Events
      draggable
      onDragStart={onDragStart}
      onDragEnd={onDragEnd}
    >
      <CardActionArea>
        <CardContent>
          <Typography sx={{ whiteSpace: "pre-line" }} fontSize={16}>
            {title}
          </Typography>
        </CardContent>

        <CardActions
          sx={{ display: "flex", justifyContent: "end", paddingRight: 2 }}
        >
          <Typography variant="body2" fontSize={12}>
            {dateFunctions.getFormatDistancceToNow(createdAt)}
          </Typography>
        </CardActions>
      </CardActionArea>
    </Card>
  );
};
