import React from "react"
import List from "@material-ui/core/List"
import ListItem from "@material-ui/core/ListItem"
import ListItemText from "@material-ui/core/ListItemText"
import "./Detail.css"

import { Container, Paper } from "@material-ui/core"

export default function FolderList(props) {
   console.log(props)
   return (
      <Container>
         <Paper variant="outlined" className="paper">
            <List className="root-list">
               <ListItem>
                  <ListItemText primary="Android Version" secondary={props ? props.data.app.android_version : "Null"} />
               </ListItem>
               <ListItem>
                  <ListItemText primary="Category" secondary={props ? props.data.app.category : "Null"} />
               </ListItem>
               <ListItem>
                  <ListItemText primary="Content Rating" secondary={props ? props.data.app.content_rating : "Null"} />
               </ListItem>
               <ListItem>
                  <ListItemText primary="Current Version" secondary={props ? props.data.app.current_version : "Null"} />
               </ListItem>
               <ListItem>
                  <ListItemText primary="Genres" secondary={props ? props.data.app.Genres : "Null"} />
               </ListItem>
               <ListItem>
                  <ListItemText primary="Installs" secondary={props ? props.data.app.Installs : "Null"} />
               </ListItem>
               <ListItem>
                  <ListItemText primary="Last Updated" secondary={props ? props.data.app.last_updated : "Null"} />
               </ListItem>
               <ListItem>
                  <ListItemText primary="Price" secondary={props ? props.data.app.price : "Null"} />
               </ListItem>
               <ListItem>
                  <ListItemText primary="Rating" secondary={props ? props.data.app.rating : "Null"} />
               </ListItem>
               <ListItem>
                  <ListItemText primary="Reviews" secondary={props ? props.data.app.reviews : "Null"} />
               </ListItem>
               <ListItem>
                  <ListItemText primary="Size" secondary={props ? props.data.app.size : "Null"} />
               </ListItem>
               <ListItem>
                  <ListItemText primary="Type" secondary={props ? props.data.app.type : "Null"} />
               </ListItem>
            </List>
         </Paper>
      </Container>
   )
}
