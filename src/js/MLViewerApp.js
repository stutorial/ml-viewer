import React from 'react';

import Input from './Input';
import Table from './Table';

export default class MLAppViewer extends React.Component {
	constructor(props) {
		super(props);
		const headers = [
			{name: 'Nombre', index: 'title'},
			{name: 'Precio', index: 'price'},
			{name: 'Ciudad', index: 'address.city_name'},
			{name: 'Disponible', index: 'available_quantity'},
			{name: 'Vendido', index: 'sold_quantity'}
		]
		headers.forEach((elem, pos) => elem.key = pos);

		this.state = {
			headers: headers,
			data: []
		}
	}

	getInfo(product) {
		return fetch("https://api.mercadolibre.com/sites/MLA/search?q=" + product + "&new=true&sort=price_asc&state=TUxBUENBUGw3M2E1&limit=1&condition=new%buying_mode=buy_it_now")
			.then((response) =>	response.json())
			.then((data) => data.results[0]);
	}

	componentDidMount() {
		const products = ["HyperX Cloud 2", "Geforce 1080"];
		products.forEach(function (product_name) {
			this.getInfo(product_name)
				.then((product_info) => {
					this.setState({ data: this.state.data.concat([product_info])})
				})
			}.bind(this));
	}

	handleSubmit(event) {
		event.preventDefault();
		let input_text = document.getElementById("input-text");
		const product_name = input_text.value;
		if (product_name === "") return;
		this.getInfo(product_name)
			.then((product_info) => {
				this.setState({ data: this.state.data.concat([product_info])})
			});
		input_text.value = "";
	}

	render() {
		return (
			<div>
				<Input handleSubmit={this.handleSubmit.bind(this)} />
				<Table headers={this.state.headers} products={this.state.data}/>
			</div>
		)
	}
}
