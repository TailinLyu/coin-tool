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


  const Record = (tradingHistory) => {
    const columns = [
      { field: 'Date', type: 'dateTime', width: 270,},
      { field: 'Type', width: 100, 
      renderCell: (params) =>  typeFormatter(params.value), }, 
      { field: 'Price USD', type: 'number', width: 280, 
      valueFormatter: ({ value }) => currencyFormatter(value), 
      cellClassName: 'font-tabular-nums',
      },
      { field: 'Price ETH', type: 'number', width: 280,  },
      { field: 'Amount Token', type: 'number', width: 280,
      valueFormatter: ({ value }) => Intl.NumberFormat('en-IN').format(value),
      cellClassName: 'font-tabular-nums',  },
      { field: 'Total ETH', type: 'number', width: 280,  },
      // { field: 'Maker', width: 400},
    ];
    const rows = tradingHistory.tradingHistory.map((element,idx) => (
      {
        id: element.swapId,
        Date: new Date(element.timestamp*1000),
        Type: element.type,
        'Price USD': element.priceUSD,
        'Price ETH': element.priceToken0, 
        'Amount Token': element.amountToken1, 
        'Total ETH': element.amountToken0, 
        // Maker: element.maker, 
      }
    ))

    console.log(tradingHistory)
    const classes = useStyles();
    const theme = useTheme();
      return (
          <div style={{height: 1000}}>
                <div display='flex' style={{font: 'normal normal bold 48px/64px P22 Mackinac Pro', color: '#484848'}}>
                Trade History
                </div>
                <div style={{backgroundColor: 'white', height: 700}}>
                <DataGrid className={classes.row} rows={rows} columns={columns} />
                </div>
          </div>
      )
  }

  export default Record;