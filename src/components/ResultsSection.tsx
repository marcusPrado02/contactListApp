import Card from "./Card";

export interface Props {
  users: {
    name: string;
    email: string;
  }[];
}

const ResultsSection = (props: Props) => {
  return (
    <>
      {props.users.map((user) => (
        <Card key={user.name} value={user.name} />
      ))}
    </>
  );
};

export default ResultsSection;
