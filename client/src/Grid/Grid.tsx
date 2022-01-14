import React, { useEffect, useState } from "react";
import "./Grid.css";
import Results from "../Components/Results/Results";
import Tags from "../Components/Tags/Tags";
// import axios from "axios";
// import { db } from "../db.js";
import { getAllBookmarks } from "../api";
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
  const [data, setData] = useState([] as vals[] | any);
  const [data1, setData1] = useState([] as vals[] | any);

  const [loading, setLoading] = useState<boolean>(true);
  useEffect(() => {
    // getData();
    getAllBookmarks()
      .then((res) => {
        console.log("API DATA - ", res);
        setData(res);
        setData1(res);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  // const getData = async () => {
  //   // const bookmarks = await axios.get(`http://localhost:5000/bookmarks`);
  //   const bookmarks = await db;
  //   // console.log(bookmarks);

  //   setData(bookmarks.bookmarks);
  //   setData1(bookmarks.bookmarks);
  //   setLoading(false);
  // };
  return (
    <div className="mt-10">
      <Tags data={data} setData={setData} data1={data1} setData1={setData1} />
      <hr />
      <Results data={data} loading={loading} />
    </div>
  );
};

export default Grid;
