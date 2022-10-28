import styleContainer from "../../styles/Container.module.css";

export default function Container(props) {
  return <div className={styleContainer.container}>{props.children}</div>;
}
