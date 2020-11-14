import React, { useState, useEffect } from 'react';
import  {TVChartContainer}  from '../../components/TVChartContainer';
import Info from '../../components/Info/Info'; 
import axios from 'axios'
import Record from '../../components/Record/Record'; 
import SearchBar from '../../components/SearchBar'; 
import { Box } from '@material-ui/core';
import './Explorer.css'

const ExplorerPage = () => {
	const mystyle={
		backgroundColor: 'black'
	}
	const [pairInfo, setPairInfo] = useState({})
	const [tradingHistory, setTradingHistory] = useState([])

	useEffect(() => {
		const fetchData = () => {
			axios.get('http://localhost:8081/api/pair-explorer/0xb4e16d0168e52d35cacd2c6185b44281ec28c9dc/info',{
			headers: {
		'Content-Type': 'application/json',
		'accept': '*/*'
    }})
			.then(res => {
				setPairInfo(res.data.pairInfo)
				setTradingHistory(res.data.tradingHistory.swapInfoList)
			})
		}
		fetchData();
	}, [])
	console.log(pairInfo)
		return (
			<div style={{paddingLeft: '2%', paddingRight: '2%'}}>
				<Box style={{paddingRight: 0, float: 'right'}}>
				<SearchBar></SearchBar>
				</Box>
				
				<div className="topBox" display="flex">
					<div style={{paddingLeft:20}}>
						<h1 style={{fontSize: 25, color:"#3D5170", marginBottom:10}}>Pair Explorer - <strong style={{color: '#00B8D8'}}>ETH/DEXT(DEXTools)</strong></h1>
						<p style={{fontSize: 10, color: "#868E96"}}>Token contract: 0x26ce25148832c04f3d7f26f32478a9fe55197166</p>
					</div>
				</div>
				<Box display='flex'>
					<Info pairInfo={pairInfo} className='leftBox' style={{backgroundColor: 'Black'}}/>
					<TVChartContainer />
				</Box>
				<Record tradingHistory={tradingHistory}/>
			</div>
		);
}

export default ExplorerPage;