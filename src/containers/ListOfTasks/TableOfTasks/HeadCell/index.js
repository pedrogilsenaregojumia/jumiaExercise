import React, {useState} from "react"
import { TableCell } from "@mui/material"

import {AiOutlineArrowUp,AiOutlineArrowDown } from "react-icons/ai"

const HeadCell = (props) => {
    const { element, title, sorting, setSorting, InitialSort, setWhichSort} = props
    const [over, setOver] = useState(false)
    

    const directionTurn = () => {
        if(sorting[element]==="desc") return "asc"
        else return "desc"
    }

    const handleClick = () => {
        if(sorting[element]===null) {setSorting({...InitialSort, [element]:"desc"});setWhichSort(element)}
        else {setSorting({...sorting, [element]:directionTurn()})}

    }
    

    return(<TableCell 
        onClick={handleClick}
        onMouseEnter={()=>{setOver(true)}} 
        onMouseLeave={()=>{setOver(false)}}
        {...props}>
        {over && sorting[element]===null && (<AiOutlineArrowDown/>
            )}
        {sorting[element] && sorting[element]==="desc" && (<AiOutlineArrowDown/>)}
        {sorting[element] && sorting[element]==="asc" && (<AiOutlineArrowUp/>)}
        <b>{title}</b></TableCell>)
}

export default HeadCell
