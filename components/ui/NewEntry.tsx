import { ChangeEvent, useContext, useState } from "react";
import { Box, Button, TextField } from "@mui/material";
import SaveIcon from "@mui/icons-material/Save";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { EntriesContext } from "@/context/entries";
import { UIContext } from "@/context/ui";

export const NewEntry = () => {
  const [inputValue, setInputValue] = useState("");
  const [touched, setTouched] = useState(false);

  const { addNewEntry } = useContext(EntriesContext);
  const { isAddingEntry, setIsAdding } = useContext(UIContext);

  const onTextFieldChanges = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setInputValue(event.target.value);
  };

  const onSave = () => {
    if (!inputValue.length) return;

    addNewEntry(inputValue);

    setIsAdding(false);
    setTouched(false);
    setInputValue("");
  };

  return (
    <Box sx={{ marginBottom: 2, paddingX: 1 }}>
      {isAddingEntry ? (
        <>
          <TextField
            fullWidth
            sx={{ marginTop: 2, marginBottom: 1 }}
            placeholder="New Entry"
            autoFocus
            multiline
            label="New Entry"
            helperText={!inputValue.length && touched && "Enter a description"}
            error={!inputValue.length && touched}
            value={inputValue}
            onChange={onTextFieldChanges}
            onBlur={() => setTouched(true)}
          />
          <Box display="flex" justifyContent="space-between">
            <Button
              variant="text"
              onClick={() => {
                setIsAdding(false);
                setTouched(false);
                setInputValue("");
              }}
            >
              Cancel
            </Button>
            <Button
              variant="outlined"
              color="secondary"
              endIcon={<SaveIcon />}
              onClick={onSave}
            >
              Save
            </Button>
          </Box>
        </>
      ) : (
        <Button
          startIcon={<AddCircleOutlineIcon />}
          fullWidth
          variant="outlined"
          onClick={() => setIsAdding(true)}
        >
          Add Task
        </Button>
      )}
    </Box>
  );
};
