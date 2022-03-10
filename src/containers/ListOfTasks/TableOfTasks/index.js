import React, {useState, useEffect} from "react"
import { TableContainer, Table, TableHead, TableRow, TableBody, Paper, TableCell } from "@mui/material";
import HeadCell from "./HeadCell";
import { useSelector } from "react-redux";

const mapState = (state) => ({
    tasks: state.tasksData.tasks,
  });

  const InitialSort = {
    tasks: null,
    details: null,
    category: null
}

const TableOfTasks = () => {
    const { tasks } = useSelector(mapState); 
    const [whichSort, setWhichSort] = useState("tasks")
    const [sorting, setSorting] = useState({...InitialSort, tasks: "desc"})
    const [endpoint, setEndpoint] = useState("https://jumiaTestEndpoint/view=full&task=desc&per_page=10")

    useEffect(()=>{defineEndpointSorting()},[sorting, whichSort])



    const defineEndpointSorting = () => {
        const perPage = "&per_page=10"
        const view = "view=full"
        const sortingV = `&${whichSort}=${sorting[whichSort]}`
        setEndpoint(`https://jumiaTestEndpoint/${view}${sortingV}${perPage}`)
    }

    const configHeadCell = {
        sorting,
        setSorting, 
        InitialSort,
        setWhichSort
    }

    return (
        <TableContainer component={Paper} >
            {endpoint}<Table ><TableHead>
        <TableRow>
          <HeadCell element="tasks" title="Tasks" {...configHeadCell}/>
          <HeadCell element="details" title="Details" {...configHeadCell} align="right"/>
          <HeadCell element="category" title="Category" {...configHeadCell} align="right"/>
        </TableRow>
      </TableHead>
      <TableBody>
          {tasks.map((item) => (
            <TableRow
              key={item.title}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {item.title}
              </TableCell>
              <TableCell align="right">{item.detail}</TableCell>
              <TableCell align="right">{item.category}</TableCell>
             
            </TableRow>
          ))}
        </TableBody></Table></TableContainer>
    )
}

export default TableOfTasks