import {
  Box,
  Drawer,
  IconButton,
  Stack,
  styled,
} from "@mui/material";
import React from "react";
import { ButtonPrimary } from "../button/ButtonRounded";
import { Close, Person } from "@mui/icons-material";
import NavMenuDropdown from "./NavMenuDropdown";

// type Props = {
//   navItems: NavMenu[]
//   container: Element | (() => Element | null) | null | undefined
//   drawerWidth: number
// };

interface Props {
  mobileOpen: boolean;
  handleDrawerToggle: () => void;
  window?: () => Window;
}

const NavMobileContainer = styled(Drawer)(({ theme }) => ({
  display: "block",
  "& .MuiDrawer-paper": {
    boxSizing: "border-box",
    width: "70%",
  },
}));

const navItems = [
  {
    menu: "Beli",
    dropdownMenu: ["Beli Mobil Batam", "Beli Mobil Tanjung Pinang"],
  },
  {
    menu: "Jual",
    dropdownMenu: ["Jual Mobil", "Jual Motor", "Tukar Tambah"],
  },
  {
    menu: "Info",
    dropdownMenu: ["Blog"],
  },
  {
    menu: "Bantuan",
    dropdownMenu: ["Blog"],
  },
];

export default function NavMobile({
  mobileOpen,
  window,
  handleDrawerToggle,
}: Props) {
  const drawer = (
    <Box>
      <Box sx={{display: 'flex', justifyContent: 'flex-end', padding: '.4rem .8rem'}}>
        <IconButton onClick={handleDrawerToggle} size="medium">
          <Close />
        </IconButton>
      </Box>
      <Stack spacing={3} sx={{ p: "2rem 1.2rem" }}>
        {navItems.map((navItem, index) => (
          <NavMenuDropdown
            key={index}
            menuLabel={navItem.menu}
            menuItems={navItem.dropdownMenu}
          />
        ))}
        {/* <ButtonPrimary startIcon={<Person />}>Masuk/Daftar</ButtonPrimary> */}
      </Stack>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box component="nav">
      {/* <NavMobileContainer
        container={container}
        variant="temporary"
        open={mobileOpen}
        anchor="right"
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
      >
        {drawer}
      </NavMobileContainer> */}
    </Box>
  );
}
