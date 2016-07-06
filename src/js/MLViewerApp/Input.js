import React from 'react';

export default class Input extends React.Component {
	render() {
		return (
			<form className="input-group">
				<span className="input-group-label">Producto</span>
				<input id="input-text" type="text" className="input-group-field" />
				<div className="input-group-button">
					<input type="submit" value="Agregar" className="button" onClick={this.props.handleSubmit} />
				</div>
			</form>
		)
	}
}
