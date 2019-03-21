import React from "react";
import Store from "./Store";

const store = new Store();

export const StoreContext = React.createContext(store);
