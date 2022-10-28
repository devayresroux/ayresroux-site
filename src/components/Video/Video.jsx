import videoStyle from "../../styles/Video.module.css";

export default function Video() {
  return (
    <video className={videoStyle.videoBg} autoPlay muted loop>
      <source src="videos/bg-slide.mp4" type="video/mp4" />
    </video>
  );
}
