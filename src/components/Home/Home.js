import "./Home.scss";
import Card from "../cards/Card";
import Box from "../boxes/Box";
const Home = () => {
  return (
    <div className="Home">
      <div>
        <Card target={"targetPink"} about={true} />
        <Card target={"targetYellow"} yellow={true} proyects={true} />
        <Box clas={"Box1"} />
        <Box clas={"Box1a"} />
      </div>
      <div>
        <Box clas={"Box2"} />
        <Box clas={"Box2a"} />
      </div>
      <div>
        <Card target={"targetGreen"} contact={true} />
        <Box clas={"Box3"} />
        <Box clas={"Box3a"} />
      </div>
    </div>
  );
};
export default Home;
