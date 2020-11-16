import React, { useState, useEffect } from 'react';
import {useParams} from 'react-router-dom'
import  {TVChartContainer}  from '../../components/TVChartContainer';
import Info from '../../components/Info/Info'; 
import axios from 'axios'
import Record from '../../components/Record/Record'; 
import SearchBar from '../../components/SearchBar'; 
import { Box } from '@material-ui/core';
import './Explorer.css'

// style={{paddingTop: 30, 
				// border: '1px solid black', 
				// marginLeft: '10%',
				// marginRight: '10%'}}>
				
				
const ExplorerPage = () => {
	const mystyle={
		backgroundColor: 'black'
	}
	const [pairInfo, setPairInfo] = useState({})
	const [tradingHistory, setTradingHistory] = useState([])
	const [delay, setDelay] = useState(30000)
	const [time, setTime] = useState("0")
	const { id } = useParams()
	// console.log("pairId: ", pairId)
	const api_root = 'https://morning-cliffs-45456.herokuapp.com//api/pair-explorer'
// console.log("pairInfo")
// console.log(pairInfo.pairId)
	useEffect(() => {
		const fetchData = () => {
			axios.get(`${api_root}/${id}/info`,{
				headers: {
			'Content-Type': 'application/json',
			'accept': '*/*'
		}})
				.then(res => {
					setPairInfo(res.data.pairInfo)
					setTradingHistory(res.data.tradingHistory.swapInfoList)
					setTime(new Date().toString())
				})
	}
		fetchData()
		setInterval(fetchData, delay)
	}, [])
	console.log(pairInfo)
		return (

			<div>
				{
					(!tradingHistory.length || !pairInfo) ? (<div> This pair cannot be found or service broken</div>) :
				
					(<div>
						<Box style={{paddingRight: 0, marginLeft: '35%'}}>
						<SearchBar></SearchBar>
						</Box>
						<Box display='flex'>
							<Info pairInfo={pairInfo} className='leftBox' style={{backgroundColor: 'black'}}/>
						</Box>
						<Box display="flex">
							<TVChartContainer symbol={`${pairInfo.token1Symbol ? pairInfo.token1Symbol : ''}/USD/${id}/${time}`}/>
						</Box>
						<Box style={{marginTop: 30}}>
						<Record tradingHistory={tradingHistory} style={{paddingTop: 30, border: '1px solid black'}}/>
						</Box>
					</div>)
				}
			</div>
		);
}

export default ExplorerPage;