import React from "react"
import { ZestyExplorer } from "./components"
import { createZestyDiv } from "utils"
import * as helper from "utils/index"
import ReactDOM from "react-dom"
// import { dummydata } from "constants"
// import { render } from "react-dom"
// import { dummy2, dummydata } from "constants"

// if (process.env.NODE_ENV === "production") {
//    console.log = () => {}
//    console.error = () => {}
//    console.debug = () => {}
// }

console.log(
   " ********** Zesty live editor loaded 11111111111111111111111111111111 ************ ",
)

export const ZestyLiveEditor = (content?: any) => {
   // if (!helper.canUseDOM()) {
   //    return null
   // }
   createZestyDiv()

   // const container = document.getElementById("zesty-explorer")
   // render(<ZestyExplorer content={content} />, container)

   ReactDOM.render(
      <ZestyExplorer content={content} />,
      document.getElementById("zesty-explorer"),
   )
}

// process.env.NODE_ENV === "development" ? ZestyLiveEditor(dummydata) : ZestyLiveEditor()
ZestyLiveEditor()
