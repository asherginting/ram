import { FacebookOutlined, Instagram } from "@mui/icons-material";
import {
  Box,
  Container,
  Grid,
  Typography,
  Stack,
  styled,
} from "@mui/material";
import Image from "next/image";


type Props = {};


const footerMenu = [
  {
    labelMenu: "Lokasi",
    listMenu: [
      { menu: "Batam", link: "#" },
      { menu: "Tanjung Pinang", link: "#" },
    ],
  },
  {
    labelMenu: "Pelayanan",
    listMenu: [
      { menu: "Jual Mobil Bekas", link: "#" },
      { menu: "Jual Motor Bekas", link: "#" },
      { menu: "Beli Mobil Bekas", link: "#" },
      { menu: "Sewa Mobil", link: "#" },
      { menu: "Service Mobil", link: "#" },
    ],
  },
  {
    labelMenu: "Mitra Kami",
    listMenu: [
      { menu: "", link: "#" },
    ],
  },
];

const socialMedia = [
  {
    label: "facebook",
    link: "htpps://facebook.com",
    icon: <FacebookOutlined />,
  },
  {
    label: "instagram",
    link: "instagram.com",
    icon: <Instagram />,
  },
];

const IconWrapper = styled('a')(({theme}) => ({
  backgroundColor: theme.palette.common.white,
  color: theme.palette.text.secondary,
  width: 40,
  height: 40,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: '100%'
}))

export default function Footer({}: Props) {
  return (
    <Box component="footer" sx={{ bgcolor: "#17376D", py: 4, color: "white" }}>
      <Container>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Grid container>
              {footerMenu.map((menu) => (
                <Grid key={menu.labelMenu} xs item>
                  <Stack key={menu.labelMenu} spacing={1}>
                    <Typography variant="body1" color={"footerHeading"}>
                      {menu.labelMenu}
                    </Typography>
                    {menu.listMenu.map((list, index) => (
                      <Typography
                        key={index}
                        variant="body2"
                        component={"a"}
                        href={list.link}
                        color={"footerText"}
                      >
                        {list.menu}
                      </Typography>
                    ))}
                  </Stack>
                </Grid>
              ))}
            </Grid>
          </Grid>
          <Grid item xs={12} md={6}>
          <Image src={require('../public/images/logo-ram.png')} alt="Logo" width={150} height={40} />
            <Typography variant="body1">Pusat Jual Beli Mobil, Motor Bekas dan Service di Batam.</Typography>
          </Grid>
        </Grid>
        <Stack direction={'row'} spacing={3} sx={{my: '2rem'}}>
          {socialMedia.map(socmed => (
            <IconWrapper key={socmed.label} href={socmed.link} target="_blank">
              {socmed.icon}
            </IconWrapper>
          ))}
        </Stack>
        <Typography variant="caption">©2023 PT. Rajawali Angkasa Motor | All Rights Reserved.</Typography>
      </Container>
    </Box>
  );
}
