import React from 'react';

import Input from './Input';
import Table from './Table';

export default class MLAppViewer extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			headers: [{key: 1, name: 'Nombre'}, {key: 2, name: 'Vendedor'}],
			products: [
				{key: 1, name: "HyperX Cloud 2", seller: "MEGASOFT"},
				{key: 2, name: "Geforce 1080", seller: "DIESOFT"}
			]
		}
	}
	render() {
		const headers = this.state.headers;
		const products = this.state.products;
		return (
			<div>
				<Input />
				<Table headers={headers} products={products}/>
			</div>
		)
	}
}
