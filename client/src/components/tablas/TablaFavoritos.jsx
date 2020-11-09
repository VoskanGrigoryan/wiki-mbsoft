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
import { Link } from "react-router-dom";

const useStyles = makeStyles({
   table: {
      minWidth: 500,
   },
});

function createData(name, calories, fat, carbs, protein) {
   return { name, calories, fat, carbs, protein };
}

const rows = [
   createData("IntelliJ", "error de instalacion"),
   createData("Material-ui", "No reconoce import de Lab"),
   createData("React", "Hacer un build de un proyecto"),
   createData("Prime faces", "Nadie lo usa"),
   createData("IntelliJ", "error de instalacion"),
   createData("Material-ui", "No reconoce import de Lab"),
   createData("Prime faces", "Nadie lo usa"),
   createData("IntelliJ", "error de instalacion"),
   createData("React", "Hacer un build de un proyecto"),
   createData("Material-ui", "No reconoce import de Lab"),
   createData("Prime faces", "Nadie lo usa"),
];

export default function BasicTable() {
   // const saludo = () => {
   //    console.log("yo");
   // };
   const classes = useStyles();

   return (
      <TableContainer component={Paper}>
         <Table className={classes.table} size="small">
            <TableHead style={{ backgroundColor: "#30BCED" }}>
               <TableRow>
                  <TableCell style={{ color: "#ffffff", fontWeight: "bold" }}>
                     Tecnología
                  </TableCell>
                  <TableCell
                     style={{ color: "#ffffff", fontWeight: "bold" }}
                     align="left"
                  >
                     Thread
                  </TableCell>
                  <TableCell
                     style={{ color: "#ffffff", fontWeight: "bold" }}
                     align="right"
                  >
                     Favorito
                  </TableCell>
               </TableRow>
            </TableHead>
            <TableBody>
               {rows.map((row) => (
                  <TableRow key={row.name}>
                     <TableCell component="th" scope="row">
                        <Link to="/material-ui" className="mx-0">
                           {row.name}
                        </Link>
                     </TableCell>

                     <TableCell align="left">{row.calories}</TableCell>
                     <TableCell align="right" className="p-0">
                        <Checkbox
                           icon={<StarBorderIcon />}
                           checkedIcon={<StarIcon style={{ color: "#FFDC20" }} />}
                        />
                     </TableCell>
                  </TableRow>
               ))}
            </TableBody>
         </Table>
      </TableContainer>
   );
}
