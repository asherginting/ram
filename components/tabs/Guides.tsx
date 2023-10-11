import { Box, Container, styled } from "@mui/material";
import React from "react";
import { Heading3 } from "../typography/Text";
import StepCard from "../card/StepCard";

type Props = {};
const guides = [
  {
    image: require('../../public/images/cust.jpeg'),
    title: "Cari Mobil",
    detail: "Gunakan fitur pencarian kami yang komprehensif, fitur banding & masukan dalam wishlist.",
  },
  {
    image: require('../../public/images/cust.jpeg'),
    title: "Pilih Opsi Transaksi",
    detail: "Lakukan pembelian secara online atau booking mobil dan cek terlebih dahulu ke showroom.",
  },
  {
    image: require('../../public/images/cust.jpeg'),
    title: "Lengkapi Detail Informasi",
    detail: "Lengkapi form data dan unggah dokumen yang diminta.",
  },
  {
    image: require('../../public/images/cust.jpeg'),
    title: "Bawa Pulang Mobil Impianmu",
    detail: "Mobil kamu siap diambil di dealer mobbi atau kami antarkan. Dan tentu siap kamu gunakan!",
  },
];

const BoxContainer = styled(Box)({
  padding: "2rem 0",
});
export default function Guides({}: Props) {
  return (
    <BoxContainer>
      <Container>
        <Heading3>Panduan Transaksi</Heading3>

        <Box
          sx={{
            display: "flex",
            alignItems: "flex-start",
            mt: "2rem",
            rowGap: '20px',
            flexDirection: { xs: "column", md: "row" },
          }}
        >
          {guides.map((guide, index) => (
            <StepCard
              key={index}
              index={index}
              img={guide.image}
              title={guide.title}
              detail={guide?.detail}
            />
          ))}
        </Box>
      </Container>
    </BoxContainer>
  );
}
