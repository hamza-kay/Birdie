import * as React from 'react';
import { useSelector } from 'react-redux';
import { makeStyles } from '@mui/styles';
import { Grid, Paper, TableBody, Table, TableRow, TableCell, TableHead } from '@mui/material';

const useStyles = makeStyles((theme) => ({
  pageContent: {
    margin: theme.spacing(5),
    padding: theme.spacing(3),
    overflowY: 'scroll',
  },
  table: {
    marginTop: theme.spacing(3),
    maxWidth: '100%',

    '& thead th': {
      fontWeight: '600',
      color: '#333996',
      backgroundColor: '#00000',
    },
    '& tbody td': {
      fontWeight: 300,
    },
    '& tbody tr:hover': {
      backgroundColor: '#fffbf2',
      cursor: 'pointer',
    },
  },
}));

const headCells = [
  {
    id: 'eventName',
    label: 'Events',
  },
  { id: 'fluidName', label: 'Fluid' },
  { id: 'Observed', label: 'Observed' },
  { id: 'amountMl', label: 'Consumed amount (ml)' },
  { id: 'date and time', label: 'Date and Time' },
  { id: 'Description of task', label: 'Description' },
  { id: 'Note by user', label: 'Note' },
];

const Observations = () => {
  const observations = useSelector((state) => state.observations);
  const classes = useStyles();
  return (
    <Paper className={classes.pageContent}>
      <Table stickyHeader className={classes.table}>
        <TableHead>
          <TableRow>
            {headCells.map((headCell) => (
              <TableCell key={headCell.id}>{headCell.label}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {observations.map((item) => (
            <TableRow key={item.id}>
              <TableCell>{item.event}</TableCell>
              <TableCell>{item.fluid}</TableCell>
              <TableCell>{item.observed === true ? 'observed' : ''}</TableCell>
              <TableCell>{item.consumed}</TableCell>
              <TableCell>{item.date.replace('T', ' ').slice(0, -8)}</TableCell>
              <TableCell>{item.description}</TableCell>
              <TableCell>{item.note}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
};

export default Observations;
