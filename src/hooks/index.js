import * as api from "../api"
import { useQuery } from "react-query"

const useAllApps = () => {
   return useQuery("Apps", api.getAllApps, {
      refetchOnWindowFocus: false,
   })
}
const useApp = (name) => {
   return useQuery(["App", name], api.getApp, {
      refetchOnWindowFocus: false,
   })
}
export { useAllApps, useApp }
