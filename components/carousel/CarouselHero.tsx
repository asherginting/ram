import React from "react";
import { Box, Link, styled,  useMediaQuery, useTheme } from "@mui/material";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

type Props = {};

const images = [
  { url: require('../../public/images/banner1.jpeg') },
  { url: require('../../public/images/banner2.jpg') },
  { url: require('../../public/images/banner3.jpeg') },
  { url: require('../../public/images/banner4.jpeg') },
];

export default function CarouselHero({}: Props) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const StyledImage = styled(Image)(({theme}) => ({
    width: "100%",
    height: "auto",
    padding: isMobile ? 0 : 20,
    [theme.breakpoints.up("md")]: {
      borderRadius: 30,
    }
  }))

  const BoxContainer = styled(Box)(({ theme }) => ({
    transition: "transform 0.3s",
    position: "relative",
    zIndex: "19",
    padding: "3.5rem 0 0rem 0",
    "&:hover": {
      transform: !isMobile ? "scale(1.1)" : "none",
    },
  }));

  const settings = {
    dots: true,
    appendDots: (dots: React.ReactNode) => (
      <div style={{ position: "relative", top: "-8px" }}>
        <ul style={{ margin: "0px", padding: "0px", listStyle: "none", textAlign: "center" }}>{dots}</ul>
      </div>
    ),
    infinite: true, 
    slidesToShow: 3, 
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          prevArrow: undefined,
          nextArrow: undefined,
        },
      },
    ],
  };

  return (
    <Slider {...settings}>
      {images.map((image, index) => (
        <BoxContainer key={index}>
          <Link href="#">
            <StyledImage
              alt="image"
              src={image.url}
              width={0}
              height={0}
              loading="lazy"
            />
          </Link>
        </BoxContainer>
      ))}
    </Slider>
  );
}
