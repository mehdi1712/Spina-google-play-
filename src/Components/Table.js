import * as React from "react"
import { DataGrid } from "@material-ui/data-grid"
import { Container } from "@material-ui/core"
import StarIcon from "@material-ui/icons/Star"
import { useHandleTab } from "../hooks/TabProvider"
import { useToggleDialogActions } from "../hooks/DialogProvider"
import { useAppNameActions } from "../hooks/DetailProvider"
import "./Table.css"

const columns = [
   { field: "", headerName: "", width: 50 },
   { field: "name", headerName: "نام", width: 200 },
   { field: "category", headerName: "دسته بندی", width: 150 },
   { field: "rating", headerName: "نمره", width: 100 },
   { field: "reviews", headerName: "بازدید", width: 120 },
   { field: "installs", headerName: "نصب", width: 100 },
   { field: "android_version", headerName: "ورژن اندروید", width: 120 },
   { field: "current_version", headerName: "ورژن فعلی", width: 120 },
]

export default function DataTable(props) {
   const { toggle } = useToggleDialogActions()
   const { clickApp } = useAppNameActions()
   const selectTab = useHandleTab()

   const All = props.data.all_apps
   const Best = props.data.best_apps
   const Most = props.data.most_download
   var rows = []
   if (selectTab === "1") {
      rows = All
   } else if (selectTab === "2") {
      rows = Best
   } else if (selectTab === "3") {
      rows = Most
   }

   const HandleRowClick = (name) => {
      clickApp(name.data.name)
      toggle()
   }
   return (
      <Container>
         <div className="table-root">
            <DataGrid
               className="data-grid"
               hideFooterSelectedRowCount={true}
               onRowClick={(p) => HandleRowClick(p)}
               icons={StarIcon}
               rows={rows}
               columns={columns}
               pageSize={7}
            />
         </div>
      </Container>
   )
}
