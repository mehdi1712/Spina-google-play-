import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import Dialog from "@material-ui/core/Dialog"
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import IconButton from "@material-ui/core/IconButton"
import Typography from "@material-ui/core/Typography"
import CloseIcon from "@material-ui/icons/Close"
import Slide from "@material-ui/core/Slide"
import Detail from "./Detail"
import Comment from "./Comment"
import { useToggleDialogActions, useDialog } from "../hooks/DialogProvider"
import { useAppName } from "../hooks/DetailProvider"
import { useApp } from "../hooks/index"
import { Container } from "@material-ui/core"
import "./Dialog.css"

const useStyles = makeStyles((theme) => ({
   appBar: {
      position: "relative",
      display: "block",
   },
   title: {
      marginLeft: theme.spacing(2),
   },
}))

const Transition = React.forwardRef(function Transition(props, ref) {
   return <Slide direction="up" ref={ref} {...props} />
})

export default function FullScreenDialog() {
   const name = useAppName()
   const { data } = useApp(name)

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
                  <Typography variant="h6" className={classes.title}>
                     {data ? data.app.name : "app name"}
                  </Typography>
                  <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="close">
                     <CloseIcon />
                  </IconButton>
               </Toolbar>
            </AppBar>
            <Detail data={data} />

            {data && data.reviews.length !== 0 && (
               <Container className="comments">
                  <Typography variant="h4" className="header-comments">
                     Comments
                  </Typography>
                  {data.reviews.map((c) => (
                     <Comment comment={c} />
                  ))}
               </Container>
            )}
         </Dialog>
      </div>
   )
}
