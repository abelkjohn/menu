import React from "react";
import { menuArray } from "../data"
export default function Items(){
    return <div id="items">{JSON.stringify(menuArray)}</div>
}