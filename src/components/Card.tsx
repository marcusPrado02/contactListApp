import { PropsWithChildren } from "react";

export interface Props {
  value: string;
}

const Card = (props: PropsWithChildren<Props>) => {
  return (
    <>
      <h1>Esse é o card de usuário</h1>
    </>
  );
};

export default Card;
