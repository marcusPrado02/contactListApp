export interface Props {
  links: string[];
}

const Footer = (props: Props) => {
  return (
    <>
      <footer className="text-red-300">Esse é o footer da aplicação</footer>
    </>
  );
};

export default Footer;
