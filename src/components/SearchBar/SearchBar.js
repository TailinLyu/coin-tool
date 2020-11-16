/* eslint-disable no-use-before-define */
import React, {useEffect, useState} from 'react';
import useStyles from './SearchBar.styles';
import axios from 'axios'
import {useHistory} from 'react-router-dom'
import {TextField, Button, MenuItem, Select} from '@material-ui/core'

const api_root = 'http://localhost:8081/api/pair-explorer'

export default function SearchBar() {
    const classes = useStyles();
    const history = useHistory();
    const [query, setQuery] = useState()
    const [result, setResult] = useState([])
//   const handleClick = () => {
//     // history.push(`http:google.com`);
//     // window.location.href = "http://www.google.com";
//     console.log("click"); 
//   }; 

const queryPairs = () => {
  axios.get(`http://localhost:8081/api/pair-explorer/search?query=${query}&size=5`)
    .then(res => {
      setResult(res.data)
    })
}

const handleInputChange = (input) => {
  setQuery(input)
}

  return (
    <div>
        <TextField
          placeholder="enter pair name/ token name/ token contract"
          onChange={e => handleInputChange(e.target.value)}
          style={{width:'20%'}}
        />
        <Button 
          primary style={{color: 'blue'}}
          onClick={queryPairs}  
        >
          Search
        </Button>
        {result.length > 0 &&
          (
            <Select
              multiple={true}
              style={{width:"40%"}}
              value={result}
            >
              {
                result.map(element => (
                  <MenuItem
                    onClick={() => {
                      history.push(`/pair-explorer/${element.pairId}`)
                      window.location.reload()
                    }}
                  >
                    {/* <link href={`http://localhost:3000/pair-explorer/${element.pairId}`}> */}
                      {`${element.token1Symbol}/ETH, pair contract=${element.pairId}`}
                   
                  </MenuItem>
                ))
              }
            </Select>
          )
        }
    </div>

  );
}

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top

