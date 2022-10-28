import photoProfileStyle from "../../styles/PhotoProfile.module.css";

export default function PhotoProfile(props) {
  return (
    <figure className={photoProfileStyle.photo}>
      <img src={props.src} alt={props.alt} />
    </figure>
  );
}
