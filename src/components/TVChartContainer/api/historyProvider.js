import axios from 'axios'

// const api_root = 'https://min-api.cryptocompare.com'
const api_root = 'https://morning-cliffs-45456.herokuapp.com//api/pair-explorer';
const history = {}

export default {
	history: history,

    getBars: function(symbolInfo, resolution, from, to, first, limit) {
		var split_symbol = symbolInfo.name.split(/[:/]/)
			const pairId = symbolInfo.description;
			const url = resolution === '1D' ? '/kline?interval=1440&ETH=false' : resolution == 60  ? '/kline?interval=60&ETH=false' : resolution == 15 ? '/kline?interval=15&ETH=false' : resolution == 5 ?   '/kline?interval=5&ETH=false': '/kline?interval=1&ETH=false'
			const qs = {
					// e: split_symbol[0],
					fsym: split_symbol[0],
					tsym: split_symbol[1],
					toTs:  to ? to : '',
					limit: 1000
					// limit: limit ? limit : 2000, 
					// aggregate: 1//resolution 
				}
			// console.log({qs})

		return axios.get(`${api_root}/${pairId}${url}`,{
			qs,
			headers: {
		'Content-Type': 'application/json',
		'accept': '*/*'
	}})
            .then(data => {
                console.log({data})
				if (data.Response && data.Response === 'Error') {
					console.log('CryptoCompare API error:',data.Message)
					return []
				}
				if (data.length) {
					console.log('yes we have length')
					console.log(`Actually returned: ${new Date(data[0][0] * 1000).toISOString()} - ${new Date(data[data.length-1][1] * 1000).toISOString()}`)
					var bars = data.map(el => {
						return {
							// time: el.time * 1000, //TradingView requires bar time in ms
							// low: el.low,
							// high: el.high,
							// open: el.open,
							// close: el.close,
							// volume: el.volumefrom 
							time: el[0] * 1000, //TradingView requires bar time in ms
							low: el[5],
							high: el[4],
							open: el[2],
							close: el[3],
							volume: el[6] 
						}
					})
						if (first) {
							var lastBar = bars[bars.length - 1]
							history[symbolInfo.name] = {lastBar: lastBar}
						}
						// bars.splice(1000,500)
						//console.log(bars)
					return bars
				} else {
					return []
				}
			})
}
}
