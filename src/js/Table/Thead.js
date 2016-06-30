import React from 'react';

export default class Thead extends React.Component {
	constructor(props) {
		super(props);
		this.state = { headers:
			[{key: 1, name: 'Nombre'}, {key: 2, name: 'Vendedor'}] };
	}

	render() {
		const headers = this.state.headers;
		return (
			<thead>
				<tr>
	        {
						headers.map(function(header) {
							return <th key={header.key}>{header.name}</th>;
						})
					}
				</tr>
      </thead>
		)
	}
}
