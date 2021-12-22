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
    <div className="p-4 col-md-12">
      <h1 className=" m-0 pb-6 font-semibold">Filters Tags</h1>
      <div className="flex flex-row flex-wrap">
        <div className="w-fit p-2 m-2">
          <button className="p-1 border-2 border-black rounded font-semibold" onClick={handleAllData}>Apply All</button>
        </div>
        <div className="w-fit p-2 m-2">
          <input
            className="mt-2"
            type="checkbox"
            value="html"
            name="html"
            onChange={handleFilter}
            checked={checkhandle.html}
          />
          <label>#Html</label>
        </div>
        <div className="w-fit p-2 m-2">
          <input
            className="mt-2"
            type="checkbox"
            value="1"
            id="1"
            name="css"
            onChange={handleFilter}
            checked={checkhandle.css}
          />
          <label >#CSS</label>
        </div>
        <div className="w-fit p-2 m-2">
          <input
            className="mt-2"
            type="checkbox"
            value="html"
            name="javascript"
            onChange={handleFilter}
            checked={checkhandle.javascript}
          />
          <label >#Javascript</label>
        </div>
        <div className="w-fit p-2 m-2">
          <input
            className="mt-2"
            type="checkbox"
            value="html"
            name="reactjs"
            onChange={handleFilter}
            checked={checkhandle.reactjs}
          />
          <label >#ReactJS</label>
        </div>
        <div className="w-fit p-2 m-2">
          <input
            className="mt-2"
            type="checkbox"
            value="html"
            name="github"
            onChange={handleFilter}
            checked={checkhandle.github}
          />
          <label >#Github</label>
        </div>
        <div className="w-fit p-2 m-2">
          <input
            className="mt-2"
            type="checkbox"
            value="html"
            name="typescript"
            checked={checkhandle.typescript}
            onChange={handleFilter}
          />
          <label >#Typescript</label>
        </div>
        <div className="w-fit p-2 m-2">
          <input
            className="mt-2"
            type="checkbox"
            value="1"
            name="celebal"
            checked={checkhandle.celebal}
            onChange={handleFilter}
          />
          <label >#Celebal</label>
        </div>
        {/* <button className="w-fit p-2 m-2">HTML</button>
        <button className="w-fit p-2 m-2">CSS</button>
        <button className="w-fit p-2 m-2">JavaScript</button>
        <button className="w-fit p-2 m-2">ReactJS</button>
        <button className="w-fit p-2 m-2">Github</button>
        <button className="w-fit p-2 m-2">Typescript</button> */}
      </div>
    </div>
  );
};

export default Tags;
