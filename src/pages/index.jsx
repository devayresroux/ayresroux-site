import Button from "../components/Buttons/Button";
import Container from "../components/Grid/Container";
import PhotoProfile from "../components/Images/PhotoProfile";
import Slide, {
  SlidePreTitle,
  SlideTitle,
  SlideText,
} from "../components/Slide/Slide";
import PreTitle from "../components/Typography/PreTitle";
import Video from "../components/Video/Video";

export default function Home() {
  return (
    <Slide>
      <Video />

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
        <SlideText>
          <p>+ de 7 anos de experiência no desenvolvimento Full Stack.</p>
        </SlideText>
        <Button label="Vamos Conversar" url="#" target="_blank" />
      </Container>
    </Slide>
  );
}
