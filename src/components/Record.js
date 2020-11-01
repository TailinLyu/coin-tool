import React from 'react'
import { DataGrid } from '@material-ui/data-grid';
import {Button} from '@material-ui/core'
// import {
//     randomCreatedDate,
//     randomUpdatedDate,
//   } from '@material-ui/x-grid-data-generator';

const columns = [
    { field: 'name' },
    { field: 'age', type: 'number' },
    {
      field: 'username',
      valueGetter: (params) =>
        `${params.getValue('name') || 'unknown'} - ${
          params.getValue('age') || 'x'
        }`,
      sortComparator: (v1, v2, row1, row2) => row1.data.age - row2.data.age,
      width: 150,
    }
  ];
  
  const rows = [
    {
      id: 1,
      name: 'Damien',
      age: 25,
    },
    {
      id: 2,
      name: 'Nicolas',
      age: 36,
    },
    {
      id: 3,
      name: 'Kate',
      age: 19
    },
    {
      id: 4,
      name: 'Sebastien',
      age: 28,
    },
    {
      id: 5,
      name: 'Louise',
      age: 23,
    },
    {
      id: 6,
      name: 'George',
      age: 10,
    },
  ];
  


  const Record = () => {
      return (
          <div style={{height: 1000}}>
                <div display='flex'>
                    <Button variant="contained" color="primary">Trade History</Button>
                </div>
                <div style={{backgroundColor: 'white', height: 700}}>
                <DataGrid rows={rows} columns={columns} />
                </div>
          </div>
      )
  }

  export default Record;