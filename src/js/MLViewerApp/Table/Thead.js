import React from 'react';

export default class Thead extends React.Component {

	createTh(header) {
		return <th key={header.key}>{header.name}</th>;
	}

	render() {
		return (
			<thead>
				<tr>
	        { this.props.headers.map((header) => this.createTh(header)) }
				</tr>
      </thead>
		)
	}
}
