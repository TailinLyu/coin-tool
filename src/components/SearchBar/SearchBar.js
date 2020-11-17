import React, { useState } from "react";
import {useHistory} from 'react-router-dom'
import AsyncSelect from "react-select/async";
import axios from "axios";


const SearchBar = () => {
  const history = useHistory()
  const [inputValue, setInputValue] = useState('')
  const handleInputChange = (newValue) => {
    const value = newValue.replace(/\W/g, "");
    setInputValue(value)
    return value;
  };

  const handleOnChange = (value) => {
    console.log("value: ", value)
    history.push(`/pair-explorer/${value.value}`)
    window.location.reload()
  }
  const queryPair = async () => {
    const res = await axios(
      `https://morning-cliffs-45456.herokuapp.com//api/pair-explorer/search?query=${inputValue}&size=5`,
      {
        headers: {
          "Content-Type": "application/json",
          accept: "*/*"
        }
      }
    );
    const titles = res.data.map((element) => {
      return {
        label: `${element.token1Symbol}/ETH`,
        value: element.pairId
      };
    });
    return titles;
  };

    return (
      <div style={{width:'60%'}}>
        <AsyncSelect
          cacheOptions
          placeholder="Search pair by token name / token symbol / pair id / token contract"
          loadOptions={queryPair}
          defaultOptions
          onInputChange={handleInputChange}
          onChange={handleOnChange}
        />
      </div>
    );
  }


export default SearchBar