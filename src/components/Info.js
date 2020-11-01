import React from 'react'
import {Button, Box} from '@material-ui/core';

const dataAttribute = ['Total liquidity', 'Daily volume', 'Pooled ETH', 'Pooled DEXT', 'Total tx', 'Holders']

const Info = () => {
    return(
        <div style={{width: '40%', marginRight: '5%'}}>
            <Button variant="contained" color="secondary" style={{float: 'right'}}>
                Trade
            </Button>
            <h2 style={{textAlign: 'right', paddingTop: 30, lineHeight:'1.55rem',  color:'#C4183C', }}>$price</h2>
            <p style={{textAlign: 'right', color:'#5A6169', fontSize: 13}}> 0.0001718 ETH</p>
            <ui style={{listStyleType:'none'}}>
            {
                dataAttribute.map((i,idx) => (
                    <li key={idx} style={{paddingLeft: '60%'}}>
                        <div style={{display: "flex", color:'#5a6169'}} >
                            <p style={{fontSize:30}}><strong style={{width:'50%', fontSize:20, float:'left'}}>{i}</strong> value</p>
                            {/* <p style={{ width: '50%', fontSize: 13, color:'#5A6169'}}>{i}</p>
                            <p style={{ color:'#5A6169', fontSize: 30, lineHeight: "10%"}}>value</p> */}
                        </div>
                    </li>


    ))
            }
            </ui>
            {/* <Box display="flex">
                <p>Total liquidity: </p>
                <p>value</p>
            </Box> */}
        </div>
    )
}

export default Info;