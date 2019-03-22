import React from "react";
import { render as rtlRender, fireEvent, cleanup } from "react-testing-library";
import MenuItem from "../MenuItem";
import {Provider} from '../Provider'
import Store from '../Store'

afterEach(cleanup);

function render(ui, {store = new Store(), ...options} = {}) {
  function Wrapper(props) {
    return <Provider value={store} {...props} />
  }
  return rtlRender(ui, {wrapper: Wrapper, ...options})
}

test("should show span after clicking category title", () => {
  const { queryByText, getByText } = render(<MenuItem category="size" />, {store: new Store()});

  expect(queryByText(/size is selected/i)).toBeNull();

  fireEvent.click(getByText(/size/i));
  expect(getByText(/size is selected/i)).not.toBeNull();

});

test("should show dropdown with correct options", () => {
  const { queryByText } = render(<MenuItem category="size" />);

  expect(queryByText(/size is selected/i)).toBeNull();
});
