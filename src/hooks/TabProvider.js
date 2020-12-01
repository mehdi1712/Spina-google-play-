import React, { useState } from "react"
//basket provider
//create our context
const handleTabContext = React.createContext()
const SetHandleTabContext = React.createContext()

function TabProvider({ children }) {
   //create our state
   const [handleTab, setHandleTab] = useState("1")

   return (
      <handleTabContext.Provider value={handleTab}>
         <SetHandleTabContext.Provider value={setHandleTab}>{children}</SetHandleTabContext.Provider>
      </handleTabContext.Provider>
   )
}
//custom hooks
/* ******************************** */
function useHandleTab() {
   const handleTab = React.useContext(handleTabContext)

   if (handleTab === undefined) {
      throw new Error("render <TabProvider /> at top of the tree")
   }

   return handleTab
}

function useSetHandleTab() {
   const setHandleTab = React.useContext(SetHandleTabContext)

   if (setHandleTab === undefined) {
      throw new Error("render <TabProvider /> at top of the tree")
   }

   return setHandleTab
}

/*******************actions*****************/

function useMoveTabActions() {
   //DO'NT write this functions in component
   const setHandleTab = useSetHandleTab()

   const moveTab = (number) => {
      setHandleTab(number)
   }
   return { moveTab }

   // setBasketItem((basketItem = [...basketItem, item]))
   // console.log("basketItem is :", basketItem)
}

export { useHandleTab, useSetHandleTab, useMoveTabActions }
export default TabProvider
