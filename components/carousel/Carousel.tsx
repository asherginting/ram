import Slider, { Settings } from "react-slick";
import { ReactNode } from "react";
import { ChevronLeft, ChevronRight } from "@mui/icons-material";
import { IconButton } from "@mui/material";


type Props = {
  children: ReactNode;
  dots?: boolean;
  slidesToShow?: number;
  slidesToScroll?: number;
  responsive?: any
};


const CustomPrev = ({ className, style, onClick }: any) => {
  return (
    <IconButton className={`${className} custom-arrow custom-prev`} onClick={onClick}>
      <ChevronLeft style={{ ...style, color: 'blue' }} />
    </IconButton>
  );
};

const CustomNext = ({ className, style, onClick }: any) => {
  return (
    <IconButton className={`${className} custom-arrow custom-next`} onClick={onClick}>
      <ChevronRight style={{ ...style, color: 'blue' }} />
    </IconButton>
  );
};

export default function Carousel({
  children,
  dots = true,
  slidesToShow = 1,
  slidesToScroll = 1,
  responsive
}: Props) {
  const settings: Settings = {
    dots, // Aktifkan pagination dots
    infinite: true, // Aktifkan looping
    speed: 500, // Kecepatan transisi slide (ms)
    slidesToShow, // Jumlah slide yang ditampilkan secara bersamaan
    slidesToScroll, // Jumlah slide yang akan digeser saat navigasi
    prevArrow: <CustomPrev />,
    nextArrow: <CustomNext />,
    initialSlide: 0,
    responsive
  };

  return (
    <div className="custom-slider">
      <Slider {...settings}>{children}</Slider>
    </div>
  );
}
