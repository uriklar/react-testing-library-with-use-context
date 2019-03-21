import React from "react";
import { observer } from "mobx-react-lite";
import useSelectable from "./useSelectable";

const MenuItem = observer(props => {
  const { isSelected, onSelect } = useSelectable(props);
  return (
    <div>
      <div onClick={onSelect}>{props.category}</div>
      {isSelected && <span>{props.category} is selected</span>}
    </div>
  );
});

export default MenuItem;
