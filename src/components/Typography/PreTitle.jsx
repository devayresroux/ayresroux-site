import preTitleStyle from "../../styles/PreTitle.module.css";

export default function PreTitle(props) {
  return (
    <span className={preTitleStyle.text}>
      <i>
        <img src="/images/emoji-hello.svg" alt="Emoji de mão acenando" />
      </i>
      {props.text}
    </span>
  );
}
