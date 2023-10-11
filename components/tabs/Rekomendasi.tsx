import { Box, Container, Divider, styled, Link } from "@mui/material";
import React from "react";
import { Heading3 } from "../typography/Text";
import Carousel from "../carousel/Carousel";
import RecommendationCard from "../card/RecommendationCard";

type Props = {};

const cars = [
  {
    image: "/images/innova.jpeg",
    merk: "TOYOTA INNOVA Q 2.0 AT/2016",
    price: 113,
    location: "Kota Batam",
  },
  {
    image: "/images/innova.jpeg",
    merk: "TOYOTA INNOVA Q 2.0 AT/2016",
    price: 113,
    location: "Kota Batam",
  },
  {
    image: "/images/innova.jpeg",
    merk: "TOYOTA INNOVA Q 2.0 AT/2016",
    price: 113,
    location: "Kota Batam",
  },
  {
    image: "/images/innova.jpeg",
    merk: "TOYOTA INNOVA Q 2.0 AT/2016",
    price: 113,
    location: "Kota Batam",
  },
  {
    image: "/images/innova.jpeg",
    merk: "TOYOTA INNOVA Q 2.0 AT/2016",
    price: 113,
    location: "Kota Batam",
  },
  {
    image: "/images/innova.jpeg",
    merk: "TOYOTA INNOVA Q 2.0 AT/2016",
    price: 113,
    location: "Kota Batam",
  },
  {
    image: "/images/innova.jpeg",
    merk: "TOYOTA INNOVA Q 2.0 AT/2016",
    price: 113,
    location: "Kota Batam",
  },
  {
    image: "/images/innova.jpeg",
    merk: "TOYOTA INNOVA Q 2.0 AT/2016",
    price: 113,
    location: "Kota Batam",
  },
];

const BoxContainer = styled(Box)({
  padding: "2rem 0",
});

export default function Rekomendasi({}: Props) {
  const responsive = [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 4
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      },
    },
  ]

  return (
    <BoxContainer>
      <Container>
        <Heading3>New Arrival</Heading3>
        <Box sx={{my: 2}}>
          <Carousel dots={false} slidesToShow={4} slidesToScroll={4} responsive={responsive}>
            {cars.map((car, index) => (
              <Link
                key={''}
                href="/mobilbekas"
                underline="none"
              >
              <RecommendationCard
                key={index}
                image={car.image}
                location={car.location}
                merk={car.merk}
                price={car.price}
              />
              </Link>
            ))}
          </Carousel>
        </Box>
        <Divider />
      </Container>
    </BoxContainer>
  );
}
