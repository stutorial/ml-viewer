import React from 'react';

export default class Input extends React.Component {
	render() {
		return (
			<form action="" className="input-group">
				<span className="input-group-label">Producto</span>
				<input type="text" className="input-group-field"/>
				<div className="input-group-button">
					<input type="submit" value="Agregar" className="button"/>
				</div>
			</form>
		)
	}
}
