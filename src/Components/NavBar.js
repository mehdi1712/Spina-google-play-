import React from "react"
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import Typography from "@material-ui/core/Typography"
import IconButton from "@material-ui/core/IconButton"
import BottomNavigation from "@material-ui/core/BottomNavigation"
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction"
import FavoriteIcon from "@material-ui/icons/Favorite"
import ListIcon from "@material-ui/icons/List"
import StarIcon from "@material-ui/icons/Star"
import { useMoveTabActions } from "../hooks/TabProvider"
import "./NavBar.css"

const NavBar = () => {
   const [value, setValue] = React.useState(0)
   const { moveTab } = useMoveTabActions()

   return (
      <React.Fragment>
         <AppBar className="AppBar" position="static">
            <Toolbar variant="dense">
               <IconButton edge="start" color="secondary" aria-label="menu"></IconButton>
               <Typography className="Title" variant="h5" color="inherit">
                  SPINA
               </Typography>
            </Toolbar>
         </AppBar>
         <BottomNavigation
            value={value}
            onChange={(event, newValue) => {
               setValue(newValue)
            }}
            showLabels>
            <BottomNavigationAction onClick={() => moveTab("1")} label="همه" icon={<ListIcon />} />
            <BottomNavigationAction onClick={() => moveTab("2")} label="برترین ها" icon={<StarIcon />} />
            <BottomNavigationAction onClick={() => moveTab("3")} label="بیشترین دانلود" icon={<FavoriteIcon />} />
         </BottomNavigation>
      </React.Fragment>
   )
}
export default NavBar
