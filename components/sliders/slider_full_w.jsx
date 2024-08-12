import { Box, Paper, Stack, styled, Grid } from "@mui/material";
import Image from "next/image";
import React from "react";
import Slider from "react-slick";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

function SampleNextArrow(props) {
  const { style, onClick } = props;
  return (
    <div
      style={{
        ...style,
        display: "block",
        position: "absolute",
        right: "0px",
        top: "50%",
        zIndex: 1,
        cursor: "pointer",
      }}
      onClick={onClick}
    >
      <ArrowForwardIosIcon />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { style, onClick } = props;
  return (
    <div
      style={{
        ...style,
        display: "block",
        position: "absolute",
        left: "0px",
        top: "50%",
        zIndex: 1,
        cursor: "pointer",
      }}
      onClick={onClick}
    >
      <ArrowBackIosIcon />
    </div>
  );
}

export default function SliderFullW({ imgs, index }) {
  //   console.log(imgs);
  /** react-slick setting **/
  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    // autoplay: true,
    // autoplaySpeed: 5000,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <div className="slider-container" key={index}>
      <Slider {...settings}>
        {imgs.map((img, index) => (
          <Box
            key={index}
            mt={3}
            sx={{
              position: "relative",
              width: { xs: "100%", sm: "100%" },
              height: { xs: 280, sm: 450 },
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
    </div>
  );
}
