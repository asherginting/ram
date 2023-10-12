type NavMenu = {
  menu: string;
  dropdownMenu: string[];
};


interface CarouselItems {
  imgSrc: string
  caption: string
}

interface ListItem {
  namaMobil: string
  harga: number
  lokasi: string
  gambar: string
  deskripsi: {
    judul: string
    detail: string[]
    gambarDetail: CarouselItems[]
  }
}