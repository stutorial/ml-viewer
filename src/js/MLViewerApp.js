import React from 'react';

import Input from './Input';
import Table from './Table';

export default class MLAppViewer extends React.Component {
	constructor(props) {
		super(props);

		const headers = [
			{name: 'Nombre', index: 'title'},
			{name: 'Vendedor', index: 'seller.nickname'},
			{name: 'Ventas', index: 'seller.seller_reputation.transactions.completed'},
			{name: 'Porcentaje', index: 'seller.seller_reputation.transactions.ratings.positive'},
			{name: 'Lugar', index: 'address.city_name'},
			{name: 'Disponible', index: 'available_quantity'},
			{name: 'Vendidas', index: 'sold_quantity'},
			{name: 'Precio', index: 'price'}
		]
		headers.forEach((elem, pos) => elem.key = pos);

		this.state = {
			headers: headers,
			data: []
		}
	}

	getProductInfo(product) {
		return fetch("https://api.mercadolibre.com/sites/MLA/search?q=" + product + "&new=true&sort=price_asc&state=TUxBUENBUGw3M2E1&limit=1&condition=new%buying_mode=buy_it_now")
			.then((response) =>	response.json())
			.then((data) => data.results[0]);
	}

	getUserInfo(user) {
		return fetch("https://api.mercadolibre.com/users/" + user)
			.then((response) => response.json());
	}

	componentDidMount() {
		const products = ["HyperX Cloud 2", "Geforce 1080"];
		products.forEach((product_name) => {
			this.getProductInfo(product_name)
				.then((product_info) => {
					this.getUserInfo(product_info.seller.id)
						.then((seller_info) => {
							product_info.seller = seller_info;
							this.setState({ data: this.state.data.concat([product_info])})
						})
				})
			});
	}

	handleSubmit(event) {
		event.preventDefault();
		const input_text = document.getElementById("input-text");
		const product_name = input_text.value;
		if (product_name === "") return;
		this.getProductInfo(product_name)
			.then((product_info) => {
				this.getUserInfo(product_info.seller.id)
					.then((seller_info) => {
						product_info.seller = seller_info;
						this.setState({ data: this.state.data.concat([product_info])})
					})
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
