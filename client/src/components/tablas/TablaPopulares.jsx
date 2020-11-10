import React from "react";
import {
   makeStyles,
   Table,
   TableBody,
   TableCell,
   TableContainer,
   TableHead,
   TableRow,
   Paper,
} from "@material-ui/core";

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
