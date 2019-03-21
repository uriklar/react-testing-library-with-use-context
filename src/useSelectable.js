import { useContext, useCallback } from "react";
import { StoreContext } from "./Provider";

export default function({ category }) {
  const store = useContext(StoreContext);
  const isSelected = store.selectedCategory === category;
  const onSelect = useCallback(() => {
    store.selectCategory(category);
  }, [category]);

  console.log({ store, category, isSelected });

  return {
    isSelected,
    onSelect
  };
}
