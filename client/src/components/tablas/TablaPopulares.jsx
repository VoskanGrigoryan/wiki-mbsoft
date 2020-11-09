import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import StarIcon from "@material-ui/icons/Star";
import { Checkbox, FormControlLabel } from "@material-ui/core";

const useStyles = makeStyles({
   table: {
      minWidth: 500,
   },
});

function createData(name, calories, fat, carbs, protein) {
   return { name, calories, fat, carbs, protein };
}

const rows = [
   createData("Frozen yoghurt", 159, 6.0),
   createData("Ice cream sandwich", 237, 9.0),
   createData("Eclair", 262, 16.0),
   createData("Cupcake", 305, 3.7),
   createData("Gingerbread", 356, 16.0),
   createData("Frozen yoghurt", 159, 6.0),
];

export default function BasicTable() {
   const classes = useStyles();

   return (
      <TableContainer component={Paper}>
         <Table className={classes.table} size="small">
            <TableHead style={{ backgroundColor: "#30BCED" }}>
               <TableRow>
                  <TableCell style={{ color: "#ffffff", fontWeight: "900" }}>
                     Tecnología
                  </TableCell>
                  <TableCell
                     style={{ color: "#ffffff", fontWeight: "900" }}
                     align="right"
                  >
                     Thread
                  </TableCell>
                  <TableCell
                     style={{ color: "#ffffff", fontWeight: "900" }}
                     align="right"
                  >
                     Puntaje
                  </TableCell>
               </TableRow>
            </TableHead>
            <TableBody>
               {rows.map((row) => (
                  <TableRow key={row.name}>
                     <TableCell component="th" scope="row">
                        {row.name}
                     </TableCell>
                     <TableCell align="right">{row.calories}</TableCell>
                     <TableCell align="right" className="pl-1">
                        {row.fat}
                     </TableCell>
                  </TableRow>
               ))}
            </TableBody>
         </Table>
      </TableContainer>
   );
}
