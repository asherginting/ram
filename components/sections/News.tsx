import { Box, Container, Grid, Link, Typography } from "@mui/material";
import SectionWrapper from "../SectionWrapper";
import CardNews from "../card/CardNews";
import { Heading3 } from "../typography/Text";

type Props = {};

export default function News({}: Props) {
  return (
    <SectionWrapper bgColor="#EBF4F3">
      <Container>
        <Box
          sx={{ display: "flex", justifyContent: "space-between", mb: "2rem" }}
        >
          <Heading3>Berita, Tips Review</Heading3>
          <Link href="#" underline="none">
            Lainnya
          </Link>
        </Box>
        <Grid container spacing={2}>
          <Grid item xs={12} md={8} lg={7}>
            <CardNews />
          </Grid>
          <Grid
            item
            xs={12}
            md={4}
            lg={5}
            container
            spacing={2}
            direction="column"
          >
            <Grid item xs>
              <CardNews />
            </Grid>
            <Grid item xs>
              <CardNews />
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </SectionWrapper>
  );
}
