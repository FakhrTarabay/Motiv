import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Style from './Table.module.scss'


export default function BasicTable({colTitles,rows}) {
    return (
        <TableContainer sx={{ backgroundColor: "transparent" }}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        {colTitles.map(title => {
                            return <TableCell key={title} ><span className={Style.tableCol}>{title}</span></TableCell>
                        })}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row,index) => (
                        <TableRow
                            key={index}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            {row.map(value => {
                                return <TableCell key={value}><span className={Style.tableItem}>{value}</span></TableCell>
                            })}
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
