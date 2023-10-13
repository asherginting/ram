import {
  Box,
  Container,
  Divider,
  styled,
  Link,
  Grid,
  Typography,
} from "@mui/material";
import * as React from "react";
import { Heading3 } from "../typography/Text";
// import Carousel from "../carousel/Carousel";
import RecommendationCard from "../card/RecommendationCard";
import { listMobil } from "@/data/data";
import { ButtonPrimary } from "../button/ButtonRounded";

// type Props = {
//   listItem: ListItem[]
// };

const BoxContainer = styled(Box)({
  padding: "2rem 0",
});
const PAGE_SIZE = 10;

export default function Rekomendasi() {
  const [items, setItems] = React.useState<ListItem[]>([]);
  const [loading, setLoading] = React.useState(false);
  const [hasMore, setHasMore] = React.useState(true);

  const loadMoreItems = () => {
    if (loading || !hasMore) return;

    setLoading(true);

    const startIndex = items.length;
    const endIndex = startIndex + PAGE_SIZE;
    const newItems = listMobil.slice(startIndex, endIndex);

    setItems([...items, ...newItems]);
    setLoading(false);

    if (newItems.length < PAGE_SIZE) {
      setHasMore(false);
    }
  };

  React.useEffect(() => {
    loadMoreItems();
  }, []);
  // const responsive = [
  //   {
  //     breakpoint: 1024,
  //     settings: {
  //       slidesToShow: 4,
  //       slidesToScroll: 4,
  //     },
  //   },
  //   {
  //     breakpoint: 600,
  //     settings: {
  //       slidesToShow: 2,
  //       slidesToScroll: 2,
  //     },
  //   },
  //   {
  //     breakpoint: 480,
  //     settings: {
  //       slidesToShow: 2,
  //       slidesToScroll: 2,
  //     },
  //   },
  // ];

  return (
    <BoxContainer>
      <Container>
        <Heading3>New Arrival</Heading3>
        <Box sx={{ my: 2 }}>
          <Grid container spacing={{ xs: 2, md: 3 }}>
            {items.map((car, index) => (
              <Grid key={index} item xs={6} md={4}>
                {/* <Link href={`/mobilbekas/${car.namaMobil.replace(/\s+/g, "-").toLowerCase()}`} underline="none"> */}
                <Link href={`/mobilbekas/${car.namaMobil}`} underline="none">
                  <RecommendationCard
                    key={index}
                    image={car.gambar}
                    location={car.lokasi}
                    merk={car.namaMobil}
                    price={car.harga}
                  />
                </Link>
              </Grid>
            ))}
          </Grid>
          {/* <Carousel dots={false} slidesToShow={4} slidesToScroll={4} responsive={responsive}>
          </Carousel> */}

          <Box sx={{ display: "flex", justifyContent: "center" }}>
            {loading && (
              <Typography variant="body2" component={"p"}>
                Loading...
              </Typography>
            )}
            {!loading && hasMore && (
              <ButtonPrimary onClick={loadMoreItems}>Load More</ButtonPrimary>
            )}
          </Box>
        </Box>
        <Divider />
      </Container>
    </BoxContainer>
  );
}
