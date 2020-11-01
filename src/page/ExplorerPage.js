import * as React from 'react';
import  {TVChartContainer}  from '../components/TVChartContainer';
import Info from '../components/Info'
import Record from '../components/Record'
import { Box } from '@material-ui/core';
import './Explorer.css'

const ExplorerPage = () => {
	const mystyle={
		backgroundColor: 'black'
	}
		return (
			<div>
				<div className="topBox" display="flex">
					<div style={{paddingLeft:20}}>
						<h1 style={{fontSize: 25, color:"#3D5170", marginBottom:10}}>Pair Explorer - <strong style={{color: '#00B8D8'}}>ETH/DEXT(DEXTools)</strong></h1>
						<p style={{fontSize: 10, color: "#868E96"}}>Token contract: 0x26ce25148832c04f3d7f26f32478a9fe55197166</p>
					</div>
					
				</div>
				<Box display='flex'>
					<Info className='leftBox' style={{backgroundColor: 'Black'}}/>
					<TVChartContainer />
				</Box>
				<Record/>
			</div>
		);
}

export default ExplorerPage;