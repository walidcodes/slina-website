import { Carousel } from "react-bootstrap";
import { useState } from "react";

function importAll(r) {
  return r.keys().map(r);
}

const images = importAll(
  require.context("./assets/imgs/gallery", false, /\.(png|jpe?g|svg)$/)
);

export default function PhotoGallery() {
  const [carouselMode, setCarouselMode] = useState(false);
  //for carousel
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };
  function handleCarouselMode(i) {
    setIndex(i);
    setCarouselMode(!carouselMode);
  }
  return (
    <>
      {carouselMode ? (
        <Carousel activeIndex={index} onSelect={handleSelect}>
          {images.map((image, i) => {
            return (
              <Carousel.Item key={i}>
                <img
                  src={image}
                  alt="slider"
                  onClick={handleCarouselMode}
                  style={{
                    display: "block",
                    height: "78vmin",
                    margin: "0 auto",
                    borderRadius: "0.5rem",
                  }}
                />
              </Carousel.Item>
            );
          })}
        </Carousel>
      ) : (
        <div className="d-flex flex-wrap gap-4 justify-content-center">
          {images.map((image, i) => (
            <img
              key={i}
              variant="top"
              className="galleryContent"
              src={image}
              alt={`number ${i}`}
              onClick={() => {
                handleCarouselMode(i);
              }}
            />
          ))}
        </div>
      )}
    </>
  );
}
