import { PropsWithChildren } from "react";

export interface Props {
  navigation: string[];
}

const Navbar = (props: PropsWithChildren<Props>) => {
  return (
    <>
      <h1>Esse é o Navbar de usuário</h1>
    </>
  );
};

export default Navbar;
