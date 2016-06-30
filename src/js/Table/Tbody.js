import React from 'react';

export default class Tbody extends React.Component {

	createTr(product) {
		return (
			<tr key={product.id}>
				{
					this.props.headers.map(function(header) {
						return (
							<td key={header.index}>{product[header.index]}</td>
						)
					})
				}
			</tr>
		)
	}

	render() {
		return (
			<tbody>
				{ this.props.products.map(this.createTr.bind(this)) }
			</tbody>
		)
	}
}
