import "./home.scss";
import Navbar from "../navbar/Navbar";
import List from "../navbar/list/List";
import Featured from "../navbar/featured/Featured";
const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <Featured />
      <List />
      <List />
      <List />
    </div>
  );
};

export default Home;
