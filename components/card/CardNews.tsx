import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
  styled,
} from "@mui/material";

type Props = {};

const StyledCardActionArea = styled(CardActionArea)(({ theme }) => ({
  [theme.breakpoints.up("sm")]: {
    // width: "auto",
    display: "flex",
  },
  height: "100%",
}));

export default function CardNews({}: Props) {
  return (
    <Card sx={{ height: "100%" }}>
      <StyledCardActionArea>
        <CardMedia
          component="img"
          // height=""
          image="https://picsum.photos/200"
          alt="image"
          sx={{
            width: { xs: "100%" },
            height: { xs: "auto", md: "100%" },
          }}
        />
        <CardContent sx={{ display: { xs: "100%", md: "40%" } }}>
          <Typography variant="h5" component={'h4'} color={'bgNav'}>
            Mobil Bekas yang cocok untuk kehidupan
          </Typography>
          <Typography variant="body2" component={"p"}>
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species
          </Typography>
        </CardContent>
      </StyledCardActionArea>
    </Card>
  );
}
