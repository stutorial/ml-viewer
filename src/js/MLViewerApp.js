import React from 'react';

import Input from './Input';
import Table from './Table';

export default class MLAppViewer extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			headers: [{key: 1, name: 'Nombre'}, {key: 2, name: 'Precio'}],
			data: []
		}
	}

	getInfo(product) {
		return fetch("https://api.mercadolibre.com/sites/MLA/search?q=" + product + "&new=true&sort=price_asc&state=TUxBUENBUGw3M2E1&limit=1&condition=new%buying_mode=buy_it_now")
			.then((response) =>	response.json())
			.then((data) => data.results[0]);
	}

	sleep(milliseconds) {
	  var start = new Date().getTime();
	  for (var i = 0; i < 1e7; i++) {
	    if ((new Date().getTime() - start) > milliseconds){
	      break;
	    }
	  }
	}

	componentDidMount() {
		const products = ["HyperX Cloud 2", "Geforce 1080"];
		products.forEach(function (product_name) {
			this.getInfo(product_name)
				.then((product_info) => {
					this.sleep(1000);
					this.setState({ data: this.state.data.concat([product_info])})
				})
			}.bind(this));
	}

	render() {
		return (
			<div>
				<Input />
				<Table headers={this.state.headers} products={this.state.data}/>
			</div>
		)
	}
}
