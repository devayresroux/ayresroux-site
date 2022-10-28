import Container from "../components/Grid/Container";
import PhotoProfile from "../components/Images/PhotoProfile";
import PreTitle from "../components/Typography/PreTitle";

export default function Home() {
  return (
    <Container>
      <div>
        <PhotoProfile src="/images/me.jpeg" />
        <PreTitle text="Olá Mundo!" />
      </div>
      <h1>Sou Ayres Roux, Full Stack Developer</h1>
    </Container>
  );
}
