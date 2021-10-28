import React, { useEffect, useState } from "react";
import "./Grid.css";
import Results from "../Components/Results/Results";
import Tags from "../Components/Tags/Tags";
import axios from "axios";
export interface vals {
  date_added: string;
  guid: string;
  id: string;
  name: string;
  type: string;
  url: string;
  tags: object;
}
const Grid: React.FC = () => {
  const [data, setData] = useState([] as vals[]);
  const [data1, setData1] = useState([] as vals[]);

  const [loading, setLoading] = useState<boolean>(true);
  useEffect(() => {
    getData();
  }, []);
  const getData = async () => {
    const bookmarks = await axios.get(`http://localhost:5000/bookmarks`);
    console.log(bookmarks);

    setData(bookmarks.data);
    setData1(bookmarks.data);
    setLoading(false);
  };
  return (
    <div className="view_port">
      <Tags data={data} setData={setData} data1={data1} setData1={setData1} />
      <hr />
      <Results data={data} loading={loading} />
      {console.log(typeof setData)}
    </div>
  );
};

export default Grid;
