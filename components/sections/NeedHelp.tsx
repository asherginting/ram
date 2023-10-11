import { Box, Container, Typography } from "@mui/material";
import { ButtonSecondary } from "../button/ButtonRounded";

type Props = {};

export default function NeedHelp({}: Props) {
  return (
    <Box
      sx={{
        py: "3rem",
        px: { xs: "1rem", md: "2rem" },
        textAlign: "left",
        bgcolor: "skyblue",
        marginX: "auto",
        color: "white",
      }}
    >
      <Container>
        <Typography variant="h3" component={"h2"} color={"bgNav"} >
          Butuh Bantuan?
        </Typography>
        <Typography variant="subtitle1" component={"p"} color={"bgNav"}>
          Punya pertanyaan atau kendala? Isi online form, tim kami akan segera
          membantu kamu.
        </Typography>

        <ButtonSecondary sx={{ mt: "3rem", width: {xs: '60%',md: '15%'} }} size="small">
          Hubungi Kami
        </ButtonSecondary>
      </Container>
    </Box>
  );
}
