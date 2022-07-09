import React from "react";
import Checkbox from "./CheckBox";
// import { CheckboxState } from "../Tree/Tree";
import styles from "./checkboxlist.module.scss";

export type Item = {
  id: number;
  name: string;
  parentId: number;
};

type CheckboxListProps = {
  items: Item[];
  idsToRender?: number[];
  indentLevel?: number;
  onClick?: (id: number) => void;
  getStateForId: (id: number) => CheckboxState;
};

const CheckboxList: React.FC<CheckboxListProps> = ({
  items,
  getStateForId,
  idsToRender = [],
  indentLevel = 0,
  onClick = () => {},
}) => {
  if (!idsToRender.length) {
    idsToRender = items.filter((i) => !i.parentId).map((i) => i.id);
  }

  const getChildNodes = (parentId: number) => {
    const nodeItems = items.filter((i) => i.parentId === parentId);
    if (!nodeItems.length) return null;
    return (
      <CheckboxList
        items={items}
        idsToRender={nodeItems.map((i) => i.id)}
        indentLevel={indentLevel + 1}
        onClick={onClick}
        getStateForId={getStateForId}
      />
    );
  };

  return (
    <ul className={styles.list} style={{ paddingLeft: indentLevel * 20 }}>
      {idsToRender.map((id) => {
        const item = items.find((i) => i.id === id);
        const checkboxState = getStateForId(id);
        return (
          <React.Fragment key={item.id}>
            <li>
              <Checkbox
                onClick={() => onClick(item.id)}
                isChecked={checkboxState === CheckboxState.CHECKED}
                isIndeterminate={checkboxState === CheckboxState.INDETERMINATE}
              />
              {item.name}
            </li>
            {getChildNodes(item.id)}
          </React.Fragment>
        );
      })}
    </ul>
  );
};

export default CheckboxList;
