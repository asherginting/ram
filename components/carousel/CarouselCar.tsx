/* eslint-disable @next/next/no-img-element */
import React, { useState } from 'react';
import { Typography, Container, Grid, Modal, Button, useMediaQuery, useTheme } from '@mui/material';
import Carousel from 'react-material-ui-carousel';

function Index() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [modalImageIndex, setModalImageIndex] = useState(0);


  const carouselItems = [
    { imgSrc: '/images/depan.jpeg', caption: 'Gambar 1' },
    { imgSrc: '/images/depan-kiri.jpeg', caption: 'Gambar 2' },
    { imgSrc: '/images/depan-kanan.jpeg', caption: 'Gambar 3' },
    { imgSrc: '/images/belakang.jpeg', caption: 'Gambar 4' },
    { imgSrc: '/images/belakang-kanan.jpeg', caption: 'Gambar 5' },
    { imgSrc: '/images/belakang-kiri.jpeg', caption: 'Gambar 6' },
    { imgSrc: '/images/belakang-atap.jpeg', caption: 'Gambar 7' },
    { imgSrc: '/images/dashboard-kanan.jpeg', caption: 'Gambar 8' },
    { imgSrc: '/images/dashboard.jpeg', caption: 'Gambar 9' },
    { imgSrc: '/images/mesin.jpeg', caption: 'Gambar 10' },
    { imgSrc: '/images/speed.jpeg', caption: 'Gambar 11' },
  ];

  const openModal = (imageIndex) => {
    setSelectedImageIndex(imageIndex);
    setModalImageIndex(imageIndex);
    setModalOpen(true);
  };

  const handleKeyDown = (event) => {
    if (event.key === 'ArrowLeft') {
      prevImage();
    } else if (event.key === 'ArrowRight') {
      nextImage();
    }
  };

  const closeModal = () => {
    setSelectedImageIndex(0);
    setModalOpen(false);
  };

  const prevImage = () => {
    setSelectedImageIndex((prevIndex) => (prevIndex === 0 ? carouselItems.length - 1 : prevIndex - 1));
  };

  const nextImage = () => {
    setSelectedImageIndex((prevIndex) => (prevIndex === carouselItems.length - 1 ? 0 : prevIndex + 1));
  };


  return (
    <Container>
      <Grid container spacing={2} style={{ marginTop: isMobile ? 50 : 70 }}>
        <Grid item xs={12} md={6} style={{height: '100%'}}>
            <Carousel
              navButtonsAlwaysVisible={true}
              navButtonsProps={{
                style: {
                  textAlign: 'center',
                },
              }}
              indicatorIconButtonProps={{
                style: {
                    margin: 0, 
                    padding: 0,
                }
            }}
            activeIndicatorIconButtonProps={{
                style: {
                  color: '#17376D',
                }
            }}
            indicatorContainerProps={{
                style: {
                  textAlign: 'center',
                  marginTop: '10px', 
                }
        
            }}
            >
              {carouselItems.map((item, index) => (
                <img
                  key={index}
                  src={item.imgSrc}
                  alt={item.caption}
                  style={{
                    cursor: 'pointer',
                    height: isMobile ? 200 : 'auto',
                    width: isMobile ? 350 : 565,
                    borderRadius: 20,
                  }}
                  onClick={() => openModal(index)}
                />
              ))}
            </Carousel>
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography style={{fontWeight: 'bold', fontSize: 22, color: '#000'}}>
            Daihatsu Ayla AT/2022
          </Typography>
          <Typography style={{fontWeight: 'bold', fontSize: 28, color: '#17376D'}}>
            Rp 148.500.000
          </Typography>
          <div style={{marginTop: 20}}>
            <Typography variant="h6" gutterBottom>
              🚗 Temukan Kenyamanan dan Keandalan dalam Perjalanan Anda dengan Daihatsu Ayla AT/2022 🚗
            </Typography>
            <Typography variant="body1" gutterBottom>
              – DP hanya 8 juta rupiah
            </Typography>
            <Typography variant="body1" gutterBottom>
              – Cicilan ringan 5.800.000 rupiah per bulan
            </Typography>
            <Typography variant="body1" gutterBottom>
              – Tenor fleksibel 5 tahun
            </Typography>
            <Typography variant="body2" gutterBottom>
              Catatan: Harga tertera khusus untuk pembelian kredit. Untuk pembelian tunai, silakan tanyakan kepada admin kami.
            </Typography>
            <Typography variant="body2" gutterBottom>
              Tawaran terbatas! Segera hubungi kami untuk informasi lebih lanjut.
            </Typography>
          </div>
          <Button style={{backgroundColor: '#FAB500', color: '#fff', marginTop: 20}}>
            Hubungi Sekarang
          </Button>
        </Grid>
      </Grid>

      <Modal 
        open={modalOpen} 
        onClose={closeModal} 
        onKeyDown={handleKeyDown} 
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100%',
            outline: 'none',
          }}
          onClick={closeModal} 
        >
          <div>
            <img src={carouselItems[selectedImageIndex].imgSrc} alt="Preview" style={{ maxWidth: '90%',  margin: 'auto', display: 'block' }} />
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                position: 'absolute',
                top: '50%',
                left: '15%',
                right: '15%',
              }}
            >
              <Button
                variant="contained"
                onClick={(e) => {
                  e.stopPropagation();
                  prevImage();
                }}
              >
                Prev
              </Button>
              <Button
                variant="contained"
                onClick={(e) => {
                  e.stopPropagation();
                  nextImage();
                }}
              >
                Next
              </Button>
            </div>
          </div>
        </div>
      </Modal>


    </Container>
  );
}

export default Index;