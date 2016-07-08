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
		const value = this.findValue(product, index);

		let component;
		if (header.link) {
			const link = this.findValue(product, header.link);
			component = <a href={link}>{value}</a>;
		} else {
			component = value;
		}

		return (
			<td key={index}>{component}</td>
		)
	}

	createTr(product) {
		return (
			<tr key={product.id}>
				{ this.props.headers.map((header) => this.createTd(header, product)) }
				<td key="delete">
					<a href="#"
						onClick={this.props.handleDelete.bind(this, product)}
						className="button alert tiny"
						style={{ marginBottom: 0 }}>Delete</a>
				</td>
			</tr>
		)
	}

	render() {
		return (
			<tbody>
				{ this.props.products.map((product) => this.createTr(product)) }
			</tbody>
		)
	}
}
