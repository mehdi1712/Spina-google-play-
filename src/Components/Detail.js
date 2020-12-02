import React from "react"
import List from "@material-ui/core/List"
import ListItem from "@material-ui/core/ListItem"
import ListItemText from "@material-ui/core/ListItemText"
import "./Detail.css"
import { Skeleton } from "@material-ui/lab"
import { Container, Paper } from "@material-ui/core"

export default function Detail(props) {
   console.log("prop is", props.data)
   return (
      <Container>
         <Paper variant="outlined" className="paper">
            {props.data ? (
               <List className="root-list">
                  <ListItem>
                     <ListItemText primary="Android Version" secondary={props.data.app.android_version} />
                  </ListItem>
                  <ListItem>
                     <ListItemText primary="Category" secondary={props.data.app.category} />
                  </ListItem>
                  <ListItem>
                     <ListItemText primary="Content Rating" secondary={props.data.app.content_rating} />
                  </ListItem>
                  <ListItem>
                     <ListItemText primary="Current Version" secondary={props.data.app.current_version} />
                  </ListItem>
                  <ListItem>
                     <ListItemText primary="Genres" secondary={props.data.app.Genres} />
                  </ListItem>
                  <ListItem>
                     <ListItemText primary="Installs" secondary={props.data.app.Installs} />
                  </ListItem>
                  <ListItem>
                     <ListItemText primary="Last Updated" secondary={props.data.app.last_updated} />
                  </ListItem>
                  <ListItem>
                     <ListItemText primary="Price" secondary={props.data.app.price} />
                  </ListItem>
                  <ListItem>
                     <ListItemText primary="Rating" secondary={props.data.app.rating} />
                  </ListItem>
                  <ListItem>
                     <ListItemText primary="Reviews" secondary={props.data.app.reviews} />
                  </ListItem>
                  <ListItem>
                     <ListItemText primary="Size" secondary={props.data.app.size} />
                  </ListItem>
                  <ListItem>
                     <ListItemText primary="Type" secondary={props.data.app.type} />
                  </ListItem>
               </List>
            ) : (
               <div style={{ width: "300" }}>
                  <Skeleton />
                  <Skeleton animation={false} />
                  <Skeleton animation="wave" />
               </div>
            )}
         </Paper>
      </Container>
   )
}
