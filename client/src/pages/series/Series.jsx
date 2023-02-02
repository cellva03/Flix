import Navbar from "../../components/navbar/Navbar";
import Featured from "../../components/featured/Featured";
import "./series.scss";
import List from "../../components/list/List";
import { useEffect, useState } from "react";
import axios from "axios";

const Series = ({type}) => {
  const [lists, setLists] = useState([]);
  const [genre, setGenre] = useState(null);
  // console.log(type)

  useEffect(() => {
    const getRandomLists = async () => {
      try {
        const res = await axios.get(`https://aniflix-server.onrender.com/api/lists?type=${type}`,
          {
            headers: {
              token:
              "Bearer "+JSON.parse(localStorage.getItem("user")).accessToken,
            },
          }
        );
        setLists(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getRandomLists();
  }, [type, genre]);
  return (
    <div className="home">
      <Navbar />
      <Featured type={type} setGenre={setGenre} />
      {lists.map((list,i) => (
        <List list={list} key={i}/>
      ))}
    </div>
  );
};

export default Series;
