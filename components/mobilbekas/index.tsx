// import React, { useState } from 'react';
// import { Typography, Container, Grid, Paper, Modal, Button, useMediaQuery, useTheme } from '@mui/material';
// import Carousel from 'react-material-ui-carousel';

// function Index() {
//   const theme = useTheme();
//   const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
//   const [modalOpen, setModalOpen] = useState(false);
//   const [selectedImage, setSelectedImage] = useState('');
//   const [selectedImageIndex, setSelectedImageIndex] = useState(0);
//   const [modalImageIndex, setModalImageIndex] = useState(0);

//   const carouselItems = [
//     { imgSrc: '/images/depan.jpeg', caption: 'Gambar 1' },
//     { imgSrc: '/images/depan-kiri.jpeg', caption: 'Gambar 2' },
//     { imgSrc: '/images/depan-kanan.jpeg', caption: 'Gambar 3' },
//     { imgSrc: '/images/belakang.jpeg', caption: 'Gambar 4' },
//     { imgSrc: '/images/belakang-kanan.jpeg', caption: 'Gambar 5' },
//     { imgSrc: '/images/belakang-kiri.jpeg', caption: 'Gambar 6' },
//     { imgSrc: '/images/belakang-atap.jpeg', caption: 'Gambar 7' },
//     { imgSrc: '/images/dashboard-kanan.jpeg', caption: 'Gambar 8' },
//     { imgSrc: '/images/dashboard.jpeg', caption: 'Gambar 9' },
//     { imgSrc: '/images/mesin.jpeg', caption: 'Gambar 10' },
//     { imgSrc: '/images/speed.jpeg', caption: 'Gambar 11' },
//     // Add more carousel items as needed
//   ];

//   const openModal = (imageIndex) => {
//     setSelectedImageIndex(imageIndex);
//     setModalImageIndex(imageIndex);
//     setModalOpen(true);
//   };

//   const handleKeyDown = (event) => {
//     if (event.key === 'ArrowLeft') {
//       prevImage();
//     } else if (event.key === 'ArrowRight') {
//       nextImage();
//     }
//   };

//   const closeModal = () => {
//     setSelectedImageIndex(0);
//     setModalOpen(false);
//   };

//   const prevImage = () => {
//     setSelectedImageIndex((prevIndex) => (prevIndex === 0 ? carouselItems.length - 1 : prevIndex - 1));
//   };

//   const nextImage = () => {
//     setSelectedImageIndex((prevIndex) => (prevIndex === carouselItems.length - 1 ? 0 : prevIndex + 1));
//   };

//   return (
//     <Container>
//       <Grid container spacing={2} style={{ marginTop: isMobile ? 50 : 100, backgroundColor: 'red' }}>
//         <Grid item xs={12} md={6} style={{height: '100%'}}>
//           {/* <Paper elevation={3} style={{ padding: '1rem', backgroundColor: '#f0f0f0' }}> */}
//             <Carousel
//               navButtonsAlwaysVisible={true}
//               navButtonsProps={{
//                 style: {
//                   textAlign: 'center', // Center the navigation buttons
//                 },
//               }}
//               indicatorIconButtonProps={{
//                 style: {
//                     // padding: '10px',    // 1
//                     // color: 'blue',      // 3,
//                     margin: 0,
//                     padding: 0,
//                     // marginBottom: 40,
//                 }
//             }}
//             activeIndicatorIconButtonProps={{
//                 style: {
//                     // backgroundColor: 'red' // 2
//                 }
//             }}
//             indicatorContainerProps={{
//                 style: {
//                   textAlign: 'center', // Center the indicators
//                   marginTop: '10px',  // Adjust margin for spacing
//                     // marginTop: '50px', // 5
//                     // textAlign: 'right' // 4
//                 }

//             }}
//             >
//               {carouselItems.map((item, index) => (
//                 <img
//                   key={index}
//                   src={item.imgSrc}
//                   alt={item.caption}
//                   style={{
//                     cursor: 'pointer',
//                     height: isMobile ? 200 : 'auto',
//                     width: isMobile ? 350 : 565,
//                     // objectFit: 'cover',
//                     // borderRadius: 0, // Remove border radius for full-width images
//                     // margin: 0,      // Remove any margin
//                     // padding: 0,     // Remove any padding
//                   }}
//                   onClick={() => openModal(index)}
//                 />
//               ))}
//             </Carousel>
//           {/* </Paper> */}
//         </Grid>
//         <Grid item xs={12} md={6}>
//           <Paper elevation={3} style={{ }}>
//             <Typography variant="h2" color="primary">
//               Deskripsi Mobil
//             </Typography>
//             <Typography variant="body1">Ini deskripsi mobil</Typography>
//           </Paper>
//         </Grid>
//       </Grid>

//       <Modal
//         open={modalOpen}
//         onClose={closeModal}
//         onKeyDown={handleKeyDown}
//         style={{
//           display: 'flex',
//           alignItems: 'center',
//           justifyContent: 'center',
//         }}>
//         <div
//           style={{
//             display: 'flex',
//             justifyContent: 'center',
//             alignItems: 'center',
//             height: '100%',
//             outline: 'none', // This ensures the div can receive focus to capture click event
//           }}
//           onClick={closeModal} // Close modal when clicking outside the image
//         >
//           <div>
//             <img src={carouselItems[selectedImageIndex].imgSrc} alt="Preview" style={{ maxWidth: '90%',  margin: 'auto', display: 'block' }} />
//             <div
//               style={{
//                 display: 'flex',
//                 justifyContent: 'space-between', // Adjust to create space between buttons
//                 alignItems: 'center',
//                 // marginTop: '1rem',
//                 // width: '100%',
//                 // position: 'absolute',
//                 // top: '50%',
//                 // transform: 'translateY(-50%)',
//                 position: 'absolute',
//                 top: '50%',
//                 left: '15%',
//                 right: '15%',
//               }}
//             >
//               <Button
//                 variant="contained"
//                 onClick={(e) => {
//                   e.stopPropagation();
//                   prevImage();
//                 }}
//               >
//                 Prev
//               </Button>
//               <Button
//                 variant="contained"
//                 onClick={(e) => {
//                   e.stopPropagation();
//                   nextImage();
//                 }}
//               >
//                 Next
//               </Button>
//             </div>
//           </div>
//         </div>
//       </Modal>

//     </Container>
//   );
// }

// export default Index;

import { Box, Container, useMediaQuery, useTheme } from "@mui/material";
import CarouselCar from "../carousel/CarouselCar";

interface MobilBekasComponentProps {
  namaMobil: string;
  harga: number;
  judulDeskripsi: string;
  listDeskripsi: string[];
  listGambar: any;
}

const MobilBekasComponent: React.FC<MobilBekasComponentProps> = ({
  harga,
  judulDeskripsi,
  listDeskripsi,
  namaMobil,
  listGambar,
}) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    // <Box
    //   sx={{
    //     backgroundColor: "",
    //     py: isMobile ? "0rem" : "2rem",
    //     px: isMobile ? 0 : "3rem",
    //   }}
    // >
    // </Box>
    <Box sx={{
      minHeight: '100vh',
      paddingY: '2rem',
      display: 'flex',
      placeContent: 'center',
      alignItems: 'center'
    }}>
      {isMobile ? (
        <Box>
          <CarouselCar
            harga={harga}
            judulDeskripsi={judulDeskripsi}
            listDeskripsi={listDeskripsi}
            namaMobil={namaMobil}
            listGambar={listGambar}
          />
        </Box>
      ) : (
        <Container>
          <CarouselCar
            harga={harga}
            judulDeskripsi={judulDeskripsi}
            listDeskripsi={listDeskripsi}
            namaMobil={namaMobil}
            listGambar={listGambar}
          />
        </Container>
      )}
    </Box>
  );
};

export default MobilBekasComponent;
