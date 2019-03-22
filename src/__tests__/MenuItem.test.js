import React from "react";

import { render, fireEvent, cleanup } from "react-testing-library";
import MenuItem from "../MenuItem";
import Store from "../Store";

afterEach(cleanup);

const renderComponent = ({ category }) => {
  // jest.mock("../Provider", () => {
  //   const React = require("react");
  //   const Store = require("../Store").default;

  //   const StoreContext = React.createContext(new Store());
  //   return {
  //     StoreContext
  //   };
  // });
  const StoreContext = React.createContext();
  // tried this too:
  // const StoreContext = React.createContext(new Store())
  // and then not passing a value prop
  return render(
    <StoreContext.Provider value={new Store()}>
      <MenuItem category={category} />
    </StoreContext.Provider>
  );
};

test("should show span after clicking category title", () => {
  const { queryByText, getByText } = renderComponent({
    category: "size"
  });

  expect(queryByText(/size is selected/i)).toBeNull();

  fireEvent.click(getByText(/size/i));
  expect(getByText(/size is selected/i)).toBeNull();
});
test("should show dropdown with correct options", () => {
  const { getByText, queryByText } = renderComponent({
    category: "size"
  });

  expect(queryByText(/size is selected/i)).toBeNull();
});
