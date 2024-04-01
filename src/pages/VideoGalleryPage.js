import HoverVideoPlayer from "react-hover-video-player";
// import { Container } from "react-bootstrap";

//Work on reading files externally to link new videos

function importAll(r) {
  return r.keys().map(r);
}
const videos = importAll(
  require.context("../assets/videos", false, /\.(mov|mp4|avi)$/)
);
const thumbnails = importAll(
  require.context("../assets/videos/thumbnails", false, /\.(gif|jpg|png)$/)
);

export default function VideoGallery() {
  return (
    <div className="d-flex flex-wrap gap-4 justify-content-center">
      {videos.map((video, i) => (
        <HoverVideoPlayer
          key={i}
          videoSrc={video}
          className="galleryContent"
          style={
            videos.length < 2
              ? { width: "100vw", borderRadius: "0" }
              : videos.length < 3
              ? { width: "40rem", borderRadius: "0" }
              : videos.length < 4
              ? { width: "32rem", borderRadius: "0" }
              : { borderRadius: "0" }
          }
          onClick={() =>
            window.open("https://www.youtube.com/@Slinaband", "_blank")
          }
          pausedOverlay={
            <img
              src={thumbnails[i]}
              alt=""
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          }
        />
      ))}
    </div>
  );
}
