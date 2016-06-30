import React from 'react';

export default class Thead extends React.Component {
	render() {
		const headers = this.props.headers;
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
