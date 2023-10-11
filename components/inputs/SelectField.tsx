import {
  Box,
  FormControl,
  InputBase,
  MenuItem,
  Select,
  styled,
} from "@mui/material";
import React, { useState } from "react";

type Props = {
  defaultValue: string | number;
  options: string[] | number[];
};

const StyledInput = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    position: "relative",
    backgroundColor: "transparent",
    fontSize: '.8rem',
    padding: "10px 26px 10px 12px",
    "&:focus": {
      borderRadius: 4,
      backgroundColor: "transparent",
      border: "0",
      outline: "0",
    },
  },
}));

export default function SelectField({ defaultValue, options }: Props) {
  return (
    <Box>
      <FormControl
        fullWidth
        sx={{ "& .MuiSelect-outlined": { border: "none" } }}
      >
        <Select
          defaultValue={defaultValue}
          variant="standard"
          input={<StyledInput />}
        >
          {options.map((option) => (
            <MenuItem key={option} value={option}>
              {option}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
}
