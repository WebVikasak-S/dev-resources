import React, { useEffect, useState } from "react";
import "./Results.css";
import EditIcon from "@material-ui/icons/Edit";
import SearchIcon from "@material-ui/icons/Search";
import { Link } from "react-router-dom";

export interface vals {
  date_added: string;
  guid: string;
  id: string;
  name: string;
  type: string;
  url: string;
  tags: object;
}
interface GridProps {
  data: any;
  loading: boolean;
}
const Results: React.FC<GridProps> = (props) => {
  // const [data, setData] = useState([] as vals[]);
  const data = props.data;
  const loading = props.loading;

  // const getData = async () => {
  //   const bookmarks = await axios.get(`http://localhost:5000/bookmarks`);
  //   setData(bookmarks.data);
  // };

  //   const deleteBookmark = async (event: any, id: string) => {
  //     event.persist();
  //    await axios.delete(`http://localhost:5000/bookmark/${id}`).then(data_ => {
  //         getData();

  //     })
  // }
  useEffect(() => {
    console.log("Received Props is results component - ", props);
  }, []);
  const handle = () => {
    return <h1>loading...</h1>;
  };

  const [searchTerm, setSearchTerm] = useState("");

  return (
    <>
      <div className="searchBar">
        <SearchIcon fontSize="medium" />
        <input
          type="text"
          placeholder="Search Here"
          className="searchBar_input"
          onChange={(event) => {
            setSearchTerm(event.target.value);
          }}
        />
      </div>
      <div className="results_box col-md-12">
        <h1 className="result__header">Results</h1>

        <div className="filterd_results">
          {/* it ternary op working in terms of no records found */}
          {/* loading:== is show whenever data not fetch after fetch loading getting false  */}
          {/* no records show:= whenever loading false and data length will be less then 1 */}
          {loading ? handle() : null}
          {loading === false ? (
            data.length > 0 ? null : (
              <h1>No Records Found...</h1>
            )
          ) : null}
          {data
            ? data
                .filter((item: vals) => {
                  console.log("item in data - ", item);
                  if (searchTerm === "") {
                    return item;
                  } else if (
                    item.name
                      .toLowerCase()
                      .includes(searchTerm.toLowerCase()) ||
                    item.url.toLowerCase().includes(searchTerm.toLowerCase())
                  ) {
                    return item;
                  }
                })
                .map((bookmark: any, index: number) => (
                  <div className="result" key={index}>
                    <h5>
                      <a href={bookmark.url} target="_blank" rel="noreferrer">
                        {bookmark.name}
                      </a>
                      <span> #{bookmark.tags}</span>
                    </h5>
                    <br />
                    {/* <Link
                  to={{
                    pathname: "/edit",
                    state: {
                      id: bookmark.id,
                    },
                  }}
                > */}
                    <EditIcon
                      onClick={() => {
                        alert(
                          "Edit $ Create has been disabled since the Database is under work."
                        );
                      }}
                    />
                    {/* </Link> */}
                  </div>
                ))
            : "No Records"}
        </div>
      </div>
    </>
  );
};

export default Results;