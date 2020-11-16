import React from 'react';
import './index.css';
import Datafeed from './api/'


function getLanguageFromURL() {
	const regex = new RegExp('[\\?&]lang=([^&#]*)');
	const results = regex.exec(window.location.search);
	return results === null ? null : decodeURIComponent(results[1].replace(/\+/g, ' '));
}

export class TVChartContainer extends React.PureComponent {
	constructor(props){
		super(props)
		this.state={
			widgetOptions: {
				debug: false,
				symbol: this.props.symbol,
				width: this.props.width,
				height: this.props.height,
				datafeed: Datafeed,
				interval: this.props.interval,
				container_id: this.props.containerId,
				library_path: this.props.libraryPath,
				locale: getLanguageFromURL() || "en",
				disabled_features: ["use_localstorage_for_settings"],
				enabled_features: ["study_templates"],
				charts_storage_url: this.props.chartsStorageUrl,
				charts_storage_api_version: this.props.chartsStorageApiVersion,
				client_id: this.props.clientId,
				user_id: this.props.userId,
				fullscreen: this.props.fullscreen,
				autosize: this.props.autosize,
				studies_overrides: this.props.studiesOverrides,
				overrides: {
				  // "mainSeriesProperties.showCountdown": true,
				  "paneProperties.background": "#131722",
				  "paneProperties.vertGridProperties.color": "#363c4e",
				  "paneProperties.horzGridProperties.color": "#363c4e",
				  "symbolWatermarkProperties.transparency": 90,
				  "scalesProperties.textColor": "#AAA",
				  "mainSeriesProperties.candleStyle.wickUpColor": "#336854",
				  "mainSeriesProperties.candleStyle.wickDownColor": "#7f323f"
				}
			  }
		}
	}
	static defaultProps = {
		symbol: 'USDC/ETH',
		interval: '15',
		containerId: 'tv_chart_container',
		libraryPath: '/charting_library/',
		chartsStorageUrl: 'https://saveload.tradingview.com',
		chartsStorageApiVersion: '1.1',
		clientId: 'tradingview.com',
		userId: 'public_user_id',
		fullscreen: false,
		autosize: false,
		width: '166.5%',
		height: 1000,
		studiesOverrides: {},
	};
	componentDidMount() {
	
		const widget = (window.tvWidget = new window.TradingView.widget(
			this.state.widgetOptions
		));
	
		widget.onChartReady(() => {
		 // console.log("Chart has loaded!");
		});
	  }

	  componentDidUpdate() {
		this.setState(() => ({...this.state.widgetOptions, datafeed: Datafeed}))
	  
		  const widget = (window.tvWidget = new window.TradingView.widget(
			this.state.widgetOptions
		  ));
	  
		  widget.onChartReady(() => {
		   // console.log("Chart has loaded!");
		  });
	  }

	render() {
		console.log('symbol: ', this.props.symbol)
		return (
			<div
				id={ this.props.containerId }
				className={ 'TVChartContainer' }
				style={{width: '60%', height:'60%'}}
			/>
		);
	}
}
