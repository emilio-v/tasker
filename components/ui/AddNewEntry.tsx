import { ChangeEvent, useContext, useState } from "react";
import { EntryStatus } from "@/interfaces";
import {
  Box,
  Button,
  Fade,
  FormControl,
  FormControlLabel,
  FormLabel,
  Modal,
  Radio,
  RadioGroup,
  TextField,
  capitalize,
  styled,
} from "@mui/material";
import SaveOutlinedIcon from "@mui/icons-material/SaveOutlined";
import { title } from "process";
import { EntriesContext } from "@/context/entries";

interface AddNewEntryProps {
  openModal: boolean;
  handleClose: () => void;
}

const validStatus: EntryStatus[] = ["pending", "in-progress", "finished"];

const StyledBox = styled(Box)(({ theme }) => ({
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  maxWidth: "338px",
  width: "100%",
  backgroundColor: theme.palette.background.paper,
  border: "2px solid #000",
  boxShadow: theme.shadows[24],
  padding: 24,
  [theme.breakpoints.up("sm")]: {
    maxWidth: "500px",
  },
  [theme.breakpoints.up("md")]: {
    maxWidth: "700px",
  },
}));

const AddNewEntry = ({ openModal, handleClose }: AddNewEntryProps) => {
  const { addNewEntry } = useContext(EntriesContext);
  const [inputTitle, setInputTitle] = useState("");
  const [inputDescription, setInputDescription] = useState("");
  const [status, setStatus] = useState<EntryStatus>("pending");
  const [touched, setTouched] = useState(false);

  const onTitleChanged = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setInputTitle(event.target.value);
  };

  const onDescriptionChanged = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setInputDescription(event.target.value);
  };

  const onStatusChanged = (event: ChangeEvent<HTMLInputElement>) => {
    setStatus(event.target.value as EntryStatus);
  };

  const onClose = () => {
    setTouched(false);
    handleClose();
  };

  const onSave = () => {
    if (!inputTitle.trim()) return;

    addNewEntry(inputTitle, inputDescription, status);

    setInputTitle("");
    setTouched(false);
    setInputDescription("");
    setStatus("pending");
    onClose();
  };

  return (
    <Modal open={openModal} onClose={onClose}>
      <Fade in={openModal}>
        <StyledBox>
          <TextField
            sx={{ marginTop: 2, marginBottom: 1 }}
            fullWidth
            placeholder="Title"
            multiline
            label="Title"
            value={inputTitle}
            onChange={onTitleChanged}
            helperText={!inputTitle.length && touched && "Enter a title"}
            error={!inputTitle.length && touched}
            onBlur={() => setTouched(true)}
          />
          <TextField
            sx={{ marginTop: 2, marginBottom: 1 }}
            fullWidth
            placeholder="Description"
            multiline
            rows={6}
            label="Description"
            value={inputDescription}
            onChange={onDescriptionChanged}
          />
          <FormControl>
            <FormLabel>State</FormLabel>
            <RadioGroup row value={status} onChange={onStatusChanged}>
              {validStatus.map((option) => (
                <FormControlLabel
                  key={option}
                  value={option}
                  control={<Radio />}
                  label={capitalize(option)}
                />
              ))}
            </RadioGroup>
          </FormControl>
          <Button
            startIcon={<SaveOutlinedIcon />}
            variant="contained"
            fullWidth
            sx={{
              fontWeight: 700,
              marginTop: "10px",
            }}
            onClick={onSave}
            disabled={!inputTitle}
          >
            Save
          </Button>
        </StyledBox>
      </Fade>
    </Modal>
  );
};

export default AddNewEntry;
