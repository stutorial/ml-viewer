import React from 'react';

import Input from './MLViewerApp/Input';
import Table from './MLViewerApp/Table';

export default class MLViewerApp extends React.Component {
	constructor(props) {
		super(props);

		const headers = [
			{name: 'Nombre', index: 'title', link: 'permalink'},
			{name: 'Vendedor', index: 'seller.nickname', link: 'seller.permalink'},
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

	getProducts() {
		return fetch("http://localhost:3001/products")
			.then((response) => response.json());
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

	addProduct(product_name) {
		this.getProductInfo(product_name)
			.then((product_info) => {
				this.getUserInfo(product_info.seller.id)
					.then((seller_info) => {
						product_info.seller = seller_info;
						this.setState({ data: this.state.data.concat([product_info])})
					})
			});
	}

	postProduct(product_name) {
		fetch('http://localhost:3001/products', {
		  method: 'POST',
		  headers: {
		    'Accept': 'application/json',
		    'Content-Type': 'application/json'
		  },
		  body: JSON.stringify({
		    name: product_name,
		  })
		});
	}

	componentDidMount() {
		this.getProducts()
			.then((products) => products.forEach(this.addProduct.bind(this)));
	}

	handleSubmit(event) {
		event.preventDefault();
		const input_text = document.getElementById("input-text");
		const product_name = input_text.value;
		if (product_name === "") return;
		this.addProduct(product_name);
		this.postProduct(product_name);
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
