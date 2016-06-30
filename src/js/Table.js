import React from 'react';

import Thead from './Table/Thead';
import Tbody from './Table/Tbody';

export default class Table extends React.Component {
	render() {
		return (
			<table>
				<Thead headers={this.props.headers}/>
				<Tbody products={this.props.products}/>
			</table>
		)
	}
}
