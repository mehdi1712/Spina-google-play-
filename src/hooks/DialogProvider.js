import React, { useState } from "react"

//create our context
const dialogContext = React.createContext()
const SetDialogContext = React.createContext()

function DialogProvider({ children }) {
   //create our state
   const [dialog, setDialog] = useState(false)

   return (
      <dialogContext.Provider value={dialog}>
         <SetDialogContext.Provider value={setDialog}>{children}</SetDialogContext.Provider>
      </dialogContext.Provider>
   )
}
//custom hooks
/* ******************************** */
function useDialog() {
   const dialog = React.useContext(dialogContext)

   if (dialog === undefined) {
      throw new Error("render <DialogProvider /> at top of the tree")
   }

   return dialog
}

function useSetDialog() {
   const setDialog = React.useContext(SetDialogContext)

   if (setDialog === undefined) {
      throw new Error("render <DialogProvider /> at top of the tree")
   }

   return setDialog
}

/*******************actions*****************/

function useToggleDialogActions() {
   //DO'NT write this functions in component
   const setDialog = useSetDialog()
   const dialog = useDialog()

   const toggle = () => {
      setDialog(!dialog)
   }
   return { toggle }
}

export { useDialog, useSetDialog, useToggleDialogActions }
export default DialogProvider
