import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { StudentContext } from './StudentContext';


export default function BasicTable() {
    const [rows] = useContext(StudentContext)

    const Id = new Date().getTime().toString()

    return (
        <div>
            <div className='studentHeading'>
                <h1>Student Details</h1>
                <button className="addStudent"><Link to={`/student/add/${Id}`}>Add new student</Link></button>
                {/* <button className="addStudent">Add new student</button> */}

            </div>

            <div className='table'>
                <TableContainer component={Paper}>
                    <Table sx={{ minWIdth: 650 }} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell>Name</TableCell>
                                <TableCell align="right">Age</TableCell>
                                <TableCell align="right">Course</TableCell>
                                <TableCell align="right">Batch</TableCell>
                                <TableCell align="right">Change</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows.map((row) => (
                                <TableRow
                                    key={row.Id}
                                >
                                    <TableCell component="th" scope="row">{row.Name}</TableCell>
                                    {/* <TableCell align="right">{row.Name}</TableCell> */}
                                    <TableCell align="right">{row.Age}</TableCell>
                                    <TableCell align="right">{row.Course}</TableCell>
                                    <TableCell align="right">{row.Batch}</TableCell>
                                    <TableCell align="right"><Link to={`/student/edit/${row.Id}`}>Edit</Link></TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
        </div>
    );
}
