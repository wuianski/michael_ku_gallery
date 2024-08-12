import { Box, Paper, Stack, styled, Grid } from "@mui/material";
import Image from "next/image";
import Slider from "react-slick";

export default function SliderHalfW({ imgs }) {
  //   console.log(imgs);
  /** react-slick setting **/
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  };
  return (
    <Slider {...settings}>
      {imgs.map((img, index) => (
        <Box
          key={index}
          mt={3}
          sx={{
            position: "relative",
            width: { xs: "100%", sm: "100%" },
            height: { xs: 320, sm: 450 },
          }}
        >
          <Image
            priority={true}
            src={`${process.env.DIRECTUS_URL}/assets/${img.artworks_id.image.filename_disk}`}
            fill
            alt="Picture of the artwork"
            style={{ objectFit: "contain" }}
            sizes="50vw"
          />
        </Box>
      ))}
    </Slider>
  );
}
