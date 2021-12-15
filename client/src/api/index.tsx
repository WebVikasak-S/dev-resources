import axios from "axios";

const getAllBookmarks = async () => {
  console.log("Base URL - ", process.env.REACT_APP_API_BASE_URL);
  const res = await axios.get(
    `${process.env.REACT_APP_API_BASE_URL}/getAllBookmarks`
  );
  return res.data;
};

export { getAllBookmarks };
