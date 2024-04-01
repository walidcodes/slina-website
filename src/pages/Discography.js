function importAll(r) {
  return r.keys().map(r);
}

const images = importAll(
  require.context("../assets/imgs/discography", false, /\.(png|jpe?g|svg)$/)
);

export default function Discography() {
  return (
    <>
      <div className="d-flex flex-wrap gap-4 justify-content-center mt-5">
        {images.map((image, i) => (
          <img
            key={i}
            variant="top"
            className="galleryContent"
            src={image}
            alt={`number ${i}`}
            style={
              images.length < 5
                ? {
                    width: "16rem",
                    borderRadius: "none",
                    filter: "invert(100%) grayscale(100%)",
                  }
                : {
                    borderRadius: "none",
                    filter: "invert(100%) grayscale(100%)",
                  }
            }
          />
        ))}
      </div>
    </>
  );
}
