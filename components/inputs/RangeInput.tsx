import { ArrowDropDown, ArrowDropUp } from "@mui/icons-material";
import {
  InputBase,
  Paper,
  Popover,
  styled,
} from "@mui/material";
import React, { MouseEvent, ReactNode, useState } from "react";

type Props = {
  value: any;
  children: ReactNode;
};

const BoxContainer = styled("div")(({theme}) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: 'center',
  width: '100%',
  border: `1px solid ${theme.palette.text.primary}`,
  padding: '12px 12px 12px 18px',
  borderRadius: '20px',
  [theme.breakpoints.up("md")]: {
    borderRadius: '0',
    border: '0',
    width: '25%',
    borderRight: `1px solid ${theme.palette.text.primary}`,
  }
}))

const StyledInputBase = styled(InputBase)(({theme}) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    border: "0",
    fontSize: '.8rem'
  },
}))

export default function RangeInput({ value, children }: Props) {
  const [anchorEl, setAnchorEl] = useState<HTMLDivElement | null>(null);

  const handleClick = (event: MouseEvent<HTMLDivElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "custom-range-input" : undefined;

  return (
    <>
      <BoxContainer id={id} onClick={handleClick}>
        <StyledInputBase
          value={value}
          readOnly
        />
        {open ? <ArrowDropUp /> : <ArrowDropDown />}
      </BoxContainer>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
      >
        <Paper sx={{ p: 2 }}>{children}</Paper>
      </Popover>
    </>
  );
}
