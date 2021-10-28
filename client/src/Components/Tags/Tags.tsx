import React, { useState, useEffect } from "react";

import "./Tags.css";
interface GridProps {
  data: any;
  setData: Function;
  data1: any;
  setData1: Function;
}

interface State {
  html: boolean;
  css: boolean;
  typescript: boolean;
  reactjs: boolean;
  celebal: boolean;
  github: boolean;
  javascript: boolean;
  [key: string]: boolean;
}

const Tags: React.FC<GridProps> = (props) => {
  // checkhandle state works for handling checkboxes
  const [firstcheck, setFirstcheck] = useState<any>([]);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [checkhandle, setCheckhandle] = useState<State>({
    html: false,
    css: false,
    typescript: false,
    reactjs: false,
    celebal: false,
    github: false,
    javascript: false,
  } as State);
  const data = props.data;

  const handleFilter = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const container = [...props.data1];
    //tags Works for add data on check
    const Tags = (n: any) => {
      return n.tags === `${e.target.name}`;
    };

    //tagdel working for delete data on uncheck after check
    const TagDel = (n: any) => {
      return n.tags !== `${e.target.name}`;
    };

    if (data.length >= 0) {
      const TagFilter = container.filter(Tags);
      // To add the first value that is added since, On First render, Array length is 0,
      if (firstcheck.length === 0) {
        setFirstcheck(TagFilter);
      }
      // Check if value is more than 0, and check true then add more
      if (firstcheck.length > 0 && e.target.checked === true) {
        setFirstcheck([...firstcheck, ...TagFilter]);
      }

      //agr value more than 0 and check true then delete
      if (firstcheck.length > 0 && e.target.checked === false) {
        const TagFilter1 = firstcheck.filter(TagDel);
        setFirstcheck(TagFilter1);
      }
      //for loop working for checked control functionality
      for (let n in checkhandle) {
        if (n === e.target.name) {
          checkhandle[n] = e.target.checked;
        }
      }
    }
  };
  const handleAllData = () => {
    props.setData(props.data1);
    setFirstcheck([]);
    for (let n in checkhandle) {
      checkhandle[n] = false;
    }
  };
  useEffect(() => {
    if (firstcheck.length > 0) {
      props.setData(firstcheck);
    } else {
      props.setData(props.data1);
    }
  }, [firstcheck, props]);
  return (
    <div className="tags_box col-md-12">
      <h1 className="tag__filters">Filters Tags</h1>
      <div className="tags">
        <div className="tag_button">
          <button onClick={handleAllData}>Apply All</button>
        </div>
        <div className="tag_button">
          <input
            type="checkbox"
            value="html"
            name="html"
            onChange={handleFilter}
            checked={checkhandle.html}
          />
          <label>#Html</label>
        </div>
        <div className="tag_button">
          <input
            type="checkbox"
            value="1"
            id="1"
            name="css"
            onChange={handleFilter}
            checked={checkhandle.css}
          />
          <label>#CSS</label>
        </div>
        <div className="tag_button">
          <input
            type="checkbox"
            value="html"
            name="javascript"
            onChange={handleFilter}
            checked={checkhandle.javascript}
          />
          <label>#Javascript</label>
        </div>
        <div className="tag_button">
          <input
            type="checkbox"
            value="html"
            name="reactjs"
            onChange={handleFilter}
            checked={checkhandle.reactjs}
          />
          <label>#ReactJS</label>
        </div>
        <div className="tag_button">
          <input
            type="checkbox"
            value="html"
            name="github"
            onChange={handleFilter}
            checked={checkhandle.github}
          />
          <label>#Github</label>
        </div>
        <div className="tag_button">
          <input
            type="checkbox"
            value="html"
            name="typescript"
            checked={checkhandle.typescript}
            onChange={handleFilter}
          />
          <label>#Typescript</label>
        </div>
        <div className="tag_button">
          <input
            type="checkbox"
            value="1"
            name="celebal"
            checked={checkhandle.celebal}
            onChange={handleFilter}
          />
          <label>#Celebal</label>
        </div>
        {/* <button className="tag_button">HTML</button>
        <button className="tag_button">CSS</button>
        <button className="tag_button">JavaScript</button>
        <button className="tag_button">ReactJS</button>
        <button className="tag_button">Github</button>
        <button className="tag_button">Typescript</button> */}
      </div>
    </div>
  );
};

export default Tags;
