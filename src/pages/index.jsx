import Container from "../components/Grid/Container";
import PhotoProfile from "../components/Images/PhotoProfile";
import Slide, { SlidePreTitle, SlideTitle } from "../components/Slide/Slide";
import PreTitle from "../components/Typography/PreTitle";

export default function Home() {
  return (
    <Slide>
      <Container>
        <SlidePreTitle>
          <PhotoProfile src="/images/me.jpeg" />
          <PreTitle text="Olá Mundo!" />
        </SlidePreTitle>
        <SlideTitle>
          <h1>
            Ayres Roux <span>Full Stack Developer</span>
          </h1>
        </SlideTitle>
        <p>A Professional FullStack Developer and UI/UX Designer</p>
      </Container>
    </Slide>
  );
}
