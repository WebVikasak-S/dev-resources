import * as React from 'react';
import { TagContext } from './contexts/TagContext';

const Filters = () => {
  const { allTags, filteredTags, setFilteredTags, handleChange } = React.useContext(TagContext);
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
    console.log('Data from Context - ', allTags, filteredTags);
  }, []);

  React.useEffect(() => {
    console.log('Tags in Tags - ', filteredTags);
  }, [filteredTags]);

  return (
    <div className="flex flex-col p-2 px-8 border-2 mx-1">
      <h1 className="text-xl font-semibold underline">Filter Tags</h1>
      <div className="flex flex-col flex-start flex-wrap">
        {allTags
          ? allTags.map((tag, i) => {
              return (
                <div className="" key={i}>
                  <input
                    className="mt-2 tag-input"
                    type="checkbox"
                    value={tag}
                    name={tag}
                    onChange={(e) => handleChange(e.target.value)}
                    checked={filteredTags.includes(tag)}
                  />
                  &nbsp; &nbsp;
                  <label htmlFor={tag}>#{tag}</label>
                </div>
              );
            })
          : ''}
        &nbsp;&nbsp;&nbsp;&nbsp;
        <div className="w-fit p-2 m-2">
          <button className="p-1 border-2 border-black rounded font-semibold" onClick={handleAllChange}>
            Apply All
          </button>
        </div>
      </div>
    </div>
  );
};

export default Filters;
