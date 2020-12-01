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
   Checkbox,
} from "@material-ui/core";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import StarIcon from "@material-ui/icons/Star";
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
   createData("Material-ui", "No reconoce import de Lab"),

   createData("Prime faces", "Nadie lo usa"),

   createData("Prime faces", "Nadie lo usa"),
   createData("IntelliJ", "error de instalacion"),
   createData("React", "Hacer un build de un proyecto"),
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
                           icon={<StarIcon style={{ color: "#FFDC20" }} />}
                           checkedIcon={<StarBorderIcon style={{ color: "#000000" }} />}
                        />
                     </TableCell>
                  </TableRow>
               ))}
            </TableBody>
         </Table>
      </TableContainer>
   );
}
