import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import './table.scss';

const MyTable = () => {

    const rows = [
        {
            transactionId: 1234567890,
            subscription: 'Basic',
            userType: 'Adviser',
            date:'01 Oct 2022',
            amount: 'R30',
            billingCycle: 'Monthly',
            status: 'Active'
        },
        {
            transactionId: 1234567896,
            subscription: 'Premium',
            userType: 'Adviser',
            date:'01 Oct 2022',
            amount: 'R70',
            billingCycle: 'Monthly',
            status: 'Active'
        },
        {
            transactionId: 1234567899,
            subscription: 'Premium',
            userType: 'Adviser',
            date:'01 Oct 2022',
            amount: 'R700',
            billingCycle: 'Annual',
            status: 'Active'
        }
        ,{
            transactionId: 1234567891,
            subscription: 'Basic',
            userType: 'Client',
            date:'01 Oct 2022',
            amount: 'R10',
            billingCycle: 'Monthly',
            status: 'Active'
        }
        ,{
            transactionId: 1234567892,
            subscription: 'Basic',
            userType: 'Client',
            date:'01 Oct 2022',
            amount: '10',
            billingCycle: 'Monthly',
            status: 'Active'
        }
        ];

    return (
        <TableContainer component={Paper} className="table">
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell className="tableCell" >Transaction ID</TableCell>
                        <TableCell className="tableCell" >Subscription Type</TableCell>
                        <TableCell className="tableCell" >User Type</TableCell>
                        <TableCell className="tableCell" >Subscription Date</TableCell>
                        <TableCell className="tableCell" >Amount</TableCell>
                        <TableCell className="tableCell" >Billing Cycle</TableCell>
                        <TableCell className="tableCell" >Status</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow
                            key={row.transactionId}
                        >
                            <TableCell className="tableCell" >{row.transactionId}</TableCell>
                            <TableCell className="tableCell" >{row.subscription}</TableCell>
                            <TableCell className="tableCell" >{row.userType}</TableCell>
                            <TableCell className="tableCell" >{row.date}</TableCell>
                            <TableCell className="tableCell" >{row.amount}</TableCell>
                            <TableCell className="tableCell" >{row.billingCycle}</TableCell>
                            <TableCell className="tableCell" >{row.status}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default MyTable;