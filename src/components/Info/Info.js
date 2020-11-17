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
    useEffect(() => {
        setDataAttribute(['Token Contract', 'Token Name', 'Total liquidity', 'Pooled ETH', `Pooled ${pairInfo.token1Symbol}`, 'Total tx']); 
        setValue([pairInfo.token0Id, pairInfo.token0Name, pairInfo.totalLiquidity, pairInfo.reserve0, pairInfo.reserve1, pairInfo.txCount]); 
        setData({price: pairInfo.latestTradePriceUSD, val: pairInfo.latestTradePriceToken0, percent: pairInfo.changesIn24HrsToken0, type: 'ETH'})
    }, []);
    return(
        <Box className={classes.totalBox}>
            {/* <Button variant="contained" color="secondary" style={{}}>
                Trade
            </Button> */}
            <Box display='flex' style={{paddingBottom: 10, boxShadow: '0px 4px 6px #0000001A'}}>
                <Box className={classes.totalCol}>
                    <Box className={classes.leftCol} style={{color:'#C4183C', fontSize: 40, textAlign: 'right'}}>{`${pairInfo.token1Symbol}/ETH`}</Box>
        <Box className={classes.rightCol}>{pairInfo.pairId}</Box>
                </Box>
                <Box className={classes.totalCol}>
                    <Box className={classes.leftCol}>Last traded price</Box>
                    <Box className={classes.rightCol} style={pairInfo.changesIn24HrsUSD > 0 ? {color: 'green'} : {color: 'red'}}>{pairInfo.latestTradePriceUSD.toFixed(5)}USD</Box>
                </Box>
                <Box className={classes.totalCol}>
                    <Box className={classes.leftCol}>24h change</Box>
        <Box className={classes.rightCol} style={pairInfo.changesIn24HrsUSD > 0 ? {color: 'green'} : {color: 'red'}}>{pairInfo.changesIn24HrsUSD > 0 ? '+' : ''}{(pairInfo.changesIn24HrsUSD * 100).toFixed(2)}%</Box>
                </Box>
                <Box className={classes.totalCol}>
                    <Box className={classes.leftCol}>24h high</Box>
                    <Box className={classes.rightCol}>{pairInfo.highestPriceIn24HrsUSD.toFixed(5)}USD</Box>
                </Box>
                <Box className={classes.totalCol}>
                    <Box className={classes.leftCol}>24h low</Box>
                    <Box className={classes.rightCol}>{pairInfo.lowestPriceIn24HrsUSD.toFixed(5)}USD</Box>
                </Box>
                <Box className={classes.totalCol}>
                    <Box className={classes.leftCol}>24h volume</Box>
                    <Box className={classes.rightCol}>{pairInfo.volumeIn24HrsUSD.toFixed(5)}$</Box>
                </Box>
               
            </Box>
            <Box display='flex' style={{paddingBottom: 10, boxShadow: '0px 4px 6px #0000001A', }}>
            {
                dataAttribute.map((i,idx) => (
                        <Box className={classes.totalCol} key={idx}>
                            <Box className={classes.leftCol}>{i}</Box>
                            <Box className={classes.rightCol}>{value[idx]}</Box>
                        </Box>
    ))
            }
            </Box>
        </Box>
    )
}

export default Info;