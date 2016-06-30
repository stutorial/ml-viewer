import React from 'react';

export default class Tbody extends React.Component {

	findValue(product, index) {
		const index_array = index.split('.');
		const value = index_array.reduce((valorAnterior, valorActual) => {
			return valorAnterior[valorActual];
		}, product);
		return value;
	}

	createTd(header, product) {
		const index = header.index;
		return (
			<td key={index}>{this.findValue(product, index)}</td>
		)
	}

	createTr(product) {
		return (
			<tr key={product.id}>
				{ this.props.headers.map((header) => this.createTd(header, product)) }
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
