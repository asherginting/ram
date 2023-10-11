import Image from "next/image";
import styles from "@/styles/styles.module.css";

type Props = {
  image: string;
  alt: string;
};

export default function ImageItem({ image, alt }: Props) {
  return (
    <Image
      src={image}
      alt={alt}
      width={0}
      height={0}
      sizes="100vw"
      className={styles.customImage}
      loading="lazy"
    />
  );
}
