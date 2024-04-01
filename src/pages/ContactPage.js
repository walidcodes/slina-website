import { Container } from "react-bootstrap";

export default function ContactPage() {
  return (
    <>
      <Container className="d-flex align-items-baseline mt-5">
        <h4>Mobile: </h4>
        <p className="ms-3">+48 783 882 889</p>
      </Container>
      <Container className="d-flex align-items-baseline">
        <h4>Bandcamp: </h4>
        <a href="https://slina.bandcamp.com/" className="link-dark ms-3">
          {" "}
          slina.bandcamp
        </a>
      </Container>
    </>
  );
}
