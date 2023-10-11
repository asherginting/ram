import { Box, Button, Container, Grid, Typography } from "@mui/material";
import { styled } from "@mui/system";
import React from "react";
import OtherCard from "../card/OtherCard";
import { ButtonSecondary } from "../button/ButtonRounded";

type Props = {};

const BoxContainer = styled(Box)({
  padding: "2rem",
});

const ButtonContainer = styled("div")({
  display: "flex",
  justifyContent: "center",
  marginTop: "2rem",
  width: "30%",
});

const data = [
  {
    title: "Jual lebih mudah",
    list: ["Proses pembayaran cepat", "Transaksi cepat"],
  },
  {
    title: "Jual lebih mudah",
    list: ["Proses pembayaran cepat", "Transaksi cepat"],
  },
  {
    title: "Jual lebih mudah",
    list: ["Proses pembayaran cepat", "Transaksi cepat"],
  },
];

export default function JualMotor({}: Props) {
  return (
    <BoxContainer>
      <Container>
        <Typography variant="h5" component={"h4"} color={"bgNav"}>
          Kenapa Harus di RAM Motor?
        </Typography>
        <Grid container spacing={2} sx={{ mt: 4 }}>
          {data.map((data, index) => (
            <Grid item xs={12} md={4} key={index}>
              <OtherCard title={data.title} list={data.list} />
            </Grid>
          ))}
        </Grid>

        <ButtonSecondary
          size="large"
          sx={{
            width: {xs: '60%', md: "30%"},
            display: "block",
            marginInline: "auto",
            mt: "2.5rem",
          }}
        >
          Hubungi Sekarang
        </ButtonSecondary>
      </Container>
    </BoxContainer>
  );
}
