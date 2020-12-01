import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import Dialog from "@material-ui/core/Dialog"
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import IconButton from "@material-ui/core/IconButton"
import Typography from "@material-ui/core/Typography"
import CloseIcon from "@material-ui/icons/Close"
import Slide from "@material-ui/core/Slide"
import { useToggleDialogActions, useDialog } from "../hooks/DialogProvider"
import { useAppName } from "../hooks/DetailProvider"
import { useApp } from "../hooks/index"
import "./Dialog.css"

const useStyles = makeStyles((theme) => ({
   appBar: {
      position: "relative",
   },
   title: {
      marginLeft: theme.spacing(2),
      flex: 1,
   },
}))

function createData(name, calories, fat, carbs, protein) {
   return { name, calories, fat, carbs, protein }
}
const rows = [
   createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
   createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
   createData("Eclair", 262, 16.0, 24, 6.0),
   createData("Cupcake", 305, 3.7, 67, 4.3),
   createData("Gingerbread", 356, 16.0, 49, 3.9),
]

const Transition = React.forwardRef(function Transition(props, ref) {
   return <Slide direction="up" ref={ref} {...props} />
})

export default function FullScreenDialog() {
   const name = useAppName()
   const { data } = useApp(name)
   console.log(data)
   const classes = useStyles()
   const open = useDialog()
   const { toggle } = useToggleDialogActions()

   const handleClose = () => {
      toggle()
   }

   return (
      <div>
         <Dialog fullScreen open={open} onClose={handleClose} TransitionComponent={Transition}>
            <AppBar className={classes.appBar}>
               <Toolbar className="toolbar">
                  <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="close">
                     <CloseIcon />
                  </IconButton>
                  <Typography variant="h6" className={classes.title}>
                     {data ? data.app.name : "app name"}
                  </Typography>
               </Toolbar>
            </AppBar>
         </Dialog>
      </div>
   )
}
