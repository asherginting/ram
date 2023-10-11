import { Check } from "@mui/icons-material";
import { Box, Typography, styled } from "@mui/material";
import React from "react";

type Props = {
  title: string;
  list: string[];
};

const StyledBox = styled(Box)({
  display: "flex",
  alignItems: "center",
  gap: "1rem",
});

export default function OtherCard({ title, list }: Props) {
  return (
    <StyledBox>
      <Box sx={{ width: "30%" }} component={"figure"}>
        IMAGE
      </Box>
      <Box sx={{ width: "70%" }}>
        <Typography variant="h6" component={"h5"} color={'bgNav'} sx={{mb: '.5rem'}}>
          {title}
        </Typography>

        {list.map((l, index) => (
          <Typography key={index} variant="caption" component={"div"} color={'bgNav'} sx={{display: 'flex', alignItems: 'center', gap: '6px'}}>
            <Check color="secondary" sx={{width: 15}} />
            {l}
          </Typography>
        ))}
      </Box>
    </StyledBox>
  );
}
