import React from 'react';

import Thead from './Table/Thead';
import Tbody from './Table/Tbody';

export default class Table extends React.Component {
	render() {
		return (
			<table>
				<Thead />
				<Tbody />
			</table>
		)
	}
}
