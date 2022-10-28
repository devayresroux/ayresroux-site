import buttonStyle from "../../styles/Button.module.css";

export default function Button(props) {
  return (
    <a className={buttonStyle.btn} target={props.target} href={props.url}>
      {props.label}
    </a>
  );
}
