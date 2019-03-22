import { useCallback } from "react";
import { useStore } from "./Provider";

export default function({ category }) {
  const store = useStore();
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
