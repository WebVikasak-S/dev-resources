import { useCallback, useState } from 'react';
import items from './items.json';
import CheckboxList from '../CheckBoxList';
import { updateItemStates } from './updateItemState';

export enum CheckboxState {
  UNCHECKED,
  CHECKED,
  INDETERMINATE,
}

export type ItemState = {
  id: number;
  state: CheckboxState;
};

const defaultItemStates: ItemState[] = items.map((i) => ({
  id: i.id,
  state: CheckboxState.CHECKED,
}));

const Tree = () => {
  const [itemStates, setItemStates] = useState<ItemState[]>(defaultItemStates);
  const getStateForId = useCallback(
    (id: number) => {
      return itemStates.find((i) => i.id === id).state;
    },
    [itemStates]
  );
  const clickHandler = useCallback(
    (id) => setItemStates(updateItemStates(itemStates, items, id)),
    [itemStates]
  );
  return (
    <CheckboxList
      items={items}
      onClick={clickHandler}
      getStateForId={getStateForId}
    />
  );
};

export default Tree;
