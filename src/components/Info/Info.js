import React, { useState, useEffect } from 'react';
import {Button, Box} from '@material-ui/core';
import useStyles from './Info.styles';
import { useTheme } from '@material-ui/core/styles';

const Info = (info) => {
    const classes = useStyles();
    const theme = useTheme();
    const [dataAttribute, setDataAttribute] = useState([]);
    const [value, setValue] = useState([]);
    const [data, setData] = useState({});
    const pairInfo = info.pairInfo
    console.log('something')
    console.log(pairInfo)
    useEffect(() => {
        setDataAttribute(['Total liquidity', 'Daily volume', 'Pooled ETH', 'Pooled DEXT', 'Total tx', 'Holders']); 
        setValue([1.111, 2.222, 3.222, 4.2, 522, 6222]); 
        setData({price: pairInfo.latestTradePriceUSD, val: pairInfo.latestTradePriceToken0, percent: pairInfo.changesIn24HrsToken0, type: 'ETH'})
    }, []);

    return(
        <div className={classes.totalBox}>
            <Box style={{paddingBottom: 24}}>
            <Button variant="contained" color="secondary" style={{float: 'right'}}>
                Trade
            </Button>
            </Box>
            <h3
            style={{textAlign: 'right', paddingTop: 10, lineHeight:'1.00rem',  color:'#C4183C', }}>
                ${data.price}</h3>
           
            <p style={{textAlign: 'right', color:'#5A6169', fontSize: 13}}>(24h: {data.percent}%) {data.val} {data.type}</p>
            {
                dataAttribute.map((i,idx) => (
                        <Box display='flex' className={classes.totalCol} key={idx}>
                            <Box className={classes.leftCol}>{i}</Box>
                            <Box className={classes.rightCol}>{idx<=1? '$':''}{value[idx]}</Box>
                        </Box>
    ))
            }
        </div>
    )
}

export default Info;