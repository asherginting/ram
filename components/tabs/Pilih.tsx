import { Box, Container, Grid, Typography, styled } from "@mui/material";
import React from "react";
import { Heading3 } from "../typography/Text";
import ChoiceCard from "../card/ChoiceCard";
import ImageItem from "../ImageItem";

type Props = {};
const choices = [
  { image: "/images/car.jpeg" },
  { image: "/images/car.jpeg" },
  { image: "/images/car.jpeg" },
  { image: "/images/car.jpeg" },
];

const BoxContainer = styled(Box)({
  padding: "2rem 0",
  backgroundColor: "#f5f6fa",
});
export default function Pilih({}: Props) {
  return (
    <BoxContainer>
      <Container>
        <Heading3>Pilih Mobil Sesuai Gayamu</Heading3>
        <Typography variant="body1">
          Saatnya beli mobil yang cocok sesuai karakter dan kebutuhanmu!
        </Typography>

        <Grid container spacing={2} sx={{ mt: 4 }}>
          {choices.map((choice, index) => (
            <Grid item xs={6} md={3} key={index}>
              <ChoiceCard>
                <ImageItem alt="image" image={choice.image} />
              </ChoiceCard>
            </Grid>
          ))}
        </Grid>
      </Container>
    </BoxContainer>
  );
}
