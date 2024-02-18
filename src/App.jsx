import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { Card } from "./Card";

function App() {
  const [infoData, setInfoData] = useState([]);

  const getData = () => {
    axios
      .get(
        "https://my-json-server.typicode.com/Codeinwp/front-end-internship-api/posts"
      )
      .then(function (response) {
        console.log(response);
        setInfoData(response.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="cards-wrapper">
      {infoData.map((info) => (
        <Card
          key={info.id}
          title={info.title}
          content={info.content}
          thumbnail={info.thumbnail}
          author={info.author}
          date={info.date}
        />
      ))}
    </div>
  );
}

export default App;
