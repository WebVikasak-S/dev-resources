import * as React from "react";
import { TagContext } from "../../context/TagContext";

const Tags = () => {
  const { allTags, filteredTags, setFilteredTags, handleChange } =
    React.useContext(TagContext);
  const [allChecked, setAllChecked] = React.useState(false);
  const handleAllChange = () => {
    if (!allChecked) {
      setFilteredTags(allTags);
    } else {
      setFilteredTags([]);
    }
    setAllChecked(!allChecked);
  };

  React.useEffect(() => {
    console.log("Tags in Tags - ", filteredTags);
  }, [filteredTags]);

  return (
    <div className="filter-container">
      <h1>Filter Tags</h1>
      <div className="tags-container">
        {allTags.map((tag, i) => {
          return (
            <div className="w-fit p-2 m-2" key={i}>
              <input
                className="mt-2 tag-input"
                type="checkbox"
                value={tag}
                name={tag}
                onChange={(e) => handleChange(e.target.value)}
                checked={filteredTags.includes(tag)}
               />
              <label htmlFor={tag}>#{tag}</label>
            </div>
          );
        })}
        &nbsp;&nbsp;&nbsp;&nbsp;
        <div className="w-fit p-2 m-2">
          <button
            className="p-1 border-2 border-black rounded font-semibold"
            onClick={handleAllChange}
          >
            Apply All
          </button>
        </div>
      </div>
    </div>
  );
};

export default Tags;
