import { InputBase,  styled } from "@mui/material";
import React, { useState } from "react";
import SearchIcon from '@mui/icons-material/Search';
import SelectField from "./SelectField";

type Props = {};

export default function SearchBar({}: Props) {

  const [optionValue, setOptionValue] = useState('');

  const handleChange = (value: string | number) => {
    setOptionValue(optionValue)
  }

  console.log(optionValue)

  const options = [
    'Certified',
    'Lelang'
  ]

  const Search = styled("div")(({ theme }) => ({
    position: "relative",
    borderRadius: "50px",
    backgroundColor: "#FFF",
    paddingRight: '1rem',
    marginLeft: 0,
    width: "100%",
    alignItems: 'center',
    display: 'flex',
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto",
    },
  }));

  const SearchIconWrapper = styled("div")(({ theme }) => ({
    padding: theme.spacing(0, 2),
    // color: theme.palette.text,
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }));

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "inherit",
    width: '100%',
    [theme.breakpoints.up("sm")]: {
      width: 'auto'
    },
    "& .MuiInputBase-input": {
      padding: theme.spacing(1, 1, 1, 0),
      borderRight: `1px solid ${theme.palette.text.primary}`,
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create("width"),
      width: "100%",
      [theme.breakpoints.up("sm")]: {
        width: "20ch",
      },
    },
  }));

  return (
    <Search>
      <SearchIconWrapper>
        <SearchIcon />
      </SearchIconWrapper>
      <StyledInputBase
        placeholder="Search…"
        inputProps={{ "aria-label": "search" }}
      />
      <SelectField defaultValue={'Certified'} options={options} />
    </Search>
  );
}
