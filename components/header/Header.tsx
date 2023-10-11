import {
  AppBar,
  Box,
  CssBaseline,
  Drawer,
  IconButton,
  Link,
  Stack,
  Toolbar,
  Typography,
  alpha,
  styled,
} from "@mui/material";
import { Menu, Search } from "@mui/icons-material";
import { useState } from "react";
import NavMobile from "./NavMobile";
import SearchBar from "../inputs/SearchBar";
import NavMenuDropdown from "./NavMenuDropdown";
import Image from 'next/image';

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
    dropdownMenu: ["Lokasi", "Hubungi", "FAQ"],
  },
];

const DrawerContainer = styled(Drawer)(({ theme }) => ({
  height: '100%',
  backgroundColor: alpha(theme.palette.text.secondary, .85),
  "& .MuiDrawer-paper": {
    height: 'auto',
    borderRadius: '20px',
    top: 10,
    left: 10,
    right: 10
  }
}));

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchMobileOpen, setSearchMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };
  const handleSearchMobile = () => {
    setSearchMobileOpen((prevState) => !prevState);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar component="nav" sx={{ bgcolor: "#17376D" }}>
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <Link
            href="/"
            underline="none"
            sx={{
              color: "white",
              display: "block",
            }}
          >
            <Image src={require('../../public/images/logo-ram.png')} alt="Logo" width={140} height={30} />
          </Link>
          <Box sx={{display: {xs: 'none', md: 'block'}}}>
            <SearchBar />
          </Box>
          <Stack
            spacing={3}
            direction={"row"}
            sx={{ display: { xs: "none", sm: "flex" } }}
          >
            {navItems.map((navItem, index) => (
              <NavMenuDropdown
                key={index}
                menuLabel={navItem.menu}
                menuItems={navItem.dropdownMenu}
              />
            ))}
          </Stack>
          <Box sx={{display: {xs: 'block', md: 'none'}}}>
            <IconButton
              onClick={handleSearchMobile}
              sx={{ ml: 2, display: { md: "none" }, color: "white" }}
            >
              <Search />
            </IconButton>
            {searchMobileOpen && (
              <DrawerContainer
                variant="temporary"
                open={searchMobileOpen}
                anchor="left"
                onClose={handleSearchMobile}
                ModalProps={{
                  keepMounted: true,
                }}
              >
                <SearchBar />
              </DrawerContainer>
            )}
            <IconButton
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ ml: 2, display: { md: "none" }, color: "white" }}
            >
              <Menu />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      <NavMobile
        handleDrawerToggle={handleDrawerToggle}
        mobileOpen={mobileOpen}
      />
    </Box>
  );
}
