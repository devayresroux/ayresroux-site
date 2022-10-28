import slideStyle from "../../styles/Slide.module.css";

export default function Slide(props) {
  return <section className={slideStyle.slide}>{props.children}</section>;
}

export function SlidePreTitle(props) {
  return (
    <section className={slideStyle.slidePreTitle}>{props.children}</section>
  );
}

export function SlideTitle(props) {
  return <div className={slideStyle.slideTitle}>{props.children}</div>;
}
