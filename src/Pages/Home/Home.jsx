import AnnounceData from "../../Components/AnnounceData/AnnounceData";
import Banner from "../../Components/Banner/Banner";
import Posts from "../../Components/Posts/Posts";
import Tags from "../../Components/Tags/Tags";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Tags></Tags>
      <AnnounceData></AnnounceData>
      <Posts></Posts>
    </div>
  );
};

export default Home;
