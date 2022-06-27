import * as React from 'react';
import { TiTag } from 'react-icons/ti';
import { TagContext } from '../context/TagContext';

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
    <div className="flex flex-col p-2 px-8 border-2 mx-1 h-fit sm:mb-2 items-center">
      <p className="text-xl font-semibold underline">Filter Tags</p>
      <div className="grid gap-2 grid-cols-2">
        {allTags
          ? allTags.map((tag, i) => {
              return (
                <div className="flex items-center mr-2 md:mr-0" key={i}>
                  <input
                    className=""
                    type="checkbox"
                    value={tag}
                    name={tag}
                    onChange={(e) => handleChange(e.target.value)}
                    checked={filteredTags.includes(tag)}
                  />
                  &nbsp;
                  <TiTag />
                  <label htmlFor={tag}>{tag}</label>
                </div>
              );
            })
          : ''}
      </div>
      <div className="w-fit p-2 m-2 sm:mx-auto">
        <button className="p-1 border-2 border-black rounded font-semibold" onClick={handleAllChange}>
          Apply All
        </button>
      </div>
    </div>
  );
};

export default Filters;
