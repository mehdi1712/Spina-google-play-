import React, { useState } from "react"

//create our context
const appNameContext = React.createContext()
const SetAppNameContext = React.createContext()

function DetailProvider({ children }) {
   //create our state
   const [appName, setAppName] = useState("")

   return (
      <appNameContext.Provider value={appName}>
         <SetAppNameContext.Provider value={setAppName}>{children}</SetAppNameContext.Provider>
      </appNameContext.Provider>
   )
}
//custom hooks
/* ******************************** */
function useAppName() {
   const appName = React.useContext(appNameContext)

   if (appName === undefined) {
      throw new Error("render <DetailProvider /> at top of the tree")
   }

   return appName
}

function useSetAppName() {
   const setAppName = React.useContext(SetAppNameContext)

   if (setAppName === undefined) {
      throw new Error("render <DetailProvider /> at top of the tree")
   }

   return setAppName
}

/*******************actions*****************/

function useAppNameActions() {
   //DO'NT write this functions in component

   const setAppName = useSetAppName()

   const clickApp = (name) => {
      setAppName(name)
   }
   return { clickApp }
}

export { useAppName, useSetAppName, useAppNameActions }
export default DetailProvider
