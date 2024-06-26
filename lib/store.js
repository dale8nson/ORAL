import { useContext, createContext, useRef } from "react"
import { createStore as createZustandStore } from "zustand/vanilla"
import { useStore as useZustandStore } from "zustand"

export const defaultInitState = {
  sideMenuOpen: false
}

export const initStore = () => ({ ...defaultInitState })

export const createStore = (initState = defaultInitState) => {
  return createZustandStore(set => ({
    ...initState,
    setSideMenuOpen: sideMenuOpen => set(() => ({ sideMenuOpen })),
    
  }))
}


export const StoreContext = createContext(null)

export const StoreProvider = ({ children }) => {
  const storeRef = useRef()
  if (!storeRef.current) {
    storeRef.current = createStore()
  }

  return (
    <StoreContext.Provider value={storeRef.current}>
      {children}
    </StoreContext.Provider>
  )
}

export const useStore = selector => {
  const storeContext = useContext(StoreContext)
  if (!storeContext) throw new Error(`useStore must be used within StoreProvider`)
  return useZustandStore(storeContext, selector)
}