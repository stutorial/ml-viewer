import React from 'react';

export default class Thead extends React.Component {
	render() {
		return (
			<thead>
				<tr>
	        {
						this.props.headers.map(function(header) {
							return <th key={header.key}>{header.name}</th>;
						})
					}
				</tr>
      </thead>
		)
	}
}
