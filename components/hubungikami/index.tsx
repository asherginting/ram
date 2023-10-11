import {
  Box,
  useMediaQuery,
  useTheme,
  Typography,
  TextField,
  Button,
} from "@mui/material";
import React, { useState } from "react";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import TextareaAutosize from "@mui/material/TextareaAutosize";

export default function Index() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [pertanyaan, setpertanyaan] = React.useState("");
  const [text, setText] = useState("");

  const handleTextChange = (event: SelectChangeEvent) => {
    setText(event.target.value);
  };

  const handleChange = (event: SelectChangeEvent) => {
    setpertanyaan(event.target.value as string);
  };

  const [formData, setFormData] = useState({
    name: "",
    handphone: "",
    email: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <Box sx={{ py: isMobile ? "0rem" : "3rem", px: isMobile ? 0 : "0rem" }}>
      <Box sx={{ backgroundColor: "#17376D" }}>
        <Typography
          style={{
            marginTop: 30,
            color: "white",
            textAlign: "center",
            fontSize: 36,
            fontWeight: "bold",
          }}
        >
          Hubungi Kami
        </Typography>
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh",
        }}
      >
        <Typography
          style={{ color: "#00A0E8", fontSize: 36, fontWeight: "bold" }}
        >
          Apa Yang Bisa Kami Bantu?
        </Typography>
        <Typography style={{ fontWeight: "lighter" }}>
          Sampaikan pertanyaan atau permintaan Kamu melalui form ini. (*)*Wajib
          diisi
        </Typography>

        <FormControl sx={{ minWidth: 300, marginTop: 5 }}>
          <InputLabel id="demo-simple-select-label">Tipe Pertanyaan</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={pertanyaan}
            label="pertanyaan"
            onChange={handleChange}
          >
            <MenuItem value={10}>Pertanyaan Lainnya</MenuItem>
            <MenuItem value={20}>Keluhan</MenuItem>
          </Select>
        </FormControl>

        {/* <TextareaAutosize 
        aria-label="Tulis teks di sini"
        rowsMin={3} // Atur jumlah minimum baris
        placeholder="Tulis sesuatu di sini..."
        value={text}
        onChange={handleTextChange}
      /> */}

        <Typography
          style={{
            fontWeight: "bold",
            marginTop: 12,
            marginBottom: 5,
            textAlign: "left",
          }}
        >
          Lengkapi Data Diri
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            label="Nama*"
            type="text"
            name="name"
            variant="outlined"
            value={formData.name}
            onChange={handleInputChange}
            sx={{
              mt: 2,
              display: "block",
              borderRadius: 50,
              borderColor: "gray",
            }}
          />

          <TextField
            label="Nomor Handphone*"
            type="text"
            name="name"
            variant="outlined"
            value={formData.handphone}
            onChange={handleInputChange}
            sx={{ mt: 2, display: "block" }}
          />

          <TextField
            label="Email*"
            type="email"
            name="email"
            variant="outlined"
            value={formData.email}
            onChange={handleInputChange}
            sx={{ mt: 2, display: "block" }}
          />

          <Button variant="contained" type="submit" sx={{ mt: 2 }}>
            Kirim
          </Button>
        </form>
      </Box>
      <hr />
      <Typography
        style={{
          marginTop: 10,
          textAlign: "center",
          fontSize: 26,
          fontWeight: "bold",
          color: "#17376D",
        }}
      >
        Layanan Pengaduan Konsumen
      </Typography>
      <Typography style={{ textAlign: "center", fontWeight: "" }}>
        Layanan Call Center dan Pengaduan Konsumen RAM Showroom
      </Typography>
    </Box>
  );
}
