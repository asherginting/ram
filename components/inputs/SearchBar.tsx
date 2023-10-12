import { Box, Divider, InputBase, TextField, styled } from "@mui/material";
import React, { FC, useCallback, useEffect, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import SelectField from "./SelectField";
import { useRouter } from "next/router";

// interface SearchBarProps {
//   onSearch: (query: string) => void;
// }

const SearchBar = () => {
  const [optionValue, setOptionValue] = useState("");

  const handleChange = (value: string | number) => {
    setOptionValue(optionValue);
  };

  const router = useRouter();
  const [query, setQuery] = useState("");

  const handleSearch = () => {
    if (query.trim() !== "") {
      router.push(`/result?search=${encodeURIComponent(query)}`);
    }
    setQuery("")
  };

  const options = ["Certified", "Lelang"];

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

  // const StyledTextField = styled(TextField)(({ theme }) => ({
  //   color: "inherit",
  //   width: "100%",
  //   cursor: "text",
  //   [theme.breakpoints.up("sm")]: {
  //     width: "auto",
  //   },
  //   "& .MuiInputBase-input": {
  //     padding: theme.spacing(1, 1, 1, 0),
  //     borderRight: `1px solid ${theme.palette.text.primary}`,
  //     paddingLeft: `calc(1em + ${theme.spacing(4)})`,
  //     border: 'none',
  //     outline: 'none',
  //     transition: theme.transitions.create("width"),
  //     width: "100%",
  //     [theme.breakpoints.up("sm")]: {
  //       width: "20ch",
  //     },
  //   },
  // }));

  return (
    <Box
      component="form"
      sx={{
        position: "relative",
        borderRadius: "50px",
        backgroundColor: "#FFF",
        paddingRight: "1rem",
        marginLeft: 0,
        width: "auto",
        alignItems: "center",
        display: "flex",
      }}
      noValidate
      autoComplete="off"
    >
      <SearchIconWrapper>
        <SearchIcon />
      </SearchIconWrapper>
      <InputBase
        placeholder="Search…"
        inputProps={{ "aria-label": "search" }}
        value={query}
        sx={{
          color: 'inherit',
          width: '100%',
          paddingLeft: 7,
          fontSize: '.9rem',
        }}
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            handleSearch();
          }
        }}
      />
      <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
      <SelectField defaultValue={"Certified"} options={options} />
    </Box>
  );
};

export default SearchBar;
