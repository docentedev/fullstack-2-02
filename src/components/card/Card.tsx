import type { ReactElement } from "react";

interface CardProps {
  title: string;
  children: ReactElement;
}

const Card = (props: CardProps) => {
  return (
    <article>
      <header>
        <h1>{props.title}</h1>
      </header>
      <div>{props.children}</div>
    </article>
  );
};

export default Card;
