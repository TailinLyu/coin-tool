import React, { useState, useEffect } from 'react';
import { DataGrid } from '@material-ui/data-grid';
import { useTheme } from '@material-ui/core/styles';
import { Box, Button } from '@material-ui/core';
import useStyles from './Record.styles';

const currencyFormatter = (value) => {
  return (`$${value.toFixed(8)}`); 
}; 

const typeFormatter = (value) => {
  if (value === 'buy') {
    return (<strong style={{color: 'red' }}>
    {value}
  </strong>)
  }
return (<strong style={{color: 'green' }}>
        {value}
      </strong>)
}; 

const columns = [
    { field: 'Date', type: 'dateTime', width: 270,},
    { field: 'Type', width: 100, 
    renderCell: (params) =>  typeFormatter(params.value), }, 
    { field: 'Price USD', type: 'number', width: 280, 
    valueFormatter: ({ value }) => currencyFormatter(value), 
    cellClassName: 'font-tabular-nums',
    },
    { field: 'Price ETH', type: 'number', width: 280,  },
    { field: 'Amount DEXT', type: 'number', width: 280,
    valueFormatter: ({ value }) => Intl.NumberFormat('en-IN').format(value),
    cellClassName: 'font-tabular-nums',  },
    { field: 'Total ETH', type: 'number', width: 280,  },
    { field: 'Maker', width: 400},
  ];
  
  const rows = [
    {
      id: 1,
      Date: '2020-11-01 05:22:55', 
      Type: 'buy',
      'Price USD': 0.0,
      'Price ETH': 0.40017911, 
      'Amount DEXT': 2500, 
      'Total ETH': 0.44778005, 
      Maker: '11111', 
    },
    {
      id: 2,
      Date: '2020-11-01 05:42:55', 
      Type: 'sell',
      'Price USD': 0.16926441,
      'Price ETH': 0.30017911, 
      'Amount DEXT': 2500, 
      'Total ETH': 0.44778005, 
      Maker: '11111', 
    },
    {
      id: 3,
      Date: '2020-11-01 05:32:55', 
      Type: 'buy',
      'Price USD': 0.26926441,
      'Price ETH': 0.20017911, 
      'Amount DEXT': 2500, 
      'Total ETH': 0.44778005, 
      Maker: '11111', 
    },
    {
      id: 4,
      Date: '2020-11-01 05:12:55', 
      Type: 'buy',
      'Price USD': 0.36926441,
      'Price ETH': 0.10017911, 
      'Amount DEXT': 2500, 
      'Total ETH': 0.44778005, 
      Maker: '11111', 
    },
    {
      id: 5,
      Date: '2020-11-01 05:12:55', 
      Type: 'buy',
      'Price USD': 0.36926441,
      'Price ETH': 0.10017911, 
      'Amount DEXT': 2500, 
      'Total ETH': 0.44778005, 
      Maker: '11111', 
    },
    {
      id: 6,
      Date: '2020-11-01 05:12:55', 
      Type: 'buy',
      'Price USD': 0.36926441,
      'Price ETH': 0.10017911, 
      'Amount DEXT': 2500, 
      'Total ETH': 0.44778005, 
      Maker: '11111', 
    },
    {
      id: 7,
      Date: '2020-11-01 05:12:55', 
      Type: 'buy',
      'Price USD': 0.36926441,
      'Price ETH': 0.10017911, 
      'Amount DEXT': 2500, 
      'Total ETH': 0.44778005, 
      Maker: '11111', 
    },
    {
      id: 8,
      Date: '2020-11-01 05:12:55', 
      Type: 'buy',
      'Price USD': 0.36926441,
      'Price ETH': 0.10017911, 
      'Amount DEXT': 2500, 
      'Total ETH': 0.44778005, 
      Maker: '11111', 
    },
    {
      id: 9,
      Date: '2020-11-01 05:12:55', 
      Type: 'buy',
      'Price USD': 0.36926441,
      'Price ETH': 0.10017911, 
      'Amount DEXT': 2500, 
      'Total ETH': 0.44778005, 
      Maker: '11111', 
    },
    {
      id: 10,
      Date: '2020-11-01 05:12:55', 
      Type: 'buy',
      'Price USD': 0.36926441,
      'Price ETH': 0.10017911, 
      'Amount DEXT': 2500, 
      'Total ETH': 0.44778005, 
      Maker: '11111', 
    },
    {
      id: 11,
      Date: '2020-11-01 05:12:55', 
      Type: 'buy',
      'Price USD': 0.36926441,
      'Price ETH': 0.10017911, 
      'Amount DEXT': 2500, 
      'Total ETH': 0.44778005, 
      Maker: '11111', 
    },
    {
      id: 12,
      Date: '2020-11-01 05:12:55', 
      Type: 'buy',
      'Price USD': 0.36926441,
      'Price ETH': 0.10017911, 
      'Amount DEXT': 2500, 
      'Total ETH': 0.44778005, 
      Maker: '11111', 
    },
    {
      id: 13,
      Date: '2020-11-01 05:12:55', 
      Type: 'buy',
      'Price USD': 0.36926441,
      'Price ETH': 0.10017911, 
      'Amount DEXT': 2500, 
      'Total ETH': 0.44778005, 
      Maker: '11111', 
    },
    {
      id: 14,
      Date: '2020-11-01 05:12:55', 
      Type: 'buy',
      'Price USD': 0.36926441,
      'Price ETH': 0.10017911, 
      'Amount DEXT': 2500, 
      'Total ETH': 0.44778005, 
      Maker: '11111', 
    },
    {
      id: 15,
      Date: '2020-11-01 05:12:55', 
      Type: 'buy',
      'Price USD': 0.36926441,
      'Price ETH': 0.10017911, 
      'Amount DEXT': 2500, 
      'Total ETH': 0.44778005, 
      Maker: '11111', 
    },
    {
      id: 16,
      Date: '2020-11-01 05:12:55', 
      Type: 'buy',
      'Price USD': 0.36926441,
      'Price ETH': 0.10017911, 
      'Amount DEXT': 2500, 
      'Total ETH': 0.44778005, 
      Maker: '11111', 
    },
    {
      id: 17,
      Date: '2020-11-01 05:12:55', 
      Type: 'buy',
      'Price USD': 0.36926441,
      'Price ETH': 0.10017911, 
      'Amount DEXT': 2500, 
      'Total ETH': 0.44778005, 
      Maker: '11111', 
    },
    {
      id: 18,
      Date: '2020-11-01 05:12:55', 
      Type: 'buy',
      'Price USD': 0.36926441,
      'Price ETH': 0.10017911, 
      'Amount DEXT': 2500, 
      'Total ETH': 0.44778005, 
      Maker: '11111', 
    },
    {
      id: 19,
      Date: '2020-11-01 05:12:55', 
      Type: 'buy',
      'Price USD': 0.36926441,
      'Price ETH': 0.10017911, 
      'Amount DEXT': 2500, 
      'Total ETH': 0.44778005, 
      Maker: '11111', 
    },
    {
      id: 20,
      Date: '2020-11-01 05:12:55', 
      Type: 'buy',
      'Price USD': 0.36926441,
      'Price ETH': 0.10017911, 
      'Amount DEXT': 2500, 
      'Total ETH': 0.44778005, 
      Maker: '11111', 
    },
    {
      id: 21,
      Date: '2020-11-01 05:12:55', 
      Type: 'buy',
      'Price USD': 0.36926441,
      'Price ETH': 0.10017911, 
      'Amount DEXT': 2500, 
      'Total ETH': 0.44778005, 
      Maker: '11111', 
    },
    {
      id: 22,
      Date: '2020-11-01 05:12:55', 
      Type: 'buy',
      'Price USD': 0.36926441,
      'Price ETH': 0.10017911, 
      'Amount DEXT': 2500, 
      'Total ETH': 0.44778005, 
      Maker: '11111', 
    },
    {
      id: 23,
      Date: '2020-11-01 05:12:55', 
      Type: 'buy',
      'Price USD': 0.36926441,
      'Price ETH': 0.10017911, 
      'Amount DEXT': 2500, 
      'Total ETH': 0.44778005, 
      Maker: '1111231', 
    },
    {
      id: 24,
      Date: '2020-11-01 05:12:55', 
      Type: 'buy',
      'Price USD': 0.36926441,
      'Price ETH': 0.10017911, 
      'Amount DEXT': 2500, 
      'Total ETH': 0.44778005, 
      Maker: '11123', 
    },
    {
      id: 25,
      Date: '2020-11-01 05:12:55', 
      Type: 'buy',
      'Price USD': 0.36926441,
      'Price ETH': 0.10017911, 
      'Amount DEXT': 2500, 
      'Total ETH': 0.44778005, 
      Maker: '222222', 
    },
    {
      id: 26,
      Date: '2020-11-11 05:12:55', 
      Type: 'buy',
      'Price USD': 0.36926441,
      'Price ETH': 0.10017911, 
      'Amount DEXT': 2500, 
      'Total ETH': 0.44778005, 
      Maker: '222222', 
    },
  ];
  

  const Record = () => {
    const classes = useStyles();
    const theme = useTheme();
      return (
          <div style={{height: 1000}}>
                <div display='flex'>
                    <Button variant="contained" color="primary">Trade History</Button>
                </div>
                <div style={{backgroundColor: 'white', height: 700}}>
                <DataGrid className={classes.row} rows={rows} columns={columns} />
                </div>
          </div>
      )
  }

  export default Record;