import React from 'react';

export default class Tbody extends React.Component {
	render() {
		const products = this.props.products;
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
