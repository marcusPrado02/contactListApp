export interface Props {
  links: string[];
}

const Footer = (props: Props) => {
  return (
    <>
      <footer className="absolute inset-x-0 bottom-0 text-center text-white bg-blue-700">
        <div className="text-center p-4 bg-blue-700 ">
          © 2022 Copyright: Marcus Prado Silva
        </div>
      </footer>
    </>
  );
};

export default Footer;
