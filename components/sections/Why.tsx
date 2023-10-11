import {Container, Grid, Typography } from "@mui/material";
import React from "react";
import SectionWrapper from "../SectionWrapper";
import WhyCard from "../card/WhyCard";

type Props = {};

const choices = [
  {title: 'Safe', description: 'Informasi kondisi unit yang detail dan akurat'},
  {title: 'Transparent', description: 'Informasi kondisi unit yang detail dan akurat'},
  {title: 'Good', description: 'Informasi kondisi unit yang detail dan akurat'},
  {title: 'Fast', description: 'Informasi kondisi unit yang detail dan akurat'},
]

export default function Why({}: Props) {
  return (
    <SectionWrapper bgColor="#009ee8">
      <Container>
        <Typography variant="h4" component={"h4"} sx={{textAlign: 'center'}} color={"#fff"}>
          Mengapa RAM Showroom?
        </Typography>

        <Grid container spacing={2} sx={{ mt: 4 }}>
            {choices.map((choice, index) => (
              <Grid item xs={12} md={3} key={index}>
                <WhyCard title={choice.title} description={choice.description} />
              </Grid>
            ))}
          </Grid>
      </Container>
    </SectionWrapper>
  );
}
