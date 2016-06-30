import React from 'react';

export default class Tbody extends React.Component {
	render() {
		return (
			<tbody>
				{
					this.props.products.map(function(product) {
						return <tr key={product.id}>
							<td>{product.title}</td>
							<td>{product.price}</td>
						</tr>;
					})
				}
      </tbody>
		)
	}
}
