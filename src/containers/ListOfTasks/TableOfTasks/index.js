import { TableContainer, Table, TableHead, TableRow, TableBody, Paper, TableCell } from "@mui/material";
import React from "react"
import { useSelector } from "react-redux";

const mapState = (state) => ({
    tasks: state.tasksData.tasks,
  });

const TableOfTasks = () => {

    const { tasks } = useSelector(mapState);

    


    return (
        <TableContainer component={Paper} ><Table ><TableHead>
        <TableRow>
          <TableCell>Tasks</TableCell>
          <TableCell align="right">Details</TableCell>
          <TableCell align="right">Category</TableCell>
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