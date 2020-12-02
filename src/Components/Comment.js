import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import Accordion from "@material-ui/core/Accordion"
import AccordionSummary from "@material-ui/core/AccordionSummary"
import AccordionDetails from "@material-ui/core/AccordionDetails"
import Typography from "@material-ui/core/Typography"
import ExpandMoreIcon from "@material-ui/icons/ExpandMore"
import "./Comment.css"

const useStyles = makeStyles((theme) => ({
   root: {
      width: "100%",
   },
   heading: {
      fontSize: theme.typography.pxToRem(15),
      fontWeight: theme.typography.fontWeightRegular,
   },
}))

export default function Comment(props) {
   const classes = useStyles()
   console.log("prop in comment ", props)

   return (
      <div className={classes.root}>
         <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
               <Typography className={classes.heading}>{props && props.comment.sentiment}</Typography>
            </AccordionSummary>
            <AccordionDetails>
               <Typography>{props && props.comment.content}</Typography>
            </AccordionDetails>
         </Accordion>
      </div>
   )
}
