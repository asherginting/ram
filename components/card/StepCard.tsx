import { Box, Paper, Typography, styled } from "@mui/material";
import React from "react";
import Image from "next/image";

type Props = {
  title: string;
  img: string;
  index: number;
  detail?: string;
};

const ImageContainer = styled('figure')(({theme}) => ({
  width: 80,
  height: 80,
  borderRadius: 100,
  padding: 6,
  border: `2px solid ${theme.palette.primary.main}`,
  overflow: 'hidden',
  [theme.breakpoints.up("md")]: {
    width: 180,
    height: 180,
  }
}));

const TheImage = styled(Image)({
    borderRadius: '100%',
    width: '100%',
    height: '100%'
})

const NumberContainer = styled("div")(({ theme }) => ({
  width: 18,
  height: 18,
  fontSize: '.7rem',
  display: 'flex',
  placeContent: 'center',
  alignItems: 'center',
  justifyContent: 'center',
  color: '#fff',
  borderRadius: 100,
  backgroundColor: theme.palette.primary.main,
  position: "absolute",
  inset: "0 auto auto 0",
  [theme.breakpoints.up("md")]: {
    width: 30,
    height: 30,
    fontSize: '1rem',
  }
}));

export default function StepCard({ title, img, detail, index }: Props) {
  return (
    <Paper elevation={0} sx={{flex: '1'}}>
      <Box sx={{ position: "relative" }}>
        <NumberContainer>{index + 1}</NumberContainer>
        <ImageContainer>
          <TheImage alt={title} src={img} width={0} height={0} sizes="100vw" />
        </ImageContainer>
      </Box>

      <Box sx={{ mt: {xs: 2, md: 4} }}>
        <Typography variant="h6" component={"h4"} color={'primary'}>
          {title}
        </Typography>
        {detail && <Typography variant="body1">{detail}</Typography>}
      </Box>
    </Paper>
  );
}
