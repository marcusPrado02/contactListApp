import { PropsWithChildren } from "react";

export interface Props {
  navigation: string[];
}

const Navbar = (props: PropsWithChildren<Props>) => {
  return (
    <>
      <header className=" text-white bg-blue-700 justify-center ">
        <nav className="flex flex-row flex-nowrap p-4 justify-between">
          <div className="basis-5/8 ml-2 space-x-10">
            <img src="" alt="" />
            <span>Aqui vai a logo</span>
          </div>
          <ul className="basis-3/8 flex flex-row-reverse text-sm text-center gap-4 ">
            <li className="font-semibold">
              <a href="">Your Account</a>
            </li>
            <li className="font-semibold">
              <a href="">Log out</a>
            </li>
            <button></button>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
