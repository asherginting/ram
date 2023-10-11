import {
  Box,
  Container,
  Divider,
  IconButton,
  InputBase,
  Paper,
  SelectChangeEvent,
  alpha,
  styled,
} from "@mui/material";
import React, { ChangeEvent, useState } from "react";
import SelectMultipleItem from "../inputs/SelectMultipleItem";
import {
  ArrowRightRounded,
  Handshake,
  Search,
} from "@mui/icons-material";
import { Heading4 } from "../typography/Text";
import RangeSliderInput from "../inputs/RangeSliderInput";
import RangeInput from "../inputs/RangeInput";

type Props = {};

const options = [
  { label: "transmisi", value: "Transmisi" },
  { label: "at", value: "AT" },
  { label: "mt", value: "MT" },
  { label: "manual", value: "Manual" },
];

const BoxContainer = styled(Box)({
  padding: "1rem 0",
});

const StyledPaper = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.text.secondary,
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  margin: "1rem 0 2rem 0",
  padding: ".5rem 1rem",
  color: theme.palette.common.white,
}));

const SearchButton = styled(IconButton)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.common.white,
  width: "100%",
  borderRadius: "20px",
  "&:hover": {
    backgroundColor: alpha(theme.palette.primary.main, 0.5),
  },
  [theme.breakpoints.up("md")]: {
    width: "8%",
  }
}));

const ArrowButton = styled(IconButton)(({ theme }) => ({
  backgroundColor: theme.palette.secondary.main,
  color: "#fff",
  width: 25,
  height: 25,
}));

const SearchContainer = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: 'column',
  rowGap: '10px',
  width: "100%",
  [theme.breakpoints.up("md")]: {
    width: "90%",
    paddingInline: '1rem',
    border: `1px solid ${theme.palette.text.primary}`,
    borderRadius: "40px",
    flexDirection: 'row'
  },
}));

const SearchInputWrap = styled("div")(({theme}) => ({
  width: '100%',
  height: '100%',
  overflow: 'hidden',
  border: `1px solid ${theme.palette.text.primary}`,
  borderRadius: '20px',
  [theme.breakpoints.up("md")]: {
    borderRadius: '0',
    width: '30%',
    border: "0",
  }
}))

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  width: '100%',
  height: '100%',
  "& .MuiInputBase-input": {
    height: '100%',
    padding: theme.spacing(2),
    [theme.breakpoints.up("md")]: {
      borderRight: `1px solid ${theme.palette.text.primary}`,
    }
  },
  "&::placeholder": {
    color: 'inherit',
    fontSize: '.8rem'
  }
}));

const StyledPaperText = styled("p")(({theme}) => ({
  fontSize: '.8rem',
  [theme.breakpoints.up("md")]: {
    fontSize: '1.2rem'
  }
}))

export default function Find({}: Props) {
  const [keyword, setKeyword] = useState("");
  const [optionValue, setOptionValue] = useState<string[]>([]);
  const [valueOne, setValueOne] = useState<[number, number]>([30, 70]);
  const [valueTwo, setValueTwo] = useState<[number, number]>([2002, 2020]);

  const handleChangeRangeValueOne = (newValue: [number, number]) => {
    setValueOne(newValue);
  };

  const handleChangeRangeValueTwo = (newValue: [number, number]) => {
    setValueTwo(newValue);
  };

  const formattedRangeValueOne = valueOne.join(" - ");
  const formattedRangeValueTwo = valueTwo.join(" - ");

  const handleChangeSelect = (event: SelectChangeEvent<typeof optionValue>) => {
    const {
      target: { value },
    } = event;
    setOptionValue(typeof value === "string" ? value.split(",") : value);
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setKeyword(event.target.value);
  };

  return (
    <BoxContainer>
      <Container>
        <Heading4>Cari Mobil Bekas Impianmu</Heading4>

        <Box sx={{ display: "flex", gap: "10px", my: '1rem', flexDirection: {xs: 'column', md: 'row'} }}>
          <SearchContainer>
            <SearchInputWrap>
              <StyledInputBase
                placeholder="Search..."
                value={keyword}
                onChange={handleChange}
                sx={{
                  '& .MuiInputBase-input': {
                    color: 'inherit',
                    fontSize: '.8rem'
                  },
                }}
              />
            </SearchInputWrap>
            <RangeInput value={formattedRangeValueOne}>
              <RangeSliderInput
                value={valueOne}
                onChange={handleChangeRangeValueOne}
                min={0}
                max={100}
                step={10}
              />
            </RangeInput>
            <RangeInput value={formattedRangeValueTwo}>
              <RangeSliderInput
                value={valueTwo}
                onChange={handleChangeRangeValueTwo}
                min={2000}
                max={2023}
                step={10}
              />
            </RangeInput>
            <SelectMultipleItem
              options={options}
              value={optionValue}
              handleChange={handleChangeSelect}
            />
          </SearchContainer>

          <SearchButton size="medium">
            <Search sx={{fontSize: 40}} />
          </SearchButton>
        </Box>

        <StyledPaper>
          <Box sx={{ display: "flex", gap: "10px", alignItems: 'center' }}>
            <Handshake />
            <StyledPaperText>
              Belum tahu mobil impianmu? Coba fitur rekomendasi kami!
            </StyledPaperText>
          </Box>
          <ArrowButton>
            <ArrowRightRounded />
          </ArrowButton>
        </StyledPaper>
        <Divider />
      </Container>
    </BoxContainer>
  );
}
