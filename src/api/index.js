/*********************/
const getAllApps = async () => {
   const axios = require("axios")
   const { data } = await axios.get("http://googleplay.amirtorkaman.ir/api?orderby=installs&order=DESC&page=2&per_page=20")

   return data
}
const getApp = async (_, name) => {
   const axios = require("axios")

   const { data } = await axios.get(`http://googleplay.amirtorkaman.ir/api/reviews/${name}?page=2`)

   return data
}

export { getAllApps, getApp }
