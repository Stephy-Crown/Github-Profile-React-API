import Card from "./Card";

const CardList = ({ testData }) => {
  return (
    <div>
      {testData.map((profile) => (
        <Card {...profile} profile={profile} />
        // [<Card/>, <Card/>, <Card/>]
      ))}
    </div>
  );
};

export default CardList;
