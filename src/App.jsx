import * as React from 'react';
import './App.css';
import {Route, Switch, BrowserRouter} from 'react-router-dom'
import ExplorerPage from './page/ExplorePage'
const App = () => {
		
		return (
			<div>
				<BrowserRouter>
				<Switch>
					<Route path="/pair-explorer/" component={ExplorerPage}/>
				</Switch>
				</BrowserRouter>
			</div>
		);
}

export default App;
