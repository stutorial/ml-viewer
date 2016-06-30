import React from 'react';

export default class Tbody extends React.Component {
	constructor(props) {
		super(props);
		this.state = { products: [
			{key: 1, name: "HyperX Cloud 2", seller: "MEGASOFT"},
			{key: 2, name: "Geforce 1080", seller: "DIESOFT"}
		]};
	}

	render() {
		const products = this.state.products;
		return (
			<tbody>
				{
					products.map(function(product) {
						return <tr key={product.key}>
							<td>{product.name}</td>
							<td>{product.seller}</td>
						</tr>;
					})
				}
      </tbody>
		)
	}
}
