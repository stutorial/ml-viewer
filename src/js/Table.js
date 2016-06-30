import React from 'react';

import Thead from './Table/Thead';
import Tbody from './Table/Tbody';

export default class Table extends React.Component {
	render() {
		const headers = this.props.headers;
		const products = this.props.products;
		return (
			<table>
				<Thead headers={headers}/>
				<Tbody products={products}/>
			</table>
		)
	}
}
