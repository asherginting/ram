import { Box, Container, useMediaQuery, useTheme } from "@mui/material";
import CarouselHero from "../carousel/CarouselHero";

type Props = {};

export default function Hero({}: Props) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box sx={{backgroundColor: '#17376D', py: isMobile ? '0rem' : '2rem', px: isMobile ? 0 : '3rem' }}>
      <CarouselHero />
      <Container>
        {/* Content */}
      </Container>
    </Box>
  );
}
