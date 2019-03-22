import React from "react";
import Store from './Store'

const StoreContext = React.createContext();

function useStore() {
  const store = React.useContext(StoreContext)
  if (!store) {
    throw new Error('Cannot use `useStore` outside of a StoreProvider')
  }
  return store
}

function Provider(props) {
  const store = React.useMemo(() => new Store(), [])
  return <StoreContext.Provider value={store} {...props} />
}

export {Provider, useStore}