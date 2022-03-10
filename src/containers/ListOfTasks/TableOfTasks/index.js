import React, {useState, useEffect} from "react"
import { useHistory } from "react-router-dom";
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

const TableOfTasks = ({setEndpoint, search}) => {
    const history=useHistory()
    const { tasks } = useSelector(mapState); 
    const [whichSort, setWhichSort] = useState("tasks")
    const [sorting, setSorting] = useState({...InitialSort, tasks: "desc"})
    
    useEffect(()=>{defineEndpointSorting()},
    // eslint-disable-next-line
    [sorting, whichSort])



    const defineEndpointSorting = () => {
        const perPage = "&per_page=10"
        const view = "view=full"
        const sortBy = `&sort_by=${whichSort}`
        const byOrder = `&by_order=${sorting[whichSort]}`
        const newEndPoint = `${view}${sortBy}${byOrder}${perPage}`
        setEndpoint(newEndPoint)
        history.push(newEndPoint+`${search}`)
    }

    const configHeadCell = {
        sorting,
        setSorting, 
        InitialSort,
        setWhichSort
    }

    return (
        <TableContainer component={Paper} >
            <Table ><TableHead>
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