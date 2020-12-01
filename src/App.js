import "./App.css"
import NavBar from "./Components/NavBar"
import Table from "./Components/Table"
import { useAllApps } from "./hooks/index"
import CircularProgress from "@material-ui/core/CircularProgress"
import TabProvider from "./hooks/TabProvider"
import DialogProvider from "./hooks/DialogProvider"
import DetailProvider from "./hooks/DetailProvider"
import FullScreenDialog from "./Components/Dialog"

function App() {
   const { data: Apps, isLoading } = useAllApps()

   return (
      <TabProvider>
         <DialogProvider>
            <DetailProvider>
               <div className="App">
                  <NavBar />
                  {isLoading ? <CircularProgress /> : <Table data={Apps} />}
               </div>
               <FullScreenDialog />
            </DetailProvider>
         </DialogProvider>
      </TabProvider>
   )
}

export default App
