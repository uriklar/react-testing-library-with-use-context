import { observable, action, decorate } from "mobx";

class Store {
  selectedCategory = null;

  selectCategory(category) {
    this.selectedCategory =
      this.selectedCategory === category ? null : category;
  }
}

export default decorate(Store, {
  selectedCategory: observable,
  selectCategory: action
});
