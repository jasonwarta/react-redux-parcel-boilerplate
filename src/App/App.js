import React, { Component } from 'react';

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {};
	}

	componentWillMount() {}

	render() {
		return (
			<div>Hello World</div>
		);
	}

	componentDidMount() {}

	componentWillReceiveProps() {}

	shouldComponentUpdate() { return true; }

	componentWillUpdate() {}

	componentDidUpdate() {}

	componentWillUnmount() {}

	componentDidCatch() {}
}

App.defaultProps = {
	
};

App.displayName = 'App';

export default App;